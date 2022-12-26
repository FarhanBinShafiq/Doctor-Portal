import React from 'react';

const Service = ({ service, setTreatment }) => {
    return (
        <div>
            <div className="card lg:max-w-lg  bg-base-100 shadow-xl">
                <div className="card-body mx-auto justify-center">
                    <h2 className="card-title text-primary ">{service.name}</h2>
                    <p>{
                        service.slots.length > 1 ?
                            <span>{service.slots[0]}</span> :
                            <span className='text-red-500'> No Slot Available</span>
                    }</p>
                    <p>{service.slots.length} {service.slots.length > 1 ? 'spaces' : 'space'} available</p>

                    <div className="card-actions justify-center">
                        <label
                            htmlFor="booking-modal"
                            onClick={() => setTreatment(service)}
                            disabled={service.slots.length === 0}
                            className="btn btn-primary text-white font-bold uppercase bg-gradient-to-r from-info to-primary">
                            Book Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;