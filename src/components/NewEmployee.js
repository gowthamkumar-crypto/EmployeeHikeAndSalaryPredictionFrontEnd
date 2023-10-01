import React from 'react';
import { NavBar } from './NavBar';
import { Form } from 'react-bootstrap';
import { useState } from "react";
import axios from 'axios';
import { useEffect } from 'react';

export const NewEmployee = () =>{

    const [roles,setRoles]=useState([])
    const [levelData,setLevelData] = useState([1,2]);


    const [data, setData] = useState({
        age: '', education: '', job: '', level: '', experience: '', firstName: '', lastName: '', email: '',
        gender: '',location: '', prevSalary: '', salaryPredicted: ''
    })

const { firstName, lastName, age, education, job, level, experience, email, gender, location, prevSalary, salaryPredicted} = data;
    const handleValue = (e) => {
        e.preventDefault();
      setData({
        ...data, [e.target.name]: e.target.value
      });
      if(e.target.name === 'job' && e.target.value === 'SDE'){
        setLevelData([1,2,3,4]);
      }else{
        setLevelData([1,2])
      }
      }

    const predictSalary = (e) => {
        e.preventDefault()
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
          setData({...data, salaryPredicted: result.data.employeeData.predictedSalary})
        })
          .catch(error => {
            alert('service error')
            console.log(error)
          })
    }

    useEffect(()=>{
        axios.get("http://127.0.0.1:5000/roles").then(response => {setRoles(response.data.roles);})
        .catch(error => {console.error('Error fetching roles list', error);});
    },[]);
      
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
                    {/* <div class="row">
                        <div className="dropdown">
                            <label for="education">Education</label>
                            <br></br>
                            <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" name="education" value={education} style={{width:'10%'}}>{education}
                            </button>
                            <ul class="dropdown-menu" onChange={e => handleValue(e)}>
                            <li>Bachelor's</li>
                            <li>Masters's</li>
                            <li>Phd</li>
                            </ul>
                        </div>
                    </div>   */}
                    <div class="row">
                        <div class="form-group col-md-4">
                            <label for="education">Education</label>
                            <br></br>
                            <select name="education" id="education" onChange={e => handleValue(e)} value={education} style={{color:'black', width:'100%', height:'80%'}}>
                                <option>Select Education</option>
                                <option value="Bachelor's">Bachelor's</option>
                                <option value="Masters's">Master's</option>
                                <option value="Phd">Phd</option>
                            </select>
                        </div>
                    </div>    
                    <div class="row">
                        <div class="form-group col-md-4">
                            <label for="gender">Gender</label>
                            <br></br>
                            <select name="gender" id="gender" onChange={e => handleValue(e)} value={gender} style={{color:'black', width:'100%', height:'80%'}}>
                                <option>Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-4">
                            <label for="location">Location</label>
                            <br></br>
                            <select name="location" id="location" onChange={e => handleValue(e)} value={location} style={{color:'black', width:'100%', height:'80%'}}>
                                <option>Select Location</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Pune">Pune</option>
                                <option value="Banglore">Banglore</option>
                                <option value="Hyderabad">Hyderabad</option>
                                <option value="Gurgaon">Gurgaon</option>
                                <option value="Mumbai">Mumbai</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-4">
                            <label for="firstName">Previous Salary</label>
                            <input type="number" class="form-control" name="prevSalary"  placeholder="Enter Previous Salary" onChange={e => handleValue(e)} value={prevSalary}/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-4">
                            <label for="location">Role</label>
                            <br></br>
                            <select name="job" id='job' onChange={e => handleValue(e)} value={job} style={{color:'black', width:'100%', height:'80%'}}>
                                {
                                    roles.map((role,index)=>(
                                        <option key={index} value={role}>
                                            {role}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>  
                    <div class="row">
                        <div class="form-group col-md-4">
                            <label for="level">Level</label>
                            <br></br>
                            <select name="level" id="level" onChange={e => handleValue(e)} value={level} style={{color:'black', width:'100%', height:'80%'}}>
                                <option>Select Level</option>
                                {levelData.map(item => <option value={item}>{item}</option>)}
                            </select>
                        </div>
                    </div> 
                    <div class="row">
                        <div class="form-group col-md-4">
                            <label for="experience">Experience</label>
                            <input type="number" class="form-control" name="experience"  placeholder="Enter Previous experience" onChange={e => handleValue(e)} value={experience}/>
                        </div>
                    </div>
                <br></br>
                <button type="submit" class="btn btn-primary" onClick={predictSalary}>Submit</button>
                <span className='salary-predicted-navbar-text'>
          {salaryPredicted && <div className='salary-predicted-icon'>
                <span>{salaryPredicted}</span>
            </div>}
          </span>
            </form>
        </div>
    )
}