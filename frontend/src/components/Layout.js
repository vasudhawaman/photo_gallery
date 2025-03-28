import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

export default function Layout() {
    return (
        <div className="layout">
            <Navbar />
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
}