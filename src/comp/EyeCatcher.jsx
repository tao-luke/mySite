import React, { Component } from 'react';
import '../scss/eyeCatcher.scss';
class EyeCatcher extends Component {
	state = {};
	render() {
		return (
			<div className="eyeCatchContainer">
				<div className="blurred-box" />
			</div>
		);
	}
}

export default EyeCatcher;
