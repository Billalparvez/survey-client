import { useParams } from 'react-router-dom';
import Container from '../../Shard/Container'
import { useEffect, useState } from 'react';
import useAxios from '../../hook/useAxios';
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { TbEyeStar } from "react-icons/tb";
import useAuth from '../../hook/useAuth';
import Swal from 'sweetalert2';
import RightSide from '../../Components/RightSide';
import useUser from '../../hook/useUser';
import SectionTitle from '../../Components/SectionTitle';
const SurveyDetails = () => {
    const [inputValue, setInputValue] = useState('');
    const { user } = useAuth()
    console.log(user)
    const [users] = useUser()
    console.log(users[0]?.role)
    // console.log(user.name)
    const axiosSecure = useAxios()
    const { id } = useParams()
    const [surveys, setSurveys] = useState(null);
    useEffect(() => {
        const fetchSurveyDetails = async () => {
            const response = await axiosSecure.get(`/api/create-survey/${id}`);
            setSurveys(response.data);
        }
        fetchSurveyDetails()
    }, [axiosSecure, id])
    // handleLIke
    const handleLike = () => {
        Swal.fire({
            title: "Thanks for your LIke !",
            text: "tumi valo manus !",
            icon: "success"
        });
    }
    // handleDisLIke
    const handleDisLike = () => {
        Swal.fire({
            title: "Oh Brother !",
            text: "Sad moment !",
            icon: "info"
        });
    }
    // input value
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    // comment post
    const handleAddComment = async (e) => {
        e.preventDefault();
        console.log('Input Value:', inputValue)
        if (user) {
            await axiosSecure.post('/api/comments', {
                text: inputValue,
                role: user.role,
            });
        }
        setInputValue("")
    }
    return (
        <div className='min-h-screen' >
            <SectionTitle
                headings={'details'}
                subHeading={'Survey Details'}
            >
            </SectionTitle>
            <Container>
                <div className=' mt-10 grid md:grid-cols-7  gap-7'>
                    {/* left side */}
                    <div className='col-span-5'>
                        <div className="card hover:border-b-2 border-info bg-base-100 shadow-xl">
                            <figure> <img className='w-full h-80 object-fill ' src={surveys?.image} alt="" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Title : {surveys?.title}</h2>
                                <div className='flex justify-evenly items-center text-3xl '>
                                    <p className='text-info cursor-pointer' onClick={handleLike}><AiFillLike /></p>
                                    <p className='text-info -ml-20 cursor-pointer' onClick={handleDisLike}><AiFillDislike /></p>
                                    {/* {users?.role === "admin" ? */}
                                    {users[0]?.role === "admin" ?
                                        <>
                                            <input value={inputValue} onChange={handleInputChange} className='outline-none' placeholder='Add comments... ' type="text" name="comment" id="" />
                                            <button onClick={handleAddComment} className='btn btn-info btn-sm text-white' >Add</button>
                                        </>
                                        :
                                        <input disabled placeholder='Add comment... ' type="text" name="" id="" />
                                    }
                                    <div className='ml-40 flex gap-2 items-center'>
                                        <p ><TbEyeStar /></p>
                                        <span className='text-sm'>2.5</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* right side,  user.role === 'admin' ? */}
                    <div className='col-span-2 '>
                        <RightSide surveys={surveys}></RightSide>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SurveyDetails;