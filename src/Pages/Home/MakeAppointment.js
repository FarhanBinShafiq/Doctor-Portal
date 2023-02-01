import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import { Link } from 'react-router-dom';


const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className='flex font-mono justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-200px] lg:mt-[-150px]' src={doctor} alt='' />
            </div>
            <div className='flex-1 px-10 sm:px-12 sm:py-12'>
                <h3 className='text-xl my-4 text-primary font-bold'>Appoinment</h3>
                <h3 className='text-xl my-4 text-teal-600 uppercase'>Make an Appoinment Today</h3>
                <p className='text-white my-4'>Doctor appointment and I did not have a doctor appointment or had to have my appointment scheduled on an appointment day. With the way our school was set up, our student health and safety was taken very seriously, and there was no fear for my safety. All this on the spot. In spite of all the warnings coming in the direction of the administration, I continued to receive schoolwork and had to take care of my own. My life, my school work, my business, and life itself were at risk. In a word, our life was at risk.</p>
                <Link to='/login'><button className="btn btn-primary my-8 text-white font-bold uppercase bg-gradient-to-r from-info to-primary ">Log In</button></Link>
            </div>
        </section>
    );
};

export default MakeAppointment;