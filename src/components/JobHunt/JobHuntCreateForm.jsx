import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { useNavigate } from "react-router-dom";
import { CreateJobAction } from "../../actions/JobHuntActions";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const JobHuntCreateForm = () => {
    let navigate = useNavigate();
    const form = useRef();
    const checkBtn = useRef();

    const statusOptions = ["Not Applied", "Applied", "Interview General", "Interview Technical", "Interview Other", "Received Offer", "Accepted Job Offer", "Rejected"];

    // TODO - This could do with updating with research
    const industryOptions = ["", "IT & Services", "Hospital & Health Care", "Construction", "Retail", "Education", "Financial Services", "Automotive"];

    // TODO - Make this neater under one state
    const [companyName, setCompanyName] = useState("");
    const [companyLogo, setCompanyLogo] = useState("");
    const [status, setStatus] = useState(statusOptions[0]);
    const [rating, setRating] = useState("1");
    const [roleName, setRoleName] = useState("Software Developer");
    const [industry, setIndustry] = useState(industryOptions[0]);
    const [payRangeLB, setPayRangeLB] = useState("40000");
    const [payRangeUB, setPayRangeUB] = useState("100000");
    const [jobPostingLink, setJobPostingLink] = useState("");
    const [successful, setSuccessful] = useState(false);

    const { message } = useSelector(state => state.MessageReducer);

    const dispatch = useDispatch();

    const onChangeCompanyName = (event) => {
        const companyName = event.target.value;
        setCompanyName(companyName);
    };

    const onChangeCompanyLogo = (event) => {
        const companyLogo = event.target.value;
        setCompanyLogo(companyLogo);
    };

    const onChangeStatus = (event) => {
        const status = event.target.value;
        setStatus(status);
    };

    const onChangeRating = (event) => {
        const rating = event.target.value;
        setRating(rating);
    };

    const onChangeRoleName = (event) => {
        const roleName = event.target.value;
        setRoleName(roleName);
    };

    const onChangeIndustry = (event) => {
        const industry = event.target.value;
        setIndustry(industry);
    };

    const onChangePayRangeLB = (event) => {
        const payRangeLB = event.target.value;
        setPayRangeLB(payRangeLB);
    };

    const onChangePayRangeUB = (event) => {
        const payRangeUB = event.target.value;
        setPayRangeUB(payRangeUB);
    };

    const onChangeJobPostingLink = (event) => {
        const jobPostingLink = event.target.value;
        setJobPostingLink(jobPostingLink);
    };

    const handleCreateJob = (event) => {
        event.preventDefault();

        setSuccessful(false);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            dispatch(CreateJobAction(companyName, companyLogo, statusOptions.indexOf(status), rating, roleName, industry, payRangeLB, payRangeUB, jobPostingLink))
                .then(() => {
                    setSuccessful(true);
                    navigate("/Job-Hunt");
                    window.location.reload();
                })
                .catch(() => {
                    setSuccessful(false);
                });
        }
    };

    return (
        <div className='Section-Wrapper'>
            <h1>Create Job</h1>
            <Form onSubmit={handleCreateJob} ref={form}>
                {!successful && (
                    <div>
                        <div>
                            <label htmlFor="companyName">Company Name</label>
                            <Input
                                type="text"
                                name="companyName"
                                value={companyName}
                                onChange={onChangeCompanyName}
                                validations={[required]}
                            />
                        </div>

                        {/* Change to choose image prompt and have a default */}
                        <div>
                            <label htmlFor="companyLogo">Company Logo</label>
                            <Input
                                type="file"
                                name="companyLogo"
                                value={companyLogo}
                                onChange={onChangeCompanyLogo}
                            />
                        </div>

                        {/* Change to dropdown with default being NotApplied, make a corresponding enum class or request the enum class from server */}
                        <div>
                            <label htmlFor="status">Status</label>
                            <select
                                name="status"
                                value={status}
                                onChange={onChangeStatus}>
                                {statusOptions.map((value) => (
                                    <option value={value} key={value}>
                                        {value}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Change this to a 1-5 or traffic light system or star system? */}
                        <div>
                            <label htmlFor="rating">Rating ({rating}/5)</label>
                            <Input
                                type="range"
                                name="rating"
                                min="1"
                                max="5"
                                value={rating}
                                onChange={onChangeRating}
                                validations={[required]}
                            />
                        </div>

                        <div>
                            <label htmlFor="roleName">Job Title</label>
                            <Input
                                type="text"
                                name="roleName"
                                value={roleName}
                                onChange={onChangeRoleName}
                                validations={[required]}
                            />
                        </div>

                        <div>
                            <label htmlFor="industry">Industry</label>
                            <select
                                name="industry"
                                value={industry}
                                onChange={onChangeIndustry}>
                                {industryOptions.map((value) => (
                                    <option value={value} key={value}>
                                        {value}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="payRangeLB">Pay Range LB (£{payRangeLB})</label>
                            <Input
                                type="range"
                                name="payRangeLB"
                                min="40000"
                                max="100000"
                                step="500"
                                value={payRangeLB}
                                onChange={onChangePayRangeLB}
                                validations={[required]}
                            />
                        </div>

                        <div>
                            <label htmlFor="payRangeUB">Pay Range UB (£{payRangeUB})</label>
                            <Input
                                type="range"
                                name="payRangeUB"
                                min="50000"
                                max="100000"
                                step="500"
                                value={payRangeUB}
                                onChange={onChangePayRangeUB}
                                validations={[required]}
                            />
                        </div>

                        <div>
                            <label htmlFor="jobPostingLink">Job Posting Link</label>
                            <Input
                                type="text"
                                name="jobPostingLink"
                                value={jobPostingLink}
                                onChange={onChangeJobPostingLink}
                            />
                        </div>

                        <div>
                            <button>Add</button>
                        </div>
                    </div>
                )}

                {message && (
                    <div className="form-group">
                        <div className={successful ? "alert alert-success" : "alert alert-danger"} role="alert">
                            {message}
                        </div>
                    </div>
                )}
                <CheckButton style={{ display: "none" }} ref={checkBtn} />
            </Form>

        </div>
    );
};

export default JobHuntCreateForm;