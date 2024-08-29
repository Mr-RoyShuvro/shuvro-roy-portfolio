import Card from "react-animated-3d-card";
import { GrMonitor } from "react-icons/gr";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineBusinessCenter } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


export default function Services() {

    return (
        <div className="bg-[#0b1a20]">
            <div data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">
                <div className="text-center max-w-4xl mx-auto pt-20">
                    <h3 className="text-xl md:text-4xl font-bold pb-3 text-white">Cutting-Edge Web Solutions</h3>
                    <p className="text-white px-3 md:px-0">
                        Delivering innovative web solutions, from sleek and responsive design to dynamic development and
                        seamless e-commerce integration, ensuring your online presence is both impactful and user-friendly.
                    </p>
                </div>
            </div>
            <div
                className="App"
                style={{
                    paddingTop: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                }}
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-10 pb-24">
                    {/* Card-1 */}
                    <Card
                        cursorPointer={false}
                        shineStrength={0.75}
                        style={{
                            background: "linear-gradient(to right, #335e70, #1d5266, #173c4b)",
                            width: "300px",
                            height: "400px",
                            cursor: "pointer"
                        }}
                    >
                        <p>.</p>
                        <div
                            style={{
                                height: "100%",
                                display: "flex",
                                justifyContent: "center"
                            }}
                        >
                            <div
                                style={{
                                    fontSize: "26px",
                                    fontFamily: "Fira Code",
                                    color: "white"
                                }}
                            >
                                <div className="flex justify-center pt-10 text-7xl text-[#29ffff]">
                                    <GrMonitor></GrMonitor>
                                </div>
                                <div className="pt-5">
                                    <h3>Web Development</h3>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label
                                style={{
                                    color: "white",
                                    position: "absolute",
                                    bottom: "110px",
                                    left: "8px",
                                    right: "2px",
                                    opacity: 0.8
                                }}
                            >
                                <p className="text-center">
                                    Crafting robust and scalable web applications using the MERN stack, tailored to your business needs.
                                </p>
                            </label>

                        </div>
                    </Card>
                    {/* Card-2 */}
                    <Card
                        cursorPointer={false}
                        shineStrength={0.75}
                        style={{
                            background: "linear-gradient(to right, #335e70, #1d5266, #173c4b)",
                            width: "300px",
                            height: "400px",
                            cursor: "pointer"
                        }}
                    >
                        <p>.</p>
                        <div
                            style={{
                                height: "100%",
                                display: "flex",
                                justifyContent: "center"
                            }}
                        >
                            <div
                                style={{
                                    fontSize: "26px",
                                    fontFamily: "Fira Code",
                                    color: "white"
                                }}
                            >
                                <div className="flex justify-center pt-10 text-7xl text-[#29ffff]">
                                    <IoEyeOutline></IoEyeOutline>
                                </div>
                                <div className="pt-5">
                                    <h3>Web Design</h3>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label
                                style={{
                                    color: "white",
                                    position: "absolute",
                                    bottom: "110px",
                                    left: "8px",
                                    right: "2px",
                                    opacity: 0.8
                                }}
                            >
                                <p className="text-center">
                                    Creating visually appealing and user-friendly designs that enhance user experience and engagement.
                                </p>
                            </label>

                        </div>
                    </Card>
                    {/* Card-3 */}
                    <Card
                        cursorPointer={false}
                        shineStrength={0.75}
                        style={{
                            background: "linear-gradient(to right, #335e70, #1d5266, #173c4b)",
                            width: "300px",
                            height: "400px",
                            cursor: "pointer"
                        }}
                    >
                        <p>.</p>
                        <div
                            style={{
                                height: "100%",
                                display: "flex",
                                justifyContent: "center"
                            }}
                        >
                            <div
                                style={{
                                    fontSize: "26px",
                                    fontFamily: "Fira Code",
                                    color: "white"
                                }}
                            >
                                <div className="flex justify-center pt-10 text-7xl text-[#29ffff]">
                                    <MdOutlineBusinessCenter></MdOutlineBusinessCenter>
                                </div>
                                <div className="pt-5">
                                    <h3>E-Commerce Solutions</h3>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label
                                style={{
                                    color: "white",
                                    position: "absolute",
                                    bottom: "110px",
                                    left: "8px",
                                    right: "2px",
                                    opacity: 0.8
                                }}
                            >
                                <p className="text-center">
                                    Developing e-commerce platforms with product management, shopping carts, secure payments and management.
                                </p>
                            </label>

                        </div>
                    </Card>
                </div>
            </div>
        </div >
    );
}
