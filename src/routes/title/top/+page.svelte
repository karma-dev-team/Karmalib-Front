<script lang="ts">
	import type { TitleModel } from '$lib/models/TitleModel.ts';
    import TitleCardMedium from '$lib/components/TitleCardMedium.svelte';
	import { TimePeriods } from '$lib/enums/TimePeriods';

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
    let activeTimePeriod: string = TimePeriods.New; 
    let periods = Object.values(TimePeriods)

	function setActiveFilter(filter: string) {
		activeFilter = filter;
	}
</script>


<div class="container">
	<div class="title">
        <h1>Топы</h1>
    	<div class="tabs">
            {#each periods as period, i}
                <button
                    class="tab {activeTimePeriod === period ? 'active' : ''}"
                    on:click={() => (activeTimePeriod = period)}
                    aria-label={i.toString()}
                >
                    {period}  
                </button>
            {/each}
    	</div>
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


<style>
    .title { 
        display: flex;
        align-items: flex-end;
        gap: 1.5rem; 
    }

    .tabs {
        display: flex;
        gap: 15px;
        margin-bottom: 5px;
    }

    button.tab {
        background: none;
        border: none;
        cursor: pointer;
        color: #bbb;
        padding: 5px 10px;
        font-size: 1rem;
        border-bottom: 2px solid transparent;
    }

    button.tab.active {
        color: #1e90ff;
        border-bottom: 2px solid #1e90ff;
    }

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