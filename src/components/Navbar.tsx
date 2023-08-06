import { NonAuthUserLink, ProviderLink, UserLink } from "@/constants/link";
import { IUserProfile } from "@/interfaces/user";
import { userService } from "@/services/user.services";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const navigate = useNavigate();
    const location = useLocation();
    const toggleMenu = (): void => {
        setIsMenuOpen(!isMenuOpen);
    }
    const [user, setUser] = useState<IUserProfile | null>(null);
    const fetchUser = async (): Promise<void> => {
        try {
            const response = await userService.getUserProfile();
            setUser(response.data);
        } catch (error) {
            const message = (error as Error).message;
            throw new Error(message);
        }
    }

    const handleNavigate = (path: string): void => {
        navigate(path);
        setIsMenuOpen(false);
    }

    let linksToRender;

    if (user?.role === 'user') {
        linksToRender = UserLink;
    } else if (user?.role === 'provider') {
        linksToRender = ProviderLink;
    } else {
        linksToRender = NonAuthUserLink;
    }

    useEffect(() => {
        fetchUser();
    }, [])

    return (
        <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 font-IBM">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <button onClick={() => handleNavigate('/')} className="flex items-center">
                    <img src="/Logo.svg" className="h-16 w-16 items-center mr-1" alt="Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap text-primary-color">Green Block</span>
                </button>
                <div className="flex md:order-2 items-center">
                    {user === null ? (
                        <button onClick={() => handleNavigate('/login')} className="text-white bg-primary-color hover:bg-primary-color focus:ring-4 focus:outline-none focus:ring-primary-hover-color font-medium rounded-lg text-base px-6 py-2 text-center mr-3 md:mr-0">
                            Login
                        </button>
                    ) : (
                        <button onClick={() => handleNavigate('/profile')} className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 rounded-lg cursor-pointer hover:bg-gray-100">
                            <div className="relative">
                                <img className="w-10 h-10 rounded-full mr-3" src={user.imageProfile} alt="avatar-image" />
                                <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full"></span>
                            </div>
                            {user.role !== 'provider' ? (
                                <div className="sm:flex hidden">
                                    {user?.firstName} {user?.lastName}
                                </div>
                            ) : (
                                <div className="lg:flex hidden">
                                    {user?.firstName} {user?.lastName}
                                </div>
                            )}
                        </button>
                    )}
                    <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" onClick={() => toggleMenu()}>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className={`items-center justify-between ${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto md:order-1 font-BAI`}>
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                        {
                            linksToRender.map((link, index) => (
                                <li key={index}>
                                    <button onClick={() => handleNavigate(link.pathName)} className={`block py-2 pl-3 pr-4 ${location.pathname === link.pathName ? "text-white bg-primary-color w-full md:text-primary-color md:underline underline-offset-8 decoration-primary-color" : "text-gray-900"} rounded md:bg-transparent md:p-0`}>
                                        {link.title}
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar