<script lang="ts">
	import logoImage from '$lib/images/KarmaLibLogo.png';

	const popularItems = [
		{ title: "Таинственная деревня", rating: "9.5", type: "Манхва", imgSrc: logoImage },
		{ title: "Выживание в Апокалипсисе", rating: "8.5", type: "Манхва", imgSrc: logoImage },
		{ title: "Я — ранкер, даже когда сплю", rating: "8.7", type: "Манхва", imgSrc: logoImage },
		{ title: "Таинственная деревня", rating: "9.5", type: "Манхва", imgSrc: logoImage },
		{ title: "Выживание в Апокалипсисе", rating: "8.5", type: "Манхва", imgSrc: logoImage },
		{ title: "Я — ранкер, даже когда сплю", rating: "8.7", type: "Манхва", imgSrc: logoImage },
		{ title: "Таинственная деревня", rating: "9.5", type: "Манхва", imgSrc: logoImage },
		{ title: "Выживание в Апокалипсисе", rating: "8.5", type: "Манхва", imgSrc: logoImage },
		{ title: "Я — ранкер, даже когда сплю", rating: "8.7", type: "Манхва", imgSrc: logoImage },
		{ title: "Таинственная деревня", rating: "9.5", type: "Манхва", imgSrc: logoImage },
		{ title: "Выживание в Апокалипсисе", rating: "8.5", type: "Манхва", imgSrc: logoImage },
		{ title: "Я — ранкер, даже когда сплю", rating: "8.7", type: "Манхва", imgSrc: logoImage },
		// Добавьте остальные элементы
	];

	const hotNewsItems = [
		{ title: "Мне было предначертано...", rating: "8.6", type: "Манхва", imgSrc: logoImage },
		{ title: "Варвар с Сеульского вокзала", rating: "9.2", type: "Манхва", imgSrc: logoImage },
		{ title: "Рейдер", rating: "9.5", type: "Манхва", imgSrc: logoImage },
		{ title: "Таинственная деревня", rating: "9.5", type: "Манхва", imgSrc: logoImage },
		{ title: "Выживание в Апокалипсисе", rating: "8.5", type: "Манхва", imgSrc: logoImage },
		{ title: "Я — ранкер, даже когда сплю", rating: "8.7", type: "Манхва", imgSrc: logoImage },
		{ title: "Таинственная деревня", rating: "9.5", type: "Манхва", imgSrc: logoImage },
		{ title: "Выживание в Апокалипсисе", rating: "8.5", type: "Манхва", imgSrc: logoImage },
		{ title: "Я — ранкер, даже когда сплю", rating: "8.7", type: "Манхва", imgSrc: logoImage },
		{ title: "Таинственная деревня", rating: "9.5", type: "Манхва", imgSrc: logoImage },
		{ title: "Выживание в Апокалипсисе", rating: "8.5", type: "Манхва", imgSrc: logoImage },
		{ title: "Я — ранкер, даже когда сплю", rating: "8.7", type: "Манхва", imgSrc: logoImage },
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
		<h2 class="section-title">Популярные манхвы</h2>
		<div class="horizontal-scroll-container" bind:this={popularScroll}>
			<button class="scroll-button left" on:click={() => scrollLeft(popularScroll)}>←</button>
			{#each popularItems as item}
				<div class="card">
					<img src={item.imgSrc} alt={item.title} class="card-image" />
					<div class="card-content">
						<p class="card-type">{item.type}</p>
						<h3 class="card-title">{item.title}</h3>
						<span class="card-rating">{item.rating} ★</span>
					</div>
				</div>
			{/each}
			<button class="scroll-button right" on:click={() => scrollRight(popularScroll)}>→</button>
		</div>
	</section>

	<!-- Горячие новинки -->
	<section class="catalog-section">
		<h2 class="section-title">Горячие новинки</h2>
		<div class="horizontal-scroll-container" bind:this={hotNewsScroll}>
			<button class="scroll-button left" on:click={() => scrollLeft(hotNewsScroll)}>←</button>
			{#each hotNewsItems as item}
				<div class="card">
					<img src={item.imgSrc} alt={item.title} class="card-image" />
					<div class="card-content">
						<p class="card-type">{item.type}</p>
						<h3 class="card-title">{item.title}</h3>
						<span class="card-rating">{item.rating} ★</span>
					</div>
				</div>
			{/each}
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

    .section-title {
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

    .card {
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
