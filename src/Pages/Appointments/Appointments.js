import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointments from './AvailableAppointments';

const Appointments = () => {
    const [selectedDate, setDate] = useState(new Date())
    return (
        <div>

            <AppointmentBanner selectedDate={selectedDate} setDate={setDate} />
            <AvailableAppointments selectedDate={selectedDate} />
        </div>
    );
};

export default Appointments;