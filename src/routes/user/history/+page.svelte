<script lang="ts">
    export let data: { stories?: Array<{ imageUrl: string; title: string; description: string }>; error?: string };
    // Используем params для примера
    const routeParam = 'example-param'; // Пример использования params
</script>

<style>
    .stories-container {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        padding: 1rem;
    }

    .story-card {
        flex: 1 1 calc(33.333% - 1rem);
        background-color: #f9f9f9;
        border: 1px solid #ddd;
        border-radius: 5px;
        overflow: hidden;
        transition: box-shadow 0.3s ease;
    }

    .story-card:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .story-image {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }

    .story-info {
        padding: 1rem;
    }

    .story-title {
        font-size: 1.2rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
    }

    .story-description {
        font-size: 0.9rem;
        color: #555;
    }

    .error {
        color: red;
        text-align: center;
        padding: 2rem;
    }
</style>

{#if data.error}
<div class="error">{data.error}</div>
{:else if Array.isArray(data.stories) && data.stories.length > 0}
<div class="stories-container">
    {#each data.stories as story}
    <div class="story-card">
        <img class="story-image" src={story.imageUrl} alt={story.title} />
        <div class="story-info">
        <div class="story-title">{story.title}</div>
        <div class="story-description">{story.description}</div>
        </div>
    </div>
    {/each}
</div>
{:else}
<div class="error">Истории не найдены. Параметр маршрута: {routeParam}</div>
{/if}
