
import SectionTitle from "../../Components/SectionTitle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import useAxiosPublic from "../../hook/useAxiousPublic";
import useAxios from "../../hook/useAxios";

// imgbb hosting img and img key <about >

const img_hosting_key = 'b7d49491c0458a9df17a5fa1a3a0877a'
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`
const SurveyCreation = () => {
    const axiosSecure=useAxios()
const axiosPublic=useAxiosPublic()
    const { user } = useAuth()
    const { register, handleSubmit, reset } = useForm()
    const navigate = useNavigate()

    // handle submit
    const onSubmit = async (data) => {
        console.log(data)

        // image hos
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic?.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        console.log(res.data)
        if (res.data.success) {
            const surveyItem = {
                title: data.title,
                category: data.category,
                description: data.description,
                options: data.options,
                vote: parseInt(data.vote),
                email: user.email,
                like: parseInt(data.like),
                image: res.data.data.display_url
            }
            const result = await axiosSecure.post('/api/create-survey', surveyItem)
            console.log(result.data)
            if (result.data.insertedId) {
                reset()
                Swal.fire({
                    title: "Create a survey store mongodb Success!",
                    text: "You clicked the button!",
                    icon: "success"
                });
                navigate('/surveys')
            }
        }
    }
    return (
        <div>
            <SectionTitle
                headings={'survey app'}
                subHeading={'Creating Survey'}
            >
            </SectionTitle>
            <div className="px-10 mt-20">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className=" flex gap-3  ">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text"
                                placeholder="Title"
                                {...register("title", { required: true })}
                                className="input input-bordered w-full " />
                        </div>
                        <div className="form-control  w-full">
                            <label className="label">
                                <span className="label-text">Like / DisLike</span>
                            </label>
                            <select name="like" {...register("like", { required: true })} className="input input-bordered w-full">
                                <option value="1">Like</option>
                                <option value="0">DisLike</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="form-control  w-full">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select defaultValue={'defaile'} className="input input-bordered w-full" {...register("category", { required: true })}>
                                <option disabled className="font-bold">Category</option>
                                <option>Technology</option>
                                <option>Education</option>
                                <option>Travel </option>
                            </select>
                        </div>
                        <div className="form-control  w-full">
                            <label className="label">
                                <span className="label-text">Options</span>
                            </label>
                            <select name="options" {...register("option", { required: true })} className="input input-bordered w-full">
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="form-control w-full mb-3">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea className="textarea textarea-bordered h-24"
                                placeholder="Description."
                                {...register("description", { required: true })}>
                            </textarea>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">vote</span>
                            </label>
                            <input type="text"
                                placeholder="vote"
                                {...register("vote", { required: true })}
                                className="input input-bordered w-full " />
                        </div>
                    </div>
                    <input type="file"{...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs" /><br />
                    <button className="mt-2 btn text-white bg-info hover:bg-info">Create Survey</button>
                </form>
            </div>
        </div>
    );
};

export default SurveyCreation;