export default function Footer() {
    return (
        <footer className="bg-main-color">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="/" className="items-center">
                            <img src="/Logo.webp" className="h-22 w-36" alt="Logo" />
                            <h2 className="text-sm font-semibold text-white">© 2023 Deviate Teams</h2>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-10 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-4 text-lg font-semibold text-white uppercase">App</h2>
                            <ul className="text-white font-medium space-y-3">
                                <li>
                                    <a href="/" className="hover:underline">Swap</a>
                                </li>
                                <li>
                                    <a href="/" className="hover:underline">Token</a>
                                </li>
                                <li>
                                    <a href="/" className="hover:underline">NFTs</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 text-lg font-semibold text-white uppercase">Protocol</h2>
                            <ul className="text-white font-medium space-y-3">
                                <li>
                                    <a href="/" className="hover:underline ">Community</a>
                                </li>
                                <li>
                                    <a href="/" className="hover:underline">Governance</a>
                                </li>
                                <li>
                                    <a href="/" className="hover:underline">Developer</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 text-lg font-semibold text-white uppercase">Get Help</h2>
                            <ul className="text-white font-medium space-y-3">
                                <li>
                                    <a href="#" className="hover:underline">Contact us</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Help Center</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}