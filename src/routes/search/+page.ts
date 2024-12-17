import type { TitleModel } from '$lib/models/TitleModel';
import { TitleTypes } from '$lib/enums/TitleTypes';

export const load = async ({ url }): Promise<{
	results: {
		titles: TitleModel[];
		characters: { name: string; description: string }[];
		authors: { name: string; bio: string }[];
		teams: { name: string; members: number }[];
	};
}> => {
	const query = url.searchParams.get('query')?.toLowerCase() || '';

	// Пример данных
	const allTitles: TitleModel[] = [
		{
			name: 'Таинственная деревня',
			rating: '9.5',
			type: TitleTypes.Manxva,
			genre: 'Фэнтези',
			logo: { path: '', blob: '' },
		},
		{
			name: 'Выживание в Апокалипсисе',
			rating: '8.5',
			type: TitleTypes.Manxva,
			genre: 'Экшен',
			logo: { path: '', blob: '' },
		},
	];

	const allCharacters = [
		{ name: 'Персонаж 1', description: 'Описание персонажа 1' },
		{ name: 'Персонаж 2', description: 'Описание персонажа 2' },
	];

	const allAuthors = [
		{ name: 'Автор 1', bio: 'Краткая биография автора 1' },
		{ name: 'Автор 2', bio: 'Краткая биография автора 2' },
	];

	const allTeams = [
		{ name: 'Команда 1', members: 5 },
		{ name: 'Команда 2', members: 10 },
	];

	// Фильтрация данных
	const filteredTitles = allTitles.filter((title) => title.name.toLowerCase().includes(query));
	const filteredCharacters = allCharacters.filter((character) =>
		character.name.toLowerCase().includes(query)
	);
	const filteredAuthors = allAuthors.filter((author) => author.name.toLowerCase().includes(query));
	const filteredTeams = allTeams.filter((team) => team.name.toLowerCase().includes(query));

	// Логирование данных для отладки
	console.log('Search query:', query);
	console.log('Filtered titles:', filteredTitles);
	console.log('Filtered characters:', filteredCharacters);
	console.log('Filtered authors:', filteredAuthors);
	console.log('Filtered teams:', filteredTeams);

	return {
		results: {
			titles: filteredTitles,
			characters: filteredCharacters,
			authors: filteredAuthors,
			teams: filteredTeams,
		},
	};
};
