<script lang="ts">
	import InputField from './InputField.svelte';

	// Состояния фильтров
	let types: string = '';
	let genres: string = '';
	let tags: string = '';

	let projectStatus: string = '';
	let translationStatus: string = '';
	let ageRating: string = '';

	let yearFrom: number | undefined = undefined;
	let yearTo: number | undefined = undefined;

	let ratingFrom: number | undefined = undefined;
	let ratingTo: number | undefined = undefined;

	let chapters: string = '';

	let excludeTypes: string = '';
	let excludeGenres: string = '';
	let excludeTags: string = '';

	let autoLoad: boolean = true;

	// Очистка всех фильтров
	function clearFilters() {
		types = '';
		genres = '';
		tags = '';

		projectStatus = '';
		translationStatus = '';
		ageRating = '';

		yearFrom = undefined;
		yearTo = undefined;

		ratingFrom = undefined;
		ratingTo = undefined;

		chapters = '';

		excludeTypes = '';
		excludeGenres = '';
		excludeTags = '';

		autoLoad = true;
	}
</script>

<div class="filters-panel">
	<div class="header">
		<h3>Фильтры</h3>
		<button class="clear-btn" on:click={clearFilters}>очистить</button>
		<span class="close-icon">✕</span>
	</div>

	<!-- Фильтры -->
	<InputField label="Типы" bind:value={types} />
	<InputField label="Жанры" bind:value={genres} />
	<InputField label="Теги" bind:value={tags} />

	<InputField label="Статус проекта" bind:value={projectStatus} />
	<InputField label="Статус перевода" bind:value={translationStatus} />
	<InputField label="Возрастной рейтинг" bind:value={ageRating} />

	<!-- Год выпуска -->
	<div class="range-container">
		<label>Год выпуска</label>
		<div class="range-inputs">
			<InputField label="От" type="number" bind:value={yearFrom} />
			<InputField label="До" type="number" bind:value={yearTo} />
		</div>
	</div>

	<!-- Оценка -->
	<div class="range-container">
		<label>Оценка</label>
		<div class="range-inputs">
			<InputField label="От" type="number" bind:value={ratingFrom} />
			<InputField label="До" type="number" bind:value={ratingTo} />
		</div>
	</div>

	<!-- Количество глав -->
	<div class="chapters">
		<label>Количество глав</label>
		<div class="chapter-buttons">
			{#each ['1-20', '20-100', '100-200', '>200'] as range}
				<button
					type="button"
					class:selected={chapters === range}
					on:click={() => (chapters = range)}
				>
					{range}
				</button>
			{/each}
		</div>
	</div>

	<!-- Исключить -->
	<InputField label="Типы" bind:value={excludeTypes} />
	<InputField label="Жанры" bind:value={excludeGenres} />
	<InputField label="Теги" bind:value={excludeTags} />

	<!-- Автоподгрузка -->
	<div class="auto-load">
		<label>Автоподгрузка</label>
		<input type="checkbox" bind:checked={autoLoad} />
	</div>
</div>

<!-- Стили -->
<style>
	.filters-panel {
		background-color: #18181b;
		color: #fff;
		padding: 20px;
		border-radius: 8px;
		font-family: Arial, sans-serif;
		width: 300px;
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 15px;
	}

	.clear-btn {
		background: none;
		color: #007bff;
		border: none;
		cursor: pointer;
		font-size: 0.9rem;
	}

	.close-icon {
		cursor: pointer;
		font-size: 1.2rem;
	}

	.range-container {
		margin-top: 10px;
	}

	.range-container label {
		margin-bottom: 5px;
		display: block;
	}

	.range-inputs {
		display: flex;
		gap: 10px;
	}

	.chapters {
		margin-top: 10px;
	}

	.chapter-buttons {
		display: flex;
		gap: 5px;
		margin-top: 5px;
	}

	.chapter-buttons button {
		background-color: #222223;
		color: #fff;
		border: 1px solid #333;
		padding: 5px 10px;
		cursor: pointer;
		border-radius: 4px;
		font-size: 0.9rem;
	}

	.chapter-buttons button.selected {
		background-color: #007bff;
		color: #fff;
	}

	.auto-load {
		margin-top: 15px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.auto-load label {
		margin-right: 10px;
	}
</style>
