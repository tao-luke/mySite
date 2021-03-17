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
						I am currently working as a C++ application engineer at Kaleidescape, where I create features in
						hardware-specific LAN environments.
					</p>
					<p className="content">
						{' '}
						Previously, I worked as an Full Stack Developer at Digital Extremes. My responsibilities ranged
						from maintaining the existing site content in a Laravel framework to scaling up the MySQL
						database and improving its backend Python scripts.{' '}
					</p>

					<p className="content"> Familiar Languages/Frameworks </p>
					<ul className="skill_list">
						<li>C++</li>
						<li>Python</li>
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
