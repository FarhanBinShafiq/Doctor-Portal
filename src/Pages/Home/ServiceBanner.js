import React from 'react';
import { Link } from 'react-router-dom';
import treatment from '../../assets/images/treatment.png'

const ServiceBanner = () => {
    return (
        <div className='my-16 font-mono lg:px-10 '>
            <div className="card lg:card-side">
                <figure><img src={treatment} alt="treatment" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-xl text-teal-600 lg:text-4xl font-bold">Exceptional Dental Care ,on Your Terms.</h2>
                    <p className='py-1 lg:py-6'>Click the button to listen on Spotiwhy app.Click the button to listen on Spotiwhy app.Click the button to listen on Spotiwhy app.Click the button to listen on Spotiwhy app.Click the button to listen on Spotiwhy app.
                        Click the button to listen on Spotiwhy   Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-start">
                        <Link to='/appointments'><button className="btn btn-primary text-white font-bold uppercase bg-gradient-to-r from-info to-primary ">Appoinment</button></Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ServiceBanner;