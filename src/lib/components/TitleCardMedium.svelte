<script lang="ts">
	import type { TitleModel } from "$lib/models/TitleModel";
	import { id } from "date-fns/locale";

	let { title, style }: { title: TitleModel, style?: string | undefined } = $props();
</script>

<!-- Карточка тайтла -->
<a class="title-card" style={style || ""} href="/title/{title.id || "0"}">
	<img class="cover-image" src={title.coverImage.blob || title.coverImage.path} alt="{title.name}" />
	<div class="info">
		<p class="type">{title.type}</p>
		<h2 class="name">{title.name}</h2>
		<p class="genre">{title.genres.map(model => model.name).join(", ")}</p>
		<div class="stats">
			<span class="rating">
                <svg class="icon-root icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                {title.rating}
            </span>
			<span class="likes">
                <svg class="icon-root icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
                {title.likesCount || "0"}
            </span>
			<span class="views">
                <svg class="icon-root icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></svg>
                {title.viewsCount || "0"}
            </span>
		</div>
	</div>
</a>

<!-- Стили -->
<style>
    .icon { 
        width: .8rem;
        margin-right: 4px;
    }

    .views, .likes, .rating { 
        display: flex;
        align-items: center;
    }

	.title-card {
		display: flex;
		background-color: #1a1a1a;
		color: #fff;
		border-radius: 8px;
		overflow: hidden;
		width: 100%;
        align-items: center;
		font-family: Arial, sans-serif;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	.cover-image {
		width: 120px;
		height: 190px;
		object-fit: cover;
	}

	.info {
		padding: 15px;
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	.type {
		font-size: 0.9em;
		color: #ccc;
		margin-bottom: 5px;
	}

	.name {
		font-size: 1.4em;
		font-weight: bold;
		margin: 5px 0;
		color: #fff;
	}

	.genre {
		font-size: 0.9em;
		color: #aaa;
		margin-bottom: 8px;
	}

	.stats {
		display: flex;
		gap: 10px;
        align-items: center;
		font-size: 0.9em;
		color: #ccc;
	}
</style>
