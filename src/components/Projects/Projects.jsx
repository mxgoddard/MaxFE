import { Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

export default class Projects extends React.Component {

    // Don't exceed 26 characters for project name - this is hacky for now
    state = {
        projects: [
            { Name: 'Blog 1', Link: '/blog/1' },
            { Name: 'Steam Library Project', Link: 'steam-library' },
            { Name: 'Valorant Stats', Link: 'valorant-stats' },
            { Name: 'Dummy 2', Link: '2' },
            { Name: 'Dummy 3', Link: '3' },
            { Name: 'Dummy 4', Link: '4' },
            { Name: 'Dummy 5', Link: '5' },
            { Name: 'Dummy 6', Link: '6' },
            { Name: 'Dummy 7', Link: '7' },
            { Name: 'Dummy 8', Link: '8' },
            { Name: 'Dummy 9', Link: '9' },
            { Name: 'Dummy 10', Link: '10' },
            { Name: 'Dummy 11', Link: '11' },
            { Name: 'Dummy 12', Link: '12' },
            { Name: 'Dummy 13', Link: '13' },
            { Name: 'Dummy 14', Link: '14' },
            { Name: 'Dummy 15', Link: '15' },
            { Name: 'Dummy 16', Link: '16' },
            { Name: 'Dummy 17', Link: '17' },
            { Name: 'Dummy 18', Link: '18' },
            { Name: 'Dummy 19', Link: '19' },
            { Name: 'Dummy 20', Link: '20' },
        ]
    }


    // <img src='https://via.placeholder.com/150' />
    render() {
        {/* Very temporary rudimentary page */ }
        return (
            <div className='ProjectsWrapper'>
                <h2>Projects</h2>
                <div className='ProjectsContainer'>
                    {this.state.projects.map(function (project) {
                        return (
                            <div>
                                <Link to={project.Link}>
                                    <div className='ProjectContainer'>
                                        <img src='https://via.placeholder.com/200x150' />
                                        <Typography>{project.Name}</Typography>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}