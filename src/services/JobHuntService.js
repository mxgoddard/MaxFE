import axios from 'axios';
import { DetermineUrl } from '../helpers/NetworkHelper';
import AuthHeader from './AuthHeader';

const GetJobs = () => {
    return axios.get(DetermineUrl('job/get-jobs'), {
        headers: AuthHeader()
    })
        .then((response) => {
            return response.data;
        });
};

const CreateJob = (companyName, companyLogo, status, rating, roleName, industry, payRangeLB, payRangeUB, jobPostingLink) => {
    return axios.post(DetermineUrl('job/create-job'), {
        CompanyName: companyName,
        CompanyLogo: companyLogo,
        Status: status,
        Rating: rating,
        RoleName: roleName,
        Industry: industry,
        PayRangeLB: payRangeLB,
        PayRangeUB: payRangeUB,
        JobPostingLink: jobPostingLink
    }, {
        headers: AuthHeader()
    })
        .then((response) => {
            return response.data;
        });
};

const UpdateJobStatus = (companyName, newStatus) => {
    return axios.patch(DetermineUrl('job/update-job-status'), {
        CompanyName: companyName,
        NewStatus: newStatus
    }, {
        headers: AuthHeader()
    })
        .then((response) => {
            return response;
        });
};

export default { GetJobs, CreateJob, UpdateJobStatus };