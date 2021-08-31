import React from 'react';
import PropTypes from 'prop-types';

export default class StepTitle extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return this._shouldShow() && (
			<h4 className="lvd-passwordrecovery-box-header">
				{this._getText()}
			</h4>
		);
	}

	_shouldShow() {
		return !!this.props.show;
	}

	_getText() {
		return this.props.text || null;
	}
}

StepTitle.propTypes = {
	show: PropTypes.bool,
	text: PropTypes.string
};