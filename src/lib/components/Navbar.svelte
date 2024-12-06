<script lang="ts">
    import logoImage from '$lib/images/KarmaLibLogo.png';
    import NavSearchbar from './NavSearchbar.svelte';
    import notificationIcon from '$lib/images/NotificationIcon.svg';
    import settingsIcon from '$lib/images/SettingsIcon.svg';
    import burgerIcon from '$lib/images/BurgerIcon.svg';
    import emailIcon from '$lib/images/EmailIcon.svg';

    export let isAuthorized: boolean;

    function openEmailPopup() {
        // Реализация попапа для Email
    }
</script>

<style>
    /* Основной стиль навигации */
    .navbar {
        display: flex;
        flex-direction: column;
        width: 100%;
        background-color: #2E303D;
        color: white;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .headev-nav {
        display: flex;
        flex-direction: column;
        padding: 0 16px;
        height: 56px;
        align-items: center;
        justify-content: space-between;
    }

    .navbar-header,
    .navbar-bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    /* Левая часть */
    .navbar-category {
        display: flex;
        align-items: center;
        font-size: 14px;
        cursor: pointer;
        color: #D9D9D9;
    }

    .navbar-category img {
        margin-right: 8px;
        width: 16px;
    }

    /* Правая часть */
    .navbar-right-bar {
        display: flex;
        align-items: center;
    }

    .navbar-news {
        color: #B7B7B7;
        font-size: 14px;
        margin-right: 20px;
        cursor: pointer;
    }

    .navbar-send-mail {
        display: flex;
        align-items: center;
        border-left: 1px solid #b7b7b77b;
        padding-left: 10px;
        margin-left: 10px;
        cursor: pointer;
        color: #B7B7B7;
    }

    .open-button {
        border: none;
        background: none;
        font-size: 14px;
        cursor: pointer;
        margin-right: 6px;
        color: #B7B7B7;
    }

    .open-button-icon {
        width: 16px;
    }

    /* Нижняя часть */
    .navbar-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 56px;
    }

    .navbar-left {
        display: flex;
        align-items: center;
    }

    .navbar-logo img {
        width: 32px;
        margin-right: 12px;
    }

    .navbar-element {
        margin: 0 12px;
        cursor: pointer;
        font-size: 14px;
        padding: 8px 0;
        transition: border-bottom 0.2s ease;
    }

    .navbar-element:hover {
        border-bottom: 2px solid #1f2f95;
    }

    .navbar-right {
        display: flex;
        align-items: center;
    }

    .icon-button img {
        width: 20px;
        margin-left: 16px;
        cursor: pointer;
    }

    .avatar-icon-container {
        margin-left: 16px;
        cursor: pointer;
    }

    .login-button {
        color: #1f2f95;
        text-decoration: none;
        font-size: 14px;
        margin-left: 16px;
    }

    .navbar-search-bar {
        flex-grow: 1;
        padding: 0 16px;
    }
</style>

<header class="navbar">
    <nav class="headev-nav">
        <!-- Верхняя панель -->
        <div class="navbar-header">
            <div class="navbar-category">
                <img src={burgerIcon} alt="Категории">
                СМОТРЕТЬ КАТЕГОРИИ
            </div>
            <div class="navbar-right-bar">
                <a href="/forum/news" class="navbar-news">Новости</a>
                <div class="navbar-send-mail">
                    <button class="open-button" on:click={openEmailPopup}>Email us</button>
                    <img src={emailIcon} alt="Email" class="open-button-icon">
                </div>
            </div>
        </div>

        <!-- Нижняя панель -->
        <div class="navbar-bottom">
            <div class="navbar-left">
                <div class="navbar-logo">
                    <img src={logoImage} alt="Лого">
                </div>
                <div class="navbar-element">Найти работу</div>
                <div class="navbar-element">Моя работа</div>
                <div class="navbar-element">
                    <a href="/title/top">Финансы</a>
                </div>
                <div class="navbar-element">Сообщения</div>
            </div>
            <div class="navbar-search-bar">
                <NavSearchbar />
            </div>
            <div class="navbar-right">
                <div class="navbar-element">Закладки</div>
                <div class="icon-button">
                    <img src={notificationIcon} alt="Уведомления">
                </div>
                <div class="icon-button">
                    <img src={settingsIcon} alt="Настройки">
                </div>
                {#if isAuthorized}
                    <div class="avatar-icon-container">
                        <img src="#" alt="Аватар" class="avatar-icon">
                    </div>
                {:else}
                    <a href="/auth/login" class="login-button">Войти</a>
                {/if}
            </div>
        </div>
    </nav>
</header>
