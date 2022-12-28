import React from 'react';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading/Loading';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    //useNavigate

    const navigate = useNavigate()
    //react hooks form
    const { register, handleSubmit, formState: { errors } } = useForm();
    //Google log in
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    if (gUser) {
        console.log(gUser)
    }

    //update profile

    const [updateProfile, updating, uError] = useUpdateProfile(auth);

    //Email log in
    const [createUserWithEmailAndPassword, eUser, eLoading, eError] = useCreateUserWithEmailAndPassword(auth);

    //loading

    if (eLoading || gLoading) {
        return <Loading></Loading>
    }

    //errors

    let signInErrors;

    if (eError || gError || uError) {
        signInErrors = <p>{eError?.message || gError?.message || uError?.message}</p>
    }



    //handle submit 
    const onSubmit = async data => {
        console.log(data)
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: updateProfile.name })
        console.log("update done")
        navigate('/appointments')  //
    };

    return (
        <div className=' flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>


                        <div className="form-control w-full max-w-xs">

                            <label className="label">
                                <span className="label-text">Name:</span>

                            </label>

                            <input type="name"
                                {...register("name", {
                                    required: {
                                        value: true, message: "Name is Required"
                                    }
                                })}
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs" />


                        </div>


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
                        {signInErrors}
                        <input className='btn w-full max-w-xs text-whit' type="submit" value="Sign Up " />

                    </form>

                    <p>Already have an account ? <Link to="/login" className='text-primary'>Login</Link> </p>

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

export default SignUp;