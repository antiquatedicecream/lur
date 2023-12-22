import Head from 'next/head'
import Container from '../../components/container'
import Reprints from '../../components/reprints'
import HeroPost from '../../components/hero-post'
import Navbar from '../../components/navbar'
import Layout from '../../components/layout'
import { getAllPostsForHome } from '../../lib/api'
import {postsByCategories} from "../../lib/filter-utils";
import {TRANSLATES_MARKER} from "../../lib/constants";
import MoreStories from '../../components/more-stories';

export default function Index({ allPosts: { edges }, preview }) {
  const translatesPosts = postsByCategories(edges, [TRANSLATES_MARKER]);
  const heroPost = translatesPosts[0]?.node;
  const route = 'translates';

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
                route={route}
              />
            )}
          </div>
          <div className="mb-6">
            {translatesPosts.length > 0 && <MoreStories posts={translatesPosts.slice(1)} route='translates' />}
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
