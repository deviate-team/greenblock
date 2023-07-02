import { useState } from "react";

export default function Navbar() {
    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

    return (
        <nav className="bg-main-color fixed top-0 w-full">
            <div className="flex items-center justify-between h-24 px-4 border-b border-solid">
                <div className="flex-shrink-0 font-bold tracking-wider text-white items-center">
                    <a href="/">
                        <img src="/Logo.webp" alt="logo" className="w-36 h-32 mt-5" />
                    </a>
                </div>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex p-0 flex-row space-x-5 mt-0">
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-white rounded bg-transparent p-0">Cryptocurrencies</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0">Exchange</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent">Learn</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent">About</a>
                        </li>
                        <li>
                            <button type="button" className="text-second-color bg-white font-semibold rounded-lg text-sm px-4 py-2 text-center mr-0">Connect</button>
                        </li>
                    </ul>
                </div>
                <button
                    type="button"
                    className="bg-white inline-flex md:hidden items-center justify-center p-2 rounded-md text-main-color hover:bg-second-color focus:outline-none focus:bg-second-color focus:text-white transition duration-150 ease-in-out"
                    onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    <svg
                        className="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </button>
            </div>
            {showMobileMenu && (
                <div className="md:hidden px-2 py-3 space-y-2 font-medium text-slate-700">
                    <a
                        href="#"
                        className="block px-3 py-2 rounded-md text-white"
                    >
                        Cryptocurrencies
                    </a>
                    <a
                        href="#"
                        className="block px-3 py-2 rounded-md text-white"
                    >
                        Exchange
                    </a>
                    <a
                        href="#"
                        className="block px-3 py-2 rounded-md text-white"
                    >
                        Learn
                    </a>
                    <a
                        href="#"
                        className="block px-3 py-2 rounded-md text-white"
                    >
                        About
                    </a>
                    <a
                        href="#"
                        className="block px-3 py-2 rounded-md text-white"
                    >
                        <button type="button" className="text-second-color bg-white font-semibold rounded-lg text-sm px-4 py-2 text-center mr-0">Connect</button>
                    </a>
                </div>
            )}
        </nav>
    )
}