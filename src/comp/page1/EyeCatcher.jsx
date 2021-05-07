import React, { Component } from 'react';
import '../../scss/eyeCatcher.scss';
import avatar from '../../resources/image/profile.png';
import { Link } from 'react-router-dom';
import Luke from '../../resources/file/Luke.pdf';
import Terminal from './TerminalEmu';
class EyeCatcher extends Component {
	state = {};
	render() {
		return (
			<div className="blurred-box" ref={this.props.tmpRef}>
				<div className="profile">
					<img src={avatar} alt="Luke's Profile :)" />
					<Link className="link" to={Luke} target="_blank">
						<button className="btn btn-outline-success"> Resume</button>
					</Link>
				</div>
				<Terminal />
			</div>
		);
	}
}

export default EyeCatcher;
