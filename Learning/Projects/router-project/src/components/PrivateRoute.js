import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const PrivateRoute = ({isLoggedIn, children}) => {
  
    // const navigate = useNavigate();
    if(isLoggedIn){
        return children
        //and the children here is the Dashboard, means Dashboard mil jayega
    }
    return (
        <Navigate to="/login"></Navigate>
    );
}

export default PrivateRoute