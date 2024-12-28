<script lang="ts">
    import { onMount } from 'svelte';
    let message = "";

    const handleLogout = async () => {
        try {
        const response = await fetch('/api/logout', {
            method: 'POST',
            credentials: 'include',
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Ошибка при выходе из системы');
        }

        message = "Вы успешно вышли из системы.";
        } catch (error) {
        message = error instanceof Error ? error.message : 'Произошла неизвестная ошибка';
        }
    };

    onMount(() => {
        handleLogout();
    });
</script>

<style>
.message-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 1rem;
    text-align: center;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #f9f9f9;
}

.message {
    font-size: 1.2rem;
    color: #333;
}
</style>

<div class="message-container">
<div class="message">{message}</div>
</div>