import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Toaster } from 'react-hot-toast';
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <div className="flex flex-col min-h-screen text-white">
            <Navbar />
            <Toaster />
            <main className="flex-1 flex">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default AuthLayout;