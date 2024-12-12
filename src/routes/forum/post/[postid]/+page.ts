// данные с этой функции можно вытащить из переменной data в +page.svelte 

import { PostStatus } from '$lib/enums/PostTypes';
import type { PostModel } from '$lib/models/PostModel.js';
import type { UserModel } from '$lib/models/UserModel';

export function load({ params }): { user: UserModel, post: PostModel }{
	return {
		post: { 
				author: {
					username: "PostAuthor",
					isStaff: false,
					avatar: { 
						name: "example.png",
						size: 1024, // Размер в байтах
						path: "example.com",
					}
				},
				tags: [{ 
					name: "Technology",
					slug: "technology",
					description: "Tags related to technology topics",
					type: "CATEGORY",
					isVisible: true,
				}], 
				createdAt: new Date("2024-04-10T16:00:00Z"), 
				title: "Пример поста",
				text: "Это текст примерного поста. Здесь может быть любая информация.",
				likesCount: 42,
				dislikesCount: 7,
				status: PostStatus.PUBLISHED,
				pinned: true,
				hidden: false,
				approvedById: "456e7890-e12b-12d3-a456-426614174555",
				comments: [
				{
					id: "1", 
					author: {
						username: "User1",
						isStaff: false,
					},
					text: "Это тестовый комментарий",
					isDeleted: false,
					isSpoiler: false,
					likes: 5,
					dislikes: 2,
					createdAt: new Date("2024-04-06T12:00:00Z"),
					parentCommentId: null,
					replies: [],
					pinned: false,
				},
				{
					id: "2", 
					author: {
						username: "User2",
						isStaff: false,
					},
					text: "Спойлерный комментарий",
					isDeleted: false,
					isSpoiler: true,
					likes: 8,
					dislikes: 1,
					createdAt: new Date("2024-04-10T16:00:00Z"),
					parentCommentId: null,
					replies: [],
					pinned: false,
				},
				{
					id: "3", 
					author: {
						username: "Admin",
						isStaff: true,
					},
					text: "Админский комментарий",
					isDeleted: false,
					isSpoiler: false,
					likes: 12,
					dislikes: 0,
					createdAt: new Date("2024-04-11T10:00:00Z"),
					parentCommentId: null,
					replies: [],
					pinned: true,
				},
			],
			attachments: [
				{
					name: "example.png",
					size: 1024, // Размер в байтах
					path: "example.com",
				},
				{
					name: "document.pdf",
					size: 2048,
					path: "example.com",
				},
			],
		},
		user: {
			username: "Admin",
			isStaff: true,
		},
	}
}