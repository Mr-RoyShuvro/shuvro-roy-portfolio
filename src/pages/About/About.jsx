import Skills from "./Skills";


const About = () => {
    return (
        <div className=" bg-[#0b1a20] py-20">
            <div className="max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold pb-3 text-white text-center">Academic Credentials</h3>
                <p className="text-white pb-10 text-center">
                    My academic journey has equipped me with a solid foundation in Computer Science and Engineering,
                    complemented by a strong background in secondary and higher secondary education.
                </p>
            </div>
            <div className="grid grid-cols-2 gap-10 max-w-6xl mx-auto">
                <div className="col-start-1 bg-[#000e0e] p-5 shadow-2xl border-r-8 border-[#29ffff] rounded-xl">
                    <div className="flex justify-between">
                        <h3 className="text-xl font-semibold text-white">Metropolitan University, Sylhet</h3>
                        <p>2018 - 2022</p>
                    </div>
                    <h4 className="text-base text-white font-medium">Bachelor of Science in Computer Science & Engineering</h4>
                    <p className="text-white">CGPA: 3.41 out of 4</p>
                </div>
                <div className="col-start-2 col-span-2">
                </div>
                <div className="col-start-2  bg-[#000e0e] p-5 shadow-2xl border-l-8 border-[#29ffff] rounded-xl">
                    <div className="flex justify-between">
                        <h3 className="text-xl font-semibold text-white">Sylhet Commerce College</h3>
                        <p>2015 - 2016</p>
                    </div>
                    <h4 className="text-base text-white font-medium">Higher Secondary School Certificate</h4>
                    <p className="text-white"> GPA:4.25 out of 5</p>
                </div>
                <div className="col-end-1 col-start-1 bg-[#000e0e] p-5 shadow-2xl border-r-8 border-[#29ffff] rounded-xl">
                    <div className="flex justify-between">
                        <h3 className="text-xl font-semibold text-white">Alhaj Abdul Moktadir Academy</h3>
                        <p>2013 - 2014</p>
                    </div>
                    <h4 className="text-base text-white font-medium">Secondary School Certificate</h4>
                    <p className="text-white">GPA: 4.78 out of 5</p>
                </div>
            </div>

            <Skills></Skills>
        </div>
    );
};

export default About;