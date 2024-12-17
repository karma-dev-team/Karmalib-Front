import type { UserModel } from "./UserModel";
import type { TitleModel } from "./TitleModel";
import type { BookmarkCategoryModel } from "./BookmarkCategoryModel";

export interface BookmarkModel {
	id: number; // ID из BaseEntity
	user: UserModel; // Пользователь, к которому принадлежит закладка
	title: TitleModel; // Тайтл, связанный с закладкой
	category: BookmarkCategoryModel[]; // Категории закладок
}
