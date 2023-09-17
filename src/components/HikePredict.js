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
          let modData = [];
          res.data.map((item,index)=>{
            modData.push({label:item,id:index})
          });
          setOptions([...modData])
        }   
        });
     }
    }

    return (
        <>
        <NavBar></NavBar>
            <Autocomplete
            options={options}
            onInputChange={onInputChange}
            style={{ width: 300, background: 'white', top: '25rem', left: '16%', position: 'relative', borderRadius: '10px'  }}
            renderInput={(params) => (
              <TextField {...params} label="Enter employee name" variant="outlined" />
            )}
          />
      <div class="form-group col-3 customPadding" style={{marginTop: '300px', marginLeft: '15%'}}>
        <Form.Label>Employee Environment Satisfaction</Form.Label>
        <NumberInputIntroduction min={0} max={80} />
      </div>
      <div class="form-group col-3 customPadding" style={{marginTop: '10px', marginLeft: '15%'}}>
        <Form.Label>Employee Last Salary Hike Percent</Form.Label>
        <NumberInputIntroduction min={0} max={80}/>
      </div>
      <div class="form-group col-3 customPadding" style={{marginTop: '10px', marginLeft: '15%'}}>
        <Form.Label>Employee Work Life Balance(as per your conversation with employee)</Form.Label>
        <NumberInputIntroduction min={0} max={80}/>
      </div>
      <div class="form-group col-3 customPadding" style={{marginTop: '10px', marginLeft: '15%'}}>
        <Form.Label>Experience Years In Our Company</Form.Label>
        <NumberInputIntroduction min={0} max={80}/>
      </div>
      <div class="form-group col-3 customPadding" style={{marginTop: '10px', marginLeft: '15%'}}>
        <Form.Label>Experience Years In Current Role</Form.Label>
        <NumberInputIntroduction min={0} max={80}/>
      </div>
      <div class="form-group col-3 customPadding" style={{marginTop: '10px', marginLeft: '15%'}}>
        <Form.Label>Years Since Last Promotion</Form.Label>
        <NumberInputIntroduction min={0} max={80}/>
      </div>
      <div class="form-group col-3 customPadding" style={{marginTop: '10px', marginLeft: '15%'}}>
        <Form.Label>Years With Current Manager</Form.Label>
        <NumberInputIntroduction min={0} max={80}/>
      </div>
      </>
    )

}

export default HikePredict