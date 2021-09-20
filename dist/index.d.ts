import * as React from 'react';
import { 
	PasswordChangeBoxMessageType, 
	BackButtonPositions as PasswordChangeBoxBackButtonPositions, 
	IConfirmNewPasswordProps,
	INewPasswordProps,
	IPasswordChangeButtonProps,
	IPasswordChangeValues
} from 'lvd-fluentui-passwordchangebox';

import {
	PasswordCallbackRule,
	PasswordRegexRule,
	PasswordEvaluator,
	PasswordLengthRule,

	PasswordStrengthIndicator,
	StrengthIndicatorStyles,
	PasswordStrengthLevels,
	
	getAllAvailableLevels,
	getAvailableLevelCount
} from 'lvd-fluentui-passwordchangebox';

export {
	PasswordCallbackRule,
	PasswordRegexRule,
	PasswordEvaluator,
	PasswordLengthRule,

	PasswordStrengthIndicator,
	StrengthIndicatorStyles,
	PasswordStrengthLevels,
	
	getAllAvailableLevels,
	getAvailableLevelCount
};

export enum PasswordRecoverySteps {
	CollectUserIdentifier = 'collect-user-identifier',
	EnterNewPassword = 'enter-new-password'
}

export enum PasswordRecoveryBoxMessageType {
	info = PasswordChangeBoxMessageType.info,
	error = PasswordChangeBoxMessageType.error,
	blocked = PasswordChangeBoxMessageType.blocked,
	severeWarning = PasswordChangeBoxMessageType.severeWarning,
	success = PasswordChangeBoxMessageType.success,
	warning = PasswordChangeBoxMessageType.warning
};

export enum BackButtonPositions {
	left = PasswordChangeBoxBackButtonPositions.left,
	right = PasswordChangeBoxBackButtonPositions.right
};

export interface IPasswordRecoveryBoxMessageProps {
	message?: string;
	type?: PasswordRecoveryBoxMessageType;
}

export interface IPasswordRecoveryBoxTitleProps {
	show?: boolean;
	text?: string;
}

export interface IUserIdentifierProps {
	label?: string;
	placeholder?: string;
	description?: string;
	emptyErrorMessage?: string;
}

export interface IPasswordRecoveryInitiationButtonProps {
	label: string;
}

export interface IBackActionButtonProps {
	show: boolean;
	label: string;
	position: BackButtonPositions;
}

export interface IPasswordRecoveryStep1Values {
	userIdentifier: string;
}

export interface IPasswordRecoveryStep1Props {
	disabled: boolean;
	readOnly: boolean;
	underlined: boolean;

	className: string;
	style: React.CSSProperties;
	
	messageProps: IPasswordRecoveryBoxMessageProps;
	titleProps: IPasswordRecoveryBoxTitleProps;

	userIdentifierProps: IUserIdentifierProps;
	passwordRecoveryInitiationButtonProps: IPasswordRecoveryInitiationButtonProps;
	backActionButtonProps: IBackActionButtonProps;
}

export interface IPasswordRecoveryStep2Values extends IPasswordChangeValues {
	//
}

export interface IPasswordRecoveryStep2Props {
	disabled?: boolean;
	readOnly?: boolean;
	underlined?: boolean;
	canReveal?: boolean;

	className: string;
	style: React.CSSProperties;

	messageProps: IPasswordRecoveryBoxMessageProps;
	titleProps: IPasswordRecoveryBoxTitleProps;

	confirmNewPasswordProps: IConfirmNewPasswordProps;
	newPasswordProps: INewPasswordProps;
	passwordChangeButtonProps: IPasswordChangeButtonProps;
	backActionButtonProps: IBackActionButtonProps;
}

export interface IPasswordRecoveryBoxProps {
	disabled?: boolean;
	readOnly?: boolean;
	underlined?: boolean;

	framed?: boolean;
	centered?: boolean;
	fixed?: boolean;

	className?: string;
	style?: React.CSSProperties;
	step?: PasswordRecoverySteps;

	messageProps?: IPasswordRecoveryBoxMessageProps;

	step1Props?: IPasswordRecoveryStep1Props;
	step2Props?: IPasswordRecoveryStep2Props;

	backActionButtonProps?: IBackActionButtonProps;

	onPasswordRecoveryInitiationRequested?: (values: IPasswordRecoveryStep1Values) => void;
	onPasswordRecoveryInitiationValuesChanged?: (oldValues: IPasswordRecoveryStep1Values, newValues: IPasswordRecoveryStep1Values) => void;
	onBackFromPasswordRecoveryInitiationRequested?: (values: IPasswordRecoveryStep1Values) => void;

	onPasswordChangeRequested?: (values: IPasswordRecoveryStep2Values) => void;
	onPasswordChangeValuesChanged?: (oldValues: IPasswordRecoveryStep2Values, newValues: IPasswordRecoveryStep2Values) => void;
	onBackFromPasswordChangeRequested?: (values: IPasswordRecoveryStep2Values) => void;

	onPasswordRecoveryBoxInitialized?: () => void;
	onPasswordRecoveryBoxDisposed?: () => void;
}

export declare class PasswordRecoveryBox extends React.Component<IPasswordRecoveryBoxProps, {}> {
	constructor(props: IPasswordRecoveryBoxProps);
	render(): JSX.Element;
}

export declare function successMessage(message: string): IPasswordRecoveryBoxMessageProps;
export declare function errorMessage(message: string): IPasswordRecoveryBoxMessageProps;
export declare function warningMessage(message: string): IPasswordRecoveryBoxMessageProps;
export declare function infoMessage(message: string): IPasswordRecoveryBoxMessageProps;