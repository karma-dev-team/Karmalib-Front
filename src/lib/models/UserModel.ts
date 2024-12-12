import type { UserRole } from "$lib/enums/UserRole";
import type { FileModel } from "./FileModel";

export interface UserModel {
    username: string; // Unique username
    publicUsername?: string; // Optional public username
    email?: string; // Optional email
    registrationDate?: string; // Registration date as ISO string
    description?: string; // Optional user description
    isStaff?: boolean; // Optional; defaults to `false`
    isSuperuser?: boolean; // Optional; defaults to `false`
    sex?: number; // Sex (e.g., 0 = unknown, 1 = male, 2 = female, etc.)
    isPrivate?: boolean; // Optional; defaults to `false`
    needEmail?: boolean; // Optional; defaults to `false`
    isNotifyBookmarks?: boolean; // Optional; defaults to `false`
    isBanned?: boolean; // Optional; defaults to `false`
    isSuspended?: boolean; // Optional; defaults to `false`
    isOnline?: boolean; // Optional; defaults to `true`
    roles?: UserRole[]; // List of user roles
    avatar?: FileModel; // Optional avatar
}