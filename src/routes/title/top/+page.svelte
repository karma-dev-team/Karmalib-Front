<script lang="ts">
	import type { TitleModel } from '$lib/models/TitleModel.ts';

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
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 15px;
    }

    .item {
        background-color: #1c1c1c;
        border-radius: 10px;
        overflow: hidden;
        width: 100%;
        text-align: center;
    }

    .item img {
        width: 100%;
        height: 150px;
        object-fit: cover;
    }

    .item-info {
        padding: 10px;
    }

    .item-info h3 {
        margin: 0 0 10px;
        font-size: 14px;
    }

    .item-info p {
        margin: 5px 0;
        font-size: 12px;
        color: #aaa;
    }
</style>

<div class="container">
	<div class="title">Топ</div>

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
			<div class="item">
				<img src={item.logo.blob} alt={item.name} />
				<div class="item-info">
					<h3>{item.name}</h3>
					<p>{item.type} | {item.genre}</p>
					<p>⭐ {item.rating}</p>
				</div>
			</div>
		{/each}
	</div>
</div>
