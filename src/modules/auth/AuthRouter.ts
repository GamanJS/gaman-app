import { composeRouter } from 'gaman/compose';
import AppController from './controllers/AuthController';
import { AuthService } from './services/AuthServices';

export default composeRouter((r) => {
	/**
	 * * Inject Service to Controllers
	 */
	r.mountService({
		authService: AuthService(),
	});

	r.get('/', [AppController, 'render']);
});
