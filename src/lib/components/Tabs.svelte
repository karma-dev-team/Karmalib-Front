<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    interface Option { name: string; count?: number }

    // Props
    export let activeCategoryId: string | null = null; // Currently active category ID
    export let fontSize: string = '1rem'; // Customizable font size
    export let options: Option[]; // List of categories
    export let onCategoryChange: (option: Option) => void; // Callback when a category is selected
    // Event dispatcher
    const dispatch = createEventDispatcher<{ categoryChange: Option }>();

    // Handle tab click
    function handleTabClick(option: Option): void {
        if (option.name !== activeCategoryId) {
            onCategoryChange(option); // Trigger the callback function
            dispatch('categoryChange', option); // Emit the event for parent listeners
        }
    }
</script>

<div class="tabs" style="--tab-font-size: {fontSize}">
    {#each options as option}
        <button
            class="tab {activeCategoryId === option.name ? 'active' : ''}"
            on:click={() => handleTabClick(option)}
        >
            {option.name}
            {#if option.count !== undefined && option.count !== null}
                <span class="count">({option.count})</span>
            {/if}
        </button>
    {/each}
</div>

<style>
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
        font-size: var(--tab-font-size, 1rem); /* Use font size from props */
        border-bottom: 2px solid transparent;
        display: flex;
        align-items: center;
        gap: 4px;
    }

    button.tab.active {
        color: #1e90ff;
        border-bottom: 2px solid #1e90ff;
    }

    .count {
        font-size: 0.85em;
        color: #999;
    }
</style>
