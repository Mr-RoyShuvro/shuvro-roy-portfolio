import { TypeAnimation } from 'react-type-animation';

const SkillName = () => {
    return (
        <TypeAnimation
            sequence={[
                'Creative MERN Stack Developer',
                1000,
                'Creative React Specialist',
                1000,
                'Creative Software Engineer',
                1000,
            ]}
            speed={50}
            className="text-lg md:text-3xl lg:text-4xl font-bold text-[#008B8B]"
            repeat={Infinity}
        />
    );
};

export default SkillName;
