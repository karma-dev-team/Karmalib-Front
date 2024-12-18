import type { UserModel } from '$lib/models/UserModel.ts';
import type { TitleModel } from '$lib/models/TitleModel.ts';
import type { BookmarkCategoryModel } from '$lib/models/BookmarkCategoryModel.ts';
import type { BookmarkModel } from '$lib/models/BookmarkModel.ts';
import logoImage from '$lib/images/KarmaLibLogo.png';
import { TitleTypes } from '$lib/enums/TitleTypes.ts';

export const load = () => {
	const users: UserModel[] = [
		{
			id: "1",
			username: "exampleUser",
			email: "example@example.com",
		},
	];

	const titles: TitleModel[] = [
		{
			id: "1",
			name: "Путь удивительного...",
			rating: "8.5",
			genres: ["Фэнтези"],
			tags: ["Лолкек"], 
			type: TitleTypes.Comics,
			logo: { path: "", blob: logoImage }
		},
		{
			id: "2",
			name: "Сказка о герое",
			rating: "9.0",
			type: TitleTypes.Comics,
			genres: ["Фэнтези"],
			tags: ["Лолкек"], 
			logo: { path: "", blob: logoImage }
		},
	];

	const categories: BookmarkCategoryModel[] = [
		{
			id: "1",
			user: users[0],
			name: "Буду читать",
			isPubliclyVisible: true,
			isSendNotifications: true,
		},
		{
			id: "2",
			user: users[0],
			name: "Читаю",
			isPubliclyVisible: true,
			isSendNotifications: false,
		},
	];

	const bookmarks: BookmarkModel[] = [
		{
			id: "1",
			user: users[0],
			title: titles[0],
			category: [categories[0]],
		},
		{
			id: "2",
			user: users[0],
			title: titles[1],
			category: [categories[1]],
		},
	];

	return { users, titles, categories, bookmarks };
};
