import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import './Experience.css';
import { Paper } from '@mui/material';
// import GeneralTestApiCall from '../../helpers/NetworkHelper.js;'

/*
    TODO - Display time at company
    Company logo - images quite low res
*/

export default class Experience extends React.Component {

    state = {
        experience: [
            { company: 'Bally Interactive', role: 'Full Stack Developer', startDate: 'November 2021' },
            { company: 'Degree53', role: 'Full Stack Developer', startDate: 'July 2020' },
            { company: 'AccessPay', role: 'Associate Software Developer', startDate: 'August 2019' },
            { company: 'AccessPay', role: 'Junior Software Engineer', startDate: 'January 2019' },
            { company: 'Northcoders', role: 'Trainee Stack Developer', startDate: 'September 2018' },
            { company: 'Tanglin Trust School', role: 'Computer Science, Business, Maths', startDate: '' }
        ]
    }

    render() {
        return (

            <Timeline position='alternate'>
                <Typography variant='h6' component='span' textAlign={'center'}>Present</Typography>
                {
                    this.state.experience.map(function (data) {
                        return (
                            <TimelineItem>
                                <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                    align="right"
                                    color="text.secondary"
                                >
                                    {data.startDate}
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineConnector />
                                    <TimelineDot sx={{ padding: '0' }}>

                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <Typography variant='h6' component="span">
                                        {data.company}
                                    </Typography>
                                    <Typography>{data.role}</Typography>
                                </TimelineContent>
                            </TimelineItem>
                        )
                    })
                }

                <Typography variant='h6' component='span' textAlign={'center'}>Not so present</Typography>
            </Timeline>
        );
    }
}