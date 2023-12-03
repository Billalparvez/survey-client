import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxiosPublic from '../hook/useAxiousPublic';
import Swal from 'sweetalert2';

const RightSide = ({ surveys }) => {
    const { id } = useParams()
    const axiosSecure = useAxiosPublic()
    const [comments, setComments] = useState([]);
    useEffect(() => {
        const fetchingComment = async () => {
            const res = await axiosSecure.get('/api/comments')
            setComments(res.data)
        }
        fetchingComment()
    }, [id, axiosSecure])
    const handleVote =async (id) => {
        console.log(id)
        const res =await axiosSecure.patch(`/api/create-survey/${id}`)
        console.log(res)
        if(res.data.modifiedCount > 0){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Vote Success",
                showConfirmButton: false,
                timer: 1500
              });
        }
    }
    return (
        <div>
            <div className='border p-5 mb-5'>
                <h2 className="card-title ">
                    Category :
                    <div className="badge badge-info text-white font-bold">{surveys?.category}</div>
                </h2>
                <h2 className="card-title">Description : {surveys?.description}</h2>
                <p onClick={() => handleVote(surveys._id)} className='drawer-button badge-error badge cursor-pointer text-white'>vote now</p>
            </div>
            {/*  */}
            <div className='border p-5 mb-5'>
                <h1 className='font-bold'>All Comments: {comments.length}</h1>
                <ol className='list-decimal px-5'>
                    {
                        comments.map((comment) => <li key={comment._id}>{comment.text}</li>)
                    }
                </ol>
            </div>
        </div>
    );
};

export default RightSide;