import React from "react";
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import './Profile.css';

const Profile = () => {
	const { user: currentUser } = useSelector((state) => state.AuthReducer);
	// console.log('currentUser');
	// console.log(currentUser);

	if (!currentUser) {
		return <Navigate to="/login" />;
	}

	return (
		<div className="Profile-Wrapper">
			<header>
				<h1>{currentUser.firstName} Profile</h1>
			</header>
			<p>
				<strong>Token:</strong> {currentUser.authToken.substring(0, 16)} ...{" "}
				{currentUser.authToken.substring(currentUser.authToken.length - 16)}
			</p>
			<p>
				<strong>Id:</strong> {currentUser.id}
			</p>
			<strong>Roles:</strong>
			<ul>
				{currentUser.roles &&
					currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
			</ul>
		</div>
	);
};

export default Profile;