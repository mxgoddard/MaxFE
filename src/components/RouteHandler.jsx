import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import Login from './Login/Login';
import Profile from './Profile/Profile';

export default class RouteHandler extends React.Component {
    render() {
        return (
            <>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    {/* <Route path='/projects' element={<Projects />} />
                    <Route path='/projects/:projectId' element={<Project />} /> */}
                    {/* <Route path='/blog/:blogId' element={<Blog />} /> */}
                    <Route path='/profile' element={<Profile />} />
                </Routes>
            </>
        )
    }
}