import type { TitleStatus } from "$lib/enums/TitleStatus";
import type { TitleTypes } from "$lib/enums/TitleTypes";
import type { TranslationStatus } from "$lib/enums/TranslationStatus";
import type { FileModel } from "./FileModel";

export interface TitleModel {
    id?: string;
    logo: FileModel; 
    name: string; 
    type: TitleTypes; 
    rating: string;
    genres: string[];
    tags: string[]
    description?: string; 
    titleStatus?: TitleStatus; 
    translationStatus?: TranslationStatus; 
}