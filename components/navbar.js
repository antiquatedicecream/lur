import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

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
                      className="grid grid-cols-2 gap-4 2xl:gap-2 text-center sm:flex-initial sm:flex-row sm:align-middle sm:content-center sm:flex  sm:space-y-0 sm:space-x-4 lg:space-x-4 justify-end mx-auto text-lg text-uil-key">
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
                        {/*<li><a href="/archive" className={cn({*/}
                        {/*    'current-menu-item': slug === 'archive',*/}
                        {/*})}>Archive</a></li>*/}
                        <Menu as="div"
                              className="relative inline-block text-center sm:text-left">
                            <div>
                                <Menu.Button
                                  className="inline-flex w-full justify-center gap-x-1.5 rounded-md">
                                    Archive
                                    {/*<ChevronDownIcon*/}
                                    {/*  className="-mr-1 h-5 w-5 text-gray-400"*/}
                                    {/*  aria-hidden="true"/>*/}
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
                                            {({active}) => (
                                              <a
                                                href="/archive/issue-one"
                                                className={classNames(
                                                  active ?
                                                    'bg-gray-100 text-gray-900' :
                                                    'text-commemorative-text',
                                                  'block px-4 py-2 text-sm',
                                                )}
                                              >
                                                  Issue 1 (2024)
                                              </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({active}) => (
                                              <a
                                                href="/archive/special-issue-three"
                                                className={classNames(
                                                  active ?
                                                    'bg-gray-100 text-gray-900' :
                                                    'text-commemorative-text',
                                                  'block px-4 py-2 text-sm',
                                                )}
                                              >
                                                  Special Issue 3 (2023)
                                              </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({active}) => (
                                              <a
                                                href="/archive/special-issue-two"
                                                className={classNames(
                                                  active ?
                                                    'bg-gray-100 text-gray-900' :
                                                    'text-commemorative-text',
                                                  'block px-4 py-2 text-sm',
                                                )}
                                              >
                                                  Special Issue 2 (2022)
                                              </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({active}) => (
                                              <a
                                                href="/archive/special-issue-one"
                                                className={classNames(
                                                  active ?
                                                    'bg-gray-100 text-gray-900' :
                                                    'text-commemorative-text',
                                                  'block px-4 py-2 text-sm',
                                                )}
                                              >
                                                  Special Issue 1 (2021)
                                              </a>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </ul>
                    {/*<ul*/}
                    {/*  className="mt-4 text-sm bg-uil-key text-white p-1 grid grid-cols-2 gap-4 text-center sm:flex-initial sm:flex-row sm:align-middle sm:content-center sm:flex  sm:space-y-0 sm:space-x-4 lg:space-x-4 justify-end mx-auto">*/}
                    {/*    <li><a href="/archive/special-issue-three">Special Issue 3 (2023)</a></li>*/}
                    {/*    <li><a href="/archive/special-issue-two">Special Issue 2 (2022)</a></li>*/}
                    {/*    <li><a href="/archive/special-issue-one">Special Issue 1 (2021)</a></li>*/}
                    {/*</ul>*/}
                </div>
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
