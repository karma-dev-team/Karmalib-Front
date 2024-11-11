import type { TitleTypes } from "$lib/enums/TitleTypes";
import type { FileModel } from "./FileModel";

export interface TitleModel { 
    logo: FileModel; 
    name: string; 
    type: TitleTypes; 
    rating: string; 
}