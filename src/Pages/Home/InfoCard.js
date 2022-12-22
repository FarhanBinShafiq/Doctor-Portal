import React from 'react';

const InfoCard = ({img}) => {
    return (
        <div>
            <div class="card card-side bg-base-100 shadow-xl bg-accent">
                <figure><img src={img} alt="Movie" /></figure>
                <div class="card-body">
                    <h2 class="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    
                </div>
            </div>
        </div>
    );
};

export default InfoCard;