<script lang="ts">
import { onMount } from 'svelte';

let username = "";
let email = "";
let password = "";
let confirmPassword = "";
let errorMessage = "";
let successMessage = "";

const handleRegistration = async () => {
    errorMessage = "";
    successMessage = "";

    if (password !== confirmPassword) {
    errorMessage = "Пароли не совпадают.";
    return;
    }

    try {
    const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Ошибка регистрации');
    }

    successMessage = "Регистрация прошла успешно!";
    username = "";
    email = "";
    password = "";
    confirmPassword = "";
    } catch (error) {
    errorMessage = error instanceof Error ? error.message : 'Произошла неизвестная ошибка';
    }
};
</script>

<style>
.form-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #f9f9f9;
}

.form-group {
    margin-bottom: 1rem;
}

label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
}

input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.error-message {
    color: red;
    margin-top: 0.5rem;
}

.success-message {
    color: green;
    margin-top: 0.5rem;
}

button {
    padding: 0.5rem 1rem;
    border: none;
    background-color: #007BFF;
    color: white;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
</style>

<div class="form-container">
<div class="form-group">
    <label for="username">Имя пользователя</label>
    <input id="username" type="text" bind:value={username} placeholder="Введите имя пользователя" />
</div>
<div class="form-group">
    <label for="email">Email</label>
    <input id="email" type="email" bind:value={email} placeholder="Введите email" />
</div>
<div class="form-group">
    <label for="password">Пароль</label>
    <input id="password" type="password" bind:value={password} placeholder="Введите пароль" />
</div>
<div class="form-group">
    <label for="confirmPassword">Подтвердите пароль</label>
    <input id="confirmPassword" type="password" bind:value={confirmPassword} placeholder="Повторите пароль" />
</div>
{#if errorMessage}
    <div class="error-message">{errorMessage}</div>
{/if}
{#if successMessage}
    <div class="success-message">{successMessage}</div>
{/if}
<button on:click={handleRegistration}>Зарегистрироваться</button>
</div>
