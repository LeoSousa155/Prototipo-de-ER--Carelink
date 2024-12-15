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
import { CarePlanPage} from './pages/CarePlanPage';
import { ChatLayoutPatient } from './pages/CommunicationPatient';
import { ChatLayoutDoctor } from './pages/CommunicationDoctor';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/*general routes*/}
        <Route path="/" element={<LandingPage />}/>
        <Route path="/login" element={<LoginForm />}/>
        <Route path="/register" element={<RegisterForm />}/>
        <Route path="/profile" element={<ProfilePage />}/>
        {/*doctor routes*/}
        <Route path="/doctor/home" element={<LandingPage />}/>
        <Route path="/doctor/communication" element={<ChatLayoutDoctor />}/>
        {/*patient routes*/}
        <Route path="/patient/home" element={<LandingPage />}/>
        <Route path="/patient/communication" element={<ChatLayoutPatient />}/>
        {/*testing routes*/}
        <Route path="/calendar" element={<CalendarLayout />}/>
        <Route path="/health-plan" element={<CarePlanPage />}/>

      </Routes>  
    </Router>      
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
  