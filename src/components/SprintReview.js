import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import { NavBar } from "./NavBar";
import axios from "axios";
import { Form } from 'react-bootstrap';
import NumberInputIntroduction from "./NumberInput";

const SprintReview = () => {

    const [options, setOptions] = useState([]);
    const [data, setData] = useState({
      empNameId:'',
      workingHours: 0,
      jobInvolvement: 0,
      overTime: 0,
      assignedStoryPoints: 0,
      spillOverStoryPoints: 0,
      actualWorkingHours: 0,
      clientRecognition: '',
      companyValues: '',
      sprintStartDate:'',
      sprintEndDate:''
    });

    const onInputChange = ( event , value) => {;
     if(value.length > 2){
        axios.post(`http://127.0.0.1:5000/sprint/review/search/${value}`).then((res)=>{
        if(res.data.length > 0){
          let modData = res.data.map((item,index)=>({
            label:item,id:index
          }));
          setOptions([...modData])
        }   
        });
     }
    }


    const handleValue = (e) => {
      e.preventDefault();
    setData({
      ...data, [e.target.name]: e.target.value
    });
    }

    const {empNameId, workingHours, jobInvolvement, overTime, assignedStoryPoints, spillOverStoryPoints, actualWorkingHours, clientRecognition, companyValues } = data;

    const sprintReview = () => {
      axios.post('http://127.0.0.1:5000/sprint/review', {
        empNameId,
        totalWorkingHours:workingHours,
        jobInvolvement,
        overTime,
        assignedStoryPoints,
        spillOverStoryPoints,
        actualWorkingHours,
        sprintStartDate:data.sprintStartDate,
        sprintEndDate:data.sprintEndDate,
        achivements:clientRecognition,
        coreValues:companyValues,
      }).then(result => {
        alert('data saved successfully')
      })
        .catch(error => {
          alert('service error')
          console.log(error)
        })
  }


    return (
        <>
        <NavBar></NavBar>
        <div class="row" style={{marginTop: '10%', marginLeft: '5%' }}>
          <div class="col-4 customPadding" style={{marginTop: '1.5rem'}}>
        <Autocomplete
        options={options}
        onInputChange={onInputChange}
        style={{ width: 300, background: 'white', position: 'relative', borderRadius: '10px'  }}
        renderInput={(params) => (
          <TextField {...params} label="Enter employee name" variant="outlined" name="empNameId" onBlur={e=>handleValue(e)}/>
        )}
      />
      </div>
      </div>
      <div class="row" style={{marginTop: '20px', marginLeft: '5%'}}>
      <div class="form-group col-3 customPadding">
          <Form.Label>Sprint Start Date</Form.Label>
          <Form.Control type="date" name="sprintStartDate" placeholder="Sprint Start Date" onChange={e => handleValue(e)}/>
        </div>
        <div class="form-group col-3 customPadding">
          <Form.Label>Sprint End Date</Form.Label>
          <Form.Control type="date" name="sprintEndDate" placeholder="Sprint End Date" onChange={e => handleValue(e)}/>
        </div>
        <div class="form-group col-3 customPadding">
        <Form.Label>Total working hours</Form.Label>
        <NumberInputIntroduction min={0} max={80} onNumberChange={(value) => {
          setData({...data, workingHours: value })}} value={workingHours}/>
        </div>
      </div>
      <div class="row" style={{marginTop: '20px', marginLeft: '5%'}}>
      <div class="form-group col-3 customPadding" style={{marginTop: '1.5rem'}}>
      <Form.Label>Employee Job Involvement Rating(0-4)</Form.Label>
        <NumberInputIntroduction min={0} max={4} onNumberChange={(value) => {
          setData({...data, jobInvolvement: value })}} value={jobInvolvement}/>
        </div>
        <div class="form-group col-3 customPadding" style={{marginTop: '1.5rem'}}>
        <Form.Label>Over Time hours</Form.Label>
        <NumberInputIntroduction min={0} max={40} onNumberChange={(value) => {
          setData({...data, overTime: value })}} value={overTime}/>
        </div>
        <div class="form-group col-3 customPadding" style={{marginTop: '1.5rem'}}>
        <Form.Label>Assigned Story Points(0-8)</Form.Label>
        <NumberInputIntroduction min={0} max={8} onNumberChange={(value) => {
          setData({...data, assignedStoryPoints: value })}} value={assignedStoryPoints}/>
        </div>
      </div>
      <div class="row" style={{marginTop: '20px', marginLeft: '5%'}}>
      <div class="form-group col-3 customPadding" style={{marginTop: '1.5rem'}}>
        <Form.Label>Spillover Story Points</Form.Label>
        <NumberInputIntroduction min={0} max={8} onNumberChange={(value) => {
          setData({...data, spillOverStoryPoints: value })}} value={spillOverStoryPoints}/>
        </div>
        <div class="form-group col-3 customPadding" style={{marginTop: '1.5rem'}}>
        <Form.Label>Actual working hours</Form.Label>
        <NumberInputIntroduction min={0} max={80} onNumberChange={(value) => {
          setData({...data, actualWorkingHours: value })}} value={actualWorkingHours}/>
        </div>
        <div class="form-group col-3 customPadding">
        <Form.Label>Client Recognition</Form.Label>
        <select name="clientRecognition" value={clientRecognition}  onChange={e => handleValue(e)} style={{color:'black', width:'99%', height:'58%', marginTop:'3%'}}>
                                <option value="">Client Recognition</option>
                                <option value="yes">yes</option>
                                <option value="no">no</option>
        </select>
        </div>  
      </div>
      <div class="row" style={{marginTop: '20px', marginLeft: '5%'}}>
      <Form.Label>Adhere client and company values</Form.Label>
      <div class="form-group col-3 customPadding">
        <select name="companyValues" value={companyValues} onChange={e => handleValue(e)} style={{color:'black', width:'100%', height:'200%'}}>
                                <option value="">Company Values</option>
                                <option value="yes">yes</option>
                                <option value="no">no</option>
        </select>
        </div>  
        </div>
        <div class="row" style={{marginTop: '20px', marginLeft: '5%'}}>
        <button type="submit" class="btn" style={{background:"white",width:"16rem"}} onClick={sprintReview} >Submit</button>
        </div>
      </>
    )

}

export default SprintReview;