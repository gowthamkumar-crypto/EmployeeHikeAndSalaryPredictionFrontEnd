import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const  navigate = useNavigate();

    const [data, setData] = useState({
        username: '',
        password: ''
    });

    const { username, password } = data;

    const onInputChange = (e) => {
      setData({
        ...data,
        [e.target.name]: e.target.value
      })
    }

    const onSubmit = (e) => {
        axios.post('http://127.0.0.1:5000/login', {
            username, password
        }).then((res) => {
            if(res.status = 'SUCCESS')
            navigate('/home');
            else
            alert('login failed')
        })
    }

    return (
        <>
        <h1 style={{display: 'flex', justifyContent: 'center', marginTop: '30px'}}>Employee Salary Prediction Analytics</h1>
        <div className="row" style={{position: 'absolute', top: '18rem', left: '56rem', background: 'white', width: '25%', borderRadius: '10px'}}>
            <label style={{color: 'black', marginTop: '3rem'}}>Username</label>
            <input style={{width: '75%', margin: '0 20px 20px', color: 'black'}} type="username" name="username" onChange={onInputChange} value={username}></input>
            <label style={{color: 'black'}}>Password</label>
            <input style={{width: '75%', margin:'0 20px 20px', color: 'black'}} type="password" name="password" onChange={onInputChange} value={password}></input>
            <div style={{display: 'flex', justifyContent: 'space-around', marginBottom: '10px'}}>
            <button style={{border: '1px solid blue', color: 'white', width: '20%', borderRadius: '10px', backgroundColor: 'blue', height: '4rem'}} type="submit" onClick={onSubmit}>Submit</button>
            <button style={{border: '1px solid blue', color: 'white', width: '20%', borderRadius: '10px', backgroundColor: 'blue', height: '4rem'}}  onClick={{}}>Forgot Password</button>
            </div>
        </div>
        </>
    )
}

export default Login;