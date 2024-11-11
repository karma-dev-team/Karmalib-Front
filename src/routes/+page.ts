// since there's no dynamic data here, we can prerender

import logoImage from '$lib/images/KarmaLibLogo.png';
import { TitleTypes } from '$lib/enums/TitleTypes'
import type { TitleModel } from '$lib/models/TitleModel';


// it so that it gets served as a static asset in production
export const prerender = true;

export const load = (): { hotNewsItems: TitleModel[], popularItems: TitleModel[] } => { 
    return { 
        popularItems: [
            { 
                name: "Таинственная деревня", 
                rating: "9.5", 
                type: TitleTypes.Manxva, 
                logo: { path: "", blob: logoImage } 
            },
            { 
                name: "Выживание в Апокалипсисе", 
                rating: "8.5", 
                type: TitleTypes.Manxva, 
                logo: { path: "", blob: logoImage } 
            },
            { 
                name: "Я — ранкер, даже когда сплю", 
                rating: "8.7", 
                type: TitleTypes.Manxva, 
                logo: { path: "", blob: logoImage } 
            },
            { 
                name: "Таинственная деревня", 
                rating: "9.5", 
                type: TitleTypes.Manxva, 
                logo: { path: "", blob: logoImage } 
            },
            { 
                name: "Выживание в Апокалипсисе", 
                rating: "8.5", 
                type: TitleTypes.Manxva, 
                logo: { path: "", blob: logoImage } 
            },
            { 
                name: "Я — ранкер, даже когда сплю", 
                rating: "8.7", 
                type: TitleTypes.Manxva, 
                logo: { path: "", blob: logoImage } 
            },
            { 
                name: "Таинственная деревня", 
                rating: "9.5", 
                type: TitleTypes.Manxva, 
                logo: { path: "", blob: logoImage } 
            },
            { 
                name: "Выживание в Апокалипсисе", 
                rating: "8.5", 
                type: TitleTypes.Manxva, 
                logo: { path: "", blob: logoImage } 
            },
            { 
                name: "Я — ранкер, даже когда сплю", 
                rating: "8.7", 
                type: TitleTypes.Manxva, 
                logo: { path: "", blob: logoImage } 
            }
        ], 
        hotNewsItems: [
            { 
                name: "Мне было предначертано...", 
                rating: "8.6", 
                type: TitleTypes.Manxva, 
                logo: { path: "", blob: logoImage } 
            },
            { 
                name: "Варвар с Сеульского вокзала", 
                rating: "9.2", 
                type: TitleTypes.Manxva, 
                logo: { path: "", blob: logoImage } 
            },
            { 
                name: "Рейдер", 
                rating: "9.5", 
                type: TitleTypes.Manxva, 
                logo: { path: "", blob: logoImage } 
            },
            { 
                name: "Таинственная деревня", 
                rating: "9.5", 
                type: TitleTypes.Manxva, 
                logo: { path: "", blob: logoImage } 
            },
            { 
                name: "Выживание в Апокалипсисе", 
                rating: "8.5", 
                type: TitleTypes.Manxva, 
                logo: { path: "", blob: logoImage } 
            },
            { 
                name: "Я — ранкер, даже когда сплю", 
                rating: "8.7", 
                type: TitleTypes.Manxva, 
                logo: { path: "", blob: logoImage } 
            },
            { 
                name: "Таинственная деревня", 
                rating: "9.5", 
                type: TitleTypes.Manxva, 
                logo: { path: "", blob: logoImage } 
            },
            { 
                name: "Выживание в Апокалипсисе", 
                rating: "8.5", 
                type: TitleTypes.Manxva, 
                logo: { path: "", blob: logoImage } 
            },
            { 
                name: "Я — ранкер, даже когда сплю", 
                rating: "8.7", 
                type: TitleTypes.Manxva, 
                logo: { path: "", blob: logoImage } 
            }
        ]
    } 
}
