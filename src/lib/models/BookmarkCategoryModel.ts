import type { UserModel } from '$lib/models/UserModel.ts';

export interface BookmarkCategoryModel {
	id?: string; // ID из BaseEntity
	user: UserModel; // Пользователь, к которому привязана категория
	name: string; // Название категории
	isPubliclyVisible: boolean; // Видимость категории
	isSendNotifications: boolean; // Отправлять уведомления
}