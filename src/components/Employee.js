import React from 'react';
import { NavBar } from './NavBar';
import {useNavigate} from 'react-router-dom';
// import { useHistory } from 'react-router-dom';


export const Employee = () =>{
    const navigate = useNavigate();
    // const history = useHistory();
    const handleButtonClick = () => {
        navigate('/NewEmployee')
      };
    return(
        <div>
            <NavBar></NavBar>
            <div style={{display:'flex', marginTop:'15%', justifyContent:'space-evenly'}}>
                <button type="button" className="btn btn-primary" onClick={handleButtonClick}>Add New Employee</button>
            </div>
        </div>
    )
}