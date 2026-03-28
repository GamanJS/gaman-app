import { composeService } from 'gaman/compose';
import type { RT } from 'gaman/types';

export const AppService = composeService(() => {
	/**
	 * TODO: your private logic in here
	 */
	
	return {
		WelcomeMessage() {
			return '❤️ Welcome to GamanJS';
		},
	};
});

export type AppService = RT<typeof AppService>;
