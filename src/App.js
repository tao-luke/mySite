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
				<meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1" />

				<meta name="keywords" content="Luke Tao LukeResume Resume Luke LukeResume" />
			</Helmet>
			<Page />
		</React.Fragment>
	);
}

export default App;
