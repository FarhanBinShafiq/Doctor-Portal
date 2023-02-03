import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1  lg:grid-cols-3 gap-6'>
            <InfoCard cardTitle="Opening Hours" bgClass='bg-gradient-to-r  from-info to-primary' time={'Everyday : 8am - 12pm, Emergency Open -24 hours '} img={clock}/>
            <InfoCard cardTitle="Our Location" bgClass='bg-gradient-to-r from-info to-primary' location={'123 Street, New York, USA'} img={marker}/>
            <InfoCard cardTitle="Our Contact" bgClass='bg-gradient-to-r from-info to-primary' phone={'Phone : +012 345 6789 , Email : hospital@xyza.com'} img={phone}/>
        </div>
    );
};

export default Info;