import { CMS_NAME, CMS_URL } from '../lib/constants'
import Image from 'next/image'
import cn from 'classnames'

export default function Navbar( {slug, route} ) {
    return (
        <nav className="min-w-full bg-uil-post">
            <div
              className="container flex flex-col md:flex lg:flex-row mx-auto px-0 md:px-5 sm:pl-7 sm:pt-3 pb-2 space-y-2 md:space-y-0 md:whitespace-nowrap md:align-middle items-center">
                <div className="flex-1 flex justify-start">
                    <a href="/"
                      className={'font-josefin-sans-v32-latin-semibold h-full text-8xl md:text-9xl py-0 sm:py-0 text-uil-key pr-3 sm:px-3 mt-5'}>LUR
                    </a>
                    <a href="/"
                       className="font-adriane-text-bold text-commemorative-text text-2xl sm:text-2xl py-0 sm:py-0 px-3 flex flex-col justify-center">
                        <h1>London</h1>
                        <h1>Ukrainian</h1>
                        <h1>Review</h1></a>
                </div>
                <ul
                  className="grid grid-cols-2 gap-2 text-center sm:flex-initial sm:flex-row sm:align-middle sm:content-center sm:flex  sm:space-y-0 sm:space-x-4 lg:space-x-4 justify-end mx-auto text-lg text-uil-key">
                    <li className={cn({
                        'current-menu-item': slug === 'index',
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
                    <li><a href="/archive" className={cn({
                        'current-menu-item': slug === 'archive',
                    })}>Archive</a></li>
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
