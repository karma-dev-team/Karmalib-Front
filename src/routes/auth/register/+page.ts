// данные с этой функции можно вытащить из переменной data в +page.svelte 


export const load = async ({ cookies }) => {
	// Извлекаем куки авторизации
	const authToken = cookies.get("Authorization") || null;

	return {
		authToken
	};
};