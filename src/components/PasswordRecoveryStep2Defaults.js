import BackButtonPositions from "./BackButtonPositions.js";

const PasswordRecoveryStep2Defaults = {
	title: 'Password Recovery - Set New Password',

	passwordChangeButton: {
		label: 'Recover my password'
	},

	backActionButton: {
		show: true,
		label: 'Back to log-in',
		position: BackButtonPositions.left
	}
};

export default PasswordRecoveryStep2Defaults;