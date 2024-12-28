import type { TitleModel } from "./TitleModel";

export interface RecommendationModel {
    id?: string | undefined; // UUID
    createdAt: Date;
    updatedAt: Date;
    authorId: string; // UUID
    title: TitleModel;
    active: boolean;
    rating: number;
}