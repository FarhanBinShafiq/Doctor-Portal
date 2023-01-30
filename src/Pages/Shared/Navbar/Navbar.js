import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Navbar = () => {



    //signout state
    const { user, logOut } = useContext(AuthContext);

    const logout = () => {
        logOut()
    };



    const menuItems =
        <>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/appointments'>Appointment</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
            {user?.uid ?
                <>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    <li> <button onClick={logout} className='btn btn-ghost'>Sign Out</button> </li>
                </>
                : <li><Link to='/login'>Login</Link></li>}
        </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Doctors Portal</a>
                </div>
                <div className="navbar-cente  hidden lg:flex">
                    <ul className="menu menu-horizontal  bg-base-100   rounded-box">
                        {menuItems}
                    </ul>
                </div>

                <label tabindex="2" htmlFor="dashboard-drawer" className="btn btn-ghost ml-8 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>

            </div>
        </div>
    );
};

export default Navbar;