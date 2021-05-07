import React, { Component } from 'react';
import NavBar from './NavBar';
import Content from './Content';
import '../scss/background.scss';
import $ from 'jquery';
import Error from './Error';
class Page extends Component {
	render() {
		if ($(window).width() < 360) {
			return <Error />;
		}
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
