import { NavBar } from "./NavBar"
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';

const Home = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
        <NavBar />
        <div style={{top: '15rem', position: 'relative', display: 'flex', justifyContent: 'space-evenly', marginBottom: '20px'}}>
            <label style={{fontSize:'2rem'}}>Accuracy of Employee Hike Prediction</label>
            <label style={{fontSize:'2rem'}}>Accuracy of Employee Salary Prediction</label>
        </div>
            <div className='social-icon' style={{top: '15rem', position: 'relative', display: 'flex', justifyContent: 'space-evenly'}}>
                <a style={{width: '15rem', height: '15rem', textDecoration: 'none', color: 'white', fontSize:'5rem',marginRight:'13rem'}} href='#'><imag src={navIcon1} alt="" />93%</a>
                <a style={{width: '15rem', height: '15rem', textDecoration: 'none', color: 'white', fontSize:'5rem'}} href='#'><imag src={navIcon2} alt="" />96%</a>
            </div>
            <div>
                <label style={{top: '27rem', position: 'relative', display: 'flex', justifyContent: 'space-evenly', marginBottom: '20px', fontSize:'2rem'}}>Your time is limied and your efforts are precious. Don't let your time and efforts go unrecognized</label>
                <label style={{top: '27rem', position: 'relative', display: 'flex', justifyContent: 'space-evenly', marginBottom: '20px', fontSize:'2rem', marginLeft:'96rem'}}> - Steve Jobs</label>
            </div>
        </div>
    )
}

export default Home;