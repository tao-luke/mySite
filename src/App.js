import React from 'react';
import './App.scss';
import Helmet from 'react-helmet';
import Page from './comp/Page';
function App() {
	return (
		<React.Fragment>
			<Helmet>
				<title>Luke Tao </title>
				<meta charset="UTF-8" />
				<meta
					name="description"
					content="The main page of Luke Tao, a computer science student at University of Waterloo"
				/>
				<meta name="author" content="Luke Tao" />
				<meta name="keywords" content="Luke Tao LukeResume Resume Luke LukeResume" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Helmet>
			<Page />
		</React.Fragment>
	);
}

export default App;
