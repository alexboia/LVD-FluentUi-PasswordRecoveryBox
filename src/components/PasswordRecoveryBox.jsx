import React from 'react';
import PropTypes from 'prop-types';

import PasswordRecoverySteps from './PasswordRecoverySteps.js';
import PasswordRecoveryStep1 from './PasswordRecoveryStep1.jsx';

export default class PasswordRecoveryBox extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className={this._computeContainerCssClassName()} style={this._getStyle()}>
				<PasswordRecoveryStep1 />
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
}

PasswordRecoveryBox.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object
};