// данные с этой функции можно вытащить из переменной data в +page.svelte 

import { TitleTypes } from '$lib/enums/TitleTypes.js';
import logoImage from '$lib/images/KarmaLibLogo.png';
import type { TitleModel } from '$lib/models/TitleModel.js';

export function load({  }): { titles: TitleModel[], genres: string[], tags: string[] } {
	return {
		titles: [ 
			{
				name: "Таинственная деревня",
				rating: "9.5",
				type: TitleTypes.Manxva,
				coverImage: { path: "", blob: logoImage },
				genres: [{'name': 'Экшен'}],
				tags: ["Лолкек"], 
			},
			{
				name: "Выживание в Апокалипсисе",
				rating: "8.5",
				type: TitleTypes.Manxva,
				coverImage: { path: "", blob: logoImage },
				genres: [{'name': 'Экшен'}],
				tags: ["Лолкек"], 
			},
			{
				name: "Мне было предначертано...",
				rating: "8.6",
				type: TitleTypes.Manxva,
				coverImage: { path: "", blob: logoImage },
				genres: [{'name': 'Экшен'}],
				tags: ["Лолкек"], 
			},
			{
				name: "Варвар с Сеульского вокзала",
				rating: "9.2",
				type: TitleTypes.Manxva,
				coverImage: { path: "", blob: logoImage },
				genres: [{'name': 'Экшен'}],
				tags: ["Лолкек"], 
			}
		], 
		genres: [ "Фэнтези"], 
		tags: ["Лолкек"]
	}  
}