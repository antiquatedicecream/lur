import {createMemoryCache} from '@algolia/client-common';
import {liteClient as algoliasearch} from 'algoliasearch/lite';
import singletonRouter from 'next/router';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {getServerState, Hits, InstantSearch, InstantSearchSSRProvider, SearchBox,} from 'react-instantsearch';
import {createInstantSearchRouterNext} from 'react-instantsearch-router-nextjs';
import Head from "next/head";
import Navbar from "../components/navbar";
import Container from "../components/container";
import Layout from "../components/layout";
import PostPreview from "../components/post-preview";

const responsesCache = createMemoryCache();
const client = algoliasearch('Z9UJL6DU2K', 'dd89791c13010983cfe8a3f3e34686b9', {
    responsesCache,
});

function Hit({hit}) {
    const href = hit.permalink.replace(/\/$/, '');
    const slug = href.substring(href.lastIndexOf('/') + 1);
    const date = new Date(hit.post_date * 1000); // convert timestamp to milliseconds and construct Date object

    return (<>
        <PostPreview
            key={slug}
            title={hit.post_title}
            date={date.toISOString()}
            author={hit.post_author.display_name}
            algoliaCategories={hit.taxonomies.category}
            slug={slug}
            excerpt={hit.post_excerpt}
            titleFontSize={'2xl'}
        />

    </>);
}

export default function HomePage({serverState, url}) {
    const route = 'search';
    return (<InstantSearchSSRProvider {...serverState}>
        <Layout preview={false}>
            <Head>
                <title>London Ukrainian Review</title>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content="@londonukrainianreview"/>
                <meta name="twitter:creator" content="@londonukrainianreview"/>
                <meta property="og:title" content="London Ukrainian Review"/>
                <meta property="og:description"
                      content="The London Ukrainian Review is an open-access journal that tackles global challenges through the prism of Ukraine while adopting a distinctly internationalist perspective on the Ukrainian past and present."/>
            </Head>
            <div className="mb-4">
                <Navbar route={route}/>
            </div>
            <Container>
                <div className="mb-6">

                </div>
                <div className="mb-12">
                    {<section>
                        <div
                            className="grid grid-cols-1 gap-x-4 md:gap-x-12 lg:gap-x-12 gap-y-12">
                            <div className={"bg-uil-post"}>
                                <div className="mb-3 mx-3">
                                    <InstantSearch
                                        searchClient={client}
                                        indexName="wp_searchable_posts"
                                        routing={{
                                            router: createInstantSearchRouterNext({
                                                serverUrl: url, singletonRouter, routerOptions: {
                                                    cleanUrlOnDispose: false,
                                                },
                                            }),
                                        }}
                                        insights={true}
                                        future={{
                                            preserveSharedStateOnUnmount: true,
                                        }}
                                    >
                                        <div className={"flex flex-col items-center"}>
                                            <SearchBox
                                                placeholder={'Search'}
                                                autoFocus={true}
                                                searchAsYouType={true}
                                                type="text"
                                                className={'p-4 m-4 bg-white flex flex-row items-center justify-center text-gray-400 text-2xl  shadow rounded'}

                                                classNames={{
                                                    input: 'outline-none',
                                                }}

                                                submitIconComponent={({classNames}) => (
                                                    <div className={classNames.submitIcon}>
                                                        <svg version="1.1" className="h-4 text-dark"
                                                             xmlns="http://www.w3.org/2000/svg"
                                                             x="0px" y="0px"
                                                             viewBox="0 0 52.966 52.966">
                                                            <path d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21
        c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279
        C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19
        S32.459,40,21.983,40z"/>
                                                        </svg>
                                                    </div>
                                                )}

                                                resetIconComponent={({classNames}) => (
                                                    <></>
                                                )}

                                                loadingIconComponent={({classNames}) => (
                                                    <div className={classNames.loadingIcon}>Loading</div>
                                                )}
                                            />
                                            <div
                                                className={'font-adriane-text-bold text-commemorative-text text-2xl p-4 bg-uil-post text-center flex flex-row items-center'}>
                                                Search results powered by<img className="mx-2 p-2 w-16 rounded bg-uil-key" alt="Algolia" width="1887px" height="698px"
                                                                             src="/images/algolia-logo-white.svg"/>
                                            </div>
                                            <div
                                                className="grid grid-cols-1 lg:px-24 gap-x-4 md:gap-x-12 lg:gap-x-12 gap-y-12 sm:mx-24">
                                                <Hits hitComponent={Hit} className={''}/>
                                            </div>
                                        </div>
                                    </InstantSearch>
                                    {/*{!hideMetaData && <Avatar author={author} categories={categories} />}*/}
                                </div>
                            </div>
                        </div>
                    </section>}
                </div>

            </Container>
        </Layout>
    </InstantSearchSSRProvider>);
}

export const getServerSideProps = async function getServerSideProps({req}) {
    const protocol = req.headers.referer?.split('://')[0] || 'https';
    const url = `${protocol}://${req.headers.host}${req.url}`;
    const serverState = await getServerState(<HomePage url={url}/>, {
        renderToString,
    });

    responsesCache.clear();

    return {
        props: {
            serverState, url,
        },
    };
};
