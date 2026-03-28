import { composeRouter } from 'gaman/compose';
import BlogController from './controllers/BlogController';
import { BlogService } from './services/BlogServices';

export default composeRouter((r) => {
	r.mountService({
		blogService: BlogService(),
	});

	r.group('/blog', (route) => {
		route.get('/', [BlogController, 'index']);
		route.get('/:id', [BlogController, 'show']);
		route.post('/', [BlogController, 'store']);
		route.put('/:id', [BlogController, 'update']);
		route.delete('/:id', [BlogController, 'destroy']);
	});
});
