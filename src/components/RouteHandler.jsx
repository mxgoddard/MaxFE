import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import Login from './Login/Login';
import Profile from './Profile/Profile';
import About from './About/About';
import Projects from './Projects/Projects';
import Resume from './Resume/Resume';
import Contact from './Contact/Contact';
import Countdown from './Countdown/Countdown';
import Register from './Register/Register';
import JobHunt from './JobHunt/JobHunt';
import JobHuntCreateForm from './JobHunt/JobHuntCreateForm';

export default class RouteHandler extends React.Component {
    render() {
        return (
            <>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/resume' element={<Resume />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/countdown' element={<Countdown />} />
                    <Route path='/job-hunt' element={<JobHunt />} />
                    <Route path='/create-job' element={<JobHuntCreateForm />} />
                </Routes>
            </>
        )
    }
}