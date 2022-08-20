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
  // console.log(edges.length)
  const firstPosts = edges.slice(1)
  // const heroPost2 = edges[7]?.node
  const reprintPosts = edges
  // console.log(firstPosts.length)
  // const morePosts = edges

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>London Ukrainian Review</title>
          <meta
            property="og:image"
            // content={post.featuredImage?.node?.sourceUrl}
            content={heroPost.featuredImage?.node?.sourceUrl}
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@londonukrainianreview" />
          <meta name="twitter:creator" content="@londonukrainianreview" />
          <meta property="og:title" content="London Ukrainian Review" />
          <meta property="og:description" content="London Ukrainian Review is a special publication of the Ukrainian Institute London. Dedicated to the three decades of Ukraine’s independence, it discusses the challenges of climate and sustainability, achievements in cinema, literature, and academia, while looking ahead to what Ukraine has to offer to the world." />
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
                categories={heroPost.categories}
              />
            )}
          </div>
          <div className="mb-6">
            {firstPosts.length > 0 && <MoreStories posts={firstPosts} />}
          </div>
          {/* <div className="mb-6">
            {heroPost2 && (
              <HeroPost
                title={heroPost2.title}
                coverImage={heroPost2.featuredImage?.node}
                date={heroPost2.date}
                author={heroPost2.author?.node}
                slug={heroPost2.slug}
                excerpt={heroPost2.excerpt}
              />
            )}
          </div> */}
          <div className="">
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
