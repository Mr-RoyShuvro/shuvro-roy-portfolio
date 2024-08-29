import { GrLocation } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { LuDownload, LuPhone } from "react-icons/lu";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Contact = () => {
    return (
        <div className="bg-[#0b1a20] pt-20 pb-0 md:pb-20">
            <div data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-xl md:text-3xl font-bold pb-3 text-white text-center">Contact Information</h3>
                    <p className="text-white pb-10 text-center px-3 md:px-0">
                        Connect with me for any inquiries, collaborations, or just to say hello. Use the provided contact
                        information or fill out the message form below, and I’ll get back to you as soon as possible. Looking
                        forward to connecting!
                    </p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row max-w-6xl mx-auto'>
                <div className="md:w-1/2 bg-gradient-to-r from-[#0f232c] via-[#032c3b] to-[#044561]">
                    <div className="px-20 pt-20">
                        <h3 className="text-2xl md:text-3xl font-bold pb-3 text-gray-300">Get in Touch</h3>
                        <p className="text-gray-300">
                            Have a question or want to collaborate? Send me a message, and I will
                            get back to you as soon as possible. Looking forward to connecting!
                        </p>
                    </div>
                    <div className="hero h-[600px]">
                        {/* <div className="hero-overlay bg-opacity-20"></div> */}
                        <div className="hero-content text-neutral-content text-center">
                            <div className="shrink-0 ">
                                <form className="card-body gap-10">
                                    <div className="form-control">
                                        {/* <label className="label">
                                            <span className="label-text text-white text-base font-semibold"></span>
                                        </label> */}
                                        <input type="text" name="name" placeholder='Name' className="input bg-transparent text-white font-semibold text-lg" required />
                                        <hr />
                                    </div>
                                    <div className="form-control">
                                        <input type="email" name="email" placeholder="Email" className="input bg-transparent text-white font-semibold text-lg" required />
                                        <hr />
                                    </div>
                                    <div className="form-control">
                                        <input type="text" name="subject" placeholder="Subject" className="input bg-transparent text-white font-semibold text-lg" required />
                                        <hr />
                                    </div>
                                    <div className="form-control">
                                        <textarea type="text" name="message" placeholder="Message" className="input h-24 bg-transparent text-white font-semibold text-lg" required></textarea>
                                        {/* <input   /> */}
                                        <hr />
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn border-none text-base text-white bg-gradient-to-r from-[#1b495c] via-[#046c92] to-[#1ca4df]  hover:from-[#173a47] hover:via-[#217897] hover:to-[#3e7f9b] ">Send</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 bg-gradient-to-r from-[#044561] via-[#032c3b] to-[#0f232c] px-20 py-20 space-y-14 md:border-l-2 md:border-[#3dc5ff]">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold pb-3 text-gray-300">Leave A Message</h3>
                        <p className="text-gray-300 pb-10">For inquiries, collaborations, or professional connections, feel free to reach out.
                            I am always available to discuss new opportunities and partnerships.</p>
                    </div>
                    <div className="flex gap-5 items-center">
                        <figure className="bg-gradient-to-r from-[#1b495c] via-[#046c92] to-[#1ca4df] rounded-full p-4 flex justify-center items-center">
                            <LuPhone className="w-8 h-8 text-white"></LuPhone>
                        </figure>
                        <div>
                            <h2 className="text-white text-xl font-semibold">Phone</h2>
                            <p className="text-gray-200 pt-3">+8801785765702</p>
                        </div>
                    </div>
                    <div className="flex gap-5 items-center">
                        <figure className="bg-gradient-to-r from-[#1b495c] via-[#046c92] to-[#1ca4df] rounded-full p-4 flex justify-center items-center">
                            <HiOutlineMail className="w-8 h-8 text-white" />
                        </figure>
                        <div>
                            <h2 className="text-white text-xl font-semibold">Email</h2>
                            <p className="text-gray-200 pt-3">shuvroroyshuvo@gmail.com</p>
                        </div>

                    </div>
                    <div className="flex gap-5 items-center pb-9">
                        <figure className="bg-gradient-to-r from-[#1b495c] via-[#046c92] to-[#1ca4df] rounded-full p-4 flex justify-center items-center">
                            <GrLocation className="w-8 h-8 text-white "></GrLocation>
                        </figure>
                        <div>
                            <h2 className="text-white text-xl font-semibold">Location</h2>
                            <p className="text-gray-200 pt-3">27/3 jalalabad, Amberkhana, Sylhet</p>
                        </div>
                    </div>
                    {/* btn */}
                    <div className="form-control mt-6">
                        <Link to="https://drive.google.com/file/d/1kOWHTdjqUZHx2swd1pi6zbbFY50CGvT2/view?usp=sharing">
                            <button className="btn border-none text-sm md:text-base text-white bg-gradient-to-r from-[#1b495c] via-[#046c92] to-[#1ca4df]  hover:from-[#173a47] hover:via-[#217897] hover:to-[#3e7f9b] ">Download My Resume
                                <LuDownload className="text-2xl md:text-2xl text-white ml-0 md:ml-3"></LuDownload>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;