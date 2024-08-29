import Marquee from "react-fast-marquee";
import { FaBootstrap, FaCss3, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import SkillDetails from "./SkillDetails";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const Skills = () => {
    return (
        <div className="mt-32">
            <div data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-xl md:text-3xl font-bold pb-3 text-white text-center">Skills & Expertise</h3>
                    <p className="text-white pb-10 text-center px-3 md:px-0">
                        Showcasing a diverse set of technical skills and expertise, highlighting proficiency
                        in various programming languages, frameworks, and tools essential for web development and beyond.
                    </p>
                </div>
            </div>
            <SkillDetails></SkillDetails>
            <Marquee className="bg-gray-800 py-16">
                <FaReact className="text-7xl mr-20 text-[#29ffff]"></FaReact>
                <IoLogoJavascript className="text-7xl mr-20 text-[#29ffff]"></IoLogoJavascript>
                <RiTailwindCssFill className="text-7xl mr-20 text-[#29ffff]"></RiTailwindCssFill>
                <SiMongodb className="text-7xl mr-20 text-[#29ffff]"></SiMongodb>
                <FaNodeJs className="text-7xl mr-20 text-[#29ffff]"></FaNodeJs>
                <SiExpress className="text-7xl mr-20 text-[#29ffff]"></SiExpress>
                <FaBootstrap className="text-7xl mr-20 text-[#29ffff]"></FaBootstrap>
                <FaHtml5 className="text-7xl mr-20 text-[#29ffff]"></FaHtml5>
                <FaCss3 className="text-7xl mr-20 text-[#29ffff]"></FaCss3>
                <IoLogoFirebase className="text-7xl mr-20 text-[#29ffff]"></IoLogoFirebase>
                <FaSquareGithub className="text-7xl mr-20 text-[#29ffff]"></FaSquareGithub>
                <VscVscode className="text-7xl mr-20 text-[#29ffff]"></VscVscode>
            </Marquee>
        </div>
    );
};

export default Skills;