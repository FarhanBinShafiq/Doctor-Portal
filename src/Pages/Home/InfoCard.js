import React from 'react';

const InfoCard = ({ img, cardTitle, bgClass }) => {
    return (
        <div className='font-mono'>
            <div className={`card card-side bg-base-100 shadow-xl ${bgClass}`} >
       
                    <figure className='pl-0 lg:pl-5'><img className='hidden lg:block' src={img} alt="Movie" /></figure>
      
                <div className="card-body">
                    <h2 className="card-title   text-black">{cardTitle}</h2>
                    <p className='text-white'>Click the button to watch on Jetflix app.</p>

                </div>
            </div>
        </div>
    );
};

export default InfoCard;