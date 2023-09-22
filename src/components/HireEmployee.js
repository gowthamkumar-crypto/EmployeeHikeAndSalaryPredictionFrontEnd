import { useState } from "react";
import { NavBar } from "./NavBar";
import axios from "axios";
import { Autocomplete, TextField } from "@mui/material";

const HireEmployee = () => {
    const [options, setOptions] = useState([]);
    const [data, setData] = useState({
      cid: '243',
      name: 'iui',
      predictedSalary: '9090'
    });

    const {cid, name, predictedSalary } = data;

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

       const populateData = (e) => {
        e.preventDefault();
        axios.post(`http://127.0.0.1:5000/sprint/review/search/${e.targetvalue}`).then((res)=>{
          setData(res.data) 
          });
       }
    return (
        <>
        <NavBar></NavBar>
        <div class="row" style={{position: 'relative', top: '20rem', marginLeft: '7rem'}}>
        <Autocomplete
        options={options}
        onInputChange={onInputChange}
        style={{ width: 300, background: 'white', position: 'relative', borderRadius: '10px'  }}
        renderInput={(params) => (
          <TextField {...params} label="Enter employee name" variant="outlined" name="empNameId" onBlur={e=>populateData(e)}/>
        )}
      />
        </div>
        <div class="row" style={{position: 'relative', top: '28rem', marginLeft: '5rem'}}>
            {cid && 
            <div class="col-4" style={{margin: '0 10px', color: 'black', width: '20rem', display: 'grid'}}>
            <label style={{color: 'white'}}>Candidate ID</label>
            <input style={{width: '100%',  height: '4rem'}} disabled value={cid}/>
            </div>
            }
            {name && 
            <div class="col-4" style={{margin: '0 10px', color: 'black', width: '20rem'}}>
            <label style={{color: 'white'}}>Candidate name</label>
            <input style={{width: '100%',  height: '4rem'}} disabled value={name} />
            </div>
            }
            {predictedSalary && 
            <div class="col-4" style={{margin: '0 10px', color: 'black', width: '20rem'}}>
            <label style={{color: 'white'}}>Predicted Salary</label>
            <input style={{width: '100%',  height: '4rem'}} disabled value={predictedSalary} />
            </div>
            }
        </div>
        <div style={{position: 'relative', top: '32rem', marginLeft: '7rem'}}>
        <button type="button" className="btn btn-primary" onClick={() => {}} style={{fontSize: '1.5rem'}}>Submit</button>
        </div>
        </>
    )
}

export default HireEmployee;