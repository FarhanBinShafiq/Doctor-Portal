import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointments from './AvailableAppointments';

const Appointments = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>

            <AppointmentBanner date={date} setDate={setDate} />
            <AvailableAppointments date={date} />
        </div>
    );
};

export default Appointments;