import React from 'react';
import PropTypes from 'prop-types';

import { PasswordChangeBox } from 'lvd-fluentui-passwordchangebox';

import PasswordRecoveryStep2Defaults from './PasswordRecoveryStep2Defaults.js';
import { 
	passwordRecoveryBoxBackButtonPositionToPasswordChangeBoxBackButtonPosition, 
	passwordRecoveryBoxMessageTypePasswordChangeBoxMessageType 
} from './PasswordRecoveryBoxUtility.js';

export default class PasswordRecoveryStep2 extends React.Component {
	constructor(props) {
		super(props);

		this._handlePasswordChangeValuesChanged = 
			this._handlePasswordChangeValuesChanged.bind(this);
		this._handleBackRequested = 
			this._handleBackRequested.bind(this);
		this._handlePasswordChangeRequested = 
			this._handlePasswordChangeRequested.bind(this);
	}

	componentDidMount() {
		if (this.props.onStep2BoxInitialized != null) {
			this.props.onStep2BoxInitialized();
		}
	}

	componentWillUnmount() {
		if (this.props.onStep2BoxDisposed != null) {
			this.props.onStep2BoxDisposed();
		}
	}

	_handlePasswordChangeValuesChanged(oldValues, newValues) {
		if (this.props.onPasswordChangeValuesChanged != null) {
			this.props.onPasswordChangeValuesChanged(oldValues, newValues);
		}
	}

	_handleBackRequested(values) {
		if (this.props.onBackRequested != null) {
			this.props.onBackRequested(values);
		}
	}

	_handlePasswordChangeRequested(values) {
		if (this.props.onPasswordChangeRequested != null) {
			this.props.onPasswordChangeRequested(values);
		}
	}

	render() {
		return (
			<PasswordChangeBox 
				framed={false}
				centered={false}
				fixed={false}
				disabled={this._isDisabled()}
				readOnly={this._isReadOnly()}
				underlined={this._isUnderlined()}
				canReveal={this._canReveal()}
				className={this._getClassName()}
				style={this._getStyle()}
				requireExistingPassword={false}
				messageProps={this._getMessagProps()}
				titleProps={this._getTitleProps()}
				newPasswordProps={this._getNewPasswordProps()}
				confirmNewPasswordProps={this._getConfirmNewPasswordProps()}
				passwordChangeButtonProps={this._getPasswordChangeButtonProps()}
				backActionButtonProps={this._getBackActionButtonProps()}
				onPasswordChangeValuesChanged={this._handlePasswordChangeValuesChanged}
				onBackRequested={this._handleBackRequested}
				onPasswordChangedRequested={this._handlePasswordChangeRequested}
			/>
		);
	}

	_isDisabled() {
		return !!this.props.disabled;
	}

	_isReadOnly() {
		return !!this.props.readOnly;
	}

	_isUnderlined() {
		return !!this.props.underlined;
	}

	_canReveal() {
		return this.props.hasOwnProperty('canReveal')
			? !!this.props.canReveal
			: true;
	}

	_getClassName() {
		return this.props.className || null;
	}

	_getStyle() {
		return this.props.style || {};
	}

	_getMessagProps() {
		const messageProps = this.props.messageProps || {};
		const messageType = passwordRecoveryBoxMessageTypePasswordChangeBoxMessageType(messageProps.type || null);

		return {
			message: messageProps.message || null,
			type: messageType
		};
	}

	_getTitleProps() {
		const titleProps = this.props.titleProps || {};
		return {
			show: titleProps.hasOwnProperty('show') 
				? !!titleProps.show 
				: true,
			text: titleProps.text 
				|| PasswordRecoveryStep2Defaults.title
		};
	}

	_getNewPasswordProps() {
		return this.props.newPasswordProps || {};
	}

	_getConfirmNewPasswordProps() {
		return this.props.confirmNewPasswordProps || {};
	}

	_getPasswordChangeButtonProps() {
		const passwordChangeButtonProps = this.props.passwordChangeButtonProps || {};
		return {
			label: passwordChangeButtonProps.label 
				|| PasswordRecoveryStep2Defaults.passwordChangeButton.label
		};
	}

	_getBackActionButtonProps() {
		const backActionButtonProps = this.props.backActionButtonProps || {};

		const backButtonPosition = backActionButtonProps.position 
			|| PasswordRecoveryStep2Defaults.backActionButton.position;

		return {
			show: backActionButtonProps.hasOwnProperty('show')
				? !!backActionButtonProps.show
				: true,
			label: backActionButtonProps.label 
				|| PasswordRecoveryStep2Defaults.backActionButton.label,
			position: passwordRecoveryBoxBackButtonPositionToPasswordChangeBoxBackButtonPosition(backButtonPosition)
		};
	}
}

PasswordRecoveryStep2.propTypes = {
	disabled: PropTypes.bool,
	readOnly: PropTypes.bool,
	underlined: PropTypes.bool,
	canReveal: PropTypes.bool,

	className: PropTypes.string,
	style: PropTypes.object,

	messageProps: PropTypes.object,
	titleProps: PropTypes.object,
	
	confirmNewPasswordProps: PropTypes.object,
	newPasswordProps: PropTypes.object,
	passwordChangeButtonProps: PropTypes.object,
	backActionButtonProps: PropTypes.object,

	onPasswordChangedRequested: PropTypes.func,
	onBackRequested: PropTypes.func,
	onPasswordChangeValuesChanged: PropTypes.func,

	onStep2BoxInitialized: PropTypes.func,
	onStep2BoxDisposed: PropTypes.func
};