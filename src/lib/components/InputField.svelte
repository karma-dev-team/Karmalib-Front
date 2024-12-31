<script lang="ts">
	// Описание типов для входных параметров
	interface Option {
		value: string | number; // Значения для select
		label: string;          // Отображаемый текст
	}

	interface Props {
		type?: 'text' | 'number' | 'select' | "password" | 'email'; // Поддерживаемые типы
		label?: string;                     // Название поля
		options?: Option[];                 // Опции для select
		value?: string | number;            // Привязанное значение
		placeholder?: string;  
		style?: string;
		required?: boolean; 
	}

	// Получаем параметры с типизацией
	let {
		type = 'text',
		label = '',
		options = [],
		value = $bindable(''),
		placeholder = '', 
		style = '', 
		required = false, 
	}: Props = $props();
</script>

<div class="input-container">
	{#if label}
		<label>{label}</label>
	{/if}
	{#if type === 'select'}
		<select bind:value={value}>
			{#each options as option}
				<option value={option.value}>{option.label}</option>
			{/each}
		</select>
	{:else}
		<input type={type} bind:value={value} placeholder={placeholder} style={style} required={required}/>
	{/if}
</div>

<style>
	:global(:root) {
		--bg-input: #222223; /* По умолчанию серый фон */
	}

	.input-container {
		display: flex;
		flex-direction: column;
		margin-bottom: 1rem;
	}

	label {
		font-size: 1em;
		color: #fff; /* Белый текст для темного фона */
		margin-bottom: 0.5rem;
	}

	select, input {
		padding: 10px;
		font-size: 1em;
		width: 100%;
		box-sizing: border-box;
		background-color: var(--bg-input); /* Используем переменную */
		color: #fff; /* Белый текст для темного фона */
		border: 1px solid #444; /* Темная рамка */
		border-radius: 4px;
	}

	select:focus, input:focus {
		outline: 2px solid #00aaff; /* Акцентная рамка при фокусе */
	}

	select {
		cursor: pointer;
	}
</style>
