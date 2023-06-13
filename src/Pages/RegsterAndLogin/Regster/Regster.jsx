import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginBaner from '../../../../public/login.jpg'
import Sociallogin from '../Sociallogin';
import { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContex } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Regster = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [error, setError] = useState('')
    const { updateUser, creatUsr } = useContext(AuthContex)
    const navigate = useNavigate()
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";

    const onSubmit = data => {
        console.log(data)
        if (data.password !== data.confirmPassword) {
            setError('password did not match');
            return
        }

        creatUsr(data.email, data.password)
            .then(result => {
                const loguser = result.user

                updateUser(data.name, data.photo)
                    .then(() => {
                        const userData = {name:data.name, email: data.email,photoURL: data.photo}
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers:{
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(userData)
                        
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset()
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'Your Acount  has been Creatd',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate(from, { replace: true });
                                }
                            })


                    })
                    .catch(error => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: `${error.message}`,
                          })
                    })
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message}`,
                  })
            })
    };

    return (
        <div>
            <Helmet>
                <title>Mr Academy || Regster </title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200 ">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl m-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                    {errors.email && <span className='text-red-600'>Email is required</span>}

                                </div>
                                {/* Password */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password"  {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*)/ })} name="password" placeholder="Password" className="input input-bordered" />
                                    {errors.password && <span className='text-red-600'>Password is required </span>}
                                    {errors.password?.type === 'minLength' && <p className='text-red-600' role="alert">Password is required min 6 </p>}
                                    {errors.password?.type === 'maxLength' && <p className='text-red-600' role="alert">Password is required max 20 </p>}
                                    {errors.password?.type === 'pattern' && <p className='text-red-600' role="alert"> password must one upper case, one lower case, one number, one special character </p>}

                                </div>
                                {/*confirm  Password */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password"  {...register("confirmPassword", {
                                        required: true, minLength: 6, maxLength: 20,
                                    })} name="confirmPassword" placeholder="Confir Password" className="input input-bordered" />
                                    {errors.password && <span className='text-red-600'>Password is required </span>}
                                    {errors.password?.type === 'minLength' && <p className='text-red-600' role="alert">Password is required min 6 </p>}
                                    {errors.password?.type === 'maxLength' && <p className='text-red-600' role="alert">Password is required max 20 </p>}

                                    <p className='text-red-600'>{error}</p>


                                </div>

                                {/* Name */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                    {errors.name && <span className='text-red-600'>Name is required</span>}
                                </div>
                                {/* Photo Url */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text"  {...register("photo", { required: true })} name="photo" placeholder="Photo URL" className="input input-bordered" />
                                    {errors.photo && <span className='text-red-600'>Name is required</span>}
                                </div>

                                <label className="label">
                                    <p className="label-text-alt text-xl"> Already registered? <Link className=' link link-hover  text-orange-600' to='/login'>Go to log in</Link></p>
                                </label>

                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Regster" />
                                </div>
                            </div>
                        </form>
                        <Sociallogin></Sociallogin>

                    </div>
                    <div className="text-center lg:text-left m-5">
                        <img className="w-[700px] h-[450px]" src={loginBaner} alt="" />

                    </div>
                </div>
            </div >


        </div >
    );
};

export default Regster;