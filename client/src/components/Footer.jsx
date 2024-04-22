import React from 'react'
import {Link} from "react-router-dom"

const Footer = () => {
    return (
        <footer className="mt-0 xl:mt-0 mx-auto w-full relative text-center bg-black text-white">
            <div className="px-6 py-8 md:py-14 xl:pt-20 xl:pb-12">
                <h2 className="font-bold text-2xl xl:text-3xl leading-snug">
                    Ready to get your Reservation back? Start your Journey of Exploreing something New.
                </h2>
                <a className="mt-8 xl:mt-12 px-12 py-5 text-lg font-medium leading-tight inline-block bg-blue-800 rounded-full shadow-xl border border-transparent hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-999 focus:ring-sky-500"
                    href="#">Get
                    started</a>
                <div className="mt-14 xl:mt-20">
                    <nav className="flex flex-wrap justify-center text-lg font-medium">
                        <div className="px-5 py-2"><Link to={"/contactus"}>Contact</Link></div>
                        <div className="px-5 py-2"><Link to={"/aboutus"}>About Us</Link></div>
                        <div className="px-5 py-2"><a href="#">Privacy</a></div>
                        <div className="px-5 py-2"><a href="#">Terms</a></div>
                        <div className="px-5 py-2"><a href="#">Twitter</a></div>
                    </nav>
                    <p className="mt-7 text-base">© 2024 Booking, LLC</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
