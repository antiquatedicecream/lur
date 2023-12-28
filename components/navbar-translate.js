import { CMS_NAME, CMS_URL } from '../lib/constants'
import Image from 'next/image'
import cn from 'classnames'

export default function NavbarTranslate({slug, route} ) {
    return (
        <nav className="min-w-full bg-uil-post">
            <div className="container mx-auto px-5 lg:pl-7 pt-2 pb-2 lg:flex md:flex-row space-y-2 lg:space-y-0 lg:whitespace-nowrap lg:align-middle items-center">
                <ul
                  className="flex-initial flex-col lg:flex-row lg:align-middle lg:content-center flex space-y-2 lg:space-y-0 lg:space-x-4 justify-end mx-auto text-lg text-uil-key">
                    <li><a href="/">Mariana Savka</a></li>
                    <li><a href="/posts/about-us">Sofia Yablonska</a></li>
                    <li><a href="/posts/support-us-post">Ahatanhel Krymskyi</a></li>
                    <li><a href="/translates">Anastasiya Levkova</a></li>
                    <li><a href="/">Marko Cheremshyna</a></li>
                    <li><a href="/posts/about-us">Mykola Kulish</a></li>
                </ul>
            </div>
        </nav>
    )
}
