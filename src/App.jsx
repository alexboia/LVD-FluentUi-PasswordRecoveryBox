import React from 'react';
import PasswordRecoveryBox from './components/PasswordRecoveryBox.jsx';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="password-recovery-box-demo-container">
				<PasswordRecoveryBox 
					
				/>
			</div>
		);
	}
}