import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { Boton } from "../Utils/Boton";
import { Triangle } from "../Utils/Triangle";

export default function ValidateUser() {
    const { token } = useParams();  
    const verificar = async (token) =>{
       await axios.get(`https://qatarbets-backend-production.up.railway.app/validate/verify/${token}`);
    }   
    useEffect(() => {
        verificar(token); 
    }, [])
    
    
    return(
        <div className="flex flex-col items-center justify-center h-screen w-full bg-gradient-to-b from-morado to-moradosec">
            <svg width="100" height="100" viewBox="0 0 217 224" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 97.6386C0 37.1908 46.4171 7.62939e-05 108.25 7.62939e-05C170.134 7.62939e-05 216.5 37.1908 216.5 97.6386C216.5 176.665 140.745 223.162 108.25 223.162C75.7886 223.162 0 176.665 0 97.6386Z" fill="url(#paint0_linear_545_1420)"/>
                <path d="M49.2665 130.299C49.2665 54.7093 92.5937 26.5014 106.481 26.5014C120.42 26.5014 163.73 54.7093 163.73 130.299C163.73 167.524 142.05 190.747 106.481 190.747C70.9301 190.747 49.2665 167.524 49.2665 130.299Z" fill="#FF003F"/>
                <defs>
                    <linearGradient id="paint0_linear_545_1420" x1="108.25" y1="223.162" x2="108.25" y2="7.62939e-05" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white"/>
                        <stop offset="1" stop-color="#6C1A2F" stop-opacity="0"/>
                    </linearGradient>
                </defs>
            </svg>
            <div className="flex mt-2 mb-5">
                <Triangle />
                <h1 className="text-3xl text-white font-fifa px-2 font-medium m-1">404 NOT FOUND</h1>  
                <Triangle />
            </div>
            <div className=" text-xl text-white text-justify font-parrafo mb-10">
                <p>¡Felicitaciones! Ya has validado tu cuenta, puedes loguearte correctamente.</p>
            </div>
            <Link to="/login">
                <Boton  name="Loguear" />
            </Link>
        </div>
    )
}

