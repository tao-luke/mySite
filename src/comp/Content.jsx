import React, { Component } from 'react';
import EyeCatcher from './page1/EyeCatcher';
import About from './page2/About';
import Project from './page3/projectSummary';
import Contact from './page4/FindMe';
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
					<Contact />
				</div>
			</main>
		);
	}
}

export default Content;
export const handleScroll = Content.doScroll;
