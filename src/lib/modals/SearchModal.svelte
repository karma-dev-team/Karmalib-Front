<script lang="ts">
    import BaseModal from './BaseModal.svelte';
    import { createEventDispatcher } from 'svelte';
    import { goto } from '$app/navigation'; // For redirection in SvelteKit

    // Define the tab types
    type Tab = 'titles' | 'teams' | 'authors' | 'characters';

    // Props
    export let redirectMode: boolean = false; // If true, pressing Enter redirects to /search

    // State variables
    let isOpen: boolean = false;
    let searchQuery: string = '';
    let activeTab: Tab = 'titles';

    // Tabs and their corresponding items
    const tabs: Tab[] = ['titles', 'teams', 'authors', 'characters'];
    const items: Record<Tab, string[]> = {
        titles: ['ЛИХОЙ', 'ДаДаДаДан', 'Повседневная жизнь Нанако-сан! РЫВОК!', 'Уход за Комори-тян', 'Ну и что, что ты моя горничная?'],
        teams: [],
        authors: [],
        characters: []
    };

    // Event dispatcher
    const dispatch = createEventDispatcher<{ select: { entity: string; tab: Tab } }>();

    // Open and close modal
    function openModal(): void {
        isOpen = true;
    }

    function closeModal(): void {
        isOpen = false;
    }

    // Set active tab
    function setActiveTab(tab: Tab): void {
        activeTab = tab;
    }

    // Filter items based on the search query
    function filteredItems(): string[] {
        return items[activeTab].filter((item) =>
            item.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    // Handle selection of an item
    function selectItem(item: string): void {
        dispatch('select', { entity: item, tab: activeTab });
        closeModal();
    }

    // Handle Enter keypress
    function handleEnterKey(event: KeyboardEvent): void {
        if (event.key === 'Enter' && redirectMode) {
            goto(`/search?query=${encodeURIComponent(searchQuery)}`);
        }
    }
</script>

<!-- Trigger to Open Modal -->
<button on:click={openModal}>Open Search Modal</button>

{#if isOpen}
    <BaseModal close={closeModal}>
        {#snippet children()}
            <div class="modal-header">
                <input 
                    type="text" 
                    class="search-bar" 
                    bind:value={searchQuery} 
                    placeholder="Search..." 
                    on:keydown={handleEnterKey}
                />
            </div>
            <div class="tabs">
                {#each tabs as tab}
                    <button 
                        class:active={activeTab === tab} 
                        on:click={() => setActiveTab(tab)}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                {/each}
            </div>
            <div class="modal-content">
                {#if filteredItems().length > 0}
                    <ul>
                        {#each filteredItems() as item}
                            <li on:click={() => selectItem(item)}>{item}</li>
                        {/each}
                    </ul>
                {:else}
                    <p>No items found.</p>
                {/if}
            </div>
        {/snippet}
    </BaseModal>
{/if}

<style>
    .modal-header {
        margin-bottom: 16px;
    }
    .search-bar {
        width: 100%;
        padding: 8px;
        border: 1px solid #444;
        border-radius: 4px;
        background: #2a2a2a;
        color: #fff;
    }
    .tabs {
        display: flex;
        justify-content: space-around;
        margin-bottom: 16px;
    }
    .tabs button {
        background: none;
        color: #ccc;
        border: none;
        padding: 8px;
        cursor: pointer;
    }
    .tabs button.active {
        color: #fff;
        font-weight: bold;
        border-bottom: 2px solid #fff;
    }
    .modal-content ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .modal-content li {
        padding: 8px;
        border-bottom: 1px solid #333;
        cursor: pointer;
    }
    .modal-content li:hover {
        background: #333;
    }
</style>
