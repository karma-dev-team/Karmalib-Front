<script lang="ts">
	// Пропс для передачи сообщения об ошибке
	export let errorMessage: string | undefined = undefined;
</script>

{#if errorMessage}
	<div class="error-container">
		<p class="error-text">{errorMessage}</p>
	</div>
{/if}

<style>
	.error-container {
		background-color: #ff4d4f; /* Красный фон */
		color: #fff; /* Белый текст */
		padding: 10px;
		border-radius: 5px;
		margin-bottom: 1rem;
		text-align: center;
		box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
	}

	.error-text {
		font-size: 0.9rem;
		font-weight: bold;
		margin: 0;
	}
</style>
