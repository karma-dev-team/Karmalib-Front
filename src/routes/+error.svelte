<script>
import { page } from '$app/stores';
</script>

<div class="body-404">
    {#if $page?.status == 404}
        <div class="body-404-da">
            <h1 class="text-404 header-error">404</h1>
            <h2 class="text-404">Страница не найдена</h2>
            <button class="" tabindex="0" type="button"><span class="">Вернуться назад</span></button>
        </div>
    {/if}
</div>

<style>
    .body-404 {
        display: flex;
        justify-content: center;
    }


    .header-error { 
        font-size: 96px;
        font-weight: 600;
        position: relative;
        margin-bottom: 16px;
        text-align: center;
    }

    .body-404-da {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    .text-404 {
        color: beige;
    }

    .body-404 button span {
        font-size: 13px;
        position: relative;
        z-index: 1;
        display: inherit;
        flex-direction: inherit;
        justify-content: inherit;
        align-items: inherit;
        width: 100%;
        color: #fff; 
        font-size: 13px;
    }

    .body-404 button { 
        border: none;
        padding: 9px 26px;
        border-radius: 32px;

        background: var(--primary);
    }
</style>