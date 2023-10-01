import { NavBar } from "./NavBar";
import { Autocomplete, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";

const EmployeeDelete = () => {

    const [options, setOptions] = useState([]);
    const [data, setData] = useState({
      cid: '54',
      name: 'gowtham kumar',
      predictedSalary: '1200000'
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
      <button type="button" className="btn btn-primary" onClick={() => {}} style={{fontSize: '1.5rem', marginTop:'2rem', width:'22rem'}}>Delete Employee</button>
      </div>
        </>
    )
}

export default EmployeeDelete;