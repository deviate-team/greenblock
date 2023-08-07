import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Toaster } from 'react-hot-toast';
import { Outlet } from "react-router-dom";

const BaseLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <Toaster />
            <div className="pt-24 pb-12 flex-1">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default BaseLayout;