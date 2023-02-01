import React from 'react';
import { Link } from 'react-router-dom';
import doctor from '../../assets/images/doctor.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero font-mono  min-h-screen">
                <div className="hero-content flex-col  lg:flex-row-reverse ">
                <img src={doctor} className="h-60 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="lg:text-5xl font-bold text-teal-600">Your New Smile Starts Here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link to='/appointments'> <button className="btn btn-primary text-white font-bold uppercase bg-gradient-to-r from-info to-primary ">Book For an Appointment</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;