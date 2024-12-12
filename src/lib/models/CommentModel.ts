import type { UserModel } from "./UserModel";

export interface CommentModel {
    id: string; 
    author: UserModel; // The author of the comment
    text: string; // The text of the comment
    isDeleted?: boolean; // Optional; defaults to `false`
    isSpoiler?: boolean; // Optional; defaults to `false`
    likes: number; // Number of likes
    dislikes: number; 
    createdAt: Date; 
    parentCommentId?: string | null; // ID of the parent comment (nullable)
    replies?: CommentModel[]; // List of replies to this comment
    pinned?: boolean; // Optional; defaults to `false`
}