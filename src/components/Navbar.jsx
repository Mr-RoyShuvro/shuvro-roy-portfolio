import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"

const Navbar = () => {

    const navLinks =
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/portfolio'>Portfolio</NavLink></li>
            <li><NavLink to='/service'>Services</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
        </>

    return (
        <div className="navbar bg-gradient-to-r from-[#0b1a20] via-[#11252c] to-[#102731]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content text-[#2fc1ff] font-semibold bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl font-bold text-[#27c2c2]">
                    <img className="w-14 h-12" src={logo} alt="" />
                    Shuvro Roy
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[#27c2c2] font-semibold">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Login</a>
            </div>
        </div>
    );
};

export default Navbar;