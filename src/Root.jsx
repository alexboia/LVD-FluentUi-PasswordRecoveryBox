import React from 'react';
import { ThemeProvider } from '@fluentui/react';
import App from './App.jsx';

export default class Root extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ThemeProvider>
				<App />
			</ThemeProvider>
		);
	}
}