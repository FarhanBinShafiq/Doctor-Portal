import { format } from 'date-fns';
import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';

import { AuthContext } from '../../contexts/AuthProvider';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({ selectedDate }) => {
    const date = format(selectedDate, 'PP')
    const [treatment, setTreatment] = useState(null)

    const { user } = useContext(AuthContext);


    const { data: services = [], refetch } = useQuery({
        queryKey: ['service', date],
        queryFn: () => fetch(`http://localhost:5000/service?date=${date}`)
            .then(res => res.json())
    })




    return (
        <div>
            <h1 className='text-center text-3xl text-primary'>Available Appointments on {format(selectedDate, 'PP')}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <Service service={service} setTreatment={setTreatment} key={service._id}></Service>)
                }
            </div>

            <>
                {
                    treatment && <BookingModal treatment={treatment}
                        refetch={refetch}
                        selectedDate={selectedDate}
                        setTreatment={setTreatment} />
                }
            </>


        </div>
    );
};

export default AvailableAppointments;