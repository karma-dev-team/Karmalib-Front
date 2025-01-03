<script lang="ts">
	import type { TitleModel } from '$lib/models/TitleModel';
    import BaseModal from './BaseModal.svelte';
    import { createEventDispatcher } from 'svelte';
    // Props
    export let isOpen: boolean = false; // Controls whether the modal is visible

    // Sample test data
    const testTitles: TitleModel[] = [
        {
            id: '1',
            coverImage: { path: '/covers/image1.jpg', name: 'Image 1' },
            name: 'Title 1',
            type: 'Manga',
            rating: '8.5',
            likesCount: 120,
            viewsCount: 5000,
            genres: [{ id: '1', name: 'Action' }, { id: '2', name: 'Adventure' }],
            tags: ['fantasy', 'drama'],
            description: 'An action-packed manga full of adventure.',
            titleStatus: 'Ongoing',
            translationStatus: 'Completed'
        },
        {
            id: '2',
            coverImage: { path: '/covers/image2.jpg', name: 'Image 2' },
            name: 'Title 2',
            type: 'Novel',
            rating: '9.1',
            likesCount: 200,
            viewsCount: 10000,
            genres: [{ id: '3', name: 'Romance' }, { id: '4', name: 'Slice of Life' }],
            tags: ['romance', 'life'],
            description: 'A touching novel about love and daily life.',
            titleStatus: 'Completed',
            translationStatus: 'Ongoing'
        }
    ];

    // Event dispatcher
    const dispatch = createEventDispatcher<{ select: TitleModel }>();

    // Search state
    let searchQuery: string = '';

    // Filtered titles based on the search query
    function filteredTitles(): TitleModel[] {
        return testTitles.filter((title) =>
            title.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    // Handle selection of a title
    function selectTitle(title: TitleModel): void {
        dispatch('select', title); // Emit the selected title
        closeModal();
    }

    // Close the modal
    function closeModal(): void {
        isOpen = false;
    }
</script>

{#if isOpen}
    <BaseModal close={closeModal}>
        {#snippet children()}
            <div class="modal-header">
                <input
                    type="text"
                    class="search-bar"
                    bind:value={searchQuery}
                    placeholder="Search titles..."
                />
            </div>
            <div class="modal-content">
                {#if filteredTitles().length > 0}
                    <ul class="title-list">
                        {#each filteredTitles() as title}
                            <!-- svelte-ignore a11y_click_events_have_key_events -->
                            <li class="title-item" onclick={() => selectTitle(title)}>
                                <img src={title.coverImage.path} alt={title.coverImage.name} class="cover-image" />
                                <div class="title-details">
                                    <h3>{title.name}</h3>
                                    <p>Type: {title.type}</p>
                                    <p>Rating: {title.rating}</p>
                                    <p>Genres: {title.genres.map(g => g.name).join(', ')}</p>
                                </div>
                            </li>
                        {/each}
                    </ul>
                {:else}
                    <p>No titles found.</p>
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
    .modal-content {
        padding: 16px;
    }
    .title-list {
        list-style: none;
        padding: 0;
    }
    .title-item {
        display: flex;
        align-items: center;
        padding: 8px;
        margin-bottom: 8px;
        border: 1px solid #333;
        border-radius: 4px;
        cursor: pointer;
        background-color: #1e1e1e;
    }
    .title-item:hover {
        background-color: #333;
    }
    .cover-image {
        width: 50px;
        height: 75px;
        margin-right: 12px;
        object-fit: cover;
    }
    .title-details h3 {
        margin: 0 0 4px;
        color: #fff;
    }
    .title-details p {
        margin: 0;
        color: #aaa;
        font-size: 0.9rem;
    }
</style>
