import { Link } from "react-router-dom";
import "./styles.css";
import img0 from "../../assets/revmax.png"
import img1 from "../../assets/a.png"
import img2 from "../../assets/b.png"
import img3 from "../../assets/c.png"
import img4 from "../../assets/d.png"
import img5 from "../../assets/e.png"
import img6 from "../../assets/f.png"
import img7 from "../../assets/g.png"
import img8 from "../../assets/h.png"
import img9 from "../../assets/i.png"
import img10 from "../../assets/j.png"
import img11 from "../../assets/k.png"
import img12 from "../../assets/l.png"

const Portfolio = () => (
    <div className="bg-[#0b1a20] pt-20">
        <div className="text-center max-w-5xl mx-auto pb-10">
            <h3 className="text-4xl font-bold pb-3 text-white">Showcasing Excellence in Web Development</h3>
            <p className="text-white">Explore a refined portfolio that highlights my expertise in web development. This site features innovative
                projects and a user-centric design, demonstrating my skills in modern technologies. Discover my journey and
                envision how I can contribute to your next project.
            </p>
        </div>
        <div className="pb-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center">
            {/* Portfolio -0 */}
            <div className="card" style={{ backgroundImage: `url('${img0}')` }}>
                <div className="card-content">
                    <h2 className="card-title">RevMax Garage</h2>
                    <p className="card-body h-72">
                        RevMax Garage is a full-featured car mechanic garage website allowing users to book appointments for
                        car repairs and explore various automotive products.
                    </p>
                    <div className="flex justify-around">
                        <Link to="https://revmax-garage.web.app/">
                            <button className="btn text-base border-none text-white bg-gradient-to-r from-[#205970] via-[#0994c7] to-[#42b1e0]  hover:from-[#173a47] hover:via-[#217897] hover:to-[#3e7f9b] w-20">Live</button>
                        </Link>
                        <Link to="https://github.com/Mr-RoyShuvro/revmax-garage-client">
                            <button className="btn text-base text-white bg-gradient-to-r from-[#205970] via-[#0994c7] to-[#42b1e0]  hover:from-[#173a47] hover:via-[#217897] hover:to-[#3e7f9b] w-20">Github</button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Portfolio -1 */}
            <div className="card" style={{ backgroundImage: `url('${img1}')` }}>
                <div className="card-content">
                    <h2 className="card-title">Techtron</h2>
                    <p className="card-body h-72">
                        Techtron is a comprehensive technology and electronics e-commerce website
                        designed to provide a seamless shopping experience for users.
                    </p>
                    <div className="flex justify-around">
                        <Link to="https://techtron-shop.web.app/">
                            <button className="btn text-base border-none text-white bg-gradient-to-r from-[#205970] via-[#0994c7] to-[#42b1e0]  hover:from-[#173a47] hover:via-[#217897] hover:to-[#3e7f9b] w-20">Live</button>
                        </Link>
                        <Link to="https://github.com/Mr-RoyShuvro/techtron-shop-client-project10">
                            <button className="btn text-base text-white bg-gradient-to-r from-[#205970] via-[#0994c7] to-[#42b1e0]  hover:from-[#173a47] hover:via-[#217897] hover:to-[#3e7f9b] w-20">Github</button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Portfolio -2 */}
            <div className="card" style={{ backgroundImage: `url('${img2}')` }}>
                <div className="card-content">
                    <h2 className="card-title">PartyMaker</h2>
                    <p className="card-body h-72">
                        PartyMaker is an intuitive event planning platform designed to streamline organizing
                        and managing a wide variety of celebrations and gatherings.

                    </p>
                    <div className="flex justify-around">
                        <Link to="https://react-event-management-pro9.web.app/">
                            <button className="btn text-base border-none text-white bg-gradient-to-r from-[#205970] via-[#0994c7] to-[#42b1e0]  hover:from-[#173a47] hover:via-[#217897] hover:to-[#3e7f9b] w-20">Live</button>
                        </Link>
                        <Link to="https://github.com/Mr-RoyShuvro/react-event-management-project9">
                            <button className="btn text-base border-none text-white bg-gradient-to-r from-[#205970] via-[#0994c7] to-[#42b1e0]  hover:from-[#173a47] hover:via-[#217897] hover:to-[#3e7f9b] w-20">Github</button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Portfolio -3 */}
            <div className="card" style={{ backgroundImage: `url('${img3}')` }}>
                <div className="card-content">
                    <h2 className="card-title">The Dragon News</h2>
                    <p className="card-body h-72">
                        The Dragon News is a modern news platform featuring diverse news categories to keep users
                        continuously informed and engaged every single day, around the clock.
                    </p>
                    <div className="flex justify-around">
                        <Link to="https://react-dragon-news-auth-f8c82.web.app/">
                            <button className="btn text-base border-none text-white bg-gradient-to-r from-[#205970] via-[#0994c7] to-[#42b1e0]  hover:from-[#173a47] hover:via-[#217897] hover:to-[#3e7f9b] w-20">Live</button>
                        </Link>
                        <Link to="https://github.com/Mr-RoyShuvro/react-dragon-news-auth">
                            <button className="btn text-base border-none text-white bg-gradient-to-r from-[#205970] via-[#0994c7] to-[#42b1e0]  hover:from-[#173a47] hover:via-[#217897] hover:to-[#3e7f9b] w-20">Github</button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Portfolio -4 */}
            <div className="card" style={{ backgroundImage: `url('${img4}')` }}>
                <div className="card-content">
                    <h2 className="card-title">Donation Campaign</h2>
                    <p className="card-body h-72">
                        Donation Campaign is a dedicated platform for facilitating various donations, allowing
                        users to easily contribute, track their impact, and make a difference effectively.
                    </p>
                    <div className="flex justify-around">
                        <Link to="https://664afa59abb34a71a0c6e771--lambent-eclair-407921.netlify.app/">
                            <button className="btn text-base border-none text-white bg-gradient-to-r from-[#205970] via-[#0994c7] to-[#42b1e0]  hover:from-[#173a47] hover:via-[#217897] hover:to-[#3e7f9b] w-20">Live</button>
                        </Link>
                        <Link to="https://github.com/Mr-RoyShuvro/react-donation-campaign-project8">
                            <button className="btn text-base border-none text-white bg-gradient-to-r from-[#205970] via-[#0994c7] to-[#42b1e0]  hover:from-[#173a47] hover:via-[#217897] hover:to-[#3e7f9b] w-20">Github</button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Portfolio -5 */}
            <div className="card" style={{ backgroundImage: `url('${img5}')` }}>
                <div className="card-content">
                    <h2 className="card-title">Career Hub</h2>
                    <p className="card-body h-72">
                        Career Hub is a comprehensive job portal showcasing a wide range of opportunities from top
                        companies, designed to connect job seekers with their positions.
                    </p>
                    <div className="flex justify-around">
                        <Link to="https://whispering-liquid.surge.sh/">
                            <button className="btn text-base border-none text-white bg-gradient-to-r from-[#205970] via-[#0994c7] to-[#42b1e0]  hover:from-[#173a47] hover:via-[#217897] hover:to-[#3e7f9b] w-20">Live</button>
                        </Link>
                        <Link to="https://github.com/Mr-RoyShuvro/react-career-hub-project">
                            <button className="btn text-base border-none text-white bg-gradient-to-r from-[#205970] via-[#0994c7] to-[#42b1e0]  hover:from-[#173a47] hover:via-[#217897] hover:to-[#3e7f9b] w-20">Github</button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Portfolio -6 */}
            <div className="card" style={{ backgroundImage: `url('${img6}` }}>
                <div className="card-content">
                    <h2 className="card-title">Course Registration</h2>
                    <p className="card-body h-72">
                        Course Registration is a streamlined platform that allows users to select from nine courses
                        with specific credits, tracking total credits, cost, and remaining credits.
                    </p>
                    <div className="flex justify-around">
                        <Link to="https://giant-breakfast.surge.sh/">
                            <button className="btn text-base border-none text-white bg-gradient-to-r from-[#205970] via-[#0994c7] to-[#42b1e0]  hover:from-[#173a47] hover:via-[#217897] hover:to-[#3e7f9b] w-20">Live</button>
                        </Link>
                        <Link to="https://github.com/Mr-RoyShuvro/react-course-registration-pro7">
                            <button className="btn text-base border-none text-white bg-gradient-to-r from-[#205970] via-[#0994c7] to-[#42b1e0]  hover:from-[#173a47] hover:via-[#217897] hover:to-[#3e7f9b] w-20">Github</button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Portfolio -7 */}
            <div className="card" style={{ backgroundImage: `url('${img7}` }}>
                <div className="card-content">
                    <h2 className="card-title">PH Tube</h2>
                    <p className="card-body h-72">
                        PH Tube is a dynamic platform featuring Music, Comedy, and Drawing sections. By clicking
                        Sort by View, users can organize videos based on the most views.
                    </p>
                    <div className="flex justify-around">
                        <Link to="https://659901f019fbf1a6f8432085--boisterous-cat-1f73e3.netlify.app/">
                            <button className="btn text-base border-none text-white bg-gradient-to-r from-[#205970] via-[#0994c7] to-[#42b1e0]  hover:from-[#173a47] hover:via-[#217897] hover:to-[#3e7f9b] w-20">Live</button>
                        </Link>
                        <Link to="https://github.com/Mr-RoyShuvro/gamer-Zone-website">
                            <button className="btn text-base border-none text-white bg-gradient-to-r from-[#205970] via-[#0994c7] to-[#42b1e0]  hover:from-[#173a47] hover:via-[#217897] hover:to-[#3e7f9b] w-20">Github</button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Portfolio -8 */}
            <div className="card" style={{ backgroundImage: `url('${img8}` }}>
                <div className="card-content">
                    <h2 className="card-title">Knowledge Cafe</h2>
                    <p className="card-body h-72">
                        Knowledge Cafe is a versatile platform where users can bookmark any book and mark it as
                        read, helping to organize and track their reading progress efficiently.
                    </p>
                    <div className="flex justify-around">
                        <Link to="https://absorbing-purpose.surge.sh/">
                            <button className="btn text-base border-none text-white bg-gradient-to-r from-[#205970] via-[#0994c7] to-[#42b1e0]  hover:from-[#173a47] hover:via-[#217897] hover:to-[#3e7f9b] w-20">Live</button>
                        </Link>
                        <Link to="https://github.com/Mr-RoyShuvro/react-knowledge-cafe">
                            <button className="btn text-base border-none text-white bg-gradient-to-r from-[#205970] via-[#0994c7] to-[#42b1e0]  hover:from-[#173a47] hover:via-[#217897] hover:to-[#3e7f9b] w-20">Github</button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Portfolio -9 */}
            <div className="card" style={{ backgroundImage: `url('${img9}` }}>
                <div className="card-content">
                    <h2 className="card-title">Gamer Zone</h2>
                    <p className="card-body h-72">
                        Gamer Zone is a dynamic website featuring a wide variety of games, designed with HTML
                        and CSS to offer an gaming experience for all users.
                    </p>
                    <div className="flex justify-around">
                        <Link to="https://mr-royshuvro.github.io/gamer-Zone-website/">
                            <button className="btn text-base border-none text-white bg-gradient-to-r from-[#205970] via-[#0994c7] to-[#42b1e0]  hover:from-[#173a47] hover:via-[#217897] hover:to-[#3e7f9b] w-20">Live</button>
                        </Link>
                        <Link to="https://github.com/Mr-RoyShuvro/gamer-Zone-website">
                            <button className="btn text-base border-none text-white bg-gradient-to-r from-[#205970] via-[#0994c7] to-[#42b1e0]  hover:from-[#173a47] hover:via-[#217897] hover:to-[#3e7f9b] w-20">Github</button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Portfolio -10 */}
            <div className="card" style={{ backgroundImage: `url('${img10}` }}>
                <div className="card-content">
                    <h2 className="card-title">Flower Shop</h2>
                    <p className="card-body h-72">
                        FlowerShop is a beautifully designed website showcasing various categories of flowers,
                        created using HTML and CSS to provide a visually appealing.
                    </p>
                    <div className="flex justify-around">
                        <Link to="https://mr-royshuvro.github.io/flower-shop-website/">
                            <button className="btn text-base border-none text-white bg-gradient-to-r from-[#205970] via-[#0994c7] to-[#42b1e0]  hover:from-[#173a47] hover:via-[#217897] hover:to-[#3e7f9b] w-20">Live</button>
                        </Link>
                        <Link to="https://github.com/Mr-RoyShuvro/flower-shop-website">
                            <button className="btn text-base border-none text-white bg-gradient-to-r from-[#205970] via-[#0994c7] to-[#42b1e0]  hover:from-[#173a47] hover:via-[#217897] hover:to-[#3e7f9b] w-20">Github</button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Portfolio -11 */}
            <div className="card" style={{ backgroundImage: `url('${img11}` }}>
                <div className="card-content">
                    <h2 className="card-title">Fruit Burst</h2>
                    <p className="card-body h-72">
                        Fruit Burst is an elegant website featuring diverse fruit categories, built with HTML
                        and CSS to deliver a visually attractive and easy-to-navigate experience.
                    </p>
                    <div className="flex justify-around">
                        <Link to="https://mr-royshuvro.github.io/fruit-burst-assignment3/">
                            <button className="btn text-base border-none text-white bg-gradient-to-r from-[#205970] via-[#0994c7] to-[#42b1e0]  hover:from-[#173a47] hover:via-[#217897] hover:to-[#3e7f9b] w-20">Live</button>
                        </Link>
                        <Link to="https://github.com/Mr-RoyShuvro/fruit-burst-assignment3">
                            <button className="btn text-base border-none text-white bg-gradient-to-r from-[#205970] via-[#0994c7] to-[#42b1e0]  hover:from-[#173a47] hover:via-[#217897] hover:to-[#3e7f9b] w-20">Github</button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Portfolio -12 */}
            <div className="card" style={{ backgroundImage: `url('${img12}` }}>
                <div className="card-content">
                    <h2 className="card-title">Summer Sale</h2>
                    <p className="card-body h-72">
                        Summer Sale is a vibrant website highlighting seasonal deals, created with
                        HTML, CSS, and JavaScript engaging and user-friendly shopping experience.
                    </p>
                    <div className="flex justify-around">
                        <Link to="https://656585a947d92e2e0285a19e--storied-haupia-37be14.netlify.app/">
                            <button className="btn text-base border-none text-white bg-gradient-to-r from-[#205970] via-[#0994c7] to-[#42b1e0]  hover:from-[#173a47] hover:via-[#217897] hover:to-[#3e7f9b] w-20">Live</button>
                        </Link>
                        <Link to="https://github.com/Programming-Hero-Web-Course4/b8a5-summer-sale-Mr-RoyShuvro">
                            <button className="btn text-base border-none text-white bg-gradient-to-r from-[#205970] via-[#0994c7] to-[#42b1e0]  hover:from-[#173a47] hover:via-[#217897] hover:to-[#3e7f9b] w-20">Github</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Portfolio;
