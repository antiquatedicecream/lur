import {Fragment} from 'react';
import {Menu, Transition} from '@headlessui/react';
import cn from 'classnames';
import {useForm} from 'react-hook-form';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Navbar({slug, route}) {

    const {
        register, handleSubmit, watch, formState: {errors},
    } = useForm();

    function searchUrl(searchInputString) {
        return `/search?wp_searchable_posts%5Bquery%5D=${searchInputString}`;
    }

    const onSubmit = (data) => window.open(searchUrl(data.searchInputString), '_self');

    // console.log(watch("searchInputString")); // watch input value by passing the name of it

    return (<nav className="min-w-full bg-uil-post">
        <div
            className="container flex flex-col md:flex xl:flex-row mx-auto px-0 md:px-5 sm:pl-7 sm:pt-3 pb-2 space-y-2 md:space-y-0 md:whitespace-nowrap md:align-middle items-center">
            <div className="flex-1 flex justify-start">
                <a href="/"
                   className={'font-josefin-sans-v32-latin-semibold font-black h-full text-8xl md:text-9xl py-0 sm:py-0 text-uil-key pr-3 sm:px-3 mt-6'}>LUR
                </a>
                <a href="/"
                   className="font-adriane-text-bold text-commemorative-text text-2xl sm:text-2xl py-0 sm:py-0 px-3 flex flex-col justify-center">
                    <h1>London</h1>
                    <h1>Ukrainian</h1>
                    <h1>Review</h1></a>
            </div>
            <div className={`flex flex-col`}>
                <ul
                    className="grid grid-cols-2 gap-4 2xl:gap-2 text-center sm:flex-initial sm:flex-row sm:align-middle sm:content-center sm:flex  sm:space-y-0 sm:space-x-4 lg:space-x-4 justify-end items-center mx-auto text-lg text-uil-key">
                    <li className={cn({
                        'current-menu-item': slug === 'index',
                    })}><a href="/">Home</a></li>
                    <li><a href="/posts/about-us" className={cn({
                        'current-menu-item': slug === 'about-us',
                    })}>About</a></li>
                    <li><a href="/posts/support-us-post" className={cn({
                        'current-menu-item': slug === 'support-us-post',
                    })}>Support Us</a></li>
                    {/*<li><a href="/translates" className={cn({*/}
                    {/*    'current-menu-item': route === 'translates' || route === 'translates/translators' || route === 'translates/authors',*/}
                    {/*})}>LUR Translates</a></li>*/}
                    <Menu as="div"
                          className={`relative inline-block text-center sm:text-left`}>
                        <div>
                            <Menu.Button
                                className={`inline-flex w-full justify-center gap-x-1.5 rounded-md ` + cn({
                                    'current-menu-item': route === 'translates' || route === 'translates/translators' || route === 'translates/authors',
                                })}>
                                LUR Translates
                            </Menu.Button>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items
                                className="absolute sm:right-0 z-10 mt-2 w-36 md:w-56 origin-top-right bg-uil-post shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    <Menu.Item>
                                        {({active}) => (<a
                                            href="/translates"
                                            className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-commemorative-text', 'block px-4 py-2 text-sm',)}
                                        >
                                            Authors
                                        </a>)}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({active}) => (<a
                                            href="/translates/translators"
                                            className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-commemorative-text', 'block px-4 py-2 text-sm',)}
                                        >
                                            Translators
                                        </a>)}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                    <Menu as="div"
                          className="relative inline-block text-center sm:text-left">
                        <div>
                            <Menu.Button
                                className="inline-flex w-full justify-center gap-x-1.5 rounded-md">
                                Archive
                            </Menu.Button>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items
                                className="absolute sm:right-0 z-10 mt-2 w-56 origin-top-right bg-uil-post shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    <Menu.Item>
                                        {({active}) => (<a
                                            href="/archive/issue-three"
                                            className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-commemorative-text', 'block px-4 py-2 text-sm',)}
                                        >
                                            Issue 3 (October 2024)
                                        </a>)}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({active}) => (<a
                                            href="/archive/issue-two"
                                            className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-commemorative-text', 'block px-4 py-2 text-sm',)}
                                        >
                                            Issue 2 (May 2024)
                                        </a>)}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({active}) => (<a
                                            href="/archive/issue-one"
                                            className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-commemorative-text', 'block px-4 py-2 text-sm',)}
                                        >
                                            Issue 1 (March 2024)
                                        </a>)}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({active}) => (<a
                                            href="/archive/special-issue-three"
                                            className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-commemorative-text', 'block px-4 py-2 text-sm',)}
                                        >
                                            Special Issue 3 (August 2023)
                                        </a>)}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({active}) => (<a
                                            href="/archive/special-issue-two"
                                            className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-commemorative-text', 'block px-4 py-2 text-sm',)}
                                        >
                                            Special Issue 2 (August 2022)
                                        </a>)}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({active}) => (<a
                                            href="/archive/special-issue-one"
                                            className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-commemorative-text', 'block px-4 py-2 text-sm',)}
                                        >
                                            Special Issue 1 (December 2021)
                                        </a>)}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                    {route !== 'search' && (
                        <form onSubmit={handleSubmit(onSubmit)} className={'relative flex flex-row justify-between bg-white shadow rounded border-0 sm:p-3 text-gray-400'}>
                            {/* register your input into the hook by invoking the "register" function */}
                            <input placeholder={'Search'} {...register('searchInputString')}
                                   className={'w-20 bg-white shadow-none outline-0 focus:outline-none rounded border-0 indent-2'}/>
                            <button
                                className="sm:pin-r sm:pin-t sm:mb-2 sm:mt-2 mr-2 text-purple-lighter">
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
                {/*<ul*/}
                {/*  className="mt-4 text-sm bg-uil-key text-white p-1 grid grid-cols-2 gap-4 text-center sm:flex-initial sm:flex-row sm:align-middle sm:content-center sm:flex  sm:space-y-0 sm:space-x-4 lg:space-x-4 justify-end mx-auto">*/}
                {/*    <li><a href="/archive/special-issue-three">Special Issue 3 (August 2023)</a></li>*/}
                {/*    <li><a href="/archive/special-issue-two">Special Issue 2 (August 2022)</a></li>*/}
                {/*    <li><a href="/archive/special-issue-one">Special Issue 1 (December 2021)</a></li>*/}
                {/*</ul>*/}
            </div>
            {/*<div className="flex-initial flex justify-end">*/}
            {/*    <a href="https://ukrainianinstitute.org.uk/" target="_blank"*/}
            {/*       className=" flex flex-col w-18 h-12 font-adriane-text-bold text-2xl text-white">*/}
            {/*        <img className="w-full h-full p-1" alt="Ukrainian Institute London Logo" width="1887px" height="698px" src="/images/uil-logo.svg" />*/}
            {/*    </a>*/}
            {/*</div>*/}
        </div>
    </nav>);
}
