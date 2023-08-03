import { userService } from "@/services/user.services";
import { useState } from "react";

const LoginPage = () => {

    const [user, setUser] = useState({
        email: '', password: ''
    });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        await userService.login(user.email, user.password);
    }

    return (
        <div className="flex flex-col items-center justify-center mt-20 py-8 mx-auto lg:py-0">
            <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 font-BAI mx-20">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Sign in to your account
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                            <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-color focus:border-primary-color block w-full p-2.5"
                                placeholder="name@company.com"
                                value={user.email}
                                onChange={(e) => {
                                    setUser({ ...user, email: e.target.value });
                                    e.preventDefault();
                                }}
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                            <input type="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-color focus:border-primary-color block w-full p-2.5"
                                value={user.password}
                                onChange={(e) => {
                                    setUser({ ...user, password: e.target.value });
                                    e.preventDefault();
                                }}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label className="text-gray-500">Remember me</label>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="w-full text-white bg-primary-color hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-hover-color font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                        <p className="text-sm font-light text-gray-500">
                            Don't have an account yet? <a href="/register" className="font-medium text-primary-color hover:underline">Sign up</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage