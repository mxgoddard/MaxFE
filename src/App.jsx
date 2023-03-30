import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Profile from "./components/Profile/Profile";

// import { LogoutAction } from "./actions/AuthActions";
import { ClearMessageAction } from "./actions/MessageActions";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
	// const currentUser = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	let location = useLocation();

	useEffect(() => {
		if (["/login", "/register"].includes(location.pathname)) {
			dispatch(ClearMessageAction());	// Clear message when changing location
		}
	}, [dispatch, location]);

	// const logOut = useCallback(() => {
	// 	dispatch(LogoutAction());
	// }, [dispatch]);

	// TODO - Move to NavBar component
	return (
		<div className="AppContainer">
			<NavBar />

			<div>
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/profile' element={<Profile />} />
					<Route path='/register' element={<Register />} />
				</Routes>
			</div>
			{/* <nav className="navbar navbar-expand navbar-dark bg-dark">
				<Link to={"/"} className="navbar-brand">
					Test123
				</Link>
				<div className="navbar-nav mr-auto">
					<li className="nav-item">
						<Link to={"/home"} className="nav-link">
							Home
						</Link>
					</li>

					{currentUser && (
						<li className="nav-item">
							<Link to={"/user"} className="nav-link">
								User
							</Link>
						</li>
					)}
				</div>

				{currentUser ? (
					<div className="navbar-nav ml-auto">
						<li className="nav-item">
							<Link to={"/profile"} className="nav-link">
								{currentUser.firstName}
							</Link>
						</li>
						<li className="nav-item">
							<a href="/login" className="nav-link" onClick={logOut}>
								LogOut
							</a>
						</li>
					</div>
				) : (
					<div className="navbar-nav ml-auto">
						<li className="nav-item">
							<Link to={"/login"} className="nav-link">
								Login
							</Link>
						</li>

						<li className="nav-item">
							<Link to={"/register"} className="nav-link">
								Register
							</Link>
						</li>
					</div>
				)}
			</nav> */}

			{/* <RouteHandler /> */}


		</div>
	);
};

export default App;