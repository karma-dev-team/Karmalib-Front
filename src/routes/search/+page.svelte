<script lang="ts">
	import type { TitleModel } from '$lib/models/TitleModel';

	export let results: {
		titles: TitleModel[]
		characters: { name: string; description: string }[]
		authors: { name: string; bio: string }[]
		teams: { name: string; members: number }[]
	}

	console.log('Results:', results);
</script>

<style>
    .results-section {
        margin-top: 20px;
        background-color: black;
    }

    .results-section h2 {
        font-size: 20px;
        margin-bottom: 10px;
    }

    .results-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 15px;
    }

    .result-item {
        background-color: #1c1c1c;
        color: white;
        padding: 10px;
        border-radius: 5px;
        text-align: center;
    }

    .result-item img {
        width: 100%;
        height: auto;
        border-radius: 5px;
    }
</style>

<div class="results-section">
	<h2>Тайтлы</h2>
	<div class="results-list">
		{#each results.titles as title}
			<div class="result-item">
				<img src={title.coverImage.blob} alt={title.name} />
				<p>{title.name}</p>
				<p>{title.type} | {title.genres.map(model => model.name).join(" ")}</p>
				<p>⭐ {title.rating}</p>
			</div>
		{/each}
	</div>
</div>

<div class="results-section">
	<h2>Персонажи</h2>
	<div class="results-list">
		{#each results.characters as character}
			<div class="result-item">
				<p>{character.name}</p>
				<p>{character.description}</p>
			</div>
		{:else}
			<p>Ничего не найдено</p>
		{/each}
	</div>
</div>

<div class="results-section">
	<h2>Авторы</h2>
	<div class="results-list">
		{#each results.authors as author}
			<div class="result-item">
				<p>{author.name}</p>
				<p>{author.bio}</p>
			</div>
		{/each}
	</div>
</div>

<div class="results-section">
	<h2>Команды</h2>
	<div class="results-list">
		{#each results.teams as team}
			<div class="result-item">
				<p>{team.name}</p>
				<p>Число участников: {team.members}</p>
			</div>
		{/each}
	</div>
</div>
