import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import { NavBar } from "./NavBar";
import axios from "axios";
import NumberInputIntroduction from "./NumberInput";
import { Form } from 'react-bootstrap';

const HikePredict = () => {

    const [options, setOptions] = useState([]);
    const [data, setData] = useState({
      EmpEnvironmentSatisfaction: 0,
      EmpWorkLifeBalance: 0,
      ExperienceYearsAtThisCompany: 0,
      ExperienceYearsInCurrentRole: 0,
      YearsSinceLastPromotion: 0,
      YearsWithCurrManager: 0
    });
    const onInputChange = ( event , value) => {;
     if(value.length > 2){
        axios.post(`http://127.0.0.1:5000/sprint/review/search/${value}`).then((res)=>{
        if(res.data.length > 0){
          let modData = [];
          res.data.map((item,index)=>{
            modData.push({label:item,id:index})
          });
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
    console.log(e.target.value)
    }

    const {empNameId,EmpEnvironmentSatisfaction, EmpWorkLifeBalance, ExperienceYearsAtThisCompany, ExperienceYearsInCurrentRole, YearsSinceLastPromotion, YearsWithCurrManager, EmpLastSalaryHikePercent, HikePrediction } = data;

    const hike = () => {
      axios.post(`http://127.0.0.1:5000/hike/predict`, {
        empNameId,
        EmpEnvironmentSatisfaction,
        EmpLastSalaryHikePercent,
        EmpWorkLifeBalance,
        ExperienceYearsAtThisCompany,
        ExperienceYearsInCurrentRole, 
        YearsSinceLastPromotion,
        YearsWithCurrManager,
      }).then(result => {
        alert('data saved successfully')
        setData({...data, HikePrediction: result.data.hikePercentage})
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
        <div class="form-group col-3 customPadding" >
          <Form.Label>Employee Environment Satisfaction(0-4)</Form.Label>
          <NumberInputIntroduction min={0} max={4} onNumberChange={(value) => {
            setData({...data, EmpEnvironmentSatisfaction: value })}} value={EmpEnvironmentSatisfaction}/>
        </div>
        <div class="form-group col-3 customPadding" >
          <Form.Label>Employee Work Life Balance(0-4)</Form.Label>
          <NumberInputIntroduction min={0} max={80} onNumberChange={(value) => {
            setData({...data, EmpWorkLifeBalance: value })}} value={EmpWorkLifeBalance}/>
        </div>
        <div class="form-group col-3 customPadding">
          <Form.Label>Experience Years In Our Company</Form.Label>
          <NumberInputIntroduction min={0} max={60} onNumberChange={(value) => {
            setData({...data, ExperienceYearsAtThisCompany: value })}} value={ExperienceYearsAtThisCompany}/>
        </div>
      </div>
      <div class="row" style={{marginTop: '20px', marginLeft: '5%'}}>
        <div class="form-group col-3 customPadding">
          <Form.Label>Experience Years In Current Role</Form.Label>
          <NumberInputIntroduction min={0} max={80} onNumberChange={(value) => {
            setData({...data, ExperienceYearsInCurrentRole: value })}} value={ExperienceYearsInCurrentRole}/>
        </div>
        <div class="form-group col-3 customPadding">
          <Form.Label>Years Since Last Promotion</Form.Label>
          <NumberInputIntroduction min={0} max={80} onNumberChange={(value) => {
            setData({...data, YearsSinceLastPromotion: value })}} value={YearsSinceLastPromotion}/>
        </div>
        <div class="form-group col-3 customPadding">
            <Form.Label>Years With Current Manager</Form.Label>
            <NumberInputIntroduction min={0} max={80} onNumberChange={(value) => {
              setData({...data, YearsWithCurrManager: value })}} value={YearsWithCurrManager}/>
        </div>
        <div class="form-group col-3 customPadding">
            <Form.Label>Employee Last hike percentage</Form.Label>
            <NumberInputIntroduction min={0} max={80} onNumberChange={(value) => {
              setData({...data, EmpLastSalaryHikePercent: value })}} value={EmpLastSalaryHikePercent}/>
        </div>
      </div>
      <div class="row" style={{marginTop: '10px', marginLeft: '18%'}}>
        <button type="submit" class="btn" style={{background:"white",width:"21rem", marginLeft: '18%'}} onClick={hike} >Get Hike Prediction</button>
      </div>
      <span className='salary-predicted-navbar-text'>
          {HikePrediction && <div className='salary-predicted-icon'>
                <span>{HikePrediction}</span>
            </div>}
      </span>
      </>
    )

}

export default HikePredict