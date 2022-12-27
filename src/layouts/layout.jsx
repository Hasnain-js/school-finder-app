import React from "react";
import { Outlet } from "react-router";

const Layout = () => {
    return (
        <div>
            <h2>
                Navbar
            </h2>
            <Outlet />
            <h2>
                Footer
            </h2>
        </div>
    );
};
export default Layout;