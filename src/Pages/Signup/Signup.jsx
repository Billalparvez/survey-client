
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";

import useAuth from '../../hook/useAuth';
import useAxiosPublic from '../../hook/useAxiousPublic';
import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible, AiFillGithub } from 'react-icons/ai';
// import { object, string,   } from 'yup';
const Register = () => {
    const axiosPublic = useAxiosPublic()
    // console.log(axiosPublic)
    const [passwordShow, setPasswordShow] = useState(false)
    const navigate = useNavigate()
    const { createUser, signInWithGoogle } = useAuth()
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(res => {
                const logger = res.user
                console.log(logger)
                const userInfo = {
                    email: data?.email,
                    name: data?.name
                }
                axiosPublic.post('/api/users', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            console.log('user adding data base')
                            reset()
                            Swal.fire({
                                title: "Your Register success!",
                                text: "User update success!",
                                icon: "success"
                            });
                            navigate('/')
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    })
               
            })

    }
    const handleGoogle = () => {
        console.log('google')
        signInWithGoogle()
            .then(res => {
                console.log(res.user)
                const userInfo = {
                    email: res.user?.email,
                    name: res?.user?.displayName,
                }
                axiosPublic.post('/api/users', userInfo)
                    .then(res => {
                        console.log(res.user)
                    })
                navigate('/')
            });
    }
    return (
        <div className="hero min-h-screen bg-white">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <div className="text-center lg:text-left">

                    <img src="https://i.postimg.cc/xTLf6cNR/5500661.jpg" alt="" />
                    {/* <img src="https://i.ibb.co/xJsNc8D/credit-card-concept-illustration-114360-98.jpg" alt="" /> */}
                </div>
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                        <p className='text-info font-bold text-center'>Create an Account</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="name" className="input input-bordered rounded-full" />
                            {errors.name && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered rounded-full" />
                            {errors.email && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input type={passwordShow ? "text" : "password"} {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /^[A-Za-z]+$/i })} name="password" placeholder="password" className="input input-bordered rounded-full relative" />
                            {errors.password && <span className="text-red-500">This field is required</span>}
                            <p className='text-xl absolute top-[300px] right-12 ' onClick={() => setPasswordShow(!passwordShow)}>
                                {passwordShow ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>}
                            </p>
                            {errors.password?.type === "minLength" && (
                                <p className="">Password must be 6 chareter</p>
                            )}

                        </div>

                        <div className="form-control ">
                            <button className="btn btn-info text-white rounded-full hover:bg-green-500 hover:text-black border-none">Create An Account</button>
                        </div>
                    </form>
                    <p className='text-center'>Already registered? <Link to={'/login'} className='hover:text-emerald-500 text-info font-bold'>Login Now</Link> </p>
                    <p className='text-center font-bold my-3'>Or sign up with</p>
                    <div className='flex gap-4 justify-center mb-5'>
                        {/* <a className='border p-5 rounded-2xl text-2xl '> <SiFacebook /> </a> */}
                        <a onClick={handleGoogle} className='cursor-pointer border p-5 rounded-2xl text-2xl '> <FcGoogle /> </a>
                        <a onClick={""} className='border cursor-pointer p-5 rounded-2xl text-2xl' ><AiFillGithub></AiFillGithub></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
