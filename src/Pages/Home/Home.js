import React from 'react';
import Banner from './Banner';
import HomeForm from './HomeForm';
import HomeTestimonials from './HomeTestimonials';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';


const Home = () => {
    return (
        <div className='px-12 font-serif'>
     
            <Banner />
            <Info/>
            <Services/>
            <MakeAppointment/>
            <HomeTestimonials/>
            <HomeForm/>
        </div>
    );
};

export default Home;