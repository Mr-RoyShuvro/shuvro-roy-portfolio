import Name from "./Name";
import banner from '../../assets/banner1.png'
import { LuDownload } from "react-icons/lu";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import SkillName from "./SkillName";
// import ball from "../../assets/ball.gif"


const Banner = () => {
    return (
        <div className="h-screen bg-gradient-to-r from-[#0b1a20] via-[#11252c] to-[#102731]">
            <div className="flex flex-col-reverse md:flex-row relative">
                {/* <img className="absolute top-0 left-0 p-0 m-0 w-48 h-48" src={ball} alt="" /> */}
                <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" className="flex-1 py-10 md:py-48 px-10">
                    <div className="pb-5">
                        <Name></Name>
                    </div>
                    <SkillName></SkillName>
                    <div className="mt-14 flex flex-col justify-center md:justify-start items-center md:items-start">
                        <Link to="https://drive.google.com/file/d/12Vigj4VvOhHZ7D8jb27R8e29TYBQpaa0/view?usp=sharing">
                            <button className="btn text-sm md:text-base border-none text-white bg-gradient-to-r from-[#1b495c] via-[#046c92] to-[#1ca4df]  hover:from-[#173a47] hover:via-[#217897] hover:to-[#3e7f9b] ">Download My Resume
                                <LuDownload className="text-xl md:text-2xl text-white"></LuDownload>
                            </button>
                        </Link>
                        <div className="flex gap-5 mt-5 pl-0 md:pl-10">
                            <Link to="https://www.facebook.com/shuvro.roy.315">
                                <FaFacebookSquare className="w-5 h-5 bg-w text-[#1ca4df]"></FaFacebookSquare>
                            </Link>
                            <Link to="https://www.instagram.com/mrroy_shuvo/">
                                <FaInstagram className="w-5 h-5 bg-w text-[#1ca4df]"></FaInstagram>
                            </Link>
                            <Link to="https://www.linkedin.com/in/shuvro-roy-1bba66308/">
                                <FaLinkedin className="w-5 h-5 bg-w text-[#1ca4df]"></FaLinkedin>
                            </Link>
                            <Link to="https://github.com/Mr-RoyShuvro">
                                <VscGithub className="w-5 h-5 bg-w text-[#1ca4df]"></VscGithub>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-3/4 md:w-1/2 px-2 mx-auto">
                    <img className="" src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;