import Head from 'next/head'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Reprints from '../components/reprints'
import HeroPost from '../components/hero-post'
import Navbar from '../components/navbar'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import { CMS_NAME } from '../lib/constants'

export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node
  const firstSixPosts = edges.slice(1, 7)
  const reprintPosts = edges
  console.log(firstSixPosts.length)
  // const morePosts = edges

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Ukrainian Institute London</title>
        </Head>
        <div className="mb-4">
          <Navbar />
        </div>
        <Container>

          <div className="mb-6">
            {heroPost && (
              <HeroPost
                title={heroPost.title}
                coverImage={heroPost.featuredImage?.node}
                date={heroPost.date}
                author={heroPost.author?.node}
                slug={heroPost.slug}
                excerpt={heroPost.excerpt}
              />
            )}
          </div>
          <div className="mb-6">
              {firstSixPosts.length > 0 && <MoreStories posts={firstSixPosts} />}
          </div>
          <div className="mb-32">
            {reprintPosts.length > 0 && <Reprints posts={reprintPosts} />}
          </div>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { allPosts, preview },
  }
}
