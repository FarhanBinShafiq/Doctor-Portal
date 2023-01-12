
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { format } from 'date-fns';
import { toast } from 'react-toastify';


const BookingModal = ({ treatment, selectedDate, setTreatment,refetch }) => {

    const [user ] = useAuthState(auth)
    const date = format(selectedDate, 'PP')

    const handleBooking = e => {
        e.preventDefault();
        const slot = e.target.slot.value;
        const patientName = e.target.name.value;
        const number = e.target.number.value;
    
        const booking = {
            treatmentId: treatment._id,
            treatment: treatment.name,
            appointmentDate: date,
            slot, patientName, number,
            patient: user.email
        }

        console.log(booking)



        //post method

        fetch("http://localhost:5000/booking", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setTreatment(null)
                    toast.success("Booking Confirmed")
                    refetch()
                }
                else{
                    toast.error(data.message)
                }
            })

    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor=" " className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-center text-secondary">Booking for : {treatment.name}</h3>
                    <form onSubmit={handleBooking} className='grid my-5 grid-cols-1 gap-3 justify-items-center max-auto'>
                        <input type="text" readOnly value={format(selectedDate, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-primary w-full max-w-xs">

                            {
                                treatment.slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}>{slot}</option>)
                            }


                        </select>
                        <input type="text" name='name' id='name' placeholder='Full Name' className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='email' disabled value={user?.email || ''} placeholder="Email address" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='number' id="number" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />

                        <input type="submit" placeholder="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                    {/* <div className="modal-action">
                        <label htmlFor="booking-modal" className="btn justify-center mx-auto ">Booking</label>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default BookingModal;