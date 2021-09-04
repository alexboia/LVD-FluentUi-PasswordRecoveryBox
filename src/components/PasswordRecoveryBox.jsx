import React from 'react';
import PropTypes from 'prop-types';

import PasswordRecoverySteps from './PasswordRecoverySteps.js';
import PasswordRecoveryStep1 from './PasswordRecoveryStep1.jsx';
import PasswordRecoveryStep2 from './PasswordRecoveryStep2.jsx';

export default class PasswordRecoveryBox extends React.Component {
	constructor(props) {
		super(props);

		this._handlePasswordRecoveryInitiationRequested = 	
			this._handlePasswordRecoveryInitiationRequested.bind(this);
		this._handlePasswordRecoveryInitiationValuesChanged = 
			this._handlePasswordRecoveryInitiationValuesChanged.bind(this);
		this._handleBackFromPasswordRecoveryInitiationRequested =
			this._handleBackFromPasswordRecoveryInitiationRequested.bind(this);

		this._handlePasswordChangeValuesChanged =
			this._handlePasswordChangeValuesChanged.bind(this);
		this._handleBackFromPasswordChangeRequested = 
			this._handleBackFromPasswordChangeRequested.bind(this);
		this._handlePasswordChangedRequested = 
			this._handlePasswordChangedRequested.bind(this);
	}

	componentDidMount() {
		if (this.props.onPasswordRecoveryBoxInitiatlized != null) {
			this.props.onPasswordRecoveryBoxInitiatlized();
		}
	}

	componentWillUnmount() {
		if (this.props.onPasswordRecoveryBoxDisposed != null) {
			this.props.onPasswordRecoveryBoxDisposed();
		}
	}

	_handlePasswordRecoveryInitiationRequested(values) {
		if (this.props.onPasswordRecoveryInitiationRequested != null) {
			this.props.onPasswordRecoveryInitiationRequested(values);
		}
	}

	_handlePasswordRecoveryInitiationValuesChanged(oldValues, newValues) {
		if (this.props.onPasswordRecoveryInitiationValuesChanged != null) {
			this.props.onPasswordRecoveryInitiationValuesChanged(oldValues, newValues);
		}
	}

	_handleBackFromPasswordRecoveryInitiationRequested(values) {
		if (this.props.onBackFromPasswordRecoveryInitiationRequested != null) {
			this.props.onBackFromPasswordRecoveryInitiationRequested(values);
		}
	}

	_handlePasswordChangeValuesChanged(oldValues, newValues) {
		if (this.props.onPasswordChangeValuesChanged != null) {
			this.props.onPasswordChangeValuesChanged(oldValues, newValues);
		}
	}

	_handleBackFromPasswordChangeRequested(values) {
		if (this.props.onBackFromPasswordChangeRequested != null) {
			this.props.onBackFromPasswordChangeRequested(values);
		}
	}

	_handlePasswordChangedRequested(values) {
		if (this.props.onPasswordChangedRequested != null) {
			this.props.onPasswordChangedRequested(values);
		}
	}
	
	render() {
		return (
			<div className={this._computeContainerCssClassName()} style={this._getStyle()}>
				{this._renderCurrentStep()}
			</div>
		);
	};

	_computeContainerCssClassName() {
		let containerClassName = ['lvd-passwordrecovery-box'];

		if (this._useFramedLayout()) {
			containerClassName.push('lvd-passwordrecovery-box-framed');
		}

		if (this._useFixedLayout()) {
			containerClassName.push('lvd-passwordrecovery-box-fixed');
		}

		if (this._useCenteredLayout()) {
			containerClassName.push('lvd-passwordrecovery-box-centered');
		}

		const className = this._getClassName();
		if (!!className) {
			containerClassName.push(className);
		}

		return containerClassName.join(' ');
	}

	_useFramedLayout() {
		return this.props.hasOwnProperty('framed')
			? !!this.props.framed
			: true;
	}

	_useFixedLayout() {
		return this.props.hasOwnProperty('fixed')
			? !!this.props.fixed
			: true;
	}

	_useCenteredLayout() {
		return this.props.hasOwnProperty('centered')
			? !!this.props.centered
			: true;
	}

	_getClassName() {
		return this.props.className || null;
	}

	_getStyle() {
		return this.props.style || {};
	}

	_renderCurrentStep() {
		const stepName = this._getStep();
		if (stepName == PasswordRecoverySteps.EnterNewPassword) {
			return this._renderStep2();
		} else  {
			return this._renderStep1();
		}
	}

	_getStep() {
		return this.props.step || PasswordRecoverySteps.CollectUserIdentifier;
	}

	_renderStep1() {
		const step1Props = this._getStep1Props();
		return (
			<PasswordRecoveryStep1 
				{...step1Props}
				onPasswordRecoveryInitiationRequested={this._handlePasswordRecoveryInitiationRequested}
				onPasswordRecoveryInitiationValuesChanged={this._handlePasswordRecoveryInitiationValuesChanged}
				onBackRequested={this._handleBackFromPasswordRecoveryInitiationRequested}
			/>
		);
	}

	_getStep1Props() {
		const step1Props = this.props.step1Props || {};
		return Object.assign(this._getCommonProps(), 
			step1Props);
	}

	_getCommonProps() {
		return {
			disabled: this._isDisabled(),
			messageProps: this._getMessageProps(),
			backActionButtonProps: this._getBackActionButtonProps()
		};
	}

	_isDisabled() {
		return !!this.props.disabled;
	}

	_getMessageProps() {
		return this.props.messageProps || {};
	}

	_getBackActionButtonProps() {
		return this.props.backActionButtonProps || {};
	}

	_renderStep2() {
		const step2Props = this._getStep2Props();
		return (
			<PasswordRecoveryStep2 
				{...step2Props} 
				onPasswordChangedRequested={this._handlePasswordChangedRequested}
				onPasswordChangeValuesChanged={this._handlePasswordChangeValuesChanged}
				onBackRequested={this._handleBackFromPasswordChangeRequested}
			/>
		);
	}

	_getStep2Props() {
		const step2Props = this.props.step2Props || {};
		return Object.assign(this._getCommonProps(), 
			step2Props);
	}
}

PasswordRecoveryBox.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object,
	disabled: PropTypes.bool,
	step: PropTypes.string,

	messageProps: PropTypes.object,

	step1Props: PropTypes.object,
	step2Props: PropTypes.object,

	backActionButtonProps: PropTypes.object,

	onPasswordRecoveryInitiationRequested: PropTypes.func,
	onPasswordRecoveryInitiationValuesChanged: PropTypes.func,
	onBackFromPasswordRecoveryInitiationRequested: PropTypes.func,
	
	onPasswordChangedRequested: PropTypes.func,
	onPasswordChangeValuesChanged: PropTypes.func,
	onBackFromPasswordChangeRequested: PropTypes.func,
	
	onPasswordRecoveryBoxInitiatlized: PropTypes.func,
	onPasswordRecoveryBoxDisposed: PropTypes.func
};