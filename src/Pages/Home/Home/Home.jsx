import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import SuccessfulPlayer from "../ExtaSwction/SuccessfulPlayer";
import PopularClasses from "../PopularClasses/PopularClasses";

const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Mr Academy || Home </title>
            </Helmet>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <SuccessfulPlayer></SuccessfulPlayer>
        </div>
    );
};

export default Home;