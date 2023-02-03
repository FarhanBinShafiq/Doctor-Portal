import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import Navbar from '../Pages/Shared/Navbar/Navbar'



const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div >
            <Navbar />


            <div className="drawer drawer-mobile font-mono">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col  ">
                    <Outlet></Outlet>
                    <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-60 h-90 uppercase bg-primary text-base-content">

                        <li><Link to='/dashboard'>My Appointments</Link></li>

                        {
                            isAdmin && <>
                                <li><Link to='/dashboard/allusers'>All Users</Link></li>
                                <li><Link to='/dashboard/adddoctor'>Add a Doctor</Link></li>
                                <li><Link to='/dashboard/managedoctor'>Manage Doctor</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;






// <div className="drawer">
//                 <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
//                 <div className="drawer-content">
//                     <Outlet></Outlet>
//                     <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button">Open drawer</label>
//                 </div>
//                 <div className="drawer-side">
//                     <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
//                     <ul className="menu p-4 w-80 bg-base-100 text-base-content">

//                         <li><Link to='/dashboard'>My Appointments</Link></li>

//                         {
//                             isAdmin && <>
//                                 <li><Link to='/dashboard/allusers'>All Users</Link></li>
//                                 <li><Link to='/dashboard/adddoctor'>Add a Doctor</Link></li>
//                                 <li><Link to='/dashboard/managedoctor'>Manage Doctor</Link></li>
//                             </>
//                         }


//                     </ul>
//                 </div>
//             </div>