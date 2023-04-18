import React, { useState, useEffect } from 'react';
import JobHuntService from '../../services/JobHuntService';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import './JobHunt.css';
import JobTile from './JobTile';

function JobHunt() {

    const [jobColumn, setJobColumn] = useState({
        notAppliedColumn: [],
        appliedColumn: [],
        interviewColumn: [],
        receivedOfferColumn: []
    });

    const { notAppliedColumn, appliedColumn, interviewColumn, receivedOfferColumn } = jobColumn;

    const removeJobFromArr = (arr, job) => {
        let targetIndex = arr.indexOf(job);
        if (targetIndex > -1) {
            arr.splice(targetIndex, 1);
        }
    }

    const makeUpdateJobStatusCall = async (companyName, newStatus) => {
        // TODO - Can this not be a fire and forget
        await JobHuntService.UpdateJobStatus(companyName, newStatus);
    }

    const childToParent = (event, job, index) => {

        const columnName = index.split('-')[0];
        switch (columnName) {
            case 'NotApplied':
                removeJobFromArr(notAppliedColumn, job);
                break;
            case 'Applied':
                removeJobFromArr(appliedColumn, job);
                break;
            case 'Interview':
                removeJobFromArr(interviewColumn, job);
                break;
            case 'Received':
                removeJobFromArr(receivedOfferColumn, job);
                break;
        }

        let originalJobStatus = job.status;
        job = determineTargetColumn(event.clientX, window.innerWidth, job);
        let newJobStatus = job.status;

        if (originalJobStatus != newJobStatus) {
            makeUpdateJobStatusCall(job.companyName, job.status);
        }

        setJobColumn({
            notAppliedColumn: notAppliedColumn,
            appliedColumn: appliedColumn,
            interviewColumn: interviewColumn,
            receivedOfferColumn: receivedOfferColumn
        });
    };

    const determineTargetColumn = (mouseX, width, job) => {
        // TODO - I hate this - incorporate buffer - Also integrate enum class
        if (mouseX < (width / 4)) {
            notAppliedColumn.push(job);
            job.status = 0;
            return job;
        } else if (mouseX < (width / 2)) {
            appliedColumn.push(job);
            job.status = 1;
            return job;
        } else if (mouseX < ((width / 4)) + (width / 2)) {
            interviewColumn.push(job);
            job.status = 2;
            return job;
        } else if (mouseX < width) {
            receivedOfferColumn.push(job);
            job.status = 5;
            return job;
        }
    }

    useEffect(() => {
        let mounted = true;
        JobHuntService.GetJobs().then(jobs => {
            if (mounted) {

                var notApplied = [];
                var applied = [];
                var interview = [];
                var receivedOffer = [];

                jobs.forEach((job) => {
                    // This is horrible - I know - I  hate that I'm writing it 
                    if (job.status === 0) {
                        notApplied.push(job);
                    } else if (job.status === 1) {
                        applied.push(job);
                    } else if (job.status >= 2 && job.status < 5) {
                        interview.push(job)
                    } else if (job.status === 5) {
                        receivedOffer.push(job);
                    }
                });

                setJobColumn({
                    notAppliedColumn: notApplied,
                    appliedColumn: applied,
                    interviewColumn: interview,
                    receivedOfferColumn: receivedOffer
                });
            }
        })
        return () => mounted = false;
    }, []);

    return (
        <div className='Section-Wrapper'>
            {/* <h1>Job Hunt</h1> */}
            <div className='Column-Container'>
                <div className='Stage-Column'>
                    <h2>Not Applied</h2>
                    {
                        notAppliedColumn.map((job, index) =>
                            <JobTile key={`NotApplied-${index}`} index={`NotApplied-${index}`} job={job} childToParent={childToParent} />
                        )
                    }
                </div>
                <div className='Stage-Column'>
                    <h2>Applied</h2>
                    {
                        appliedColumn.map((job, index) =>
                            <JobTile key={`Applied-${index}`} index={`Applied-${index}`} job={job} childToParent={childToParent} />
                        )
                    }
                </div>
                <div className='Stage-Column'>
                    <h2>Interview</h2>
                    {
                        interviewColumn.map((job, index) =>
                            <JobTile key={`Interview-${index}`} index={`Interview-${index}`} job={job} childToParent={childToParent} />
                        )
                    }
                </div>
                <div className='Stage-Column'>
                    <h2>Received Offer</h2>
                    {
                        receivedOfferColumn.map((job, index) =>
                            <JobTile key={`Received-${index}`} index={`Received-${index}`} job={job} childToParent={childToParent} />
                        )
                    }
                </div>
            </div>
            <Link id='CreateJobButton' to={`/create-job`}>
                <Button key={'Create-Job'} id='Nav-Bar-Link-Login' sx={{ backgroundColor: '#141414', borderRadius: '100px', padding: '1rem 2rem' }}>
                    Create Job
                </Button>
            </Link>
        </div>
    );
};

export default JobHunt;