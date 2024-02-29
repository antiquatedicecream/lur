import Head from 'next/head'
import Container from '../../components/container'
import Reprints from '../../components/reprints'
import Navbar from '../../components/navbar'
import Layout from '../../components/layout'
import {getAllPostsByCategoryName} from '../../lib/api';
import {postsByCategories} from "../../lib/filter-utils";
import {
  SPECIAL_ISSUE_ONE_MARKER,
  REPRINT_MARKER,
  SPECIAL_ISSUE_ONE_CATEGORY_NAME,
} from '../../lib/constants';
import MoreStories from '../../components/more-stories';

export default function SpecialIssueOne({ allPosts: { edges }, preview }) {
  const reprintPosts = postsByCategories(edges, [REPRINT_MARKER]);
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
            // content={heroPost.featuredImage?.node?.sourceUrl}
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@londonukrainianreview" />
          <meta name="twitter:creator" content="@londonukrainianreview" />
          <meta property="og:title" content="London Ukrainian Review" />
          <meta property="og:description" content="The London Ukrainian Review is an open-access journal that tackles global challenges through the prism of Ukraine while adopting a distinctly internationalist perspective on the Ukrainian past and present." />
        </Head>
        <div className="mb-4">
          <Navbar route={route} slug={'archive'}/>
          {/*<div className="mt-2 mb-4">*/}
          {/*  <NavbarArchive route={route}/>*/}
          {/*</div>*/}
        </div>
        <Container>
          {/*<div className="mb-6">*/}
          {/*  {specialIssueTwoPosts.length > 0 &&*/}
          {/*    <MoreStories posts={specialIssueThreePosts}*/}
          {/*                 heading={'Special Issue 3 (2023)'}/>}*/}
          {/*</div>*/}
          {/*<div className="mb-6">*/}
          {/*  {specialIssueTwoPosts.length > 0 &&*/}
          {/*    <MoreStories posts={specialIssueTwoPosts}*/}
          {/*                 heading={'Special Issue 2 (2022)'}/>}*/}
          {/*</div>*/}
          <div className="mb-6">
            {specialIssueOnePosts.length > 0 &&
              <MoreStories posts={specialIssueOnePosts}
                           heading={'Special Issue 1 (2021)'}/>}
          </div>
          <div className="">
            {reprintPosts.length > 0 && <Reprints posts={reprintPosts}/>}
          </div>

        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({preview = false}) {
  const allPosts = await getAllPostsByCategoryName(preview, SPECIAL_ISSUE_ONE_CATEGORY_NAME);
  return {
    props: {allPosts, preview },
  }
}
