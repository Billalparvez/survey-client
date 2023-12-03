/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Tilt from 'react-parallax-tilt';
import ReactParallaxTilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
// import Tilt from 'index';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
const Card = ({ survey }) => {
    const { title, vote, image, _id } = survey

    return (
        <Tilt>
            <Link to={`/surveyDetails/${_id}`}>
                <div data-aos="flip-right" className=" mt-10 card hover:border-b-2 border-info  card-compact  bg-base-100 shadow-xl">
                    <figure><img className="h-64 w-full" src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <h2 className="badge bg-info text-white">Vote: {vote}</h2>
                    </div>
                </div>
            </Link>
        </Tilt>
    );
};

export default Card;