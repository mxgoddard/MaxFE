import React, { Fragment } from 'react';
import NavBar from './components/NavBar';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import RouteHandler from './components/RouteHandler';

export default class App extends React.Component {
	render() {
		return (
			<div className='App'>
				<Router>
					<Fragment>


						<NavBar />

						<main className='Main'>
							<RouteHandler />
						</main>
					</Fragment>
				</Router>


			</div>
		)
	}
}