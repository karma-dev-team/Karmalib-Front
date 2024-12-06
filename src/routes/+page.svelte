<script lang="ts">
	import Slider from '$lib/components/Slider.svelte';

	export let data; 

	let { popularItems, hotNewsItems } = data; 
</script>

<main class="main-content">
	<!-- Популярные манхвы -->
    <section class="catalog-section">
        <h2 class="section-name">Популярные манхвы</h2>
        <Slider titles={popularItems} />
    </section>

    <!-- Горячие новинки -->
    <section class="catalog-section">
        <h2 class="section-name">Горячие новинки</h2>
        <Slider titles={hotNewsItems}/>
    </section>
</main>

<style>

    .main-content {
        padding: 20px;
        min-height: 100vh;
        box-sizing: border-box;
    }

    .section-name {
        margin: 20px 0;
        font-size: 1.5rem;
        font-weight: 600;
        color: white;
    }
</style>
