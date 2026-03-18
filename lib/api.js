import { ALL_ISSUES } from './constants'

const API_URL = process.env.WORDPRESS_API_URL

const WHITELISTED_MARKERS = ALL_ISSUES.map(({ marker }) => marker.toLowerCase())

function isWhitelisted({ categories }) {
  return categories?.edges?.some(({ node }) =>
    WHITELISTED_MARKERS.includes(node.name.toLowerCase())
  )
}

async function fetchAPI(query, { variables } = {}) {
  const headers = { 'Content-Type': 'application/json' }

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      'Authorization'
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
  }

  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export async function getPreviewPost(id, idType = 'DATABASE_ID') {
  const data = await fetchAPI(
    `
    query PreviewPost($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        databaseId
        slug
        status
      }
    }`,
    {
      variables: { id, idType },
    }
  )
  return data.post
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      posts(first: 10000) {
        edges {
          node {
            slug
            status
            categories {
              edges {
                node {
                  name
                }
              }
            }
          }
        }
      }
    }
  `)
  if (data?.posts?.edges) {
    data.posts.edges = data.posts.edges.filter(({ node }) => node.status === 'publish')
  }
  return data?.posts
}

export async function getAllPostsWithSlugByCategoryName(categoryName) {
  const data = await fetchAPI(`
    query AllPostsWithSlugByCategoryName($categoryName: String = "") {
      posts(
      first: 10000
      where: {categoryName: $categoryName}) {
        edges {
          node {
            slug
            status
          }
        }
      }
    }
  `,
    {
      variables: {
        categoryName: categoryName
      },
    })
  if (data?.posts?.edges) {
    data.posts.edges = data.posts.edges.filter(({ node }) =>
      node.status === 'publish' && isWhitelisted(node)
    )
  }
  return data?.posts
}

export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(first: 100, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            title
            excerpt
            slug
            date
            status
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
            categories {
        			edges {
          			node {
            			name
          			}
        			}
      			}
          }
        }
      }
    }
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  )

  if (data?.posts?.edges) {
    data.posts.edges = data.posts.edges.filter(({ node }) =>
      node.status === 'publish' && isWhitelisted(node)
    )
  }
  return data?.posts
}

export async function getAllPostsByCategoryName(preview, categoryName) {
  const data = await fetchAPI(
    `
    query AllPosts($categoryName: String = "") {
  posts(
    first: 100
    where: {orderby: {field: DATE, order: DESC}, categoryName: $categoryName}
  ) {
    edges {
      node {
        title
        excerpt
        slug
        date
        status
        featuredImage {
          node {
            sourceUrl
          }
        }
        author {
          node {
            name
            firstName
            lastName
            avatar {
              url
            }
          }
        }
        categories {
          edges {
            node {
              name
              slug
            }
          }
        }
      }
    }
  }
}
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
        categoryName: categoryName
      },
    }
  )

  if (data?.posts?.edges) {
    data.posts.edges = data.posts.edges.filter(({ node }) => node.status === 'publish')
  }
  return data?.posts
}

export async function getPostAndMorePosts(slug, preview, previewData) {
  const postPreview = preview && previewData?.post
  // The slug may be the id of an unpublished post
  const isId = Number.isInteger(Number(slug))
  const isSamePost = isId
    ? Number(slug) === postPreview.id
    : slug === postPreview.slug
  const isDraft = isSamePost && postPreview?.status === 'draft'
  const isRevision = isSamePost && postPreview?.status === 'publish'
  const data = await fetchAPI(
    `
    fragment AuthorFields on User {
      name
      firstName
      lastName
      avatar {
        url
      }
    }
    fragment PostFields on Post {
      title
      excerpt
      slug
      date
      status
      featuredImage {
        node {
          sourceUrl
        }
      }
      author {
        node {
          ...AuthorFields
        }
      }
      categories {
        edges {
          node {
            name
          }
        }
      }
      tags {
        edges {
          node {
            name
          }
        }
      }
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
        content
        ${
          // Only some of the fields of a revision are considered as there are some inconsistencies
          isRevision
            ? `
        revisions(first: 1, where: { orderby: { field: MODIFIED, order: DESC } }) {
          edges {
            node {
              title
              excerpt
              content
              author {
                node {
                  ...AuthorFields
                }
              }
            }
          }
        }
        `
            : ''
        }
      }
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            ...PostFields
          }
        }
      }
    }
  `,
    {
      variables: {
        id: isDraft ? postPreview.id : slug,
        idType: isDraft ? 'DATABASE_ID' : 'SLUG',
      },
    }
  )

  // Draft posts may not have an slug
  if (isDraft) data.post.slug = postPreview.id
  // Apply a revision (changes in a published post)
  if (isRevision && data.post.revisions) {
    const revision = data.post.revisions.edges[0]?.node

    if (revision) Object.assign(data.post, revision)
    delete data.post.revisions
  }

  // Filter out the main post, any unpublished posts, and any posts not in the whitelist
  data.posts.edges = data.posts.edges.filter(({ node }) =>
    node.slug !== slug && node.status === 'publish' && isWhitelisted(node)
  )
  data.posts.edges = data.posts.edges.slice(0, 2)

  return data
}
