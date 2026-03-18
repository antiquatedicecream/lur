import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import cn from 'classnames';
import { useForm } from 'react-hook-form';
import {
    ISSUE_FIVE_MARKER,
    ISSUE_FOUR_MARKER,
    ISSUE_ONE_MARKER,
    ISSUE_SIX_MARKER,
    ISSUE_THREE_MARKER,
    ISSUE_TWO_MARKER,
    SPECIAL_ISSUE_ONE_MARKER,
    SPECIAL_ISSUE_THREE_MARKER,
    SPECIAL_ISSUE_TWO_MARKER,
} from '../lib/constants';

export default function Navbar({ slug, route }) {

    const { register, handleSubmit } = useForm();

    function searchUrl(searchInputString) {
        return `/search?wp_searchable_posts%5Bquery%5D=${searchInputString}`;
    }

    const onSubmit = (data) => window.open(searchUrl(data.searchInputString), '_self');

    return (<nav className="min-w-full bg-uil-post">
        <div
            className="container flex max-xl:flex-col md:flex xl:flex-row mx-auto max-sm:px-0 md:px-5 sm:pl-7 sm:pt-3 pb-2 max-md:space-y-2 md:space-y-0 md:whitespace-nowrap md:align-middle items-center">
            <div className="flex-1 flex justify-start max-sm:mt-4 max-sm:mb-4">
                <a href="/"
                    className="font-josefin-sans-v32-latin-semibold font-black h-full max-md:text-8xl max-md:leading-normal md:text-9xl py-0 text-uil-key max-sm:pr-3 sm:px-3 mt-6">LUR
                </a>
                <a href="/"
                    className="font-adriane-text-bold text-commemorative-text text-2xl py-0 px-3 flex flex-col justify-center">
                    <h1>London</h1>
                    <h1>Ukrainian</h1>
                    <h1>Review</h1></a>
            </div>
            <div className="flex flex-col">
                <ul
                    className="max-sm:grid grid-cols-2 max-2xl:gap-4 2xl:gap-2 text-center sm:flex-initial sm:flex-row sm:align-middle sm:content-center sm:flex sm:space-y-0 sm:space-x-4 lg:space-x-4 justify-end items-center mx-auto text-lg text-uil-key">
                    <li className={cn({
                        'current-menu-item': slug === 'index',
                    })}><a href="/">Home</a></li>
                    <li><a href="/posts/about-us" className={cn({
                        'current-menu-item': slug === 'about-us',
                    })}>About</a></li>
                    <li><a href="/posts/support-us-post" className={cn({
                        'current-menu-item': slug === 'support-us-post',
                    })}>Support Us</a></li>
                    <Menu as="div"
                        className="relative inline-block max-sm:text-center sm:text-left">
                        <div>
                            <MenuButton
                                className={`inline-flex w-full justify-center gap-x-1.5 rounded-md ` + cn({
                                    'current-menu-item': route === 'translates' || route === 'translates/translators' || route === 'translates/authors',
                                })}>
                                LUR Translates
                            </MenuButton>
                        </div>

                        <MenuItems
                            transition
                            className="absolute sm:right-0 z-10 mt-2 w-36 md:w-56 origin-top-right bg-uil-post shadow-lg ring-1 ring-black/5 focus:outline-none transition ease-out data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[leave]:ease-in">
                            <div className="py-1">
                                <MenuItem>
                                    <a
                                        href="/translates"
                                        className="text-commemorative-text data-[focus]:bg-gray-100 data-[focus]:text-gray-900 block px-4 py-2 text-sm"
                                    >
                                        Authors
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a
                                        href="/translates/translators"
                                        className="text-commemorative-text data-[focus]:bg-gray-100 data-[focus]:text-gray-900 block px-4 py-2 text-sm"
                                    >
                                        Translators
                                    </a>
                                </MenuItem>
                            </div>
                        </MenuItems>
                    </Menu>
                    <Menu as="div"
                        className="relative inline-block max-sm:text-center sm:text-left">
                        <div>
                            <MenuButton
                                className="inline-flex w-full justify-center gap-x-1.5 rounded-md">
                                Archive
                            </MenuButton>
                        </div>

                        <MenuItems
                            transition
                            className="absolute sm:right-0 z-10 mt-2 w-56 origin-top-right bg-uil-post shadow-lg ring-1 ring-black/5 focus:outline-none transition ease-out data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[leave]:ease-in">
                            <div className="py-1">
                                <MenuItem>
                                    <a
                                        href="/archive/issue-five"
                                        className="text-commemorative-text data-[focus]:bg-gray-100 data-[focus]:text-gray-900 block px-4 py-2 text-sm"
                                    >
                                        {ISSUE_FIVE_MARKER}
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a
                                        href="/archive/issue-four"
                                        className="text-commemorative-text data-[focus]:bg-gray-100 data-[focus]:text-gray-900 block px-4 py-2 text-sm"
                                    >
                                        {ISSUE_FOUR_MARKER}
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a
                                        href="/archive/issue-three"
                                        className="text-commemorative-text data-[focus]:bg-gray-100 data-[focus]:text-gray-900 block px-4 py-2 text-sm"
                                    >
                                        {ISSUE_THREE_MARKER}
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a
                                        href="/archive/issue-two"
                                        className="text-commemorative-text data-[focus]:bg-gray-100 data-[focus]:text-gray-900 block px-4 py-2 text-sm"
                                    >
                                        {ISSUE_TWO_MARKER}
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a
                                        href="/archive/issue-one"
                                        className="text-commemorative-text data-[focus]:bg-gray-100 data-[focus]:text-gray-900 block px-4 py-2 text-sm"
                                    >
                                        {ISSUE_ONE_MARKER}
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a
                                        href="/archive/special-issue-three"
                                        className="text-commemorative-text data-[focus]:bg-gray-100 data-[focus]:text-gray-900 block px-4 py-2 text-sm"
                                    >
                                        {SPECIAL_ISSUE_THREE_MARKER}
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a
                                        href="/archive/special-issue-two"
                                        className="text-commemorative-text data-[focus]:bg-gray-100 data-[focus]:text-gray-900 block px-4 py-2 text-sm"
                                    >
                                        {SPECIAL_ISSUE_TWO_MARKER}
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a
                                        href="/archive/special-issue-one"
                                        className="text-commemorative-text data-[focus]:bg-gray-100 data-[focus]:text-gray-900 block px-4 py-2 text-sm"
                                    >
                                        {SPECIAL_ISSUE_ONE_MARKER}
                                    </a>
                                </MenuItem>
                            </div>
                        </MenuItems>
                    </Menu>
                    {route !== 'search' && (
                        <form onSubmit={handleSubmit(onSubmit)} className="relative flex flex-row justify-between bg-white shadow rounded border-0 sm:p-3 text-gray-400">
                            <input placeholder="Search" {...register('searchInputString')}
                                className="w-20 bg-white shadow-none outline-0 focus:outline-none rounded border-0 indent-2 text-gray-600" />
                            <button className="mr-2" aria-label="Submit search">
                                <svg version="1.1" className="h-4 text-dark"
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px" y="0px"
                                    viewBox="0 0 52.966 52.966">
                                    <path d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21
        c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279
        C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19
        S32.459,40,21.983,40z"/>
                                </svg>

                            </button>
                        </form>
                    )}
                </ul>
            </div>
        </div>
    </nav>);
}
