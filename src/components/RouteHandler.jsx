import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import Login from './Login/Login';
import Profile from './Profile/Profile';
import About from './About/About';
import Projects from './Projects/Projects';
import Resume from './Resume/Resume';
import Contact from './Contact/Contact';
import Register from './Register/Register';

export default class RouteHandler extends React.Component {
    render() {
        return (
            <>
                <Routes>
                    {/* <Route exact path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/projects/:projectId' element={<Project />} />
                    <Route path='/blog/:blogId' element={<Blog />} />
                    <Route path='/profile' element={<Profile />} /> */}
                    <Route exact path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/resume' element={<Resume />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </>
        )
    }
}