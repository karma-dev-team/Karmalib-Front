<script>
	import InputField from '$lib/components/InputField.svelte'; // Путь к вашему компоненту

	// Переменные для первого блока
	let mainTitle = '';
	let secondaryTitle = '';
	let additionalTitles = '';

	// Переменные для второго блока
	let type = '';
	let releaseYear = '';
	let restriction = '';
	let productionStatus = '';
	let translationStatus = '';
	let categories = '';
	let genres = '';
	let moderatorMessage = '';

	// Переменные для третьего блока
	let links = [''];
	let translator = '';

	// Добавление новой ссылки
	function addLink() {
		links = [...links, ''];
	}
</script>

<div class="page-container">
	<!-- Первый блок -->
	<div class="form-container">
		<div class="cover-preview">
			<p>RE<br>Обложка</p>
		</div>
		<div class="form-fields">
			<label>Основное название</label>
			<InputField bind:value={mainTitle} placeholder="Введите основное название" />

			<label>Второстепенное название</label>
			<InputField bind:value={secondaryTitle} placeholder="Введите второстепенное название" />

			<label>Дополнительные названия</label>
			<InputField
				bind:value={additionalTitles}
				placeholder="Указывайте каждое название с помощью разделителя '/' через пробел"
			/>
		</div>
	</div>

	<!-- Второй блок -->
	<div class="form-block">
		<div class="form-row">
			<div class="form-column">
				<label>Тип</label>
				<InputField bind:value={type} placeholder="Варианты..." />
			</div>
			<div class="form-column">
				<label>Год выпуска</label>
				<InputField bind:value={releaseYear} placeholder="Введите год" />
			</div>
			<div class="form-column">
				<label>Ограничение</label>
				<InputField bind:value={restriction} placeholder="Варианты..." />
			</div>
		</div>

		<div class="form-row">
			<div class="form-column">
				<label>Статус произведения</label>
				<InputField bind:value={productionStatus} placeholder="Варианты..." />
			</div>
			<div class="form-column">
				<label>Статус перевода</label>
				<InputField bind:value={translationStatus} placeholder="Варианты..." />
			</div>
		</div>

		<div class="form-row">
			<div class="form-column">
				<label>Категории</label>
				<InputField bind:value={categories} placeholder="Варианты..." />
			</div>
			<div class="form-column">
				<label>Жанры</label>
				<InputField bind:value={genres} placeholder="Варианты..." />
			</div>
		</div>

		<div class="form-row">
			<div class="form-column-full">
				<label>Сообщение модератору</label>
				<InputField bind:value={moderatorMessage} placeholder="Введите сообщение..." />
			</div>
		</div>
	</div>

	<!-- Третий блок -->
	<div class="form-links">
		<label>Ссылки на произведение на других ресурсах</label>
		{#each links as link, index}
			<InputField bind:value={links[index]} placeholder="Введите ссылку..." />
		{/each}
		<button class="add-link" on:click={addLink}>+ ДОБАВИТЬ ЕЩЕ ССЫЛКУ</button>
		<p class="note">Если необходимого ресурса нет, напишите в тех. поддержку.</p>
	</div>

	<div class="form-translator">
		<label>Переводчики произведения</label>
		<InputField bind:value={translator} placeholder="Выбрать переводчика" />
	</div>

	<div class="form-actions">
		<button class="lock-fields">БЛОКИРОВКА ПОЛЕЙ</button>
		<button class="submit">ОТПРАВИТЬ НА МОДЕРАЦИЮ</button>
	</div>
</div>

<style>
    .page-container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 1rem;
        background: #1e1e1e;
        color: #fff;
        font-family: Arial, sans-serif;
    }

    /* Первый блок */
    .form-container {
        display: flex;
        gap: 1rem;
        background: #1e1e1e;
        padding: 1rem;
        border-radius: 0.5rem;
    }

    .cover-preview {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 150px;
        height: 200px;
        background: #333;
        color: #fff;
        text-align: center;
        font-size: 1.2rem;
        font-weight: bold;
        border-radius: 0.5rem;
    }

    .form-fields {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    label {
        font-size: 0.9rem;
        margin-bottom: 0.3rem;
    }

    /* Второй блок */
    .form-block {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        background: #1e1e1e;
        padding: 1rem;
        border-radius: 0.5rem;
    }

    .form-row {
        display: flex;
        gap: 1rem;
    }

    .form-column {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .form-column-full {
        flex: 1;
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    /* Третий блок */
    .form-links {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        background: #1e1e1e;
        padding: 1rem;
        border-radius: 0.5rem;
    }

    .add-link {
        color: #007bff;
        background: none;
        border: none;
        cursor: pointer;
        font-size: 0.9rem;
        margin-top: 0.5rem;
        align-self: start;
    }

    .add-link:hover {
        text-decoration: underline;
    }

    .note {
        font-size: 0.8rem;
        color: #ccc;
    }

    .form-translator {
        margin-top: 1rem;
    }

    .form-actions {
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;
    }

    .lock-fields, .submit {
        padding: 0.8rem 1.5rem;
        border-radius: 0.5rem;
        border: none;
        cursor: pointer;
        font-size: 0.9rem;
    }

    .lock-fields {
        background: #333;
        color: #fff;
    }

    .submit {
        background: #007bff;
        color: #fff;
    }

    .submit:hover {
        background: #0056b3;
    }
</style>
