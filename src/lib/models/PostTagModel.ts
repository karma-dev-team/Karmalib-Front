import type { PostTagType } from "$lib/enums/PostTagType";

export interface PostTagModel {
    name: string; // Name of the tag
    slug?: string; // Slug for URLs (optional)
    description?: string; // Description of the tag (optional)
    type: PostTagType; // Enum representing the type of the tag
    isVisible?: boolean; // Visibility status of the tag
}
