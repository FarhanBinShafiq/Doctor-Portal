import React from 'react';

const HomeTestimonial = ({testimonial}) => {
    return (
        <div>
            <div>
                <p>{testimonial.description}</p>
                <div>
                    <div className="card card-side bg-base-100">
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