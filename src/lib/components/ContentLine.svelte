<script lang="ts">
	// Типы для поддерживаемых свойств
	export let width: string = "auto"; // Ширина линии
	export let color: string = "var(--line-color)"; // Цвет линии
	export let margin: string = "10px"; // Отступы
</script>

<hr
	class="content-line"
	style="
		background-color: {color};
		width: {width};
		border: none;
		height: 1px;
		margin: {margin} 0;"
/>

<style>
	:global(:root) {
		--line-color: #ccc; /* Цвет линии по умолчанию */
	}

	.content-line {
		display: block;
	}
</style>
