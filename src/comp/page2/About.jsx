import React, { Component } from 'react';
import '../../scss/about.scss';

class About extends Component {
	state = {};
	render() {
		return (
			<div className="blurred-box2">
				<div className="introWrap">
					<p className="title">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="feather feather-chevrons-right"
						>
							<polyline points="13 17 18 12 13 7" />
							<polyline points="6 17 11 12 6 7" />
						</svg>
						Experience
					</p>
					<p className="content">
						I currently work at Huawei Canada as a software engineer with a focus on verification and authetication.
					</p>
					<p className="content">
						Previously, I worked as a systems engineer at Kaleidescape, where I built cool features
						on one of the best video players available on the market! I regularly dealt with image file, compression, and
						run-time optimization on low-memory environments.
					</p>
					<p className="content">
						Outside of work, I am currently interested in computer vision and NLP, with some projects in active development :)
					</p>
					<p className="content skill_list_title"> Familiar Languages/Frameworks </p>
					<ul className="skill_list">
						<li>C++</li>
						<li>Python, Pytorch, OpenCV...</li>
						<li>MERN stack (React, Node, Express, MongoDB)</li>
						<li>Laravel (PHP, Jquery)</li>
						<li>JS</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default About;
