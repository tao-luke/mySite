import React, { Component } from 'react';
class Terminal extends Component {
	state = {
		interval: [ 250, 100, 80 ],
		intervalf: [ 30, 50, 90 ],
		p: [ '$ ', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '' ]
	};
	componentDidMount() {
		this.displayCommand('cat who_is_this_luke_guy.json', 0);
	}
	displayCommand = (string, counter) => {
		if (counter >= string.length) {
			setTimeout(() => {
				this.displayFile(0);
			}, 500);
			console.log('start');
		} else {
			setTimeout(() => {
				const p = [ ...this.state.p ];
				p.splice(0, 1, this.state.p[0] + string[counter]);
				this.setState({ p });
				this.displayCommand(string, ++counter);
			}, this.state.interval[Math.floor(Math.random() * this.state.interval.length)]);
		}
	};
	displayFile = (counter) => {
		const fileArr = [
			'{',
			' "is_a": [',
			'   "2nd Year University of Waterloo CS Student",',
			'   "Problem-solving Enthusiast",',
			'   "human"',
			' ],',
			' "has_experience_in": [',
			'   "C++",',
			'   "Python",',
			'   ["PHP","Laravel","MySQL"],',
			'   ["React","Node","Express","MongoDB"],',
			' ],',
			' "enjoys": [',
			'   "Meeting New People",',
			'   "Cooking"',
			'   "Climbing",',
			'   "Making the Most Random Projects"',
			' ]',
			'}'
		]; //18lines
		if (fileArr.length > counter) {
			this.displayLine(fileArr[counter], counter);
		} else {
			console.log('end');
		}
	};
	displayLine = (line, num) => {
		setTimeout(() => {
			const p = [ ...this.state.p ];
			p.splice(num, 1, line);
			this.setState({ p });
			this.displayFile(++num);
		}, this.state.intervalf[Math.floor(Math.random() * this.state.intervalf.length)]);
	};
	render() {
		let counter = 0;
		return (
			<div className="eyecatch">
				<div className="pWrap">
					{this.state.p.map((elem) => {
						return <pre key={counter++}>{elem}</pre>;
					})}
				</div>
			</div>
		);
	}
}

export default Terminal;
