// данные с этой функции можно вытащить из переменной data в +page.svelte 
import type { PageServerLoad } from './$types';

export const load = (async ({ cookies }) => {
	const authToken = cookies.get('authToken');
  
	return {
		authToken
	};
}) satisfies PageServerLoad;