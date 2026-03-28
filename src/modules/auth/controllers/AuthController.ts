import { composeController } from 'gaman/compose';
import { AuthService } from '../services/AuthServices';

export type Deps = {
	authService: AuthService;
};

export default composeController(({ authService: appService }: Deps) => {
	/**
	 * TODO: your private logic in here
	 */

	return {
		render(ctx) {
			return ctx.send({
				message: appService.WelcomeMessage(),
			});
		},
	};
});
