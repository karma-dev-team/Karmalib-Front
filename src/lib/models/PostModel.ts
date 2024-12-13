import type { PostStatus } from "$lib/enums/PostTypes";
import type { CommentModel } from "./CommentModel";
import type { FileModel } from "./FileModel";
import type { PostTagModel } from "./PostTagModel";
import type { UserModel } from "./UserModel";

export interface PostModel {
    author: UserModel; // UUID of the user who created the post
    title: string; // Title of the post
    text: string; // Content of the post
    likesCount: number; // Number of likes
    dislikesCount: number; // Number of dislikes
    status: PostStatus; // Status of the post (enum)
    pinned?: boolean; // Indicates if the post is pinned
    hidden?: boolean; // Indicates if the post is hidden
    approvedById?: string; // UUID of the user who approved the post (optional)
    comments: CommentModel[]; // List of comments
    attachments: FileModel[]; // Set of attached files
    tags: PostTagModel[]; 
    createdAt: Date; 
}
