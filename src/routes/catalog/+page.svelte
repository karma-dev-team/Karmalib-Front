<script lang="ts">
    import SortDropdown from '$lib/components/SortDropdown.svelte';
    import FilterModal from '$lib/components/FilterModal.svelte';
    import TitleCardMedium from '$lib/components/TitleCardMedium.svelte';
    import type { TitleModel } from '$lib/models/TitleModel';

    export let data; 

    let { titles, genres, tags }: { titles: TitleModel[], genres: string[], tags: string[] }  = data;

    // Сортировка
    let sortOptions = [
        { label: 'По популярности', value: 'popularity' },
        { label: 'По рейтингу', value: 'rating' },
        { label: 'По дате', value: 'date' },
    ];

    let selectedSort = 'popularity'; // Текущее состояние сортировки
    let isFilterModalOpen = false; // Состояние фильтров

    // Обработчик смены сортировки
    function handleSortChange(event: CustomEvent<{ value: string }>) {
        selectedSort = event.detail.value;
    }
</script>

<div class="catalog">
    <header class="catalog-header">
        <h1>Каталог</h1>
        <SortDropdown options={sortOptions} selected={selectedSort} on:sortChange={handleSortChange} />
    </header>

    <div class="catalog-container">
        <div class="titles-list">
            {#each titles as title}
                <TitleCardMedium {title} style="flex-grow: 0;" />
            {/each}
        </div>

        <div class="filters">
            <FilterModal />
        </div>
    </div>
</div>

<style>
    .catalog-container { 
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        display: flex;
        gap: 1rem; 
    }

    .catalog {
        gap: 20px;
        padding: 20px;
        background-color: #121212;
        color: #fff;
    }

    .catalog-header {
        grid-column: span 2;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }

    .filters {
        background-color: #1a1a1a;
        padding: 15px;
        border-radius: 8px;
    }

    .titles-list {
        width: 100%; 
        flex-direction: column;
        display: flex;
        gap: 0.5rem; 
    }

    h1 {
        margin: 0;
        font-size: 1.8rem;
    }
</style>