import React, { Component } from 'react';
import EyeCatcher from './page1/EyeCatcher';
import About from './page2/About';
import Project from '../comp/page3/ProjectSummary';
class Content extends Component {
	static state = {
		ref1: React.createRef(),
		ref2: React.createRef(),
		ref3: React.createRef(),
		ref4: React.createRef()
	};
	static doScroll(num) {
		const { ref1, ref2, ref3, ref4 } = Content.state;
		switch (num) {
			case 1:
				ref1.current.scrollIntoView({ behavior: 'smooth' });
				break;
			case 2:
				ref2.current.scrollIntoView({ behavior: 'smooth' });
				break;
			case 3:
				ref3.current.scrollIntoView({ behavior: 'smooth' });
				break;
			case 4:
				ref4.current.scrollIntoView({ behavior: 'smooth' });
				break;
			default:
				break;
		}
	}
	render() {
		return (
			<main className="mainContainer">
				<div className="mainChild" ref={Content.state.ref1}>
					<EyeCatcher />
				</div>
				<div className="mainChild" ref={Content.state.ref2}>
					<About />
				</div>
				<div className="mainChild" ref={Content.state.ref3}>
					<Project />
				</div>
				<div className="mainChild" ref={Content.state.ref4}>
					<b>CONTACT SECTION</b>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
					industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
					and scrambled it to make a tLorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
					unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
					not only five centuries, but also the leap into electronic typesetting, remaining essentially
					unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
					Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
					versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
					printer took a galley of type and scrambled it to make a type specimen book. It has survived not
					only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
					It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
					and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
					Ipsum.ype specimen book. It has survived not only five centuries, but also the leap into electronic
					typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
					Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
					like Aldus PageMaker including versions of Lorem Ipsum.
				</div>
			</main>
		);
	}
}

export default Content;
export const handleScroll = Content.doScroll;
