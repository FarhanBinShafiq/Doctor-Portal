import React, { useEffect, useState } from 'react';
import Doctor from './Doctor';
import image from '../../assets/images/doctor_bg.jpg'
import { Link } from 'react-router-dom';

const Doctors = () => {


    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/doctors')
            .then(res => res.json())
            .then(data => {
                setDoctors(data)
                console.log(data)
            })
    }, [])



    return (
        <div>
            <div className=' h-40  lg:h-60' style={{ backgroundImage: `url(${image})` }}>
                <p className=' font-mono  uppercase  text-sm lg:text-xl text-opacity-100  flex items-center justify-center pt-20 font-bold  text-teal-600'><span className='border-b-4 border-indigo-500 '> <Link to='/home'>Home</Link> / Our Doctors</span></p>
            </div>
            <h3 className=' text-sm lg:text-3xl text-center font-mono pt-4 font-bold  text-teal-600 '> Our Qualified Healthcare Professionals </h3>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    doctors.map(doctor => <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6'>
                        <Doctor
                            doctor={doctor}
                            key={doctor._id}
                        >
                        </Doctor>

                    </div>)
                }

            </div>

        </div>
    );
};

export default Doctors;