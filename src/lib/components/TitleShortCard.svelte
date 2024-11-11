<script lang="ts">
	import type { TitleModel } from "$lib/models/TitleModel";

    let { title }: {title: TitleModel} = $props(); 
</script>

<div class="card-main">
    <img src={title.logo.path} alt={title.name} class="card-image" />
    <div class="card-content">
        <p class="card-type">{title.type}</p>
        <h3 class="card-title">{title.name}</h3>
        <span class="card-rating">{title.rating} ★</span>
    </div>
</div>

<style>
    
    .card-main {
        background-color: #2E303D;
        border-radius: 8px;
        width: 200px;
        text-align: center;
        margin: 0 10px;
    }

    .card-image {
        width: 100%;
        height: 250px;
        object-fit: cover;
    }

    .card-content {
        padding: 10px;
    }

    .card-type {
        font-size: 0.8rem;
        color: #B7B7B7;
        margin-bottom: 5px;
    }

    .card-title {
        font-size: 1rem;
        font-weight: 500;
        margin: 5px 0;
    }

    .card-rating {
        font-size: 0.9rem;
        color: #ffdd57;
    }

</style>
