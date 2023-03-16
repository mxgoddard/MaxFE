import React from 'react';
import { GetIdFromUrl } from '../helpers/Helper';

export default class Project extends React.Component 
{
    state = {
        id: 0
    }

    render() 
    {
        return (
            <>
                <h2>Project { this.state.id }</h2>
            </>
        )
    }

    componentDidMount() 
    {
        this.setState({ id: GetIdFromUrl(window.location.pathname) })
    }
}