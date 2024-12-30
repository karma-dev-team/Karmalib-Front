<script lang="ts">
	import type { TitleModel } from '$lib/models/TitleModel.ts';
    import TitleCardMedium from '$lib/components/TitleCardMedium.svelte';

	export let data:  { hotNewsItems: TitleModel[], popularItems: TitleModel[] }
	let { popularItems, hotNewsItems }:  { hotNewsItems: TitleModel[], popularItems: TitleModel[] }  = data;
	console.log(hotNewsItems)
	let filters = [
		'Все',
		'Понравится леди',
		'Потные культиваторы',
		'Понравится джентльменам',
		'Системки',
		'Школьная жизнь',
		'Исекайнутые',
		'Магические приключения',
		'Чёрно-белое',
		'Имбовый гг',
		'Для любителей искусства',
		'Хихи-хаха',
	];

	let activeFilter = 'Все';

	function setActiveFilter(filter: string) {
		activeFilter = filter;
	}
</script>

<style>
    .container {
        background-color: #121212;
        color: #fff;
        padding: 20px;
        font-family: Arial, sans-serif;
    }

    .title {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 20px;
    }

    .filters {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-bottom: 20px;
    }

    .filters button {
        background-color: #1c1c1c;
        color: #fff;
        border: none;
        padding: 8px 15px;
        border-radius: 5px;
        cursor: pointer;
    }

    .filters button.active {
        background-color: #007bff;
    }

    .filters button:hover {
        background-color: #333;
    }

    .items {
        display: grid;
        grid-template-columns: repeat(2, minmax(200px, 1fr));
        gap: 15px;
    }
</style>

<div class="container">
	<div class="title">
        <h1>Топы</h1>
        
    </div>

	<div class="filters">
		{#each filters as filter}
			<button
				class:active={filter === activeFilter}
				on:click={() => setActiveFilter(filter)}>
				{filter}
			</button>
		{/each}
	</div>

	<div class="items">
		{#each popularItems as item}
			<TitleCardMedium title={item}/>
		{/each}
	</div>
</div>