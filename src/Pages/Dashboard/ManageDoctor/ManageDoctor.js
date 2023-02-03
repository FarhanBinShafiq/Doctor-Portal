import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const ManageDoctor = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null)

    //cancel button handle in confirmation modal

    const closeModal = () => {
        setDeletingDoctor(null)
    }




    const { data: doctors, isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('https://doctors-portal-server10237.up.railway.app/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken  ')}`
                    }
                })
                const data = await res.json();
                return data;

            } catch (error) {

            }
        }
    })



    //delete doctor

    const handleDeleteDoctor = doctor => {
        fetch(`https://doctors-portal-server10237.up.railway.app/doctors/${doctor._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })

            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    console.log(data)
                    refetch();
                    toast.success(`Doctor ${doctor.name} deleted Successfully`)

                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className=' text-3xl uppercase text-center'>Total Doctors:{doctors?.length}</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Avatar</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Speacialty</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {/* {
                                doctors.map((doctor, i) =>

                                    <tr key={doctor._id}>
                                        <th>{i + 1}</th>
                                        <td>
                                            
                                                <div className="avatar">
                                                    <div className="w-24 rounded">
                                                        <img src={doctor.image} alt="" />
                                                    </div>
                                                </div>
                                            
                                        </td>
                                        <td>{doctor.name}</td>
                                        <td>{doctor.email}</td>
                                        <td>{doctor.specialty}</td>
                                        <td>
                                            {/* The button to open modal 
                                            <label htmlFor="confirmation-modal"
                                                onClick={() => setDeletingDoctor(doctor)}
                                                className="btn btn-sm btn-error">Delete</label>
                                        </td>
                                    </tr>

                                )
                            } */}


                            {
                                doctors.map((doctor, i) => <tr key={doctor._id}>
                                    <th>{i + 1}</th>
                                    <td><div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src={doctor.image} alt="" />
                                        </div>
                                    </div></td>
                                    <td>{doctor.name}</td>
                                    <td>{doctor.email}</td>
                                    <td>{doctor.specialty}</td>
                                    <td>
                                        <label onClick={() => setDeletingDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
                {
                    //seding props in confirmation file
                    deletingDoctor && <ConfirmationModal
                        title={`Are you sure ,Want to delete the doctor profile ?`}
                        message={`if you delete ${deletingDoctor.name}.It can not be undone.`}
                        closeModal={closeModal}
                        successAction={handleDeleteDoctor}
                        successButtonName='Delete'
                        modalData={deletingDoctor}
                    ></ConfirmationModal>
                }
            </div>
        </div>
    );
};

export default ManageDoctor;