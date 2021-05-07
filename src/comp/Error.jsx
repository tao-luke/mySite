import React, { Component } from 'react';
import '../scss/background.scss';
class Error extends Component {
	render() {
		return (
			<div className="BGcontainer errorwrap">
				<div className="shooting-stars" />
				<div className="shooting-stars" />
				<div className="stars" />
				<div className="stars1" />
				<div className="stars2" />
				<p className="errormsg">
					{' '}
					Sorry, this site doesn't support view window width less than 420px at the moment ~, try adjusting
					and refreshing. Sorry for the inconvenience!
				</p>
			</div>
		);
	}
}

export default Error;
