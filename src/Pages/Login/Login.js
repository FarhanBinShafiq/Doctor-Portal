import React from 'react';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (user) {
        console.log(user)
    }

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className=' flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Log in</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">

                            <label className="label">
                                <span className="label-text">Email:</span>

                            </label>

                            <input type="email"
                                {...register("email", {
                                    required: {
                                        value: true, message: "Email is Required"
                                    }
                                },
                                    {
                                        pattern: /[A-Za-z]{3}/,
                                        message: "Provide a valid email address"
                                    })}
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs" />

                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                            </label>
                        </div>


                        <div className="form-control w-full max-w-xs">

                            <label className="label">
                                <span className="label-text">Password:</span>

                            </label>

                            <input type="password"
                                {...register("password", {
                                    required: {
                                        value: true, message: "Password is Required"
                                    }
                                },
                                    {
                                        minLength: 6,
                                        message: "Provide a valid password "
                                    })}
                                placeholder="Your Password"
                                className="input input-bordered w-full max-w-xs" />

                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                            </label>
                        </div>

                        <input className='btn w-full max-w-xs text-whit' type="submit" value="Login"/>

                    </form>

                    <div className='divider'>OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className='btn btn-outline'>
                        Continue with Google</button>
                </div>
            </div>
        </div>
    );
};





export default Login;