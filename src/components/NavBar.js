import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import logo from '../assets/img/logo.svg';

export const NavBar = (props) => {
    const [scrolled,seScrolled] = useState(false);
    const navigate = useNavigate();
    const [allowedRoutes, setAllowedRoutes] = useState([])
    useEffect(()=>{
        const onScroll = () => {
            if(window.scrollY > 50){
                seScrolled(true);
            }else{
                seScrolled(false);
            }
        }
        window.addEventListener("scroll",onScroll);
        console.log("NavBar Props::::: ", props)
        
        setAllowedRoutes(localStorage.getItem("allowedRoutes"));
        
        return () => window.removeEventListener("scroll",onScroll)
    },[])


  return (
    <Navbar expand="lg" className={scrolled ? "scrolled":""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <span className='navbar-toggler-icon'></span>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='navbar-link' onClick={()=> navigate('/home')}>Home</Nav.Link>
            {allowedRoutes.indexOf('/Employee') > -1 ? <Nav.Link className='navbar-link' onClick={()=> navigate('/Employee')}>Employee</Nav.Link> : <></>}
            {allowedRoutes.indexOf('/hikePredict') > -1 ? <Nav.Link className='navbar-link' onClick={()=> navigate('/hikePredict')}>Hike Predict</Nav.Link> : <></>}
            {allowedRoutes.indexOf('/sprintReview') > -1 ? <Nav.Link className='navbar-link' onClick={()=> navigate('/sprintReview')}>Sprint Review</Nav.Link> : <></>}
          </Nav>
          <button class="btn" style={{border: '1px solid white', padding: '8px', color: 'white'}} onClick={() => navigate('/')}>Log Out</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}