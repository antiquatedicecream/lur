import Head from 'next/head'
import Container from '../components/container'
import HeroPost from '../components/hero-post'
import Navbar from '../components/navbar'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import {postsByCategories} from "../lib/filter-utils";
import { FRONTPAGE_ISSUES } from '../lib/constants';
import MoreStories from '../components/more-stories';

export default function Index({ allPosts: { edges }, preview }) {
  const [currentIssue, ...olderIssues] = FRONTPAGE_ISSUES
  const currentIssuePosts = postsByCategories(edges, [currentIssue.marker]);
  const heroPost = currentIssuePosts[0]?.node;
  const olderIssuePosts = olderIssues.map((issue) => ({
    issue,
    posts: postsByCategories(edges, [issue.marker]),
  }))
  const route = 'posts'

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>London Ukrainian Review</title>
          <meta
            property="og:image"
            content={heroPost.featuredImage?.node?.sourceUrl}
          />
          <meta
            property="twitter:image"
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
                heading={currentIssue.heading}
              />
            )}
          </div>
          <div className="mb-12">
            {currentIssuePosts.length > 0 &&
              <MoreStories posts={currentIssuePosts.slice(1)}/>}
          </div>
          {olderIssuePosts.map(({ issue, posts }) => (
            <div className="mb-6" key={issue.marker}>
              {posts.length > 0 &&
                <MoreStories posts={posts} heading={issue.heading} />}
            </div>
          ))}
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
