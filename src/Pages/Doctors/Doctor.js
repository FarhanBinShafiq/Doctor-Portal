import React from 'react';
import { Link } from 'react-router-dom';


const Doctor = (props) => {

    const { name, image, specialty, email } = props.doctor;
 
    return (
        <div className=' transform transition duration-500 hover:scale-90'>
            <div className="card  lg:w-96 sm:h-75  shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl h-100" />
                </figure>
                <div className="card-body font-mono  items-center text-center">
                    <h2 className="card-title uppercase ">{name}</h2>
                    <p>Email:<span>{email}</span></p>
                    <p>Department: <span>{specialty}</span></p>
                    <div className="card-actions">
                        <Link to='/login'> <button className="btn btn-primary text-white font-bold uppercase bg-gradient-to-r from-info to-primary">Click For Appointment</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctor;