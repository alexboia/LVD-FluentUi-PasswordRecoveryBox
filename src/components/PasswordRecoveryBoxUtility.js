import { MessageBarType } from "@fluentui/react";
import { PasswordChangeBoxMessageType } from 'lvd-fluentui-passwordchangebox';
import PasswordRecoveryBoxMessageType from "./PasswordRecoveryBoxMessageType";

import BackButtonPositions from "./BackButtonPositions.js";
import { BackButtonPositions as PasswordChangeBoxBackButtonPositions } from 'lvd-fluentui-passwordchangebox';

const officeUiMessageTypeMapping = {
	[PasswordRecoveryBoxMessageType.info]: MessageBarType.info,
	[PasswordRecoveryBoxMessageType.error]: MessageBarType.error,
	[PasswordRecoveryBoxMessageType.warning]: MessageBarType.warning,
	[PasswordRecoveryBoxMessageType.severeWarning]: MessageBarType.severeWarning,
	[PasswordRecoveryBoxMessageType.success]: MessageBarType.success,
	[PasswordRecoveryBoxMessageType.blocked]: MessageBarType.blocked
};

const passwordChangeBoxMessageTypeMapping = {
	[PasswordRecoveryBoxMessageType.info]: PasswordChangeBoxMessageType.info,
	[PasswordRecoveryBoxMessageType.error]: PasswordChangeBoxMessageType.error,
	[PasswordRecoveryBoxMessageType.warning]: PasswordChangeBoxMessageType.warning,
	[PasswordRecoveryBoxMessageType.severeWarning]: PasswordChangeBoxMessageType.severeWarning,
	[PasswordRecoveryBoxMessageType.success]: PasswordChangeBoxMessageType.success,
	[PasswordRecoveryBoxMessageType.blocked]: PasswordChangeBoxMessageType.blocked
};

export function passwordRecoveryBoxMessageTypeToOfficeUiMessageType(passwordRecoveryBoxMessageType) {
	let officeUiMessageType = null;
	if (!!passwordRecoveryBoxMessageType && officeUiMessageTypeMapping.hasOwnProperty(passwordRecoveryBoxMessageType)) {
		officeUiMessageType = officeUiMessageTypeMapping[passwordRecoveryBoxMessageType];
	}
	return officeUiMessageType;
}

export function passwordRecoveryBoxMessageTypePasswordChangeBoxMessageType(passwordRecoveryBoxMessageType) {
	let passwordChangeBoxMessageType = null;
	if (!!passwordRecoveryBoxMessageType && passwordChangeBoxMessageTypeMapping.hasOwnProperty(passwordRecoveryBoxMessageType)) {
		passwordChangeBoxMessageType = passwordChangeBoxMessageTypeMapping[passwordRecoveryBoxMessageType];
	}
	return passwordChangeBoxMessageType;
}

export function successMessage(message) {
	return {
		type: PasswordRecoveryBoxMessageType.success,
		message: message
	};
}

export function errorMessage(message) {
	return {
		type: PasswordRecoveryBoxMessageType.error,
		message: message
	};
}

export function warningMessage(message) {
	return {
		type: PasswordRecoveryBoxMessageType.warning,
		message: message
	};
}

export function infoMessage(message) {
	return {
		type: PasswordRecoveryBoxMessageType.info,
		message: message
	};
}

const passwordChangeBoxBackButtonPositionsMapping = {
	[BackButtonPositions.left]: PasswordChangeBoxBackButtonPositions.left,
	[BackButtonPositions.right]: PasswordChangeBoxBackButtonPositions.right
};

export function passwordRecoveryBoxBackButtonPositionToPasswordChangeBoxBackButtonPosition(passwordRecoveryBoxBackButtonPosition) {
	let passwordChangeBoxBackButtonPosition = null;
	if (!!passwordRecoveryBoxBackButtonPosition && passwordChangeBoxBackButtonPositionsMapping.hasOwnProperty(passwordRecoveryBoxBackButtonPosition)) {
		passwordChangeBoxBackButtonPosition = passwordChangeBoxBackButtonPositionsMapping[passwordRecoveryBoxBackButtonPosition];
	}
	return passwordChangeBoxBackButtonPosition;
}