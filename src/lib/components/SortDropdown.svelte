<script lang="ts">
	// Интерфейсы
	export interface SortOption {
		label: string; // Название сортировки
		value: string; // Значение сортировки
	}

	// Пропсы для компонента
	let { options = [], selected = '' }: { options: SortOption[]; selected: string } = $props();

	// Текущее выбранное значение
	let currentSort: string = $state(selected);

	// Состояние видимости дропдауна
	let isOpen = $state(false);

	// Обработчик изменения сортировки
	function handleSortChange(value: string) {
		currentSort = value;
		isOpen = false; // Закрыть список после выбора
		dispatchEvent(new CustomEvent('sortChange', { detail: { value } }));
	}

	// Переключение видимости дропдауна
	function toggleDropdown() {
		isOpen = !isOpen;
	}

	// Закрытие при клике вне дропдауна
	function handleClickOutside(event: MouseEvent) {
		const dropdown = event.target as HTMLElement;
		if (!dropdown.closest('.dropdown-container')) {
			isOpen = false;
		}
	}

	// Добавляем слушатель для клика вне элемента
	document.addEventListener('click', handleClickOutside);
</script>

<!-- Основной контейнер -->
<div class="dropdown-container">
	<button class="selected" onclick={toggleDropdown} aria-haspopup="true" aria-expanded={isOpen}>
		<span>{options.find((opt) => opt.value === currentSort)?.label || 'Выберите сортировку'}</span>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="currentColor"
		>
			<path d="M7 10l5 5 5-5z" />
		</svg>
	</button>

	{#if isOpen}
        <ul class="dropdown" role="listbox">
            {#each options as option}
                <li
                    role="option"
                    aria-selected={option.value === currentSort}
                    class:selected={option.value === currentSort}
                >
                    <button
                        type="button"
                        class="dropdown-button"
                        onclick={() => handleSortChange(option.value)}
                    >
                        {option.label}
                    </button>
                </li>
            {/each}
        </ul>
	{/if}
</div>

<!-- Стили -->
<style>
	.dropdown-container {
		position: relative;
		width: 200px;
		color: #fff;
		font-family: Arial, sans-serif;
	}

    .dropdown-button {
        background: none;
        border: none;
        color: inherit;
        width: 100%;
        text-align: left;
        padding: 10px;
        cursor: pointer;
        font: inherit;
    }

    .dropdown-button:hover {
        background-color: #333;
    }

    .selected .dropdown-button {
        background-color: #007bff;
        color: #fff;
    }

	.selected {
		background-color: #18181b;
		padding: 10px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		cursor: pointer;
		border: none;
		border-radius: 4px;
		color: #fff;
		width: 100%;
		text-align: left;
	}

	.dropdown {
		position: absolute;
		top: 100%;
		left: 0;
		width: 100%;
		background-color: #18181b;
		border: 1px solid #333;
		margin: 0;
		padding: 0;
		list-style: none;
		border-radius: 4px;
		z-index: 100;
	}

	.dropdown li {
		padding: 10px;
		cursor: pointer;
		transition: background 0.2s;
	}

	.dropdown li:hover {
		background-color: #333;
	}

	.dropdown li.selected {
		background-color: #007bff;
		color: #fff;
	}
</style>
