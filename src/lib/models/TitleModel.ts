import type { TitleTypes } from "$lib/enums/TitleTypes";
import type { FileModel } from "./FileModel";

export interface TitleModel {
    id?: string;
    logo: FileModel; 
    name: string; 
    type: TitleTypes; 
    rating: string;
    genre: string;
    description?: string;
}