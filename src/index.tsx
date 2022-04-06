import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ComingSoon } from './components';
import { AhoraContainer, HomeContainer } from './containers';
// import { AhoraContainer } from './containers/ahora-container';
import './index.css';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			{/* <AhoraContainer /> */}
			{/* <ComingSoon /> */}
			<HomeContainer />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('app-root')
)