import { Outlet,Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
        <Link to="/">
            Home
        </Link>

        <Link to="/about">
            About
        </Link>

        <Outlet />
        </>
    );
}

export default Layout;