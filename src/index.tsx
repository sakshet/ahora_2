import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AhoraContainer } from './containers/ahora-container';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<AhoraContainer />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('app-root')
)