import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const BaseLayout = () => {
    return (
        <>
            <Navbar />
            <div className="py-36">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default BaseLayout;