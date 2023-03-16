import { Typography } from '@mui/material';
import React from 'react';
import { GetIdFromUrl } from '../../helpers/Helper';
import './Blog.css';

export default class Blog extends React.Component {
    state = {
        id: 0
    }

    render() {
        return (
            <div className='BlogWrapper'>
                <div className='BlogMain'>
                    <h1 className='BlogTitle'>This is a dummy blog title ({this.state.id})</h1>
                    <p className='BlogDescription'>Some is a dummy blog description for the blog I am pretending to write</p>
                    {/* Image here? */}
                    <p className='BlogText'>
                        Hello, my name is [redacted] and I will be writing a blog.
                    </p>
                </div>

            </div>
        )
    }


    componentDidMount() {
        this.setState({ id: GetIdFromUrl(window.location.pathname) })
    }
}