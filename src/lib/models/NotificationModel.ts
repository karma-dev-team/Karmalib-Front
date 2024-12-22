import type { NotificationsTypes } from "$lib/enums/NotificationsTypes";
import type { CommentModel } from "./CommentModel";
import type { TitleModel } from "./TitleModel";
import type { UserModel } from "./UserModel";

export interface NotificationModel {
    content: string;       // Содержимое уведомления
    title: string;         // Заголовок уведомления
    type: NotificationsTypes; // Тип уведомления (например, enum)
    read: boolean;         // Статус прочтения
    recipient?: UserModel; // Получатель уведомления (опционально)
    titleEntity?: TitleModel; // Ссылка на Title (если есть)
    comment?: CommentModel;   // Ссылка на комментарий (если есть)
}
