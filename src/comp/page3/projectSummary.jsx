import React, { Component } from 'react';
import '../../scss/project.scss';
import Detail from './Detail';
import sample from '../../resources/image/sample.png';
class Project extends Component {
	state = {
		projects: {},
		focusViewIndex: -1,
		currentPage: 0
	};
	render() {
		const { projects, focusViewIndex, currentPage } = this.state;
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
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="feather feather-cpu"
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
						{focusViewIndex != -1 && <Detail />}
						{focusViewIndex == -1 && (
							<div className="showWindow">
								<button>o-</button>
								<div className="card1">
									<img src={sample} alt="card1" />
								</div>
								<div className="card2">
									<img src={sample} alt="card2" />
								</div>
								<div className="card3">
									<img src={sample} alt="card3" />
								</div>
								<button>-o</button>
							</div>
						)}
					</div>
					<div className="gitSection"> github button here: </div>
				</div>
			</div>
		);
	}
}

export default Project;
