import { CMS_NAME, CMS_URL } from '../lib/constants'

export default function Navbar() {
    return (
        <nav className="flex-col sm:flex-row flex items-center md:justify-between mb-16 md:mb-12 justify-center min-w-full bg-gray-200">
            <div className="container mx-auto px-5 py-4 sm:flex sm:flex-row">
                <span className="md:absolute">London Ukrainian Review</span>
                <ul className="flex-col sm:flex-row flex space-x-2 lg:space-x-4   justify-center mx-auto">
                    <li>Current Issue</li>
                    <li>About</li>
                    <li>Archive</li>
                    <li>Support Us</li>
                </ul>
                </div>
            </nav>
    )
}
