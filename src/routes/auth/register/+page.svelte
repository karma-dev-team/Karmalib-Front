<script lang="ts">
	import { goto } from "$app/navigation";
	import ContentLine from "$lib/components/ContentLine.svelte";
	import ErrorMessage from "$lib/components/ErrorMessage.svelte";
	import InputField from "$lib/components/InputField.svelte";
	import Logo from "$lib/components/Logo.svelte";
	import type { PageData } from "./$types";

	export let data: PageData; 
	let { authToken } = data; 
	let email: string = "";
	let username: string = "";
	let password: string = "";
	let repeatPassword: string = "";
	let errorMsg: string | undefined = undefined;

	function handleRegister(e: Event) {
		e.preventDefault();

		if (password !== repeatPassword) {
			errorMsg = "Ваш пароль не совпадает с повторенным паролем";
			return;
		}

		// // Симуляция обработки данных регистрации
		// setCookie("Authorization", "fakeToken", {
		// 	path: "/",
		// 	httpOnly: false,
		// 	secure: true,
		// 	maxAge: 3600,
		// });

		errorMsg = undefined; // Очищаем ошибки
		goto("/"); // Перенаправление после "успешной" регистрации
	}
</script>

<div class="root-register">
	<div class="register-container">
		<div class="register-header">
			<Logo />
			<h2>Регистрация</h2>
		</div>

		<form class="register-form" on:submit={handleRegister}>
			<div class="register-input-fields">
				<InputField
					placeholder="Введите свою почту..."
					bind:value={email}
					type="email"
					label="Введите свою почту"
					required
				/>
				<InputField
					placeholder="Введите свое имя..."
					bind:value={username}
					type="text"
					label="Введите свое имя"
					required
				/>
				<InputField
					placeholder="Введите свой пароль..."
					bind:value={password}
					type="password"
					label="Введите свой пароль"
					required
				/>
				<InputField
					placeholder="Повторите свой пароль..."
					bind:value={repeatPassword}
					type="password"
					required
				/>
			</div>
			<ErrorMessage errorMessage={errorMsg} />
			<button class="general-button" type="submit">
				<h4>Регистрация</h4>
			</button>
		</form>

		<ContentLine />
		<p class="continue-with">Войти через</p>
		<button class="general-button google-login">
			<img src="/path/to/google-icon.png" alt="войти через Google" class="google-icon" />
			<p class="google-text">Google</p>
		</button>
		<a href="/login" class="register-button">Есть аккаунт? Войти</a>
	</div>
</div>

<style>
	.register-header {
		align-items: center;
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
	}

	.register-container {
		margin: auto;
		padding: auto;
		max-width: 350px;
		padding: 10px 20px;
		border: 1px solid #384153;
		border-radius: 5px;
		display: flex;
		flex-direction: column;
		width: 400px;
		justify-content: center;
	}

	.root-register {
		background-image: url("/path/to/auth-background.svg");
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: calc(100vh - 80px);
		width: calc(100% - 240px);
	}

	.google-icon {
		width: 23px;
		height: 23px;
	}

	.google-login {
		display: flex;
		align-items: center;
	}

	.google-text {
		margin: 0 10px;
	}

	.register-button {
		display: flex;
		justify-content: center;
		text-decoration: none;
		color: #4971fc;
	}

	.register-button:visited {
		color: #4971fc;
	}
</style>
