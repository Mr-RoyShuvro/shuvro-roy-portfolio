import { TypeAnimation } from "react-type-animation";
import Name from "./Name";
import banner from '../../assets/banner1.png'
import { LuDownload } from "react-icons/lu";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";


const Banner = () => {
    return (
        <div className="md:h-screen bg-gradient-to-r from-[#0b1a20] via-[#11252c] to-[#102731]">
            <div className="flex flex-col-reverse md:flex-row">
                <div className="flex-1 py-10 md:py-48 px-10">
                    <div>
                        <Name></Name>
                    </div>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed once, initially
                            'Creative MERN Stack Dev.',
                            1000,
                            'Creative React Specialist',
                            1000,
                            'Creative Software Engineer',
                            1000,

                        ]}
                        speed={50}
                        style={{ fontSize: '2.5em', fontWeight: 'bold', color: '#008B8B' }}
                        repeat={Infinity}
                    />
                    <div className="mt-5">
                        <Link to="https://drive.google.com/file/d/1eS2BXeZfj2g7_kdrdXIW5np7VXx1jfLJ/view?usp=sharing">
                            <button className="btn text-base border-none text-white bg-gradient-to-r from-[#1b495c] via-[#046c92] to-[#1ca4df]  hover:from-[#173a47] hover:via-[#217897] hover:to-[#3e7f9b] ">Download My Resume
                                <LuDownload className="text-2xl text-white"></LuDownload>
                            </button>
                        </Link>
                        <div className="flex gap-5 mt-5 pl-10">
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
                <div className="w-1/2 px-2 ml-28 md:ml-0">
                    <img className="" src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;