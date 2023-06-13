import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import SuccessfulPlayer from "../ExtaSwction/SuccessfulPlayer";

const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Mr Academy || Home </title>
            </Helmet>
            <Banner></Banner>
            <SuccessfulPlayer></SuccessfulPlayer>
        </div>
    );
};

export default Home;