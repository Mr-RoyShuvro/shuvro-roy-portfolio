import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import Services from "../Portfolio/Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Portfolio></Portfolio>
            <About></About>
            <Services></Services>
            <Contact></Contact>
        </div>
    );
};

export default Home;