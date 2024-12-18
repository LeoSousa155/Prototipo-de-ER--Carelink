import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


//pages
import { LoginForm } from './pages/LoginForm';
import { RegisterForm} from './pages/RegisterForm';
import { LandingPage } from './pages/LandingPage';
import { ProfilePage } from './pages/ProfilePage';
import { CalendarLayout } from './pages/CalendarLayout';
import { CalendarForm } from './pages/CalendarForm';
import { CarePlanPage} from './pages/CarePlanPage';
import { ChatLayoutPatient } from './pages/CommunicationPatient';

//doctor pages

import { ProfilePageDr } from './pages/doctor-pages/ProfilePageDr';
import { CalendarLayoutDr } from './pages/doctor-pages/CalendarLayoutDr';
import { CalendarFormDr } from './pages/doctor-pages/CalendarFormDr';
import { CarePlanPageDr} from './pages/doctor-pages/CarePlanPageDr';
import { ChatLayoutDoctor } from './pages/doctor-pages/CommunicationDoctor';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/*general routes*/}
        <Route path="/" element={<LandingPage />}/>
        <Route path="/login" element={<LoginForm />}/>
        <Route path="/logout" element={<LoginForm />}/>
        <Route path="/register" element={<RegisterForm />}/>
        

        {/*patient routes*/}
        <Route path="/patient/profile" element={<ProfilePage />}/>
        <Route path="/patient/communication" element={<ChatLayoutPatient />}/>

        {/*testing routes*/}
        <Route path="/patient/calendar" element={<CalendarLayout />}/>
        <Route path="/patient/calendar/add-event" element={<CalendarForm />}/>
        <Route path="/patient/health-plan" element={<CarePlanPage />}/>

        {/*doctor routes*/}
        <Route path="/doctor/profile" element={<ProfilePageDr />}/>
        <Route path="/doctor/communication" element={<ChatLayoutDoctor />}/>
        <Route path="/doctor/calendar" element={<CalendarLayoutDr />}/>
        <Route path="/doctor/calendar/add-event" element={<CalendarFormDr />}/>
        <Route path="/doctor/health-plan" element={<CarePlanPageDr />}/>

      </Routes>  
    </Router>      
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
  