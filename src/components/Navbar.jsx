import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "./logo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // const scrollToSection = (id) => {
    //     const el = document.getElementById(id);
    //     if (el) {
    //         el.scrollIntoView({ behavior: "smooth" });
    //     }
    // }; we don't use this because in another page (remains Home page) we can't use it.  


    const navigate = useNavigate();

    const goToSection = (id) => {
        navigate("/"); // This is for go to home first.

        setTimeout(() => {
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        }, 100); // wait for page to load.
    };

    return (
        <nav className="flex justify-between px-1 py-4 bg-[#ddd9d979] shadow-md relative">

            <div className="text-xl font-bold">
                <img src={logo} alt="logo" className="h-10 w-auto" />
            </div>

            <div
                className="md:hidden text-2xl cursor-pointer mx-3"
                onClick={() => setIsOpen(!isOpen)}
            >
                ☰
            </div>

            <ul
                className={`nav1
        fixed top-20 right-0 w-56 bg-[#ddd9d98a] md:bg-transparent shadow-lg flex flex-col items-center gap-3 py-6
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}

        md:static md:flex md:flex-row md:gap-8 md:translate-x-0 md:shadow-none md:w-auto md:py-0
      `}
            >
                <li><Link className="text-[19px]" to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                <li><Link className="text-[19px]" to="#Products" onClick={() => { goToSection("Products"); setIsOpen(false); }}>Products</Link></li>
                <li><Link className="text-[19px]" to="#Service" onClick={() => { goToSection("Service"); setIsOpen(false) }}>Why us</Link></li>
                <li><Link className="text-[19px]" to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
            </ul>

        </nav>
    );
};

export default Navbar;