import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    return (
        <div>
            <div className="card font-mono lg:max-w-lg bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={service.img} alt="img" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{service.name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <Link to='/appointments'>  <button className="btn btn-primary text-white font-bold uppercase bg-gradient-to-r from-info to-primary ">Appoinment</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;