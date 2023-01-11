import React from 'react';
import { DayPicker } from 'react-day-picker';
 
import 'react-day-picker/dist/style.css';
import chair from '../../assets/images/chair.png'

const AppointmentBanner = ({ selectedDate, setDate }) => {



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                <div>

                    <DayPicker mode="single"
                        selected={selectedDate}
                        onSelect={setDate}/>

                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;