import { useState } from "react";
import { BiSolidDislike, BiSolidLike } from "react-icons/bi";
import { axiosPublic } from "../hook/useAxiousPublic";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";

const SurveyCard = ({ survey }) => {
    const { title, like, description, image, _id, category, vote } = survey
    const [likes, setLikes] = useState(survey.like);
    console.log(survey._id)
    const handleLikeClick = async (_id) => {
        console.log(_id)
        Swal.fire({
            title: "Thank for Your like!",
            text: "You clicked the button!",
            icon: "success"
        });
        setLikes(likes + 1);
        // Increment the like count when the button is clicked
        const like = await axiosPublic.post(`/api/like-servey/${_id}`)
        console.log(like)
        if (like.success) {
            setLikes(likes + 1);
            Swal.fire({
                title: "Thank for like!",
                text: "You clicked the button!",
                icon: "success"
            });
            console.log('Survey liked successfully.');
        }
    };
    return (
            <div className="card bg-base-100 shadow-xl hover:border-b-2 border-info">
                <figure><img className=" w-full h-64" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title"> {title} </h2>
                    <p>{description}</p>

                    <div className="card-actions justify-start gap-44 items-center">
                        <a className="text-2xl" onClick={() => handleLikeClick(_id)} >
                            <div className=" flex gap-2 items-center">
                                <p className="text-red-500 " ><BiSolidLike /></p>
                                <p> {likes > 0 && <span className="">{likes}</span>}</p>
                            </div>
                        </a>
                        <p className="badge bg-info text-white">vote: {vote}</p>
                    </div>
                    <div className="justify-end">
                        <Link className="badge badge-info  text-white hover:bg-green-500" to={`/surveyDetails/${_id}`}>Details</Link>
                    </div>
                </div>
            </div>
    );
};

export default SurveyCard;