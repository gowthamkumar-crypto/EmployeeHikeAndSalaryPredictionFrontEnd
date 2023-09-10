import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import { NavBar } from "./NavBar";
import axios from "axios";

const SprintReview = () => {

    const [options, setOptions] = useState([]);

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
        style={{ width: 300, background: 'white', top: '25rem', left: '25rem', position: 'relative', borderRadius: '10px'  }}
        renderInput={(params) => (
          <TextField {...params} label="Enter employee name" variant="outlined" />
        )}
      />
      </>
    )

}

export default SprintReview;