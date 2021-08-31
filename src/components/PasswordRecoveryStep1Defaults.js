import { BackButtonPositions } from 'lvd-fluentui-passwordchangebox';

const PasswordRecoveryStep1Defaults = {
	title: 'Password recovery',

	userIdentifier: {
		label: 'E-mail address:',
		placeholder: 'Please fill in your e-mail address',
		description: '',
		messages: {
			empty: 'You must fill in your e-mail address'
		}
	},

	passwordRecoveryInitiationButton: {
		label: 'Recover my password'
	},

	backActionButton: {
		show: true,
		label: 'Back to log-in',
		position: BackButtonPositions.left
	}
};

export default PasswordRecoveryStep1Defaults;