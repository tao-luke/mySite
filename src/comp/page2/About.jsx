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
						I currently work as a C++ software developer at Kaleidescape, where I deploy/optimize cool stuff
						on some of the best video players available! I regularly deal with image file,compression, and
						run-time optimization on low-memory environments.
					</p>
					<p className="content">
						Previously, I worked as a Full Stack Developer at Digital Extremes. My responsibilities ranged
						from maintaining site integrity in a Laravel framework to scaling up the entire backend in SQL
						and PHP. I also helped upgrade the back-end with efficient Python scripts, which increased the
						productivity of the Media team by over 2 folds!
					</p>

					<p className="content skill_list_title"> Familiar Languages/Frameworks </p>
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
