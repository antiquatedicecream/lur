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
    CURRENT_ISSUE_MARKER, ISSUE_TWO_MARKER, ISSUE_THREE_MARKER, ISSUE_ONE_MARKER, ISSUE_FOUR_MARKER,
} from '../lib/constants';
import MoreStories from '../components/more-stories';

export default function Index({ allPosts: { edges }, preview }) {
  const currentIssuePosts = postsByCategories(edges, [CURRENT_ISSUE_MARKER]);
  const heroPost = currentIssuePosts[0]?.node;
  const issueFourPosts = postsByCategories(edges, [ISSUE_FOUR_MARKER]);
  const issueThreePosts = postsByCategories(edges, [ISSUE_THREE_MARKER]);
  const issueTwoPosts = postsByCategories(edges, [ISSUE_TWO_MARKER]);
  const issueOnePosts = postsByCategories(edges, [ISSUE_ONE_MARKER]);
  const specialIssueThreePosts = postsByCategories(edges, [SPECIAL_ISSUE_THREE_MARKER]);
  const specialIssueTwoPosts = postsByCategories(edges, [SPECIAL_ISSUE_TWO_MARKER]);
  const specialIssueOnePosts = postsByCategories(edges, [SPECIAL_ISSUE_ONE_MARKER]);
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
                heading={'Issue 5 (October 2025): Culture as Security'}
              />
            )}
          </div>
          <div className="mb-12">
            {currentIssuePosts.length > 0 &&
              <MoreStories posts={currentIssuePosts.slice(1)}/>}
          </div>
            <div className="mb-6">
                {issueFourPosts.length > 0 &&
                    <MoreStories posts={issueFourPosts}
                                 heading={'Issue 4 (June 2025)'}/>}
            </div>
          <div className="mb-6">
            {issueThreePosts.length > 0 &&
              <MoreStories posts={issueThreePosts}
                           heading={'Issue 3 (October 2024)'}/>}
          </div>
          <div className="mb-6">
            {issueTwoPosts.length > 0 &&
              <MoreStories posts={issueTwoPosts}
                           heading={'Issue 2 (May 2024)'}/>}
          </div>
          <div className="mb-6">
            {issueOnePosts.length > 0 &&
              <MoreStories posts={issueOnePosts}
                           heading={'Issue 1 (March 2024)'}/>}
          </div>
          <div className="mb-6">
            {specialIssueThreePosts.length > 0 &&
              <MoreStories posts={specialIssueThreePosts}
                           heading={'Special Issue 3 (August 2023)'}/>}
          </div>
          <div className="mb-6">
            {specialIssueTwoPosts.length > 0 &&
              <MoreStories posts={specialIssueTwoPosts}
                           heading={'Special Issue 2 (August 2022)'}/>}
          </div>
          <div className="mb-6">
            {specialIssueOnePosts.length > 0 &&
              <MoreStories posts={specialIssueOnePosts}
                           heading={'Special Issue 1 (December 2021)'}/>}
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
