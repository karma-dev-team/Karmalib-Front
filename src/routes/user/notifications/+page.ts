import { NotificationsTypes } from "$lib/enums/NotificationsTypes";
import { TitleStatus } from "$lib/enums/TitleStatus";
import { TitleTypes } from "$lib/enums/TitleTypes";
import { TranslationStatus } from "$lib/enums/TranslationStatus";
import type { CommentModel } from "$lib/models/CommentModel";
import type { TitleModel } from "$lib/models/TitleModel";
import imageLogo from "$lib/images/KarmaLibLogo.png"
import type { FileModel } from "$lib/models/FileModel";
import type { NotificationModel } from "$lib/models/NotificationModel";

export function load(): { notifications: NotificationModel[] } {
    return {
        notifications: [
            {
                content: "Your comment received a new reply!",
                title: "Comment Notification",
                type: NotificationsTypes.Social,
                read: false,
                recipient: {
                    username: "johndoe",
                    publicUsername: "John Doe",
                },
                comment: {
                    id: "comment123",
                    author: {
                        username: "janedoe",
                        publicUsername: "Jane Doe",
						avatar: {
							name: "epic-logo.png",
							size: 1200,
							blob: imageLogo, 
						} as FileModel
                    },
                    text: "I completely agree with your thoughts!",
                    isDeleted: false,
                    isSpoiler: false,
                    likes: 15,
                    dislikes: 2,
                    createdAt: new Date(),
                    parentCommentId: null,
                    replies: [],
                    pinned: false,
                } as CommentModel,
            },
            {
                content: "A new update is available for your favorite title!",
                title: "Title Update",
                type: NotificationsTypes.Updates,
                read: false,
                recipient: {
                    username: "johndoe",
                    publicUsername: "John Doe",
                },
                titleEntity: {
                    id: "title567",
                    logo: {
                        name: "epic-logo.png",
                        size: 1200,
                        blob: imageLogo, 
                    },
                    name: "Epic Adventure Saga",
                    type: TitleTypes.Manga,
                    rating: "9.2",
                    genres: ["Action", "Adventure"],
                    tags: ["Heroic", "Fantasy"],
                    description: "Follow the journey of a young hero in an epic fantasy world.",
                    titleStatus: TitleStatus.Ongoing,
                    translationStatus: TranslationStatus.Ongoing,
                } as TitleModel,
            },
        ],
    };
}
