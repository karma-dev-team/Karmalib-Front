/**
 * Загружает данные для страницы историй.
 */
export async function load() {
	try {
	  const response = await fetch('/api/stories'); // Замените на реальный эндпоинт API
	  if (!response.ok) {
		throw new Error('Не удалось загрузить данные историй');
	  }
  
	  const stories = await response.json();
	  return { stories };
	} catch (error) {
	  console.error('Ошибка загрузки историй:', error);
	  if (error instanceof Error) {
		return { error: error.message };
	  } else {
		return { error: 'Произошла неизвестная ошибка' };
	  }
	}
  }
  