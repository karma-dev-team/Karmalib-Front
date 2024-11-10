interface PushNotificationModel {
    title: string;
    type: "cookie" | "admin" | "moderation" | "message";
    text: string;
    image?: FileModel;
}