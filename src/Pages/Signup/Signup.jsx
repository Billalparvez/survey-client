// import { Link } from 'react-router-dom'
// import { FcGoogle } from 'react-icons/fc'
// import useAuth from '../../hook/useAuth'
// import { useForm, SubmitHandler } from "react-hook-form"
// const SignUp = () => {
//     const {createUser}=useAuth()
// const onSubmit = data => {
//     console.log(data)
//     createUser(data.email, data.password)
//         .then(res => {
//             const logger = res.user
//             console.log(logger)
//             updateUserProfile(data.name, data.photoURL)
//                 .then(res => {
//                     console.log(res)
//                     const userInfo = {
//                         email: data.email,
//                         name: data.name
//                     }
//                     axiosPublic.post('/users', userInfo)
//                         .then(res => {
//                             if (res.data.insertedId) {
//                                 console.log('user adding data base')
//                                 reset()
//                                 Swal.fire({
//                                     title: "Your Register!",
//                                     text: "Your photo update success!",
//                                     icon: "success"
//                                 });
//                                 navigate('/')
//                             }
//                         })

//                 })
//                 .catch(error => {
//                     console.log(error)
//                 })
//             Swal.fire({
//                 title: "Your Register!",
//                 text: "You clicked the button!",
//                 icon: "success"
//             });
//         })
// } 
//     return (
//         <div className='flex justify-center items-center min-h-screen'>
//             <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
//                 <div className='mb-8 text-center'>
//                     <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
//                     <p className='text-sm text-gray-400'>Welcome to StayVista</p>
//                 </div>
//                 <form
//                     noValidate=''
//                     action=''
//                     className='space-y-6 ng-untouched ng-pristine ng-valid'
//                 >
//                     <div className='space-y-4'>
//                         <div>
//                             <label htmlFor='email' className='block mb-2 text-sm'>
//                                 Name
//                             </label>
//                             <input
//                                 type='text'
//                                 name='name'
//                                 id='name'
//                                 placeholder='Enter Your Name Here'
//                                 className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
//                                 data-temp-mail-org='0'
//                             />
//                         </div>
//                         <div>
//                             <label htmlFor='image' className='block mb-2 text-sm'>
//                                 Select Image:
//                             </label>
//                             <input
//                                 required
//                                 type='file'
//                                 id='image'
//                                 name='image'
//                                 accept='image/*'
//                             />
//                         </div>
//                         <div>
//                             <label htmlFor='email' className='block mb-2 text-sm'>
//                                 Email address
//                             </label>
//                             <input
//                                 type='email'
//                                 name='email'
//                                 id='email'
//                                 required
//                                 placeholder='Enter Your Email Here'
//                                 className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
//                                 data-temp-mail-org='0'
//                             />
//                         </div>
//                         <div>
//                             <div className='flex justify-between'>
//                                 <label htmlFor='password' className='text-sm mb-2'>
//                                     Password
//                                 </label>
//                             </div>
//                             <input
//                                 type='password'
//                                 name='password'
//                                 autoComplete='new-password'
//                                 id='password'
//                                 required
//                                 placeholder='*******'
//                                 className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
//                             />
//                         </div>
//                     </div>

//                     <div>
//                         <button
//                             type='submit'
//                             className='bg-rose-500 w-full rounded-md py-3 text-white'
//                         >
//                             Continue
//                         </button>
//                     </div>
//                 </form>
//                 <div className='flex items-center pt-4 space-x-1'>
//                     <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
//                     <p className='px-3 text-sm dark:text-gray-400'>
//                         Signup with social accounts
//                     </p>
//                     <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
//                 </div>
//                 <div className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
//                     <FcGoogle size={32} />

//                     <p>Continue with Google</p>
//                 </div>
//                 <p className='px-6 text-sm text-center text-gray-400'>
//                     Already have an account?{' '}
//                     <Link
//                         to='/login'
//                         className='hover:underline hover:text-rose-500 text-gray-600'
//                     >
//                         Login
//                     </Link>
//                     .
//                 </p>
//             </div>
//         </div>
//     )
// }

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