<script lang="ts">
	import TitleShortCard from '$lib/components/TitleShortCard.svelte';
	import logoImage from '$lib/images/KarmaLibLogo.png';

	const popularItems: TitleModel[] = [
		{ name: "Таинственная деревня", rating: "9.5", type: TitleTypes.Manxva, imgSrc: logoImage },
		{ name: "Выживание в Апокалипсисе", rating: "8.5", type: TitleTypes.Manxva, imgSrc: logoImage },
		{ name: "Я — ранкер, даже когда сплю", rating: "8.7", type: TitleTypes.Manxva, imgSrc: logoImage },
		{ name: "Таинственная деревня", rating: "9.5", type: TitleTypes.Manxva, imgSrc: logoImage },
		{ name: "Выживание в Апокалипсисе", rating: "8.5", type: TitleTypes.Manxva, imgSrc: logoImage },
		{ name: "Я — ранкер, даже когда сплю", rating: "8.7", type: TitleTypes.Manxva, imgSrc: logoImage },
		{ name: "Таинственная деревня", rating: "9.5", type: TitleTypes.Manxva, imgSrc: logoImage },
		{ name: "Выживание в Апокалипсисе", rating: "8.5", type: TitleTypes.Manxva, imgSrc: logoImage },
		{ name: "Я — ранкер, даже когда сплю", rating: "8.7", type: TitleTypes.Manxva, imgSrc: logoImage },
		{ name: "Таинственная деревня", rating: "9.5", type: TitleTypes.Manxva, imgSrc: logoImage },
		{ name: "Выживание в Апокалипсисе", rating: "8.5", type: TitleTypes.Manxva, imgSrc: logoImage },
		{ name: "Я — ранкер, даже когда сплю", rating: "8.7", type: TitleTypes.Manxva, imgSrc: logoImage },
		// Добавьте остальные элементы
	];

	const hotNewsItems: TitleModel[] = [
		{ name: "Мне было предначертано...", rating: "8.6", type: TitleTypes.Manxva, imgSrc: logoImage },
		{ name: "Варвар с Сеульского вокзала", rating: "9.2", type: TitleTypes.Manxva, imgSrc: logoImage },
		{ name: "Рейдер", rating: "9.5", type: TitleTypes.Manxva, imgSrc: logoImage },
		{ name: "Таинственная деревня", rating: "9.5", type: TitleTypes.Manxva, imgSrc: logoImage },
		{ name: "Выживание в Апокалипсисе", rating: "8.5", type: TitleTypes.Manxva, imgSrc: logoImage },
		{ name: "Я — ранкер, даже когда сплю", rating: "8.7", type: TitleTypes.Manxva, imgSrc: logoImage },
		{ name: "Таинственная деревня", rating: "9.5", type: TitleTypes.Manxva, imgSrc: logoImage },
		{ name: "Выживание в Апокалипсисе", rating: "8.5", type: TitleTypes.Manxva, imgSrc: logoImage },
		{ name: "Я — ранкер, даже когда сплю", rating: "8.7", type: TitleTypes.Manxva, imgSrc: logoImage },
		{ name: "Таинственная деревня", rating: "9.5", type: TitleTypes.Manxva, imgSrc: logoImage },
		{ name: "Выживание в Апокалипсисе", rating: "8.5", type: TitleTypes.Manxva, imgSrc: logoImage },
		{ name: "Я — ранкер, даже когда сплю", rating: "8.7", type: TitleTypes.Manxva, imgSrc: logoImage },
		// Добавьте остальные элементы
	];

	let popularScroll: HTMLElement;
	let hotNewsScroll: HTMLElement;

	function scrollLeft(element: HTMLElement) {
		element.scrollBy({ left: -300, behavior: 'smooth' });
	}

	function scrollRight(element: HTMLElement) {
		element.scrollBy({ left: 300, behavior: 'smooth' });
	}
</script>

<main class="main-content">
	<!-- Популярные манхвы -->
	<section class="catalog-section">
		<h2 class="section-name">Популярные манхвы</h2>
		<div class="horizontal-scroll-container" bind:this={popularScroll}>
			
			{#each popularItems as item}
				<div class="card">

				</div>
			{/each}
			<button class="scroll-button left" on:click={() => scrollLeft(popularScroll)}>←</button>
			<button class="scroll-button right" on:click={() => scrollRight(popularScroll)}>→</button>
		</div>
	</section>

	<!-- Горячие новинки -->
	<section class="catalog-section">
		<h2 class="section-name">Горячие новинки</h2>
		<div class="horizontal-scroll-container" bind:this={hotNewsScroll}>
			<button class="scroll-button left" on:click={() => scrollLeft(hotNewsScroll)}>←</button>
			<div class="catalog-cards">
				{#each hotNewsItems as item}
					<div>
						<TitleShortCard name={item} />
					</div>
				{/each}
			</div>
			<button class="scroll-button right" on:click={() => scrollRight(hotNewsScroll)}>→</button>
		</div>
	</section>
</main>

<style>
    :global(body) {
        background-color: #000;
        color: #fff;
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
    }

    .main-content {
        padding: 20px;
        min-height: 100vh;
        box-sizing: border-box;
    }

    .section-name {
        margin: 20px 0;
        font-size: 1.5rem;
        font-weight: 600;
    }

    .horizontal-scroll-container {
        display: flex;
        overflow-x: auto;
        white-space: nowrap;
        scrollbar-width: none;
        position: relative;
        padding: 20px 0;
    }

    .horizontal-scroll-container:hover .scroll-button {
        opacity: 1;
    }

    .horizontal-scroll-container::-webkit-scrollbar {
        display: none;
    }

    .catalog-section {
        max-width: 90vw;
        margin: 0 auto;
    }

    .scroll-button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        border: none;
        font-size: 24px;
        cursor: pointer;
        padding: 8px;
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 1;
    }

    .scroll-button.left {
        left: 0;
    }

    .scroll-button.right {
        right: 0;
    }
</style>
