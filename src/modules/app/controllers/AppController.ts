import { composeController } from 'gaman/compose';
import { AppService } from '../services/AppService';

export type Deps = {
	appService: AppService;
};

export default composeController(({ appService }: Deps) => {
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
