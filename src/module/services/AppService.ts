import { composeService } from 'gaman/compose';

export default composeService(() => ({
	WelcomeMessage() {
		return '❤️ Welcome to GamanJS';
	},
}));