import React, { Component } from 'react';
import '../scss/eyeCatcher.scss';
import avatar from '../resources/image/profile.png';
class EyeCatcher extends Component {
	state = {};
	render() {
		return (
			<div className="eyeCatchContainer">
				<div className="blurred-box">
					<div className="profile">
						<img src={avatar} alt="Luke's Profile :)" />
						<button className="btn btn-outline-success"> Resume</button>
					</div>
					<div className="eyecatch" />
				</div>
			</div>
		);
	}
}

export default EyeCatcher;
