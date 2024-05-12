import Head from 'next/head'
import Container from '../components/container'
import Reprints from '../components/reprints'
import HeroPost from '../components/hero-post'
import Navbar from '../components/navbar'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import {postsByCategories} from "../lib/filter-utils";
import {
  SPECIAL_ISSUE_THREE_MARKER,
  SPECIAL_ISSUE_ONE_MARKER,
  SPECIAL_ISSUE_TWO_MARKER,
  REPRINT_MARKER,
  CURRENT_ISSUE_MARKER, ISSUE_ONE_MARKER,
} from '../lib/constants';
import MoreStories from '../components/more-stories';

export default function Index({ allPosts: { edges }, preview }) {
  const currentIssuePosts = postsByCategories(edges, [CURRENT_ISSUE_MARKER]);
  const heroPost = currentIssuePosts[0]?.node;
  const issueOnePosts = postsByCategories(edges, [ISSUE_ONE_MARKER]);
  const reprintPosts = postsByCategories(edges, [REPRINT_MARKER]);
  const olderFilteredPosts = postsByCategories(edges, [SPECIAL_ISSUE_ONE_MARKER, SPECIAL_ISSUE_TWO_MARKER])
  const route = 'posts'

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
          <meta
            property="twitter:image"
            // content={post.featuredImage?.node?.sourceUrl}
            content={heroPost.featuredImage?.node?.sourceUrl}
          />
          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:site" content="@londonukrainianreview"/>
          <meta name="twitter:creator" content="@londonukrainianreview"/>
          <meta property="og:title" content="London Ukrainian Review"/>
          <meta property="og:description"
                content="The London Ukrainian Review is an open-access journal that tackles global challenges through the prism of Ukraine while adopting a distinctly internationalist perspective on the Ukrainian past and present."/>
        </Head>
        <div className="mb-4">
          <Navbar route={route} slug={'index'}/>
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
            {currentIssuePosts.length > 0 &&
              <MoreStories posts={currentIssuePosts.slice(1)}/>}
          </div>
          <div className="mb-6">
            {issueOnePosts.length > 0 &&
              <MoreStories posts={issueOnePosts}
                           heading={'LUR 1 (2024): War on the Environment'}/>}
          </div>
          {/*<div className="mb-6">*/}
          {/*  {olderFilteredPosts.length > 0 && <MoreStories posts={olderFilteredPosts} />}*/}
          {/*</div>*/}
          {/*<div className="">*/}
          {/*  {reprintPosts.length > 0 && <Reprints posts={reprintPosts} />}*/}
          {/*</div>*/}

        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({preview = false}) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: {allPosts, preview},
  }
}
