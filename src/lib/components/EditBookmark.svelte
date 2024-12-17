<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import type { BookmarkModel } from '$lib/models/BookmarkModel.ts';
	import type { BookmarkCategoryModel } from '$lib/models/BookmarkCategoryModel.ts';

	export let bookmark: BookmarkModel; // Закладка для редактирования
	export let categories: BookmarkCategoryModel[]; // Список всех категорий

	const dispatch = createEventDispatcher();

	let selectedCategoryIds: string[] = bookmark.category.map((c) => c.id || "");

	// Сохранение изменений
	function saveChanges() {
		const updatedCategories = categories.filter((category) =>
			selectedCategoryIds.includes(category.id || "")
		);
		dispatch("save", { ...bookmark, category: updatedCategories });
	}

	// Закрытие модалки
	function closeModal() {
		dispatch("close");
	}
</script>

<style>
    .modal {
        background: #222;
        color: #fff;
        padding: 20px;
        border-radius: 8px;
        width: 400px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
        position: relative;
    }

    h2 {
        margin-bottom: 15px;
    }

    .category-list {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 15px;
    }

    label {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    input[type="checkbox"] {
        transform: scale(1.2);
    }

    .buttons {
        display: flex;
        justify-content: flex-end;
        gap: 10px;
    }

    button {
        padding: 8px 12px;
        background-color: #1e90ff;
        border: none;
        border-radius: 5px;
        color: white;
        cursor: pointer;
    }

    button.cancel {
        background-color: #555;
    }
</style>

<div class="modal">
	<h2>Редактирование категорий</h2>

	<!-- Список категорий с чекбоксами -->
	<div class="category-list">
		{#each categories as category}
			<label>
				<input
					type="checkbox"
					bind:group={selectedCategoryIds}
					value={category.id}
				/>
				{category.name}
			</label>
		{/each}
	</div>

	<!-- Кнопки управления -->
	<div class="buttons">
		<button class="cancel" onclick={closeModal}>Отмена</button>
		<button onclick={saveChanges}>Сохранить</button>
	</div>
</div>
