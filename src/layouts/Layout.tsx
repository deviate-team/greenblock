import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
    return (
        <>
            <Navbar />
            {props.children}
            <Footer />
        </>
    )
}