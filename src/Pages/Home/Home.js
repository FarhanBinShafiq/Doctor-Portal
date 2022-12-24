import React from 'react';
import Banner from './Banner';
import HomeTestimonials from './HomeTestimonials';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner />
            <Info/>
            <Services/>
            <MakeAppointment/>
            <HomeTestimonials/>
        </div>
    );
};

export default Home;