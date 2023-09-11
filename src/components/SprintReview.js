import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import { NavBar } from "./NavBar";
import axios from "axios";
import { Form } from 'react-bootstrap';
import NumberInputIntroduction from "./NumberInput";

const SprintReview = () => {

    const [options, setOptions] = useState([]);
    const [data, setData] = useState({
      empId: '',
      projectId: '',
      workingHours: 0,
      jobInvolvement: 0,
      overTime: 0,
      assignedStoryPoints: 0,
      spillOverStoryPoints: 0,
      actualWorkingHours: 0,
      clientRecognition: '',
      companyValues: '',
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

    const { empId, projectId, workingHours, jobInvolvement, overTime, assignedStoryPoints, spillOverStoryPoints, actualWorkingHours, clientRecognition, companyValues } = data;

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
          <TextField {...params} label="Enter employee name" variant="outlined" />
        )}
      />
      </div>
      <div class="col-3 customPadding">
        <label for="empId">Emp Id</label>
        <input type="text" class="form-control" name="empId" disabled value={empId}/>
      </div>
      <div class="col-3 customPadding">
        <label for="projectId">Project Id</label>
        <input type="text" class="form-control" name="projectId" disabled value={projectId}/>
      </div>
      </div>
      <div class="row" style={{marginTop: '20px', marginLeft: '5%'}}>
      <div class="form-group col-3 customPadding">
          <Form.Label>Sprint Start Date</Form.Label>
          <Form.Control type="date" name="startDate" placeholder="Sprint Start Date" onChange={e => handleValue(e)}/>
        </div>
        <div class="form-group col-3 customPadding">
          <Form.Label>Sprint End Date</Form.Label>
          <Form.Control type="date" name="endDate" placeholder="Sprint End Date" onChange={e => handleValue(e)}/>
        </div>
        <div class="form-group col-3 customPadding" style={{marginTop: '1.5rem'}}>
        <NumberInputIntroduction min={0} max={80} onNumberChange={(value) => {
          setData({...data, workingHours: value })}} value={workingHours}/>
        </div>
      </div>
      <div class="row" style={{marginTop: '20px', marginLeft: '5%'}}>
      <div class="form-group col-3 customPadding" style={{marginTop: '1.5rem'}}>
        <NumberInputIntroduction min={0} max={4} onNumberChange={(value) => {
          setData({...data, jobInvolvement: value })}} value={jobInvolvement}/>
        </div>
        <div class="form-group col-3 customPadding" style={{marginTop: '1.5rem'}}>
        <NumberInputIntroduction min={0} max={40} onNumberChange={(value) => {
          setData({...data, overTime: value })}} value={overTime}/>
        </div>
        <div class="form-group col-3 customPadding" style={{marginTop: '1.5rem'}}>
        <NumberInputIntroduction min={0} max={8} onNumberChange={(value) => {
          setData({...data, assignedStoryPoints: value })}} value={assignedStoryPoints}/>
        </div>
      </div>
      <div class="row" style={{marginTop: '20px', marginLeft: '5%'}}>
      <div class="form-group col-3 customPadding" style={{marginTop: '1.5rem'}}>
        <NumberInputIntroduction min={0} max={8} onNumberChange={(value) => {
          setData({...data, spillOverStoryPoints: value })}} value={spillOverStoryPoints}/>
        </div>
        <div class="form-group col-3 customPadding" style={{marginTop: '1.5rem'}}>
        <NumberInputIntroduction min={0} max={80} onNumberChange={(value) => {
          setData({...data, actualWorkingHours: value })}} value={actualWorkingHours}/>
        </div>
        <div class="form-group col-3 customPadding">
        <select name="clientRecognition"  onChange={e => handleValue(e)} value={clientRecognition} style={{color:'black', width:'100%', height:'80%'}}>
                                <option>Client Recognition</option>
                                <option value="yes">yes</option>
                                <option value="no">no</option>
        </select>
        </div>  
      </div>
      <div class="row" style={{marginTop: '20px', marginLeft: '5%'}}>
      <div class="form-group col-3 customPadding">
        <select name="companyValues"  onChange={e => handleValue(e)} value={companyValues} style={{color:'black', width:'100%', height:'100%'}}>
                                <option>Adhere client and company values</option>
                                <option value="yes">yes</option>
                                <option value="no">no</option>
        </select>
        </div>  
        </div>
      </>
    )

}

export default SprintReview;