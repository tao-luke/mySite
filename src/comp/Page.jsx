import React, { Component } from 'react';
import NavBar from './NavBar';
import Content from './Content';
import '../scss/background.scss';
class Page extends Component {
	render() {
		return (
			<div className="wrap">
				<NavBar />
				<div className="BGcontainer">
					<div className="shooting-stars" />
					<div className="shooting-stars" />
					<div className="stars" />
					<div className="stars1" />
					<div className="stars2" />
					<Content />
				</div>
			</div>
		);
	}
}

export default Page;
