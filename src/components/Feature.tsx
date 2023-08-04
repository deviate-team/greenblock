const Feature = () => {
    return (
        <section className=" bg-white text-primary-color mt-0 py-0 item-center mb-28">
            <div className="relative overflow-hidden w-screen max-h-96 bg-fixed" >
                <img
                    src="/chiangmaiblue.jpg"
                    alt="Hero Image"
                    className="w-full h-full bg-opacity-5"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10"></div>

            </div>
            <div className="container mx-auto p-4 my-8 text-center font-IBM">
                <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Green Block</span></h1>
                <p>Welcome To GreenBlock, the best website that make your trip green !</p>
                <button type="submit" className="w-auto text-white bg-primary-color hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-hover-color font-medium rounded-lg text-sm my-5 px-10 py-2.5 text-center">Start Now</button>
            </div>

            <div className="container  mx-auto md:px-6">
                <section className="mb-32 text-center md:text-left">
                    <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                        <div className="flex flex-wrap items-center">
                            <div
                                className="block w-full shrink-0 grow-0 basis-auto md:w-2/5 lg:flex">
                                <img
                                    src="/plant.jpg"
                                    alt="Logo"
                                    className="w-full rounded-t-lg md:rounded-tr-none md:rounded-bl-lg" />
                            </div>
                            <div className="w-full shrink-0 grow-0 basis-auto md:w-3/5">
                                <div className="px-6 py-12 md:px-12">
                                    <h5 className="mb-2 text-xl font-md tracking-tight text-primary-color dark:text-white">Now we are saving</h5>
                                    <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">232,132 kgCO2</span></h1>
                                    <p className="mb-6 pb-2 text-neutral-500 dark:text-neutral-300">
                                        Travel with purpose! Your donations reduce carbon and safeguard the beauty of our destinations for future explorers. Join us in creating a greener, more sustainable world.
                                    </p>
                                    <button
                                        type="button"
                                        className="inline-block rounded-full px-8 py-3 font-semibold text-white bg-primary-color hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-hover-color hover:shadow-lg">
                                        Donate Here
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="container mx-auto md:px-6 mt-20 ">
                <h2 className="my-3 text-4xl font-semibold text-center">What can we help you ?</h2>
                <div className="container mx-auto my-10 grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-2 font-BAI">
                    <div className="flex flex-col items-center p-8 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                        <img src="/person.svg" className="h-16 w-16 items-center mr-1 bg-primary-color" alt="Logo" />
                        <h3 className="my-3 text-3xl font-semibold">For Individual</h3>
                        <div className="space-y-1">
                            <li className="mb-0 flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                    stroke="currentColor" className="mr-3 h-5 w-5 text-primary-color dark:text-primary-400">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                                Online transportation booking
                            </li>
                            <li className="mb-4 flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                    stroke="currentColor" className="mr-3 h-5 w-5 text-primary-color dark:text-primary-400">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                                Low carbon traveling
                            </li>
                            <li className="mb-4 flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                    stroke="currentColor" className="mr-3 h-5 w-5 text-primary-color dark:text-primary-400">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                                Green Tourist Certificate
                            </li>
                            <li className="mb-4 flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                    stroke="currentColor" className="mr-3 h-5 w-5 text-primary-color dark:text-primary-400">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                                Special discount & more
                            </li>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                        <img src="/business.svg" className="h-16 w-16 items-center mr-1 bg-primary-color p-1" alt="Logo" />
                        <h3 className="my-3 text-3xl font-semibold">For Business</h3>
                        <div className="space-y-1 leadi">
                            <li className="mb-0 flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                    stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                                More customers & promotion
                            </li>
                            <li className="mb-4 flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                    stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                                Free Carbon Credits
                            </li>
                            <li className="mb-4 flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                    stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                                Carbon credit retails trading
                            </li>
                            <li className="mb-4 flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                    stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                                Offering & investing on carbon project
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feature