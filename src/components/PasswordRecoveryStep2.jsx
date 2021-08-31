import React from 'react';
import PropTypes from 'prop-types';

import { PasswordChangeBox } from 'lvd-fluentui-passwordchangebox';

import PasswordRecoveryStep2Defaults from './PasswordRecoveryStep2Defaults.js';

export default class PasswordRecoveryStep2 extends React.Component {
	constructor(props) {
		super(props);
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
				requireExistingPassword={false}
				titleProps={this._getTitleProps()}
				newPasswordProps={this._getNewPasswordProps()}
				confirmNewPasswordProps={this._getConfirmNewPasswordProps()}
				passwordChangeButtonProps={this._getPasswordChangeButtonProps()}
				backActionButtonProps={this._getBackActionButtonProps()}
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
		return !!this.props.canReveal;
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
		return this.props.passwordChangeButtonProps || {};
	}

	_getBackActionButtonProps() {
		const backActionButtonProps = this.props.backActionButtonProps || {};
		return {
			show: backActionButtonProps.hasOwnProperty('show')
				? !!backActionButtonProps.show
				: true,
			label: backActionButtonProps.label 
				|| PasswordRecoveryStep2Defaults.backActionButton.label,
			position: backActionButtonProps.position
				|| PasswordRecoveryStep2Defaults.backActionButton.position
		};
	}
}

PasswordRecoveryStep2.propTypes = {
	disabled: PropTypes.bool,
	readOnly: PropTypes.bool,
	style: PropTypes.object,
	underlined: PropTypes.bool,
	canReveal: PropTypes.bool,

	titleProps: PropTypes.object,
	confirmNewPasswordProps: PropTypes.object,
	newPasswordProps: PropTypes.object,
	passwordChangeButtonProps: PropTypes.object,
	backActionButtonProps: PropTypes.object
};