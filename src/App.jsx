import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Current from './pages/Current';
import Currentstudents from './pages/Currentstudents';
import Mainpage from './pages/Mainpage';
import StudentDetails from './pages/StudentDetails';
import Profileattribute from './pages/Profileattribute';
import Subscription from './pages/Subscription';
import Piechart from "./pages/Piechart"
import Navbar from './pages/Navbar';

const App = () => {

  return (
  <div>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/CrntStudents' element={<Currentstudents />}/>
        <Route path='CrntStudents/Current' element={<Current />}/>
        <Route path='/Mainpage' element={<Mainpage />}/>
        <Route path='/StudentDetails' element={<StudentDetails />}/>
        <Route path='/Profileattribute' element={<Profileattribute />}/>
        <Route path='/Subscription' element={<Subscription />}/>
        <Route path='/Piechart' element={<Piechart />}/>
      </Routes>
    </BrowserRouter>
  </div>  
  );
};

export default App;