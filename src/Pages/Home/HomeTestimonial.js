import React from 'react';

const HomeTestimonial = ({testimonial}) => {
    return (
        <div>
            <div className='card font-mono p-6 w-100 bg-primary text-primary-content'>
                <p>{testimonial.description}</p>
                <div>
                    <div className="card card-side ">
                        <figure><img src={testimonial.img} alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{testimonial.name}</h2>
                            <p>{testimonial.address}</p>
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeTestimonial;