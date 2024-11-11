import type { FileModel } from "./FileModel";

export interface PushNotificationModel {
    title: string;
    type: "cookie" | "admin" | "moderation" | "message";
    text: string;
    image?: FileModel;
}