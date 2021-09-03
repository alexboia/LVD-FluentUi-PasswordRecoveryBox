import React from 'react';
import PropTypes from 'prop-types';

import { PrimaryButton, DefaultButton } from '@fluentui/react';
import { TextField } from '@fluentui/react';

import BackButtonPositions from './BackButtonPositions.js';
import PasswordRecoveryStep1Defaults from './PasswordRecoveryStep1Defaults.js';
import StepTitle from './StepTitle.jsx';

export default class PasswordRecoveryStep1 extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			userIdentifier: '',
			hasInteracted: false
		};

		this._handleUserIdentifierChanged =
			this._handleUserIdentifierChanged.bind(this);
		this._getUserIdentifierErrorMessage = 
			this._getUserIdentifierErrorMessage.bind(this);

		this._handlePasswordRecoveryInitiationButtonClicked = 
			this._handlePasswordRecoveryInitiationButtonClicked.bind(this);
		this._handleBackButtonClicked = 
			this._handleBackButtonClicked.bind(this);
	}

	_getFormValues() {
		return {
			userIdentifier: this.state.userIdentifier
		};
	}

	_isFormValid() {
		const formValues = this._getFormValues();
		return !!formValues.userIdentifier;
	}

	componentDidMount() {
		if (this.props.onStep1BoxInitialized != null) {
			this.props.onStep1BoxInitialized();
		}
	}

	componentWillUnmount() {
		const values = this._getFormValues();
		if (this.props.onStep1BoxDisposed != null) {
			this.props.onStep1BoxDisposed(values);
		}
	}

	_handleUserIdentifierChanged(event) {
		event.preventDefault();
		const oldValues = this._getFormValues();

		this.setState({
			userIdentifier: event.target.value,
			hasInteracted: true
		}, () => this._raiseValuesChanaged(oldValues));
	}

	_raiseValuesChanaged(oldValues) {
		const newValues = this._getFormValues();
		if (this.props.onPasswordRecoveryInitiationValuesChanged != null) {
			this.props.onPasswordRecoveryInitiationValuesChanged(oldValues, newValues);
		}
	}

	_handlePasswordRecoveryInitiationButtonClicked(event) {
		event.preventDefault();
		const values = this._getFormValues();

		if (this.props.onPasswordRecoveryInitiationRequested != null) {
			this.props.onPasswordRecoveryInitiationRequested(values);
		}
	}

	_handleBackButtonClicked(event) {
		event.preventDefault();
		const values = this._getFormValues();

		if (this.props.onBackRequested != null) {
			this.props.onBackRequested(values);
		}
	}

	render() {
		return (
			<div className="lvd-passwordrecovery-step1" style={this._getStyle()}>
				{this._renderTitle()}

				<div className="lvd-passwordrecovery-box-fields-container">
					{this._renderUserIdentifierField()}
				</div>

				<div className="lvd-passwordrecovery-box-button-container">
					{this._renderPasswordRecoveryInitiationActionButton()}
					{this._renderBackActionButtonButton()}
					<div className="lvd-passwordrecovery-box-clear"></div>
				</div>
			</div>
		);
	}

	_getStyle() {
		return this.props.style || {};
	}

	_renderTitle() {
		const titleProps = this._getTitleProps();
		return (
			<StepTitle {...titleProps} />
		);
	}

	_getTitleProps() {
		const titleProps = this.props.titleProps || {};
		return {
			show: titleProps.hasOwnProperty('show') 
				? !!titleProps.show 
				: true,
			text: titleProps.text 
				|| PasswordRecoveryStep1Defaults.title
		};
	}

	_renderUserIdentifierField() {
		const userIdentifierProps = this._getUserIdentifierProps();
		const userIdentifierField = (
			<TextField 
				type="text" 
				value={this.state.userIdentifier}
				label={userIdentifierProps.label}
				placeholder={userIdentifierProps.placeholder}
				description={userIdentifierProps.description}
				disabled={this._isDisabled()}
				readOnly={this._isReadOnly()}
				underlined={this._isUnderlined()}
				onChange={this._handleUserIdentifierChanged}
				onGetErrorMessage={this._getUserIdentifierErrorMessage}
				required={true}
			/>
		);

		return this._renderField(userIdentifierField);
	}

	_getUserIdentifierProps() {
		const userIdentifierProps = this.props.userIdentifierProps || {};
		return {
			label: userIdentifierProps.label 
				|| PasswordRecoveryStep1Defaults.userIdentifier.label,
			placeholder: userIdentifierProps.hasOwnProperty('placeholder')
				? userIdentifierProps.placeholder || null
				: PasswordRecoveryStep1Defaults.userIdentifier.placeholder,
			description: userIdentifierProps.description
				|| PasswordRecoveryStep1Defaults.userIdentifier.description,
			emptyErrorMessage: userIdentifierProps.emptyErrorMessage
				|| PasswordRecoveryStep1Defaults.userIdentifier.messages.empty
		};
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

	_getUserIdentifierErrorMessage(value) {
		const userIdentifierProps = this._getUserIdentifierProps();
		return this._displayUserNameFieldErrorMessage(value)
			? userIdentifierProps.emptyErrorMessage
			: '';
	}

	_displayUserNameFieldErrorMessage(value) {
		return !this._isValueFilledIn(value) 
			&& this._displayFieldErrorMessages();
	}

	_isValueFilledIn(value) {
		return (value != null && value.length > 0);
	}

	_displayFieldErrorMessages() {
		return !!this.state.hasInteracted;
	}

	_renderField(element) {
		return (
			<div className="lvd-passwordrecovery-box-field">{element}</div>
		);
	}

	_renderPasswordRecoveryInitiationActionButton() {
		const enableSubmit = this._isFormValid() && !this._isDisabled();
		const passwordRecoveryInitiationButtonProps = this._getPasswordRecoveryInitiationActionButtonProps();

		return (
			<PrimaryButton
				disabled={!enableSubmit}
				className="lvd-passwordrecovery-box-btn lvd-passwordrecovery-box-passwordchange-btn"
				text={passwordRecoveryInitiationButtonProps.label} 
				onClick={this._handlePasswordRecoveryInitiationButtonClicked}
			/>
		);
	}

	_getPasswordRecoveryInitiationActionButtonProps() {
		const passwordRecoveryInitiationButtonProps = this.props.passwordRecoveryInitiationButtonProps || {};
		return {
			label: passwordRecoveryInitiationButtonProps.label ||
				PasswordRecoveryStep1Defaults.passwordRecoveryInitiationButton.label
		};
	}

	_renderBackActionButtonButton() {
		const backActionButtonProps = this._getBackActionButtonProps();

		return backActionButtonProps.show && (
			<DefaultButton primary={false}
				className={this._computeBackActionButtonCssClassName(backActionButtonProps)}
				text={backActionButtonProps.label} 
				disabled={this._isDisabled()}
				onClick={this._handleBackButtonClicked}
			/>
		);
	}

	_getBackActionButtonProps() {
		const backActionButtonProps = this.props.backActionButtonProps || {};
		return {
			show: backActionButtonProps.hasOwnProperty('show')
				? !!backActionButtonProps.show
				: true,
			label: backActionButtonProps.label 
				|| PasswordRecoveryStep1Defaults.backActionButton.label,
			position: backActionButtonProps.position
				|| PasswordRecoveryStep1Defaults.backActionButton.position
		};
	}

	_computeBackActionButtonCssClassName(backActionButtonProps) {
		let positionClassName = 'lvd-passwordrecovery-box-back-btn-left';
		const baseClassName = 'lvd-passwordrecovery-box-btn lvd-passwordrecovery-box-back-btn';
		
		if (backActionButtonProps.position == BackButtonPositions.right) { 
			positionClassName = 'lvd-passwordrecovery-box-back-btn-right';
		}

		return `${baseClassName} ${positionClassName}`;
	}
}

PasswordRecoveryStep1.propTypes = {
	disabled: PropTypes.bool,
	readOnly: PropTypes.bool,
	style: PropTypes.object,
	underlined: PropTypes.bool,

	messageProps: PropTypes.object,

	titleProps: PropTypes.object,
	userIdentifierProps: PropTypes.object,
	passwordRecoveryInitiationButtonProps: PropTypes.object,
	backActionButtonProps: PropTypes.object,

	onPasswordRecoveryInitiationRequested: PropTypes.func,
	onBackRequested: PropTypes.func,
	onPasswordRecoveryInitiationValuesChanged: PropTypes.func,

	onStep1BoxInitialized: PropTypes.func,
	onStep1BoxDisposed: PropTypes.func
};