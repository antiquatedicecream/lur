import { CMS_NAME, CMS_URL } from '../lib/constants'

export default function Navbar() {
    return (
        <nav className="flex-col sm:flex-row flex items-center md:justify-between justify-center min-w-full bg-gray-200">
            <div className="container mx-auto px-5 py-4 sm:flex sm:flex-row">
                <a href="/" className="md:absolute font-adriane-text-bold">London Ukrainian Review</a>
                <ul className="flex-col sm:flex-row flex space-x-2 lg:space-x-4   justify-center mx-auto">
                    <a href="/"><li className="bg-gray-300">Current Issue</li></a>
                    <li>About</li>
                    <li>Archive</li>
                    <li>Support Us</li>
                </ul>
                </div>
            </nav>
    )
}
