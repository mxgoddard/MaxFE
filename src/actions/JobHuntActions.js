import { CREATE_JOB_SUCCESS, CREATE_JOB_FAIL, SET_MESSAGE } from "./Types";
import JobHuntService from "../services/JobHuntService";

export const CreateJobAction = (companyName, companyLogo, status, rating, roleName, industry, payRangeLB, payRangeUB, jobPostingLink) => (dispatch) => {
    return JobHuntService.CreateJob(companyName, companyLogo, status, rating, roleName, industry, payRangeLB, payRangeUB, jobPostingLink).then(
        (response) => {
            dispatch({
                type: CREATE_JOB_SUCCESS
            });

            dispatch({
                type: SET_MESSAGE,
                payload: response.message
            });

            return Promise.resolve();
        },
        (error) => {
            const message = 
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: CREATE_JOB_FAIL
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message
            });

            return Promise.reject();
        }
    );
};