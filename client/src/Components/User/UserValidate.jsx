import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch} from 'react-redux';
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { Boton } from "../Utils/Boton";

export default function ValidateUser() {
    const { token } = useParams();

    const verificar = async (token) =>{
       await axios.get(`http://localhost:3001/validate/verify/${token}`);
    }


     useEffect(() => {
        verificar(token); 
    }, [])
     
     
     return(
        <div>
            <p>Felicitaciones!!! Ya has validado tu cuenta, puedes loguearte correctamente.</p>
            <Link to="/login">
                <Boton name="Logueate"/>
            </Link>
        </div>
     )
  }

