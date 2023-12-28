import Head from 'next/head'
import Container from '../../components/container'
import Navbar from '../../components/navbar'
import Layout from '../../components/layout'
import { getAllPostsForHome } from '../../lib/api'
import {postsByCategories} from "../../lib/filter-utils";
import MoreTranslations from '../../components/more-translations';
import NavbarTranslate from '../../components/navbar-translate';
import {TRANSLATOR_MARKER} from '../../lib/constants';

export default function Translators({ allPosts: { edges }, preview }) {
  const translatorposts = postsByCategories(edges, [TRANSLATOR_MARKER]);
  const heroPost = translatorposts[0]?.node;
  const route = 'translates/translators';

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
                content="London Ukrainian Review is a special publication of the Ukrainian Institute London. Dedicated to the three decades of Ukraine’s independence, it discusses the challenges of climate and sustainability, achievements in cinema, literature, and academia, while looking ahead to what Ukraine has to offer to the world."/>
        </Head>
        <div className="mb-2">
          <Navbar route={route}/>
        </div>
        <div className="mb-4">
          <NavbarTranslate route={route}/>
        </div>
        <Container>
          <div className="mb-6">
            {translatorposts.length > 0 &&
              <MoreTranslations posts={translatorposts} route={route} hideMetaData={true}/>}
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
