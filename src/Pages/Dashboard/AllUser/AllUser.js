import React from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';

const AllUser = () => {


    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`https://doctors-portal-server10237.up.railway.app/users`)
            const data = await res.json()

            return data;
        }
    })

    const handleMakeAdmin = (id) => {
        fetch(`https://doctors-portal-server10237.up.railway.app/users/admin/${id}`, {
            method: "PUT",
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount>0) {
                    toast.success("Make Admin SuccessFully ")
                    refetch()

                }
                console.log(data)
            })
    }

    return (
        <div>
            <h1 className='text-3xl text-center uppercase'>All User</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) =>


                                <tr key={user._id}>
                                    <th>{i + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user?.role !== "admin" && <button className='btn btn-xs btn-primary'
                                        onClick={() => handleMakeAdmin(user._id)}
                                    >Make Admin</button>}</td>
                                    <td><button className='btn btn-xs btn-danger'>Delete</button></td>

                                </tr>

                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;