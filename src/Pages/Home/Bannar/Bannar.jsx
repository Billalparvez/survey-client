
import Marquee from "react-fast-marquee";
import Container from "../../../Shard/Container";
import './bannar.css'
const Bannar = () => {
    return (
        <div className="hero min-h-screen images_1" >
            <div className="hero-overlay bg-opacity-60"></div>
            <Container>
                <div className="text-white text-center space-y-3 ">
                    <h1 data-aos="flip-down" className="text-3xl font-bold ">Well Come to  My <br /><span className="text-info"> Survey </span></h1>
                    <h1 data-aos="flip-down"> consectetur adipisicing elit. Perspiciatis a laudantium beatae taeedge <br /> perferendis  vitae maiores assumenda unde quo aliquid ea?</h1>
                    <div className="join text-black">
                       
                        <input className="input input-bordered join-item rounded-s-full " placeholder="Enter Your Email" />
                        <button className=" text-white join-item rounded-r-full bg-gradient-to-r to-emerald-500 from-blue-500 border-none">
                          <Marquee>Search</Marquee>
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Bannar;
