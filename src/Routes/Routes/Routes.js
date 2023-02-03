import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home"
import Login from "../../Pages/Login/Login";
import SignUp from '../../Pages/Login/SignUp';
import Appointment from "../../Pages/Appointments/Appointments";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../../Layout/DashboardLayout";
import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment";
import AllUser from "../../Pages/Dashboard/AllUser/AllUser";
import AdminRoute from "../AdminRoute/AdminRoute";
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor";
import ManageDoctor from "../../Pages/Dashboard/ManageDoctor/ManageDoctor";
import About from "../../Pages/About/About";
import Doctors from "../../Pages/Doctors/Doctors";
 

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
         
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/appointments',
                element: <Appointment></Appointment>
            },
            {
                path: '/aboutus',
                element: <About></About>
            },
            {
                path: '/doctors',
                element: <Doctors></Doctors>
            }
            
            
        ]
    },

    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUser></AllUser></AdminRoute>
            },
            {
                path: '/dashboard/adddoctor',
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path: '/dashboard/managedoctor',
                element: <AdminRoute><ManageDoctor></ManageDoctor></AdminRoute>
            }
           
        ]

    }
])


export default router;