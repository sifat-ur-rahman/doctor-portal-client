import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useAdmin from '../../Hooks/UseAdmin';

const AdminRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)
    const location = useLocation()

    if(loading || isAdminLoading){
        return <progress className="progress mt-56 w-full"></progress>
    }
    if(user && isAdmin){
        return children
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default AdminRoutes;
