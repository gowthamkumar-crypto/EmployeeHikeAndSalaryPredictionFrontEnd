import React from 'react';
import { NavBar } from './NavBar';
import { Form } from 'react-bootstrap';
import { useState } from "react";
import axios from 'axios';
// import {useNavigate} from 'react-router-dom';

export const NewEmployee = () =>{
    const [data, setData] = useState({
        age: '', education: '', job: '', level: '', experience: '', firstName: '', lastName: '', email: '',
        gender: '',location: '', prevSalary: '', salaryPredicted: ''
    })

const { firstName, lastName, age, education, job, level, experience, email, gender, location, prevSalary, salaryPredicted} = data;
    const handleValue = (e) => {
        e.preventDefault();
      setData({
        ...data, [e.target.name]: e.target.value
      })
      }

    const predictSalary = () => {
        axios.post('http://127.0.0.1:5000/predict/salary', {
            Age:age,
            Education_Level:education,
            Job_Title:job,
            Level:level,
            Years_of_Experience:experience,
            first_name:firstName,
            last_name:lastName,
            email:email,
            gender:gender,
            Location:location,
            Prev_Salary:prevSalary
        }).then(result => {
          console.log(result.data)
          alert('success')
          setData({...data, salaryPredicted: result.data})
        })
          .catch(error => {
            alert('service error')
            console.log(error)
          })
    }
      
    return(
        <div>
            <NavBar></NavBar>
            <form style={{marginTop:'10%'}}>
                <div class="row">
                    <div class="form-group col-md-6">
                        <label for="firstName">First Name</label>
                        <input type="text" class="form-control" name="firstName"  placeholder="Enter First Name" onChange={e => handleValue(e)} value={firstName}/>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="lastName">Last Name</label>
                        <input type="text" class="form-control" name="lastName" placeholder="Enter Last Name" onChange={e => handleValue(e)}/>
                    </div>
                    </div>
                    <div class="row">
                    <div class="form-group col-md-6">
                        <label for="email">Email address</label>
                        <input type="email" class="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={e => handleValue(e)}/>
                    </div>
                    </div>
                    <div class="row">
                    <div class="form-group col-md-4">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control type="date" name="age" placeholder="Date of Birth" onChange={e => handleValue(e)}/>
                    </div>
                    </div>
                    <div class="row">
                    <div className="dropdown" style={{width:'20%'}}>
                        <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" name="education" value={education} >{education}
                        </button>
                        <ul class="dropdown-menu" onChange={e => handleValue(e)}>
                        <li>Bachelor's</li>
                        <li>Masters's</li>
                        </ul>
                    </div>
                </div>         
                <br></br>
                <button type="submit" class="btn btn-primary" onClick={predictSalary}>Submit</button>
            </form>
        </div>
    )
}