import React from 'react';
import { NavBar } from './NavBar';
import {useNavigate} from 'react-router-dom';


export const Employee = () =>{
    const navigate = useNavigate();
    return(
        <div>
            <NavBar></NavBar>
            <div style={{display:'flex', marginTop:'15%', justifyContent:'space-evenly'}}>
                <button type="button" className="btn btn-primary" onClick={() => navigate('/NewEmployee')}>Add New Employee</button>
                <button type="button" className="btn btn-primary" onClick={() => navigate('/HireEmployee')}>Hire New Employee</button>
            </div>
        </div>
    )
}