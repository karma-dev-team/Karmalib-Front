<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let activeFilter: string;
	let filters: string[] = ["Все", "Боевые искусства", "Драма", "Приключения", "Фэнтези", "Психология", "Экшен"];

	const dispatch = createEventDispatcher();

	function selectFilter(filter: string) {
		dispatch('filterChange', filter);
	}
</script>

<div class="filter-tags">
	{#each filters as filter}
		<button
			class:active={activeFilter === filter}
			on:click={() => selectFilter(filter)}>
			{filter}
		</button>
	{/each}
</div>

<style>
    .filter-tags {
        display: flex;
        gap: 10px;
        margin-bottom: 20px;
    }

    button {
        padding: 8px 16px;
        background-color: #333;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    .active {
        background-color: #555;
    }
</style>
