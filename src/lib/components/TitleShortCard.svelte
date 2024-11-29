<script lang="ts">
	import type { TitleModel } from "$lib/models/TitleModel";

    let { title }: {title: TitleModel} = $props(); 
</script>

<div class="card-main">
    <img src={title.logo.path || title.logo.blob} alt={title.name} class="card-image" />
    <div class="card-content">
        <div class="card-first-line">
            <p class="card-type">{title.type}</p>
            <span class="card-rating">{title.rating} ★</span>
        </div>
        <h3 class="card-title">{title.name}</h3>
    </div>
</div>

<style>
    .card-first-line { 
        display: flex; 
        align-items: center;
        gap: 5px;
    }

    .card-main {
        border-radius: 8px;
        width: 200px;
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
        margin: 0; 
    }

    .card-title {
        font-size: 1rem;
        font-weight: 500;
        color: white;
        margin: 5px 0;
        text-align: left;
    }

    .card-rating {
        font-size: 0.8rem;
        color: #ffdd57;
    }

</style>
