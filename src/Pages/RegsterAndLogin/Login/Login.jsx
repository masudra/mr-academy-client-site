import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import loginBaner from '../../../../public/login.jpg'



const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div>

            <div className="hero min-h-screen bg-base-200 coverimg">
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


                                    <label className="label">
                                        <p className="label-text-alt  text-xl">New here? <Link className=' link link-hover  text-orange-600' to='/regster'> Create a New Account</Link></p>
                                    </label>
                                </div>

                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Regster" />
                                </div>
                            </div>
                        </form>

                    </div>
                    <div className="text-center lg:text-left m-5">
                        <img className="w-[700px] h-[450px]" src={loginBaner} alt="" />

                    </div>
                </div>
            </div>


        </div>
    );
};

export default Login;