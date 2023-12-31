import { RegisterData } from "@/constants/form";
import { IRegisterForm } from "@/interfaces/form";
import { userService } from "@/services/user.services";
import { useState } from "react";
import toast from "react-hot-toast";
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";

const RegisterPage = () => {
    const [value, setValue] = useState<DateValueType>({
        startDate: null,
        endDate: null,
    });
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const [user, setUser] = useState<IRegisterForm>(RegisterData);
    const [role, setRole] = useState<string>('');

    const handleValueChange = (value: DateValueType): void => {
        setValue(value);
        const birthDateValue = value?.startDate ? value.startDate.toString() : '';
        setUser({ ...user, birthDate: birthDateValue });
    }

    const handleDropdownChange = (): void => {
        setDropdownOpen(!dropdownOpen);
    }

    const handleDropdownItemClick = (value: string): void => {
        setRole(value);
        setUser({ ...user, role: value });
        setDropdownOpen(false);
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        try {
            await userService.register({ ...user })
            toast.success("Register Success");
            setTimeout(() => {
                window.location.href = "/";
            }, 1000)
        } catch (error) {
            toast.error((error as Error).message);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center mt-48 py-8 mx-auto my-20 lg:py-0">
            <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 font-BAI mx-20">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Sign up for your account
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        <div className="flex flex-wrap -mx-3 mb-2 z-0">
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label className="block mb-2 text-sm font-medium text-gray-900">First Name</label>
                                <input type="text" className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-color focus:border-primary-color block w-full p-2"
                                    value={user.firstName}
                                    onChange={(e) => {
                                        setUser({ ...user, firstName: e.target.value });
                                        e.preventDefault();
                                    }}
                                    required
                                />
                            </div>
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label className="block mb-2 text-sm font-medium text-gray-900">Middle Name</label>
                                <input type="text" className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-color focus:border-primary-color block w-full p-2"
                                    value={user.middleName}
                                    onChange={(e) => {
                                        setUser({ ...user, middleName: e.target.value });
                                        e.preventDefault();
                                    }}
                                />
                            </div>
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label className="block mb-2 text-sm font-medium text-gray-900">Last Name</label>
                                <input type="text" className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-color focus:border-primary-color block w-full p-2"
                                    value={user.lastName}
                                    onChange={(e) => {
                                        setUser({ ...user, lastName: e.target.value });
                                        e.preventDefault();
                                    }}
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Birthdate</label>
                            <div className="cursor-pointer border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-color focus:border-primary-color block w-full">
                                <Datepicker
                                    useRange={false}
                                    asSingle={true}
                                    value={value}
                                    onChange={handleValueChange} />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block mb-2 text-sm font-medium text-gray-900">Username</label>
                                <input type="text" className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-color focus:border-primary-color block w-full p-2.5" placeholder="Username"
                                    value={user.username}
                                    onChange={(e) => {
                                        setUser({ ...user, username: e.target.value });
                                        e.preventDefault();
                                    }}
                                    required
                                />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                                <input type="email" className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-color focus:border-primary-color block w-full p-2.5" placeholder="name@company.com"
                                    value={user.email}
                                    onChange={(e) => {
                                        setUser({ ...user, email: e.target.value });
                                        e.preventDefault();
                                    }}
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block mb-2 text-sm font-medium text-gray-900">Phone Number</label>
                                <input type="text" placeholder="09X-XXX-XXX" className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-color focus:border-primary-color block w-full p-2.5"
                                    value={user.phoneNumber}
                                    onChange={(e) => {
                                        setUser({ ...user, phoneNumber: e.target.value });
                                        e.preventDefault();
                                    }}
                                    required
                                />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block mb-2 text-sm font-medium text-gray-900">Role</label>
                                <button onClick={() => handleDropdownChange()} className="text-white bg-primary-color hover:bg-primary-hover-color font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" type="button">{role === '' ? 'Selected Role' : role} <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" /></svg>
                                </button>
                                <div className={`z-10 ${!dropdownOpen && 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}>
                                    <ul className="text-sm text-gray-700 dark:text-gray-200">
                                        <li>
                                            <button onClick={() => handleDropdownItemClick('user')} className="block w-full text-left text-green-700 px-4 py-2 hover:bg-green-100">User</button>
                                        </li>
                                        <li>
                                            <button onClick={() => handleDropdownItemClick('provider')} className="block w-full text-left px-4 py-2  text-green-700 hover:bg-green-100">Provider</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                <input type="password" placeholder="••••••••" className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-color focus:border-primary-color block w-full p-2.5"
                                    value={user.password}
                                    onChange={(e) => {
                                        setUser({ ...user, password: e.target.value });
                                        e.preventDefault();
                                    }}
                                    required
                                />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block mb-2 text-sm font-medium text-gray-900">Confirm Password</label>
                                <input type="password" placeholder="••••••••" className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-color focus:border-primary-color block w-full p-2.5"
                                    value={user.confirmPassword}
                                    onChange={(e) => {
                                        setUser({ ...user, confirmPassword: e.target.value });
                                        e.preventDefault();
                                    }}
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded focus:ring-3 focus:ring-primary-300" />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label className="text-gray-500">Remember me</label>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="w-full text-white bg-primary-color hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-hover-color font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign up</button>
                        <p className="text-sm font-light text-gray-500">
                            Already have an account <a href="/login" className="font-medium text-primary-color hover:underline">Sign in</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage;