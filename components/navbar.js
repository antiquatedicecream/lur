import { CMS_NAME, CMS_URL } from '../lib/constants'
import Image from 'next/image'

export default function Navbar() {
    return (
        <nav className="min-w-full bg-[#FFF5F2]">
            <div className='container mx-auto px-5 pt-1 pb-0'>
                <span className='font-adriane-text-bold text-white px-2 bg-uil-key text-xs tracking-widest mx-2'>Special Publication of the Ukrainian Institute London</span>
            </div>
            <div className="container mx-auto px-5 pt-0 pb-2 md:flex md:flex-row space-y-2 md:space-y-0 whitespace-nowrap md:align-middle items-center">
                <div className="flex-1 flex justify-start">
                    <a href="/" className="font-adriane-text-bold text-2xl text-white bg-uil-key px-2 mx-2">London Ukrainian Review</a>
                </div>
                <ul className="flex-initial flex-col sm:flex-row sm:align-middle sm:content-center flex space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-4 justify-center mx-auto text-lg text-uil-key px-2">
                    <a href="/"><li className=" text-uil-key current-menu-item">Current Issue</li></a>
                    <a href="/posts/about-us"><li>About</li></a>
                    <a href="/posts/archive-post"><li>Archive</li></a>
                    <a href="/posts/support-us-post"><li>Support Us</li></a>
                </ul>
                <div className="flex-1 flex justify-end">
                    <a href="https://ukrainianinstitute.org.uk/" target="_blank" className=" flex flex-col w-18 h-12 font-adriane-text-bold text-2xl text-white">
                        <img className="w-full h-full p-1" alt="Ukrainian Institute London Logo" width="1887px" height="698px" src="/images/uil-logo.svg" />
                    </a>
                </div>
            </div>
        </nav>
    )
}
