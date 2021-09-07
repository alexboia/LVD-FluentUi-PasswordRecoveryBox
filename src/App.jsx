import React from 'react';
import PasswordRecoveryBox from './components/PasswordRecoveryBox.jsx';

import { evaluatePassword } from './PasswordEvaluation.js';
import FakePasswordRecoveryService from './FakePasswordRecoveryService.js';
import PasswordRecoverySteps from './components/PasswordRecoverySteps.js';
import { 
	BackButtonPositions,
	PasswordRecoveryBoxMessageType, 
	StrengthIndicatorStyles 
} from './components/Index.js';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			working: false,
			currentStep: PasswordRecoverySteps.CollectUserIdentifier,
			currentMessage: null,
			newPasswordStrengthLevel: null,
			newPasswordRules: []
		};

		this._passwordRecoveryService = new FakePasswordRecoveryService();

		this._handlePasswordRecoveryBoxInitialized = 
			this._handlePasswordRecoveryBoxInitialized.bind(this);
		this._handlePasswordRecoveryBoxDisposed = 
			this._handlePasswordRecoveryBoxDisposed.bind(this);

		this._handlePasswordRecoveryInitiationValuesChanged = 
			this._handlePasswordRecoveryInitiationValuesChanged.bind(this);
		this._handlePasswordRecoveryInitiationRequested = 
			this._handlePasswordRecoveryInitiationRequested.bind(this);
		this._handleBackFromPasswordRecoveryInitiationRequested = 
			this._handleBackFromPasswordRecoveryInitiationRequested.bind(this);

		this._handlePasswordChangeValuesChanged =
			this._handlePasswordChangeValuesChanged.bind(this);
		this._handlePasswordChangeRequested = 
			this._handlePasswordChangeRequested.bind(this);
		this._handleBackFromPasswordChangeRequested =
			this._handleBackFromPasswordChangeRequested.bind(this);
	}

	_handlePasswordRecoveryBoxInitialized() {
		this._log('Password recovery log initialized.');
	}

	_handlePasswordRecoveryBoxDisposed() {
		this._log('Password recovery box disposed.');
	}

	_handlePasswordRecoveryInitiationValuesChanged(oldValues, newValues) {
		this._log('Password recovery initiation values changed.');
		this._log('Old values:');
		this._log(oldValues);
		this._log('New values:')
		this._log(newValues);
	}

	_moveToEnterIdentification() {
		this.setState({
			currentStep: PasswordRecoverySteps.CollectUserIdentifier,
			currentMessage: null,
			newPasswordStrengthLevel: null,
			newPasswordRules: []
		});
	}

	_handleBackFromPasswordRecoveryInitiationRequested(values) {
		this._log('Requested back navigation from password recovery step 1. Values are:');
		this._log(values);
	}

	_handlePasswordRecoveryInitiationRequested(values) {
		this._log('Password recovery initiated. Values are:');
		this._log(values);
		this._initiatePasswordRecovery(values);
	}

	_initiatePasswordRecovery(values) {
		this._setBusy(true);
		this._clearCurrentMessage();

		this._passwordRecoveryService.verifyIdentification(values, (resultMessage) => {
			this._setBusy(false);
			if (resultMessage.type == PasswordRecoveryBoxMessageType.success) {
				this._moveToEnterNewPassword();
			} else {
				this._setCurrentMessage(resultMessage);
			}
		});
	}

	_clearCurrentMessage() {
		this._setCurrentMessage(null);
	}

	_setCurrentMessage(currentMessage) {
		this.setState({
			currentMessage: currentMessage
		});
	}

	_moveToEnterNewPassword() {
		this.setState({
			currentStep: PasswordRecoverySteps.EnterNewPassword,
			currentMessage: null,
			newPasswordStrengthLevel: null,
			newPasswordRules: []
		});
	}

	_handlePasswordChangeValuesChanged(oldValues, newValues) {
		this._log('Password change values changed.');
		this._log('New values:');
		this._log(newValues);
		this._log('Old values:');
		this._log(oldValues);
		this._evaluateNewPassword(newValues);
	}

	_evaluateNewPassword(newValues) {
		const result = evaluatePassword(newValues.newPassword);
		this.setState({
			newPasswordStrengthLevel: result.level,
			newPasswordRules: result.rules
		});
	}

	_handleBackFromPasswordChangeRequested(values) {
		this._log('Requested back navigation from password recovery step 2. Values are:');
		this._log(values);
	}

	_handlePasswordChangeRequested(values) {
		this._log('Password change requested. Values are:');
		this._log(values);
		this._changePassword(values);
	}

	_changePassword(values) {
		this._setBusy(true);
		this._clearCurrentMessage();

		this._passwordRecoveryService.changePassword(values, (resultMessage) => {
			this._setBusy(false);
			this._setCurrentMessage(resultMessage);
		});
	}

	_setBusy(isBusy) {
		this.setState({
			working: isBusy
		});
	}

	_log(text) {
		if (typeof text != 'object') {
			console.log(text);
		} else {
			console.table(text);
		}
	}

	render() {
		const newPasswordRules = this.state.newPasswordRules;
		const newPasswordStrengthLevel = this.state.newPasswordStrengthLevel;
		const newPasswordStrengthText = newPasswordStrengthLevel != null 
			? newPasswordStrengthLevel.defaultLabel 
			: null;

		return (
			<div className="password-recovery-box-demo-container">
				<PasswordRecoveryBox 
					disabled={this.state.working}
					step={this.state.currentStep}

					messageProps={this.state.currentMessage}
					backActionButtonProps={{
						label: 'Back to login',
						position: BackButtonPositions.right
					}}

					fixed={false}
					centered={false}
					framed={true}
					underlined={true}

					step1Props={{
						className: 'x-class-step1',
						userIdentifierProps: {
							label: 'We need your e-mail',
							description: 'You will receive a password recovery link and further instructions to this e-mail, if valid.'
						}
					}}

					step2Props={{
						canReveal: false,
						className: "x-step2-change-password",
						newPasswordProps: {
							passwordStrengthProps: {	
								style: StrengthIndicatorStyles.intermittentBar,
								level: newPasswordStrengthLevel,
								text: newPasswordStrengthText
							},
							passwordRulesProps: {
								rules: newPasswordRules
							},
							placeholder: 'Enter new password, please',
							description: 'Yes, it must NOT be the same as your old one'
						},
						confirmNewPasswordProps: {
							placeholder: 'Confirm new password, please',
							description: 'Becasue, let us face it, we have all been there: all new password, but immediately forgotten!'
						}
					}}

					onPasswordRecoveryBoxInitiatlized={this._handlePasswordRecoveryBoxInitialized}
					onPasswordRecoveryBoxDisposed={this._handlePasswordRecoveryBoxDisposed}

					onPasswordRecoveryInitiationValuesChanged={this._handlePasswordRecoveryInitiationValuesChanged}
					onPasswordRecoveryInitiationRequested={this._handlePasswordRecoveryInitiationRequested}
					onBackFromPasswordRecoveryInitiationRequested={this._handleBackFromPasswordRecoveryInitiationRequested}

					onPasswordChangeValuesChanged={this._handlePasswordChangeValuesChanged}
					onPasswordChangeRequested={this._handlePasswordChangeRequested}
					onBackFromPasswordChangeRequested={this._handleBackFromPasswordChangeRequested}
				/>
			</div>
		);
	}
}