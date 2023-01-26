import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({ selectedDate }) => {
    const date = format(selectedDate, 'PP')
    const [treatment, setTreatment] = useState(null)
    
    // const [services, setServices] = useState([])
    // useEffect(() => {
    //     fetch('http://localhost:5000/service')
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [])

    //Using React Query

    const { data: services = [],refetch } = useQuery({
        queryKey: ['service',date],
        queryFn: () => fetch(`http://localhost:5000/service?date=${date}`)
            .then(res => res.json())
    })


    return (
        <div>
            <h1 className='text-center text-primary'>Available Appointments on {format(selectedDate, 'PP')}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <Service service={service} setTreatment={setTreatment} key={service._id}></Service>)
                }
            </div>
            {
                treatment && <BookingModal treatment={treatment}
                refetch={refetch}
                selectedDate={selectedDate} 
                setTreatment={setTreatment} />
            }
        </div>
    );
};

export default AvailableAppointments;