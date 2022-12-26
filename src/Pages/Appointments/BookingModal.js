import { transparent } from 'daisyui/src/colors';
import { format } from 'date-fns';
import React from 'react';
import Service from './Service';

const BookingModal = ({ treatment, date,setTreatment }) => {

    const handleBooking=e=>{
        e.preventDefault();
        const slot=e.target.value;
        console.log(treatment._id,treatment.name,slot)
        setTreatment(null)
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-center text-secondary">Booking for : {treatment.name}</h3>
                    <form onClick={handleBooking} className='grid my-5 grid-cols-1 gap-3 justify-items-center max-auto'>
                        <input type="text" readOnly value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-primary w-full max-w-xs">

                         {
                            treatment.slots.map(slot=><option value={slot}>{slot}</option>)
                         }    
                        
                            
                        </select>
                        <input type="text" name='name' placeholder="Full Name" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='email' placeholder="Email address" className="input input-bordered w-full max-w-xs" />
                        <input type="number" name='number' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='message' placeholder="Shortly,Tupe here your problem " className="input input-bordered input-lg w-full max-w-xs" />
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