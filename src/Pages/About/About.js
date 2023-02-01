import React from 'react';
import HomeTestimonials from '../Home/HomeTestimonials';
 
import AboutBanner from './AboutBanner';
import AboutInfo from './AboutInfo';
 


const Banner = () => {
    return (
        <div>
            <AboutBanner></AboutBanner>
            <AboutInfo></AboutInfo>
           <HomeTestimonials></HomeTestimonials>
            
        </div>
    );
};

export default Banner;