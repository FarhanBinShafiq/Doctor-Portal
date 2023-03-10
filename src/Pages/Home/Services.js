import React from 'react';
import Service from './Service';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import ServiceBanner from './ServiceBanner';

const Services = () => {

    const services = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            description: "",
            img: fluoride
        },
        {
            _id: 2,
            name: "Cavity Filling",
            description: "",
            img: cavity
        },
        {
            _id: 3,
            name: "Teeth Whitening ",
            description: "",
            img: whitening
        },
    ]

    return (
        <div className='my-28'>
            <div className='text-center'>
                <h2 className='text-primary text-xl lg:text-3xl font-bold uppercase font-mono'>Our Services</h2>
                <h2 className='text-2xl font-mono font-bold text-teal-600 uppercase lg:text-4xl'>Services   We Provide</h2>

            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }

            </div>

            <div>
                <ServiceBanner />
            </div>
        </div>
    );
};

export default Services;