import React from 'react';
import './App.scss';
import Helmet from 'react-helmet';
import Page from './comp/Page';
function App() {
	return (
		<React.Fragment>
			<Helmet>
				<title>Luke Tao </title>
			</Helmet>
			<Page />
		</React.Fragment>
	);
}

export default App;
