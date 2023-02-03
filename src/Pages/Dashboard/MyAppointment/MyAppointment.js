
import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyAppointment = () => {

    const { user } = useContext(AuthContext)
    const url = `https://doctors-portal-server10237.up.railway.app/bookings?email=${user?.email}`;


    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h2 className='text-3xl text-center uppercase'>My Appointments</h2>

            <div className='mb-5'>
                <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Treatment</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Payment</th>
                            </tr>
                        </thead>
                        <tbody>

                            {bookings &&
                                bookings?.map((booking, i) =>
                                    <tr className='hover' key={booking._id}>
                                        <th>{i + 1}</th>
                                        <td>{booking.patientName}</td>
                                        <td>{booking.treatment}</td>
                                        <td>{booking.appointmentDate}</td>
                                        <td>{booking.slot}</td>
                                        <td>${booking.price}</td>
                                    </tr>

                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyAppointment;