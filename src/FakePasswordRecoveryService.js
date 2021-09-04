import { successMessage, errorMessage } from './components/PasswordRecoveryBoxUtility.js';

export default class FakePasswordRecoveryService {
	constructor(config = null) {
		this._config = this._mergeConfig(config || {});
	}

	_mergeConfig(config) {
		return Object.assign(this._getDefaultConfig(), config);
	}

	_getDefaultConfig() {
		return {
			correctEmailAddress: 'test@email.com'
		};
	}

	verifyIdentification(values, onReady) {
		this._emulateServerProcessing(() => {
			let result = null;

			if (this._isEmailAddressCorrect(values.userIdentifier)) {
				result = successMessage('We have sent you password recovery link on the e-mail address you entered.');
			} else {
				result = errorMessage('The e-mail address you entered is not correct.');
			}

			onReady(result);
		});
	}

	_emulateServerProcessing(onReady) {
		const timeout = this._generateTimeout();
		window.setTimeout(onReady, timeout);
	}

	_generateTimeout() {
		return Math.max(Math.random() * 1000, 250);
	}

	_isEmailAddressCorrect(emailAddress) {
		return this._config.correctEmailAddress == emailAddress;
	}

	changePassword(values, onReady) {
		this._emulateServerProcessing(() => {
			let result = null;

			if (!this._newPasswordMatchesConfirmation(values.newPassword, values.confirmNewPassword)) {
				result = errorMessage('The new password does not match its confirmation.');
			} else {
				result = successMessage('The password has been successfully changed.')
			}

			onReady(result);
		});
	}

	_newPasswordMatchesConfirmation(newPassword, confirmNewPassword) {
		return !!newPassword && newPassword == confirmNewPassword;
	}
}