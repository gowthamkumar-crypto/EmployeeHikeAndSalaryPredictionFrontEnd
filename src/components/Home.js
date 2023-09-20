import { NavBar } from "./NavBar"
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';

const Home = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
        <NavBar />
        <div style={{top: '15rem', position: 'relative', display: 'flex', justifyContent: 'space-evenly', marginBottom: '20px'}}>
            <label>cirlce 1</label>
            <label>cricle 2</label>
        </div>
            <div className='social-icon' style={{top: '15rem', position: 'relative', display: 'flex', justifyContent: 'space-evenly'}}>
                <a style={{width: '15rem', height: '15rem', textDecoration: 'none', color: 'white'}} href='#'><imag src={navIcon1} alt="" />abc</a>
                <a style={{width: '15rem', height: '15rem', textDecoration: 'none', color: 'white'}} href='#'><imag src={navIcon2} alt="" />edf</a>
            </div>
        </div>
    )
}

export default Home;