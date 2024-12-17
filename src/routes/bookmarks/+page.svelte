<script lang="ts">
	import type { BookmarkModel } from '$lib/models/BookmarkModel.ts';
	import type { BookmarkCategoryModel } from '$lib/models/BookmarkCategoryModel.ts';
	import TitleShortCard from '$lib/components/TitleShortCard.svelte';

	export let data: {
		bookmarks: BookmarkModel[];
		categories: BookmarkCategoryModel[];
	};

	let activeCategoryId: string | null | undefined = null;

	// Фильтрация закладок по активной категории
	function getFilteredBookmarks() {
		return activeCategoryId
			? data.bookmarks.filter((b) => b.category.some((c) => c.id === activeCategoryId))
			: data.bookmarks;
	}
</script>

<style>
    /* Стили страницы */
    .page {
        background-color: #121212;
        color: #fff;
        padding: 20px;
        font-family: Arial, sans-serif;
        min-height: 100vh;
    }

    h1 {
        font-size: 2rem;
        margin-bottom: 20px;
    }

    /* Стили для фильтра */
    .tabs {
        display: flex;
        gap: 15px;
        margin-bottom: 20px;
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

		.bookmarks-list {
				display: flex;
				gap: 12px;
		}

		.bookmark-element {
        width: 5%;
        min-width: 170px;
		}

</style>

<main class="page">
	<h1>Закладки</h1>

	<!-- Фильтры категорий -->
	<div class="tabs">
		<button
			class="tab {activeCategoryId === null ? 'active' : ''}"
			on:click={() => (activeCategoryId = null)}
		>
			Все
		</button>
		{#each data.categories as category}
			<button
				class="tab {activeCategoryId === category.id ? 'active' : ''}"
				on:click={() => (activeCategoryId = category.id)}
			>
				{category.name}
			</button>
		{/each}
	</div>

	<!-- Список закладок -->
	<div class="bookmarks-list">
		{#each getFilteredBookmarks() as bookmark}
			<div class="bookmark-element">
			<TitleShortCard title={bookmark.title}/>
			</div>
		{/each}
	</div>
</main>
