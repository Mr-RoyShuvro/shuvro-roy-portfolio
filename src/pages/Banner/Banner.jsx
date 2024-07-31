import { TypeAnimation } from "react-type-animation";
import Name from "./Name";


const Banner = () => {
    return (
        <div className="h-screen bg-gradient-to-r from-[#0b1a20] via-[#11252c] to-[#102731] py-48 px-10">
            <div>
                <div>
                    <Name></Name>
                </div>
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed once, initially
                        'Creative MERN Stack Developer',
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
                    <button className="btn text-base text-white bg-gradient-to-r from-[#173c4b] via-[#1d617a] to-[#3d738a]  hover:from-[#173a47] hover:via-[#1d5266] hover:to-[#335e70]">Download My Resume</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;