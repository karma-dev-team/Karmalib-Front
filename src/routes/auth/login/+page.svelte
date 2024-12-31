<script lang="ts">
	import { onMount } from "svelte";
	import { goto } from "$app/navigation";
	import { get, writable } from "svelte/store";
	import InputField from "$lib/components/InputField.svelte";
	import Logo from "$lib/components/Logo.svelte";
	import ErrorMessage from "$lib/components/ErrorMessage.svelte";
	import googleIcon from '$lib/images/GoogleIcon.png'
	import ContentLine from "$lib/components/ContentLine.svelte";
    
	const email = writable<string>('');
	const password = writable<string>('');
	const errorMsg = writable<string | undefined>(undefined);

	onMount(() => {
	});

	const handleLogin = async () => {
		return ;
	};
</script>

<div>
	<div class="login-container">
		<div class="login-header">
			<Logo />
			<h2>Войти в свой аккаунт</h2>
		</div>

		<div class="login-form">
			<div class="login-input-fields">
				<InputField
					placeholder="Введите свою почту"
					bind:value={$email}
					label="Введите свою почту"
					required
				/>
				<InputField
					type="password"
					placeholder="Введите свой пароль"
					bind:value={$password}
					label="Введите свой пароль"
					required
				/>
			</div>

			<ErrorMessage errorMessage={$errorMsg} />

			<button class="general-button" on:click={handleLogin}>
				<h4>Войти</h4>
			</button>
		</div>

		<ContentLine />

		<p class="continue-with">Войти через</p>

		<button class="general-button google-login">
			<img src={googleIcon} alt="войти через Google" class="google-icon" />
			<p class="google-text">Google</p>
		</button>

		<a href="/auth/register" class="register-button">Нету аккаунта? Создать аккаунт</a>
		<a href="/auth/reset-password" class="register-button">Забыли пароль?</a>
	</div>
</div>

<style>
	.login-header h2 { 
		color: #fff; 
	}

	.login-container {
		width: 100%;
		max-width: 400px;
		background-color: #222223;
		border-radius: 8px;
		padding: 1.5rem;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
	}

	.login-header h2 {
		text-align: center;
		margin: 1rem 0;
	}

	.login-form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.general-button {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #00aaff;
		color: #fff;
		border: none;
		padding: 0.75rem;
		border-radius: 4px;
		cursor: pointer;
		width: 100%;
	}

	.general-button h4 {
		margin: 0;
	}

	.google-login {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #fff;
		color: #333;
		padding: 0.75rem;
		border-radius: 4px;
		border: 1px solid #ddd;
		cursor: pointer;
		gap: 0.5rem;
	}

	.google-icon {
		width: 20px;
		height: 20px;
	}

	.google-text {
		font-weight: bold;
	}

	.register-button {
		display: block;
		margin: 1rem 0;
		text-align: center;
		color: #00aaff;
		text-decoration: none;
	}
</style>
