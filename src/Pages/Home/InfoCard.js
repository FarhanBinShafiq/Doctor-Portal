import React from 'react';

const InfoCard = ({img,cardTitle,bgClass}) => {
    return (
        <div>
            <div className={`card card-side bg-base-100 shadow-xl ${bgClass}`} >
                <figure className='pl-5'><img src={img} alt="Movie" /></figure>
                <div class="card-body">
                    <h2 class="card-title text-white">{cardTitle}</h2>
                    <p className='text-white'>Click the button to watch on Jetflix app.</p>
                    
                </div>
            </div>
        </div>
    );
};

export default InfoCard;