import { GoogleLogout } from 'react-google-login';
import React, { useState, useEffect  } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { logoutUser } from '../../redux/actions/userAtions/authServiceActions';
import { useDispatch, useSelector } from "react-redux";

export default function LogoutUser(){
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(logoutUser())

    }, [dispatch]);
    return (
    <div>
        <GoogleLogout
        clientId={clientId}
        buttonText={"Logout"}
        onLogoutSuccess={logoutSuccess}/>
    </div>   
    )
}