import Navbar from "../../components/Navbar";
import Banner from "../Banner/Banner";
import Portfolio from "../Portfolio/Portfolio";
import PortfolioCard from "../Portfolio/PortfolioCard";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Portfolio></Portfolio>
            <PortfolioCard></PortfolioCard>
        </div>
    );
};

export default Home;