import React from 'react';
import InfoCard from './InfoCard';
import img from '../../assets/icons/clock.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard img={img}/>
            <InfoCard img={img}/>
            <InfoCard img={img}/>
        </div>
    );
};

export default Info;