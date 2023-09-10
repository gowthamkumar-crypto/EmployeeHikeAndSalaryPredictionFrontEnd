import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
// import { Employee } from './Employee';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled,seScrolled] = useState(false);
    const navigate = useNavigate();
    useEffect(()=>{
        const onScroll = () => {
            if(window.scrollY > 50){
                seScrolled(true);
            }else{
                seScrolled(false);
            }
        }
        window.addEventListener("scroll",onScroll);
        return () => window.removeEventListener("scroll",onScroll)
    },[])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }
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
            <Nav.Link className={activeLink==='home' ? 'active navbar-link':'navbar-link'} onClick={()=> navigate('/')}>Home</Nav.Link>
            <Nav.Link className={activeLink==='employee' ? 'active navbar-link':'navbar-link'} onClick={()=> navigate('/Employee')}>Employee</Nav.Link>
            <Nav.Link className={activeLink==='hike_pred' ? 'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('hike_pred')}>Hike Predict</Nav.Link>
            <Nav.Link className={activeLink==='review' ? 'active navbar-link':'navbar-link'} onClick={()=> navigate('/sprintReview')}>Sprint Review</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href='#'><imag src={navIcon1} alt="" /></a>
                <a href='#'><imag src={navIcon2} alt="" /></a>
                <a href='#'><imag src={navIcon3} alt="" /></a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}