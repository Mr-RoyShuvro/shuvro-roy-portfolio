import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { LuPhone } from "react-icons/lu";
import { VscGithub } from "react-icons/vsc";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"


const Footer = () => {
    return (
        <div>
            <footer className="footer bg-gradient-to-r from-[#040b0e] via-[#020e13] to-[#04141b] text-base-content p-10">
                <nav>
                    <h6 className=" font-bold text-2xl text-[#29ffff]">Career Objective</h6>
                    <p className="max-w-sm text-gray-400 mt-5 px-8">Dedicated to leveraging my skills in web development to create
                        innovative and user-friendly solutions. Seeking opportunities to contribute to dynamic and
                        forward-thinking teams.
                    </p>
                </nav>
                <nav className="space-y-3">
                    <h6 className="footer-title text-[#29ffff]">Services</h6>
                    <a className="link text-gray-400 link-hover">Web Develope</a>
                    <a className="link text-gray-400 link-hover">Web Design</a>
                    <a className="link text-gray-400 link-hover">Fronted Design</a>
                    <a className="link text-gray-400 link-hover">MERN Stack Project</a>
                </nav>
                <nav className="space-y-3">
                    <h6 className="footer-title text-[#29ffff]">Company</h6>
                    <Link to="/about" className="link text-gray-400 link-hover">About</Link>
                    <Link to="/portfolio" className="link text-gray-400 link-hover">Portfolio</Link>
                    <Link to="/service" className="link text-gray-400 link-hover">Service</Link>
                    <Link to="/contact" className="link text-gray-400 link-hover">Contact</Link>
                </nav>
                <nav className="space-y-3">
                    <h6 className="footer-title text-[#29ffff]">Follow me</h6>
                    <div className="flex gap-5">
                        <Link to="https://www.facebook.com/shuvro.roy.315">
                            <FaFacebookSquare className="w-8 h-8 bg-w text-[#29ffff]"></FaFacebookSquare>
                        </Link>
                        <Link to="https://www.instagram.com/mrroy_shuvo/">
                            <FaInstagram className="w-8 h-8 bg-w text-[#29ffff]"></FaInstagram>
                        </Link>
                        <Link to="https://www.linkedin.com/in/shuvro-roy-1bba66308/">
                            <FaLinkedin className="w-8 h-8 bg-w text-[#29ffff]"></FaLinkedin>
                        </Link>
                        <Link to="https://github.com/Mr-RoyShuvro">
                            <VscGithub className="w-8 h-8 bg-w text-[#29ffff]"></VscGithub>
                        </Link>
                    </div>
                    <div className="flex gap-2">
                        <GrLocation className="w-5 h-5 text-[#29ffff]"></GrLocation>
                        <p className="text-gray-300">27/3 jalalabad, Amberkhan, Sylhet</p>
                    </div>
                    <Link className="flex gap-2">
                        <HiOutlineMail className="w-5 h-5 text-[#29ffff]"></HiOutlineMail>
                        <p className="text-gray-300">shuvroroyshuvo@gmail.com</p>
                    </Link>
                    <Link className="flex gap-2">
                        <LuPhone className="w-5 h-5 text-[#29ffff]"></LuPhone>
                        <p className="text-gray-300">+8801785765702</p>
                    </Link>
                </nav>
            </footer>
            <footer className="footer bg-gradient-to-r from-[#040b0e] via-[#020e13] to-[#04141b] text-base-content border-t border-[#1c5974] px-10 py-4">
                <div className="grid grid-cols-2 md:grid-cols-3">
                    <img className="w-14 h-12 md:col-span-2" src={logo} alt="" />
                    <p className="text-sm text-gray-400 pt-5">
                        © 2024 Shuvro Roy. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;