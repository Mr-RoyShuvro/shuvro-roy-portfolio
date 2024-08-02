import { TypeAnimation } from "react-type-animation";
import Name from "./Name";
import banner from '../../assets/banner1.png'


const Banner = () => {
    return (
        <div className="h-screen bg-gradient-to-r from-[#0b1a20] via-[#11252c] to-[#102731]">
            <div className="flex">
                <div className="flex-1 py-48 px-10">
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
                        <button className="btn text-base text-white bg-gradient-to-r from-[#1b495c] via-[#046c92] to-[#1ca4df]  hover:from-[#173a47] hover:via-[#217897] hover:to-[#3e7f9b] ">Download My Resume</button>
                    </div>
                </div>
                <div className="w-1/2 px-2">
                    <img className="" src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;