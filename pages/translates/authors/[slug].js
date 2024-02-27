import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../../components/container'
import PostBody from '../../../components/post-body'
import Header from '../../../components/header'
import PostHeader from '../../../components/post-header'
import SectionSeparator from '../../../components/section-separator'
import Layout from '../../../components/layout'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../../lib/api'
import PostTitle from '../../../components/post-title'
import Head from 'next/head'
import Tags from '../../../components/tags'
import MoreStories from '../../../components/more-stories';
import NavbarTranslate from '../../../components/navbar-translate';

export default function Author({ post, posts, preview }) {
  const router = useRouter()
  const morePosts = posts?.edges
  const route = 'translates/authors'

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <Header slug={post?.slug} route={route}/>
      <div className="mt-2 mb-4">
        <NavbarTranslate route={route}/>
      </div>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="bg-uil-post sm:w-4/5 mx-auto pb-12">
              {/* this article tag used to have a bg-gray-100 - test for eye cancer */}
              <Head>
                <title>{`${post.title} | London Ukrainian Review`}</title>
                <meta
                  property="og:image"
                  // content={post.featuredImage?.node?.sourceUrl}
                  content={post.featuredImage?.node?.sourceUrl}
                />
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content="@londonukrainianreview"/>
                <meta name="twitter:creator" content="@londonukrainianreview"/>
                <meta property="og:title" content={post.title}/>
                <meta property="og:description"
                      content={post.excerpt.replace(/<[^>]+>/g, '')}/>
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.featuredImage?.node}
                date={post.date}
                author={post.author?.node}
                categories={post.categories}
                route={route}
              />
              <PostBody content={post.content}/>
              <footer>
                {post.tags.edges.length > 0 && <Tags tags={post.tags}/>}
              </footer>
            </article>

            <SectionSeparator/>
            {morePosts.length > 0 && <MoreStories posts={morePosts} route={route}/>} // TODO:
            add more posts with same tag as [slug] here
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({params, preview = false, previewData}) {
  const data = await getPostAndMorePosts(params.slug, preview, previewData)

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()

  return {
    paths: allPosts.edges.map(({ node }) => `/translates/authors/${node.slug}`) || [],
    fallback: true,
  }
}
