<script lang="ts">
    import InputField from '$lib/components/InputField.svelte'; // Ваш компонент для полей ввода
    import { onMount } from 'svelte';
	import { TitleStatus } from '$lib/enums/TitleStatus';
	import { TranslationStatus } from '$lib/enums/TranslationStatus';
	import { TitleTypes } from '$lib/enums/TitleTypes';
	import { Tipex } from '@friendofsvelte/tipex';


    // Поля формы
    let mainTitle = '';
    let secondaryTitle = '';
    let additionalTitles = '';
    let description = '';

    let typeOptions = Object.entries(TitleTypes).map(([key, value]) => ({ value: key, label: value }));
    let titleStatusOptions = Object.values(TitleStatus).map(value => ({ value, label: value }));
    let translationStatusOptions = Object.values(TranslationStatus).map(value => ({ value, label: value }));

    let yearOptions = Array.from({ length: 50 }, (_, i) => {
        const year = new Date().getFullYear() - i;
        return { value: year, label: year.toString() };
    });

    let resourceLinks = [''];
    let translator = '';
    let moderatorMessage = '';

    // Добавление новых ссылок
    function addResourceLink() {
        resourceLinks = [...resourceLinks, ''];
    }
</script>

<div class="page-container">
    <!-- Основные названия -->
    <div class="form-section">
        <h2>Создание тайтла</h2>
        <InputField label="Основное название" bind:value={mainTitle} />
        <InputField label="Второстепенное название" bind:value={secondaryTitle} />
        <InputField
            label="Дополнительные названия"
            placeholder='Указывайте названия через "/"'
            bind:value={additionalTitles}
        />
    </div>

    <!-- Описание -->
    <div class="form-section">
        <h3>Описание</h3>
        <Tipex body={description} controls floating focal
            style="margin-top: 1rem; margin-bottom: 0;" 
            class="h-[70vh] border border-neutral-200"/>
    </div>

    <!-- Поля для выбора -->
    <div class="form-section grid">
        <InputField label="Тип" type="select" options={typeOptions} />
        <InputField label="Год выпуска" type="select" options={yearOptions} />
        <InputField label="Статус произведения" type="select" options={titleStatusOptions} />
        <InputField label="Статус перевода" type="select" options={translationStatusOptions} />
    </div>

    <!-- Сообщение модератору -->
    <div class="form-section">
        <h3>Сообщение модератору</h3>
        <InputField type="text" bind:value={moderatorMessage} />
    </div>

    <!-- Ссылки -->
    <div class="form-section">
        <h3>Ссылки на произведение</h3>
        {#each resourceLinks as link, index}
            <InputField
                label={`Ссылка #${index + 1}`}
                bind:value={resourceLinks[index]}
            />
        {/each}
        <button class="add-link" on:click={addResourceLink}>Добавить еще ссылку</button>
    </div>

    <!-- Переводчики -->
    <div class="form-section">
        <h3>Переводчики произведения</h3>
        <InputField label="Выбрать переводчика" bind:value={translator} />
    </div>

    <!-- Кнопки -->
    <div class="form-actions">
        <button class="block-button">Блокировка полей</button>
        <button class="submit-button">Отправить на модерацию</button>
    </div>
</div>

<style>
    .page-container {
        background-color: #121212;
        color: #fff;
        padding: 20px;
        border-radius: 8px;
        font-family: Arial, sans-serif;
    }

    .form-section {
        margin-bottom: 20px;
    }

    .form-section h2,
    .form-section h3 {
        font-size: 1.2rem;
        margin-bottom: 10px;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 15px;
    }

    .editor {
        border: 1px solid #444;
        border-radius: 4px;
        background-color: #1a1a1a;
        height: 200px;
        color: #fff;
    }

    .add-link {
        background-color: #007bff;
        color: #fff;
        border: none;
        padding: 8px 12px;
        border-radius: 4px;
        cursor: pointer;
        margin-top: 10px;
    }

    .add-link:hover {
        background-color: #0056b3;
    }

    .form-actions {
        display: flex;
        gap: 10px;
        justify-content: flex-end;
    }

    .block-button,
    .submit-button {
        background-color: #00aaff;
        color: white;
        padding: 10px 15px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 1em;
    }

    .block-button {
        background-color: #ff4c4c;
    }

    .submit-button:hover,
    .block-button:hover {
        opacity: 0.9;
    }
</style>
