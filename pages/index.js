import Head from 'next/head'
import Container from '../components/container'
import CurrentIssueStories from '../components/more-stories'
import Reprints from '../components/reprints'
import HeroPost from '../components/hero-post'
import Navbar from '../components/navbar'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import OldIssueStories from '../components/archive-stories'

export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node
  const mainPosts = edges.slice(1)
  const reprintPosts = edges

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
            {mainPosts.length > 0 && <CurrentIssueStories posts={mainPosts} />}
          </div>
          {/* Past issues stories ( = archive) */}
          <div className="mb-6">
            {mainPosts.length > 0 && <OldIssueStories posts={mainPosts} />}
          </div>
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
