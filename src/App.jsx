import React, { Fragment } from 'react';
import NavBar from './components/NavBar';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { UserContext } from './UserContext';
import RouteHandler from './components/RouteHandler';
// https://www.digitalocean.com/community/tutorials/react-manage-user-login-react-context

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {}
		};

		this.login = this.login.bind(this);
		this.logout = this.logout.bind(this);
	}

	render() {

		const value = {
			user: this.state.user,
			loginUser: this.login,
			logoutUser: this.logout
		}

		return (
			<div className='App'>
				<Router>
					<Fragment>
						<main className='Main'>
							<UserContext.Provider value={value}>
								<NavBar />
								<RouteHandler />
							</UserContext.Provider>
						</main>
					</Fragment>
				</Router>


			</div>
		)
	}

	componentDidMount() {
	}

	login(loggedInUser) {
		console.log('login');
		console.log(loggedInUser);
		this.setState({ user: loggedInUser });
	}

	logout() {
		this.setState({ user: {} });
	}
}