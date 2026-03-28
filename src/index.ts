/**
 * ==========================================================================
 * Gaman Bootstrap File
 * ==========================================================================
 *
 * Welcome to your GamanJS application! ❤️
 *
 * This file is responsible for bootstrapping your application and
 * starting the HTTP server. By default, it runs on port 3431.
 *
 * Server URL:
 *    http://localhost:3431
 *
 * For the full documentation and more awesome features, visit:
 *    https://gaman.7togk.id/docs/
 *
 * ==========================================================================
 */

import { defineBootstrap } from 'gaman';
import AppRouter from './modules/app/AppRouter';
import BlogRouter from './modules/blog/BlogRouter';

defineBootstrap(async (app) => {
	app.mount(AppRouter); // ? register router module
	app.mount(BlogRouter);

	app.mountServer({ http: 3431 });
});
