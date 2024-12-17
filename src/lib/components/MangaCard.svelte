<script lang="ts">
	import type { TitleModel } from '$lib/models/TitleModel';

	export let item: TitleModel;

	{@debug item}
</script>

<div class="manga-card">
	<img src={item.logo.blob || item.logo.path} alt={item.name} class="logo" />
	<div class="info">
		<h3>{item.name}</h3>
		<p>Тип: {item.type}</p>
		<p>Рейтинг: {item.rating}</p>
		<p>Жанр: {item.genre}</p>
	</div>
</div>

<style>
    .manga-card {
        background-color: #1e1e1e;
        border-radius: 10px;
        overflow: hidden;
        color: #fff;
        padding: 10px;
        text-align: center;
    }

    .logo {
        width: 100px;
        height: 100px;
        object-fit: contain;
        margin-bottom: 10px;
    }

    .info {
        padding: 10px;
    }

    h3 {
        font-size: 1.2rem;
        margin: 0;
    }

    p {
        color: #aaa;
        margin: 5px 0;
    }
</style>
