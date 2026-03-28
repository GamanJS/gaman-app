import { composeService } from 'gaman/compose';
import type { RT } from 'gaman/types';

export const AuthService = composeService(() => {
	/**
	 * TODO: your private logic in here
	 */

	return {
		WelcomeMessage() {
			return '❤️ Welcome to GamanJS';
		},
	};
});

export type AuthService = RT<typeof AuthService>;
