import { composeRouter } from 'gaman/compose';
import AppController from './controllers/AppController';
import { AppService } from './services/AppService';

export default composeRouter((r) => {
	/**
	 * * Inject Service to Controllers
	 */
	r.mountService({
		appService: AppService(),
	});

	r.get('/', [AppController, 'render']);
});
