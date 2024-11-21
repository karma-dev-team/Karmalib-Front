// src/routes/+page.ts
import logoImage from '$lib/images/KarmaLibLogo.png';
import { TitleTypes } from '$lib/enums/TitleTypes';
import type { TitleModel } from '$lib/models/TitleModel';

export const prerender = true;

export const load = (): { hotNewsItems: TitleModel[], popularItems: TitleModel[] } => {
	return {
		popularItems: [
			{
				name: "Таинственная деревня",
				rating: "9.5",
				type: TitleTypes.Manxva,
				logo: { path: "", blob: logoImage },
				genre: "Фэнтези"
			},
			{
				name: "Выживание в Апокалипсисе",
				rating: "8.5",
				type: TitleTypes.Manxva,
				logo: { path: "", blob: logoImage },
				genre: "Экшен"
			},
			{
				name: "Мне было предначертано...",
				rating: "8.6",
				type: TitleTypes.Manxva,
				logo: { path: "", blob: logoImage },
				genre: "Психология"
			},
			{
				name: "Варвар с Сеульского вокзала",
				rating: "9.2",
				type: TitleTypes.Manxva,
				logo: { path: "", blob: logoImage },
				genre: "Фэнтези"
			}
			// Добавьте другие элементы по аналогии
		],
		hotNewsItems: [
			{
				name: "Мне было предначертано...",
				rating: "8.6",
				type: TitleTypes.Manxva,
				logo: { path: "", blob: logoImage },
				genre: "Психология"
			},
			{
				name: "Варвар с Сеульского вокзала",
				rating: "9.2",
				type: TitleTypes.Manxva,
				logo: { path: "", blob: logoImage },
				genre: "Фэнтези"
			}
			// Добавьте другие элементы по аналогии
		]
	};
};
