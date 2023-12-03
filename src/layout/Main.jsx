import { Outlet } from "react-router-dom";
import Navbar from "../Shard/Navbar/Navbar";
import Footer from "../Shard/Footer/Footer";


const Main = () => {
    const noHeader = location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <div>
            {noHeader || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeader || <Footer></Footer>}
        </div>
    );
};

export default Main;