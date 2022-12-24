import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 mt-[-100px] lg:grid-cols-3 gap-6'>
            <InfoCard cardTitle="Opening Hours" bgClass='bg-gradient-to-r from-info to-primary' img={clock}/>
            <InfoCard cardTitle="Our Location" bgClass='bg-gradient-to-r from-info to-primary' img={marker}/>
            <InfoCard cardTitle="Our Contact" bgClass='bg-gradient-to-r from-info to-primary' img={phone}/>
        </div>
    );
};

export default Info;