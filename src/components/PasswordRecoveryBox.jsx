import React from 'react';
import PropTypes from 'prop-types';

import PasswordRecoverySteps from './PasswordRecoverySteps.js';
import PasswordRecoveryStep1 from './PasswordRecoveryStep1.jsx';
import PasswordRecoveryStep2 from './PasswordRecoveryStep2.jsx';

export default class PasswordRecoveryBox extends React.Component {
	constructor(props) {
		super(props);
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
			/>
		);
	}

	_getStep1Props() {
		return this.props.step1Props || {};
	}

	_renderStep2() {
		const step2Props = this._getStep2Props();
		return (
			<PasswordRecoveryStep2 
				{...step2Props} 
			/>
		);
	}

	_getStep2Props() {
		return this.props.step2Props || {};
	}
}

PasswordRecoveryBox.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object,
	step: PropTypes.string,

	step1Props: PropTypes.object,
	step2Props: PropTypes.object
};