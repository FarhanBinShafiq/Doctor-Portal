import React from 'react';
import HomeTestimonial from './HomeTestimonial';
import people1 from "../../assets/images/people1.png"
import people2 from "../../assets/images/people2.png"
import people3 from "../../assets/images/people3.png"
import quote from "../../assets/icons/quote.svg"

const HomeTestimonials = () => {
    const testimonials = [
        {
            _id: 1,
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people1,
            name: 'Devid Herry',
            address: 'Dhaka'
        },
        {
            _id: 2,
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people2,
            name: 'Herry Leo',
            address: 'California'
        },
        {
            _id: 3,
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people3,
            name: 'Cristiano',
            address: 'London'
        },
        
    ]
    return (
        <div>
            <div className='my-10 font-mono'>
                <div className='flex justify-between'>
                    <div>
                        <h3 className='text-primary uppercase font-bold'>Testimonial</h3>
                        <h2 className='text-4xl font-bold text-teal-600 '>What Our Patients Say</h2>
                    </div>
                    <div>
                        <img src={quote} className='w-24 lg:w-28'/>
                    </div>
                </div>

                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-5'>
                    {
                        testimonials.map(testimonial => <HomeTestimonial
                            key={testimonial._key}
                            testimonial={testimonial}
                        ></HomeTestimonial>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HomeTestimonials;