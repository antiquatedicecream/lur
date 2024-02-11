import Head from 'next/head'
import Container from '../../components/container'
import Navbar from '../../components/navbar'
import Layout from '../../components/layout'
import { getAllPostsForHome } from '../../lib/api'
import {postsByCategories} from "../../lib/filter-utils";
import MoreTranslations from '../../components/more-translations';
import NavbarTranslate from '../../components/navbar-translate';
import {AUTHOR_MARKER, TRANSLATOR_MARKER} from '../../lib/constants';

export default function Authors({ allPosts: { edges }, preview }) {
  const authorPosts = postsByCategories(edges, [AUTHOR_MARKER]);
  const heroPost = authorPosts[0]?.node;
  const route = 'translates/authors';

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>London Ukrainian Review</title>
          <meta
            property="og:image"
            content={heroPost.featuredImage?.node?.sourceUrl}
          />
          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:site" content="@londonukrainianreview"/>
          <meta name="twitter:creator" content="@londonukrainianreview"/>
          <meta property="og:title" content="London Ukrainian Review"/>
          <meta property="og:description"
                content="The London Ukrainian Review is an open-access journal that tackles global challenges through the prism of Ukraine while adopting a distinctly internationalist perspective on the Ukrainian past and present."/>
        </Head>
        <div className="mb-2">
          <Navbar route={route}/>
        </div>
        <div className="mb-4">
          <NavbarTranslate route={route}/>
        </div>
        <Container>
          <div className="mb-6">
            {authorPosts.length > 0 &&
              <MoreTranslations posts={authorPosts} route={route} hideMetaData={true}/>}
          </div>

        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({preview = false}) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { allPosts, preview },
  }
}
