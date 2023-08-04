import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const BaseLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="pt-36 pb-12 flex-1">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default BaseLayout;