import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";

//Internship section routes
import Currentstudents from './components/pages/Currentstudents';
import OverallStudents from './components/pages/OverallStudents';
import Previous from './components/pages/Previous';
import Nextbatch from './components/pages/Nextbatch';

//common for Intern and training routes
import Mainpage from './components/pages/Mainpage';
import Students from './components/pages/Students';
import StudentDetails from './components/pages/StudentDetails';
import Profileattribute from './components/pages/Profileattribute';
import Subscription from './components/pages/Subscription';
import Navbar from './components/pages/Navbar';

//Training routes
import Main from './components/pages/Training/Main';
import PreviousPlan from './components/pages/Training/PreviousPlan'
import CurrentPlan from './components/pages/Training/CurrentPlan';
import Overallplan from './components/pages/Training/Overallplan';

import Mentor from './components/pages/Training/Mentor';

const App = () => {

  return (
  <div>
    <BrowserRouter>
    <Navbar />
      <Routes>

        {/**Route specific for Internship section */}
        <Route path='/CurrentStudents' element={<Currentstudents />}/>
        <Route path='/OverallStudents'element={<OverallStudents />}/>
        <Route path='/Previous' element={<Previous />}/>
        <Route path='/Nextbatch' element={<Nextbatch />}/>

        {/**Routes common for Intern and Training section */}
        <Route path='/Students' element={<Students />}/>
        <Route path='/Mainpage' element={<Mainpage />}/>
        <Route path='/StudentDetails' element={<StudentDetails />}/>
        <Route path='/Profileattribute' element={<Profileattribute />}/>
        <Route path='/Subscription' element={<Subscription />}/>

        {/**Routes specific for Training section */}
        <Route path='/Training/Main' element={<Main />}/>
        <Route path='/Training/PreviousPlan' element={<PreviousPlan />}/>
        <Route path='/Training/CurrentPlan' element={<CurrentPlan/>}/>
        <Route path='/Training/OverallPlan' element={<Overallplan />}/>
        <Route path='/Mentor' element={<Mentor />}/>
      </Routes>
    </BrowserRouter>
  </div>  
  );
};

export default App;