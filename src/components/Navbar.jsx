import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png"

const Navbar = () => {

    const navLinks =
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/portfolio'>Portfolio</NavLink></li>
            <li><NavLink to='/service'>Services</NavLink></li>
        </>

    return (
        <div className="bg-gradient-to-r from-[#0b1a20] via-[#11252c] to-[#102731]">
        <div className="navbar max-w-7xl mx-auto">
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
                <Link>
                    <a className="btn btn-ghost text-md md:text-2xl font-bold text-[#27c2c2]">
                        <img className="w-8 md:w-14 h-6 md:h-12 mr-3" src={logo} alt="" />
                        Shuvro Roy
                    </a>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[#27c2c2] font-semibold">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/contact'>
                    <button className="btn border-none text-base text-white bg-gradient-to-r from-[#1b495c] via-[#046c92] to-[#1ca4df]  hover:from-[#173a47] hover:via-[#217897] hover:to-[#3e7f9b]">
                        Contact
                    </button>
                </Link>
            </div>
        </div>
        </div>
    );
};

export default Navbar;