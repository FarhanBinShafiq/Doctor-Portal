import React from 'react';
import { useForm } from 'react-hook-form';
import Loading from '../../Shared/Loading/Loading';
import { useQuery } from 'react-query';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey=process.env.REACT_APP_imgbb_key
    const navigate=useNavigate()
 

  // options fetch
    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentSpecialty`);
            const data = await res.json();
            return data;

        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleAddDoctor = data => {
   
        ///image file upload target
        const image=data.image[0];
        const formData=new FormData();
        formData.append('image',image)
        const url=`https://api.imgbb.com/1/upload?key=${imageHostKey}`
        console.log(url)

        fetch(url,{
            method:'POST',
            body:formData
        })

        .then(res=>res.json())
        .then(imgData=>{
           
            if(imgData.success){
                console.log(imgData.data.url)
                //backend data send
                const doctor={
                    name:data.name,
                    email:data.email,
                    specialty:data.specialty,
                    image:imgData.data.url
                }

                 fetch(`http://localhost:5000/doctors`,{
                    method:"POST",
                    headers:{
                        'content-type':'application/json',
                        authorization:`bearer ${localStorage.getItem('accessToken')}`
                    },
                    body:JSON.stringify(doctor)
                 })

                 .then(res=>res.json())
                 .then(result=>{
                    console.log(result)
                    toast.success(`${data.name} is added successfully`)
                    navigate('/dashboard/managedoctor')
                 })
            }
        })
    }

    return (
        <div className='w-96 p-7'>
            <h2 className='text-4xl uppercase'>Add a Doctor</h2>
            <>
                <form onSubmit={handleSubmit(handleAddDoctor)}>


                    <div className="form-control w-full max-w-xs">

                        <label className="label">
                            <span className="label-text">Name:</span>

                        </label>

                        <input type="name"
                            {...register("name", {
                                required: {
                                    value: true, message: "Name is Required"
                                }
                            })}
                            placeholder="Your Name"
                            className="input input-bordered w-full max-w-xs" />


                    </div>


                    <div className="form-control w-full max-w-xs">

                        <label className="label">
                            <span className="label-text">Email:</span>

                        </label>

                        <input type="email"
                            {...register("email", {
                                required: {
                                    value: true, message: "Email is Required"
                                }
                            },
                                {
                                    pattern: /[A-Za-z]{3}/,
                                    message: "Provide a valid email address"
                                })}
                            placeholder="Your Email"
                            className="input input-bordered w-full max-w-xs" />


                    </div>


                    <div className="form-control w-full max-w-xs">

                        <label className="label">
                            <span className="label-text">Speacialty :</span>
                        </label>

                        <select
                            {...register(`specialty`)}
                            className="select input-bordered w-full max-w-xs">
                            <option disabled selected>Pick a Speacialty</option>
                            {
                                specialties.map(specialty => <option
                                    key={specialty._id}
                                    value={specialty.name}
                                >{specialty.name}</option>)
                            }
                        </select>




                        <div className="form-control w-full max-w-xs">

                            <label className="label">
                                <span className="label-text">Photo</span>

                            </label>

                            <input type="file"
                                {...register("image" , {
                                    required: {
                                        value: true, message: "Photo is Required"
                                    }
                                })}
                                placeholder="Your Photo"
                                className="input input-bordered w-full max-w-xs" />


                        </div>




                    </div>
                    <br />

                    <input className='btn w-full max-w-xs text-whit' type="submit" value="Add Doctor " />

                </form>
            </>
        </div>
    );
};

export default AddDoctor;