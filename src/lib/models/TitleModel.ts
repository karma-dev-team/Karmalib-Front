import type { TitleStatus } from "$lib/enums/TitleStatus";
import type { TitleTypes } from "$lib/enums/TitleTypes";
import type { TranslationStatus } from "$lib/enums/TranslationStatus";
import type { FileModel } from "./FileModel";
import type { TitleTagModel } from "./TitleTagModel";

export interface TitleModel {
    id?: string;
    coverImage: FileModel; 
    name: string; 
    type: TitleTypes; 
    rating: string;
    genres: TitleTagModel[];
    tags: string[]
    description?: string; 
    titleStatus?: TitleStatus; 
    translationStatus?: TranslationStatus; 
}