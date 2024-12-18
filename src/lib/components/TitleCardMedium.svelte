<script lang="ts">
	import type { TitleModel } from "$lib/models/TitleModel";

    let { title }: { title: TitleModel } = $props();
</script>

<!-- Карточка тайтла -->
<div class="title-card">
    <img class="cover-image" src={title.logo.url} alt="{title.name}" />
    <div class="info">
        <p class="type">{title.type}</p>
        <h2 class="name">{title.name}</h2>
        <p class="genre">{title.genre}</p>
        <div class="stats">
            <span>⭐ {title.rating}</span>
        </div>
    </div>
</div>

<!-- Стили -->
<style>
    .title-card {
        display: flex;
        background-color: #111;
        color: #fff;
        border-radius: 8px;
        overflow: hidden;
        width: 350px;
        font-family: Arial, sans-serif;
    }

    .cover-image {
        width: 120px;
        height: auto;
        object-fit: cover;
    }

    .info {
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .type {
        font-size: 0.9em;
        color: #aaa;
    }

    .name {
        font-size: 1.2em;
        font-weight: bold;
        margin: 5px 0;
    }

    .genre {
        font-size: 0.9em;
        color: #aaa;
        margin-bottom: 10px;
    }

    .stats span {
        font-size: 0.9em;
    }
</style>
