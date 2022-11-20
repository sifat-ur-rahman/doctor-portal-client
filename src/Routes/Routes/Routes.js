import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import ManageDoctor from "../../Pages/Dashboard/ManageDoctor/ManageDoctor";

import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
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
                path: '/appointment',
                element: <Appointment></Appointment>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout> </PrivateRoute>,
        children:[
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allUsers',
                element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
            },
            {
                path: '/dashboard/addDoctor',
                element: <AdminRoutes><AddDoctor></AddDoctor> </AdminRoutes>
            },
            {
                path: '/dashboard/manageDoctor',
                element: <AdminRoutes><ManageDoctor></ManageDoctor> </AdminRoutes>
            },
        ]
    }
])

export default router;