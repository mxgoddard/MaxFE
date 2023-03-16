import React from 'react';
import { Routes, Route } from "react-router-dom";
import About from './About/About';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Login from './Login/Login';
import Project from './Project';
import Projects from './Projects/Projects';
import Resume from './Resume';
import SteamLibrary from './SteamLibrary/SteamLibrary';
import ValorantStats from './ValorantStats/ValorantStats';

export default class RouteHandler extends React.Component {
    render() {
        return (
            <>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/projects/:projectId' element={<Project />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/blog/:blogId' element={<Blog />} />
                    <Route path='/resume' element={<Resume />} />
                    <Route path='projects/steam-library' element={<SteamLibrary />} />
                    <Route path='projects/valorant-stats' element={<ValorantStats />} />
                </Routes>
            </>
        )
    }
}