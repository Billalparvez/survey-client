import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import useAuth from '../../hook/useAuth'
import { useForm } from 'react-hook-form'
// import Swal from "sweetalert2";

import { AiFillEye, AiFillEyeInvisible, AiFillGithub } from 'react-icons/ai';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { axiosPublic } from '../../hook/useAxiousPublic';
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { signIn, signInWithGoogle } = useAuth()
    const [passwordShow, setPasswordShow] = useState(false)
    const navigate = useNavigate()
    const onSubmit = data => {
        console.log(data)
        signIn(data?.email, data?.password)
            .then(res => {
                const logger = res.user
                console.log(logger)
                Swal.fire({
                    title: "Your LOgin Success!",
                    text: "You clicked the button!",
                    icon: "success"
                });
                navigate('/')
            })

    }
    const handleGoogle = () => {
        console.log('google')
        signInWithGoogle()
            .then(res => {
                console.log(res.user)
                const userInfo = {
                    email: res?.user?.email,
                    name: res?.user?.displayName,
                }
                axiosPublic?.post('/api/users', userInfo)
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
                    <img src="https://i.postimg.cc/cJBd0jB8/1000-F-635201889-GW1-Ac67-SNv-TDlu7v-A7-Fiji9v-Wy-RBb-FGr.jpg" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                        <p className='text-info font-bold text-center'>Login </p>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="email" {...register("email")} name="email" placeholder="email" className="input input-bordered rounded-full" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input type={passwordShow ? "text" : "password"} {...register("password", { required: true})} name="password" placeholder="password" className="input input-bordered rounded-full relative" />
                            <p className='text-xl absolute top-[205px] right-12 ' onClick={() => setPasswordShow(!passwordShow)}>
                                {passwordShow ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>}
                            </p>
                            
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control ">
                            <button className="btn btn-info text-white rounded-full hover:bg-green-500 hover:text-black border-none">Create An Account</button>
                        </div>
                    </form>
                    <p className='text-center'>Create A New Account ? <Link to={'/signup'} className='hover:text-emerald-500 text-info font-bold'>Register Now</Link> </p>
                    <p className='text-center font-bold my-3'>Or sign in with</p>
                    <div className='flex gap-4 justify-center mb-5'>
                        {/* <a className='border p-5 rounded-2xl text-2xl '> <SiFacebook /> </a> */}
                        <a onClick={handleGoogle} className='cursor-pointer border p-5 rounded-2xl text-2xl '> <FcGoogle /> </a>
                        <a onClick={""} className='border cursor-pointer p-5 rounded-2xl text-2xl' ><AiFillGithub></AiFillGithub></a>
                    </div>
                </div>
            </div>
        </div>
      
    )
}

export default Login