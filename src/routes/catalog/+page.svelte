<script lang="ts">
	import FilterModal from '$lib/components/FilterModal.svelte';
	import SortDropdown from '$lib/components/SortDropdown.svelte';
	import TitleCardMedium from '$lib/components/TitleCardMedium.svelte';
	import type { TitleModel } from '$lib/models/TitleModel';

    let data: { titles: TitleModel[], genres: string[], tags: string[] } = $props(); 

    let { titles, genres, tags} = data; 

    // Сортировка
    let sortOptions = [
        { label: 'По популярности', value: 'popularity' },
        { label: 'По рейтингу', value: 'rating' },
        { label: 'По дате', value: 'date' },
    ];

    let selectedSort = $state('popularity'); // Текущее состояние сортировки
    let isFilterModalOpen = $state(false); // Состояние фильтров

    // Обработчик смены сортировки
    function handleSortChange(value: string) {
        selectedSort = value;
    }
</script>

<!-- Основной макет страницы -->
<div class="catalog">
    <!-- Заголовок и сортировка -->
    <header class="catalog-header">
        <h1>Каталог</h1>
        <SortDropdown options={sortOptions} selected={selectedSort}/>
    </header>

    <!-- Фильтры -->
    <aside class="filters">
        <FilterModal />
    </aside>

    <!-- Сетка с карточками -->
    <main class="titles-grid">
        {#each titles as title}
            <TitleCardMedium {title} />
        {/each}
    </main>
</div>

<!-- Стили -->
<style>
    .catalog {
        display: grid;
        grid-template-columns: 250px 1fr;
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
        background-color: #18181b;
        padding: 15px;
        border-radius: 8px;
    }

    .titles-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 20px;
    }

    h1 {
        margin: 0;
        font-size: 1.8rem;
    }
</style>
