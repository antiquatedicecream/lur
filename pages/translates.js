import Head from 'next/head'
import Container from '../components/container'
import Navbar from '../components/navbar'
import Layout from '../components/layout'
import {getAllPostsByCategoryName, getAllPostsForHome} from '../lib/api';
import {postsByCategories} from "../lib/filter-utils";
import {TRANSLATES_MARKER} from "../lib/constants";
import MoreTranslations from '../components/more-translations';
import NavbarTranslate from '../components/navbar-translate';

export default function Translates({ allPosts: { edges }, preview }) {
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
            {translatesPosts.length > 0 &&
              <MoreTranslations posts={translatesPosts} route={route}/>}
          </div>

        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({preview = false}) {
  const allPosts = await getAllPostsByCategoryName(preview, TRANSLATES_MARKER)
  return {
    props: { allPosts, preview },
  }
}
