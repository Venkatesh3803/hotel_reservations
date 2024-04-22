import React, { useContext } from 'react'
import Navber from '../components/Navber'
import Footer from '../components/Footer'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../ContextApi/AuthContext';

function Layout() {
    return (
        <div>
            <Navber />
            <Outlet />
            <Footer />
        </div>
    );
}

function RequireAuth() {
    const { currUser } = useContext(AuthContext)
    if (!currUser) return <Navigate to="/login" />;
    else {
        return (
            <div >
                <Navber />
                <Outlet />
                <Footer />
            </div>
        );
    }
}



export { Layout, RequireAuth };
