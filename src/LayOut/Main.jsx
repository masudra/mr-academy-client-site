import { Outlet } from "react-router-dom";
import Footer from "../Pages/Sheard/Footer/Footer";
import Navbar from "../Pages/Sheard/Navbar/Navbar";
import useAuth from "../Pages/Hook/useAuth";
// const{loading} = useAuth();

// if(loading){
//   return <h1>loadingggg</h1>
// }

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;