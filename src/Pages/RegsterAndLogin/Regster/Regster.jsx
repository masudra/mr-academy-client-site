import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import loginBaner from '../../../../public/login.jpg'
import Sociallogin from '../Sociallogin';

const Regster = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
    };

    return (
        <div>

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
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password"  {...register("password", { required: true, minLength: 6, maxLength: 20 })} name="password" placeholder="Password" className="input input-bordered" />
                                    {errors.password && <span className='text-red-600'>Password is required </span>}
                                    {errors.password?.type === 'minLength' && <p className='text-red-600' role="alert">Password is required min 6 </p>}
                                    {errors.password?.type === 'maxLength' && <p className='text-red-600' role="alert">Password is required max 20 </p>}


                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                    {errors.name && <span className='text-red-600'>Name is required</span>}
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text"  {...register("photo", { required: true })} name="photo" placeholder="Photo URL" className="input input-bordered" />
                                    {errors.photo && <span className='text-red-600'>Name is required</span>}

                                    <label className="label">
                                        <p className="label-text-alt text-xl"> Already registered? <Link className=' link link-hover  text-orange-600' to='/login'>Go to log in</Link></p>
                                    </label>
                                </div>
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
            </div>


        </div>
    );
};

export default Regster;