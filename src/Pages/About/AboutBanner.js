import React from 'react';
import { Link } from 'react-router-dom';
import about from '../../assets/images/about.jpg'

const AboutBanner = () => {
    return (
        <div>
            <div className="hero h-100 mt-20 mb-20">
                <div className="hero-content flex-col font-mono lg:flex-row-reverse ">
                    <div>
                     
                        <h1 className="lg:text-5xl font-bold text-red-300">Best Medical Care For Yourself and Your Family</h1>
                        <p className="py-6">Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna</p>
                        <Link to='/signup'> <button className="btn btn-primary  text-white font-bold uppercase bg-gradient-to-r from-info to-primary ">Create an account </button></Link>
                    </div>
                    <img src={about} className="h-60 rounded-lg" alt='' />

                </div>
            </div>
        </div>
    );
};

export default AboutBanner;