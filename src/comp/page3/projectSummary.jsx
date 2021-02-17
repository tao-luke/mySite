import React, { Component } from 'react';
import '../../scss/project.scss';
import Detail from './Detail';
import { Link } from 'react-router-dom';
class Project extends Component {
	state = {
		projects: [
			{
				title: 'VM',
				short:
					'A custom built text-editor built in C++(Ncurse) to support syntax-highlighting, easy line accesses, undos, and other wonders in VIM ',
				link: 'https://github.com/tao-luke/Vm',
				svg: (
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
						className="feather feather-terminal"
					>
						<polyline points="4 17 10 11 4 5" />
						<line x1="12" y1="19" x2="20" y2="19" />
					</svg>
				)
			},
			{
				title: 'Lnote',
				short: 'A simple and optimized diary system to create the perfect gift for your special other !',
				link: 'https://github.com/tao-luke/Lnote',
				svg: (
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
						className="feather feather-book-open"
					>
						<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
						<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
					</svg>
				)
			},
			{
				title: 'Story++',
				short:
					'A drag-and-drop, async canvas with a graph-optimized database to help users create the perfect choose-your-adventure game',
				link: 'https://github.com/tao-luke/StoryPlusPlus',
				svg: (
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
						className="feather feather-share-2"
					>
						<circle cx="18" cy="5" r="3" />
						<circle cx="6" cy="12" r="3" />
						<circle cx="18" cy="19" r="3" />
						<line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
						<line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
					</svg>
				)
			},
			{
				title: 'ImgSteg',
				short:
					'A fun way to hide images within other images using lossy encryption with xor encoding and huffman encoding',
				link: 'https://github.com/tao-luke/imgSteg2Java',
				svg: (
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
						className="feather feather-lock"
					>
						<rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
						<path d="M7 11V7a5 5 0 0 1 10 0v4" />
					</svg>
				)
			}
		],
		focusViewIndex: -1,
		offset: 0
	};
	mymod = (n, m) => {
		return (n % m + m) % m;
	};
	currentThree = () => {
		const { offset } = this.state;
		return [ this.mymod(offset, 4), this.mymod(offset + 1, 4), this.mymod(offset + 2, 4) ];
	};
	incrementOffset = (action) => {
		let { offset } = this.state;
		if (action === 1) {
			//to the right
			offset = this.mymod(offset - 1, 4);
		} else {
			//to the left
			offset = this.mymod(offset + 1, 4);
		}
		this.setState({ offset });
	};
	render() {
		const { projects, focusViewIndex } = this.state;
		const chosen = this.currentThree();
		const displayedArr = [ projects[chosen[0]], projects[chosen[1]], projects[chosen[2]] ];
		return (
			<div className="blurred-box3">
				<div className="projectWrap">
					<p className="title">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 30 26"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="feather feather-cpu"
						>
							<rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
							<rect x="9" y="9" width="6" height="6" />
							<line x1="9" y1="1" x2="9" y2="4" />
							<line x1="15" y1="1" x2="15" y2="4" />
							<line x1="9" y1="20" x2="9" y2="23" />
							<line x1="15" y1="20" x2="15" y2="23" />
							<line x1="20" y1="9" x2="23" y2="9" />
							<line x1="20" y1="14" x2="23" y2="14" />
							<line x1="1" y1="9" x2="4" y2="9" />
							<line x1="1" y1="14" x2="4" y2="14" />
						</svg>
						Projects
					</p>
					<div className="showWindowContainer">
						{focusViewIndex !== -1 && <Detail />}
						{focusViewIndex === -1 && (
							<div className="showWindow">
								<button
									className="btn btn-light"
									aria-pressed="false"
									onClick={() => {
										this.incrementOffset(0);
									}}
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
										className="feather feather-arrow-left"
									>
										<line x1="19" y1="12" x2="5" y2="12" />
										<polyline points="12 19 5 12 12 5" />
									</svg>
								</button>
								{displayedArr.map((elem) => {
									return (
										<div key={elem.title} className="cardWrap">
											<div className="card2">
												<p className="description">{elem.short}</p>
												<Link className="github" to={{ pathname: elem.link }} target="_blank">
													<button className="btn btn-light btn-sm">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="24"
															height="24"
															viewBox="0 0 24 24"
														>
															<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
														</svg>
													</button>
												</Link>
											</div>
											<div className="card1">
												{elem.svg}
												<h6>{elem.title}</h6>
											</div>
										</div>
									);
								})}
								<button
									className="btn btn-light"
									onClick={() => {
										this.incrementOffset(1);
									}}
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
										className="feather feather-arrow-right"
									>
										<line x1="5" y1="12" x2="19" y2="12" />
										<polyline points="12 5 19 12 12 19" />
									</svg>
								</button>
							</div>
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default Project;
