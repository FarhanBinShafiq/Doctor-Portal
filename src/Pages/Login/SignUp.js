import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';
import useToken from '../../hooks/useToken';

const SignUp = () => {

    //Create user --> Update User --> Save User --->User email Token from hooks---> Navigate to the target page//
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signupErrors, setSignupError] = useState('')

    const [cretaedUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(cretaedUserEmail);
    const navigate = useNavigate()


    if(token){
        navigate('/')
    }

    //Google log in
    const [signInWithGoogle, gUser] = useSignInWithGoogle(auth);
    if (gUser) {
        console.log(gUser)
    }




    //handle submit 
    const onSubmit = async data => {
        console.log(data)
        setSignupError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                //Toaster
                toast('User Created Successfully.')
                //update userInformation
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email);

                    })
                    .then(err => console.log(err))
            })
            .catch(error => setSignupError(error.message))
    };


    ///When user create a new account save in db and match with token then call the token for redirect to the page
    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('https://doctors-portal-server10237.up.railway.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email)
                console.log('Save User', data)
            })
    }
  





    return (
        <div className=' flex h-screen justify-center font-mono bg-black items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl text-teal-600 uppercase font-bold">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>


                        <div className="form-control w-full max-w-xs">

                            <label className="label">
                                <span className="label-text text-teal-600 uppercase ">Name:</span>

                            </label>

                            <input type="name"
                                {...register("name", {
                                    required: {
                                        value: true, message: "Name is Required"
                                    }
                                })}
                                placeholder="Your Full Name"
                                className="input input-bordered w-full max-w-xs" />


                        </div>


                        <div className="form-control w-full max-w-xs">

                            <label className="label">
                                <span className="label-text text-teal-600 uppercase ">Email:</span>

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


                        </div>


                        <div className="form-control w-full max-w-xs">

                            <label className="label">
                                <span className="label-text text-teal-600 uppercase ">Password:</span>

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


                        </div>
                        <br />

                        <input className='btn w-full max-w-xs text-white bg-black' type="submit" value="Sign Up " />
                        {
                            signupErrors && <p className='text-red-600'>{signupErrors}</p>
                        }
                    </form>

                    <p>Already have an account ? <Link to="/login" className='text-teal-600 bg-black uppercase '>Login</Link> </p>

                    <div className='divider text-teal-600 text-3xl uppercase '>OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className='btn btn-outline text-teal-600 uppercase  bg-black'>
                        Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;