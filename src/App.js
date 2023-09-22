// import logo from './logo.svg';
import './App.css';
import { Employee } from './components/Employee';
import { NewEmployee } from './components/NewEmployee';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SprintReview from './components/SprintReview';
import HireEmployee from './components/HireEmployee';
import HikePredict from './components/HikePredict';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes >
        <Route index path='/' element={<Login />} />
          <Route path='/home' element={<Home />}/>
          <Route path='/Employee' element={<Employee/>}/>
          <Route path='/NewEmployee' element={<NewEmployee/>}/>
          <Route path='/sprintReview' element={<SprintReview />} />
          <Route path='/hikePredict' element={<HikePredict />} />
          <Route path='/hireEmployee' element={<HireEmployee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
