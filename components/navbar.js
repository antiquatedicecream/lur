import { CMS_NAME, CMS_URL } from '../lib/constants'
import Image from 'next/image'

export default function Navbar() {
    return (
        <nav className="flex-col sm:flex-row flex items-center md:justify-between justify-center min-w-full bg-[#FFF5F2]">
            <div className="container mx-auto px-5 py-4 md:flex md:flex-row space-y-2 md:space-y-0 whitespace-nowrap md:align-middle">
                <a href="/" className="xl:absolute font-adriane-text-bold text-2xl text-white bg-uil-key px-2 mx-2">London Ukrainian Review</a>
                <ul className="flex-col sm:flex-row sm:align-middle sm:content-center flex space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-4 justify-center mx-auto text-lg text-uil-key px-2">
                    <a href="/"><li className=" text-uil-key current-menu-item">Current Issue</li></a>
                    <li>About</li>
                    <li>Archive</li>
                    <li>Support Us</li>
                </ul>
                <a href="https://ukrainianinstitute.org.uk/" target="_blank" className="flex flex-col w-18 h-12 xl:absolute sm:right-12 sm:bottom-2 sm:top-2 font-adriane-text-bold text-2xl text-white px-2"><img className="w-full h-full p-1" alt="Ukrainian Institute London Logo" src="/images/uil-logo.svg" /> </a>
            </div>
        </nav>
    )
}
