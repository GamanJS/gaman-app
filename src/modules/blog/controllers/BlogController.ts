import { composeController } from 'gaman/compose';
import { BlogService } from '../services/BlogServices';

export type Deps = {
	blogService: BlogService;
};

export default composeController(({ blogService }: Deps) => {
	return {
		index(ctx) {
			return ctx.send({
				data: blogService.getAll(),
			});
		},

		show(ctx) {
			const id = ctx.param('id');
			const post = blogService.getById(id);

			if (!post) {
				return ctx.send({
					message: 'Post not found',
				}, 404);
			}

			return ctx.send({
				data: post,
			});
		},

		async store(ctx) {
			const body = await ctx.json();
			const post = blogService.create(body);

			return ctx.send({
				message: 'Post created successfully',
				data: post,
			}, 201);
		},

		async update(ctx) {
			const id = ctx.param('id');
			const body = await ctx.json();
			const post = blogService.update(id, body);

			if (!post) {
				return ctx.send({
					message: 'Post not found',
				}, 404);
			}

			return ctx.send({
				message: 'Post updated successfully',
				data: post,
			});
		},

		destroy(ctx) {
			const id = ctx.param('id');
			const deleted = blogService.delete(id);

			if (!deleted) {
				return ctx.send({
					message: 'Post not found',
				}, 404);
			}

			return ctx.send({
				message: 'Post deleted successfully',
			});
		},
	};
});
