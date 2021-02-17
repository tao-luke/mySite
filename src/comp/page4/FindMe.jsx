import React, { Component } from 'react';
import '../../scss/findme.scss';
import { Link } from 'react-router-dom';
class Contact extends Component {
	state = {};
	render() {
		return (
			<div className="blurred-box4">
				<div className="contactWrapper">
					<p className="title">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 27 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="feather feather-send"
						>
							<line x1="22" y1="2" x2="11" y2="13" />
							<polygon points="22 2 15 22 11 13 2 9 22 2" />
						</svg>You can Find me here :)
					</p>
					<div className="externalWrap">
						<p className="description">
							Thank you for taking the time to visit my website! I would love to chat further on just
							about anything! Got a project idea or want to go climb together? Connect with me below!
						</p>
						<div className="linkWrapper">
							<Link
								className="link linkedin"
								to={{ pathname: 'https://www.linkedin.com/in/luke-tao-7a3b95168/' }}
								target="_blank"
							>
								<button className="btn btn-light">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 27 24">
										<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
									</svg>
									Linkedin
								</button>
							</Link>
							<Link
								className="link github"
								to={{ pathname: 'https://github.com/tao-luke' }}
								target="_blank"
							>
								<button className="btn btn-light">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 27 24">
										<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
									</svg>Github
								</button>
							</Link>
							<Link
								className="link facebook"
								to={{ pathname: 'https://www.facebook.com/luke.tao.73/' }}
								target="_blank"
							>
								<button className="btn btn-light">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 27 24">
										<path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
									</svg>Facebook
								</button>
							</Link>
						</div>
					</div>
					<div className="emailWrapper">
						<Link
							className="email"
							to={{ pathname: 'mailto:luketao@icloud.com?subject=Hello:D' }}
							target="_blank"
						>
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
								className="feather feather-inbox"
							>
								<polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
								<path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
							</svg>
							<p className="emailLink">LukeTao@icloud.com</p>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;
