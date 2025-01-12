'use client'


import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar(props) {
    const [isOpen, setIsOpen] = useState(false);
    const { handleSearchText, search } = props;

    return (
        <nav className=" bg-blue-300 shadow-md fixed top-0 left-0 right-0   text-black dark:bg-black dark:text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-bold text-white text-decoration-none">
                            NewsApp
                        </Link>
                    </div>
                    <div className=" flex sm:w-60 md:w-96 items-center rounded-md bg-white  ">
                        <input
                            name="search"
                            value={search}
                            type="text"
                            placeholder="Search By Description..."
                            onChange={(e) => handleSearchText(e.target.value)}
                            className="block rounded-md px-16 min-w-0 grow py-2.5 pl-6 pr-6 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                        />

                    </div>
                    <div className="flex items-center justify-center p-4">
                        <label
                            htmlFor="theme-toggle"
                            className="flex items-center cursor-pointer space-x-4"
                        >


                            {/* Toggle Switch */}
                            <div
                                className={`relative inline-block w-10 h-6 bg-gray-300 rounded-full ${props.isDarkMode ? 'bg-indigo-600' : 'bg-gray-300'}`}
                                onClick={props.handleToggle}
                            >
                                <div
                                    className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-all duration-300 ${props.isDarkMode ? 'translate-x-4' : ''
                                        }`}
                                ></div>
                            </div>


                        </label>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden">
                    <Link href="/" className="block px-4 py-2 hover:bg-blue-700">
                        News Aggregator
                    </Link>
                    <Link href="/" className="block px-4 py-2 hover:bg-blue-700">
                        Dummy Link
                    </Link>
                    <Link href="/" className="block px-4 py-2 hover:bg-blue-700">
                        Dummy Link
                    </Link>
                </div>
            )}
        </nav>
    );
}
