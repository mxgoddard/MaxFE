import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import "./App.css";

import { ClearMessageAction } from "./actions/MessageActions";
import NavBar from "./components/NavBar/NavBar";
import RouteHandler from "./components/RouteHandler";

const App = () => {
	// const currentUser = useSelector((state) => state.AuthReducer);
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

	return (
		<div className="AppContainer">
			<NavBar />

			<RouteHandler />
		</div>
	);
};

export default App;