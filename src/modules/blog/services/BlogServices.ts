import { composeService } from 'gaman/compose';
import type { RT } from 'gaman/types';

export interface BlogPost {
	id: string;
	title: string;
	content: string;
	createdAt: string;
}

const posts: BlogPost[] = [
	{
		id: '1',
		title: 'First Post',
		content: 'This is my first blog post.',
		createdAt: new Date().toISOString(),
	},
];

export const BlogService = composeService(() => {
	return {
		getAll() {
			return posts;
		},

		getById(id: string) {
			return posts.find((p) => p.id === id);
		},

		create(data: Omit<BlogPost, 'id' | 'createdAt'>) {
			const newPost: BlogPost = {
				id: Math.random().toString(36).substring(7),
				...data,
				createdAt: new Date().toISOString(),
			};
			posts.push(newPost);
			return newPost;
		},

		update(id: string, data: Partial<Omit<BlogPost, 'id' | 'createdAt'>>) {
			const post = posts.find((p) => p.id === id);
			if (!post) return null;

			if (data.title !== undefined) post.title = data.title;
			if (data.content !== undefined) post.content = data.content;

			return post;
		},

		delete(id: string) {
			const index = posts.findIndex((p) => p.id === id);
			if (index === -1) return false;

			posts.splice(index, 1);
			return true;
		},
	};
});

export type BlogService = RT<typeof BlogService>;
