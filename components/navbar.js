import { CMS_NAME, CMS_URL } from '../lib/constants'
import Image from 'next/image'
import cn from 'classnames'

export default function Navbar( {slug, route} ) {
    return (
        <nav className="min-w-full bg-uil-post">
            <div className="container mx-auto px-5 sm:pl-7 pt-4 sm:pt-3 pb-2 md:flex md:flex-row space-y-2 md:space-y-0 sm:whitespace-nowrap md:align-middle items-center">
                <div className="flex-1 flex justify-start">
                    <a href="/" className="font-adriane-text-bold text-2xl sm:text-2xl py-1 sm:py-0 text-white bg-uil-key px-2"><h1>London Ukrainian Review</h1></a>
                </div>
                <ul
                  className="flex-initial flex-col sm:flex-row sm:align-middle sm:content-center flex space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-4 justify-end mx-auto text-lg text-uil-key">
                    <li className={cn({
                        'current-menu-item': slug !== 'about-us'
                          && slug !== 'archive-post'
                          && slug !== 'support-us-post'
                          && route !== 'translates'
                          && route !== 'translates/translators'
                          && route !== 'translates/authors'
                    })}><a href="/">Home</a></li>
                    <li><a href="/posts/about-us" className={cn({
                        'current-menu-item': slug === 'about-us',
                    })}>About</a></li>
                    {/* <li><a href="/posts/archive-post" className={cn({
                        'current-menu-item': slug === 'archive-post'
                    })}>Archive</a></li> */}
                    <li><a href="/posts/support-us-post" className={cn({
                        'current-menu-item': slug === 'support-us-post',
                    })}>Support Us</a></li>
                    <li><a href="/translates" className={cn({
                        'current-menu-item': route === 'translates'
                          || route === 'translates/translators'
                          || route === 'translates/authors',
                    })}>LUR Translates</a></li>
                </ul>
                {/*<div className="flex-initial flex justify-end">*/}
                {/*    <a href="https://ukrainianinstitute.org.uk/" target="_blank"*/}
                {/*       className=" flex flex-col w-18 h-12 font-adriane-text-bold text-2xl text-white">*/}
                {/*        <img className="w-full h-full p-1" alt="Ukrainian Institute London Logo" width="1887px" height="698px" src="/images/uil-logo.svg" />*/}
                {/*    </a>*/}
                {/*</div>*/}
            </div>
        </nav>
    )
}
