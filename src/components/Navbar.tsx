import { Link } from "@/constants/link";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const location = useLocation();
    const toggleMenu = (): void => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 font-IBM">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center">
                    <img src="/Logo.svg" className="h-16 w-16 items-center mr-3" alt="Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-primary-color">Green Block</span>
                </a>
                <div className="flex md:order-2">
                    <a href='/login'>
                        <button type="button" className="text-white bg-primary-color hover:bg-primary-color focus:ring-4 focus:outline-none focus:ring-primary-hover-color font-medium rounded-lg text-base px-6 py-2 text-center mr-3 md:mr-0">Login</button>
                    </a>
                    <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" onClick={() => toggleMenu()}>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className={`items-center justify-between ${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto md:order-1 font-BAI`}>
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                        {Link.map((link, index) => (
                            <li key={index}>
                                <a href={link.pathName} className={`block py-2 pl-3 pr-4 ${location.pathname === link.pathName ? "text-white bg-primary-color md:text-primary-color md:underline underline-offset-8 decoration-primary-color" : "text-gray-900"} rounded md:bg-transparent md:p-0`}>{link.title}</a></li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar