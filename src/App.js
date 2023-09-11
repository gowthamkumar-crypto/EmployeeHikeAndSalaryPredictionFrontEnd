// import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Employee } from './components/Employee';
import { NewEmployee } from './components/NewEmployee';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SprintReview from './components/SprintReview';
import HikePredict from './components/HikePredict';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes >
          <Route path='/' element={<NavBar/>}/>
          <Route path='/Employee' element={<Employee/>}/>
          <Route path='/NewEmployee' element={<NewEmployee/>}/>
          <Route path='/sprintReview' element={<SprintReview />} />
          <Route path='/hikePredict' element={<HikePredict />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
