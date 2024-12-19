<script lang="ts">
    import logoImage from '$lib/images/KarmaLibLogo.png';
    import NavSearchbar from './NavSearchbar.svelte';
    import notificationIcon from '$lib/images/NotificationIcon.svg';
    import settingsIcon from '$lib/images/SettingsIcon.svg';
    import burgerIcon from '$lib/images/BurgerIcon.svg';
    import emailIcon from '$lib/images/EmailIcon.svg';

    export let isAuthorized: boolean;

    let showUserMenu = false; // Для всплывающего меню пользователя

    function toggleUserMenu() {
        showUserMenu = !showUserMenu;
    }
</script>

<style>
    /* Основной стиль навигации */
    .navbar {
        display: flex;
        justify-content: center;
        width: 100%;
        background-color: #212228;
        color: white;
        position: fixed;
        top: 0;
        left: 0;
        height: 60px;
        z-index: 1000;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
    }

    .navbar-container {
        display: flex;
        flex-direction: column;
        max-width: 70rem;
        width: 100%;
        padding: 0 16px;
    }

    .navbar-header,
    .navbar-bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .navbar-bottom { 
        margin-top: 5px; 
    }

    /* Левая часть */
    .navbar-category {
        display: flex;
        align-items: center;
        font-size: 14px;
        cursor: pointer;
        color: #D9D9D9;
        transition: color 0.2s ease;
    }

    .navbar-category:hover {
        color: #f0f0f0;
    }

    .navbar-category img {
        margin-right: 8px;
        width: 18px;
    }

    /* Центр */
    .navbar-left {
        display: flex;
        align-items: center;
        gap: 16px;
    }

    .navbar-logo img {
        width: 28px;
        margin-right: 12px;
    }

    .navbar-element {
        cursor: pointer;
        font-size: 14px;
        color: #D9D9D9;
        text-decoration: none;
        transition: color 0.2s ease, border-bottom 0.2s ease;
    }

    .navbar-element:hover  {
        color: white;
        border-bottom: 2px solid #1f2f95;
    }

    /* Поисковая строка */
    .navbar-search-bar {
        flex-grow: 1;
        margin: 0 16px;
    }

    /* Правая часть */
    .navbar-right {
        display: flex;
        align-items: center;
        gap: 16px;
    }

    .icon-button img {
        width: 18px;
        cursor: pointer;
        transition: opacity 0.2s ease;
    }

    .icon-button img:hover {
        opacity: 0.8;
    }

    .login-button {
        color: #1f2f95;
        text-decoration: none;
        font-size: 14px;
    }

    .avatar-icon-container {
        position: relative;
        cursor: pointer;
    }

    .avatar-icon {
        width: 24px;
        border-radius: 50%;
        cursor: pointer;
        transition: transform 0.2s ease;
    }

    .avatar-icon:hover {
        transform: scale(1.1);
    }

    /* Всплывающее меню пользователя */
    .user-menu {
        position: absolute;
        top: 36px;
        right: 0;
        background-color: #2c2f36;
        border-radius: 6px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
        z-index: 100;
        overflow: hidden;
    }

    .user-menu-item {
        padding: 10px 16px;
        font-size: 14px;
        color: white;
        cursor: pointer;
        text-align: left;
        transition: background-color 0.2s ease;
    }

    .user-menu-item:hover {
        background-color: #3a3d45;
    }

    /* Для мобильных устройств */
    @media (max-width: 768px) {
        .navbar-container {
            flex-direction: column;
        }

        .navbar-header,
        .navbar-bottom {
            flex-direction: column;
            height: auto;
        }

        .navbar-search-bar {
            margin: 8px 0;
        }
    }
</style>

<header class="navbar">
    <div class="navbar-container">
        <!-- Верхняя панель -->
        <div class="navbar-header">
            <div class="navbar-category">
                <img src={burgerIcon} alt="Категории">
                СМОТРЕТЬ КАТЕГОРИИ
            </div>
            <div class="navbar-right">
                <a href="/forum/news" class="navbar-element">Новости</a>
                <div class="icon-button">
                    <img src={emailIcon} alt="Email">
                </div>
            </div>
        </div>

        <!-- Нижняя панель -->
        <div class="navbar-bottom">
            <div class="navbar-left">
                <div class="navbar-logo">
                    <img src={logoImage} alt="Лого">
                </div>
                <a href="/job/search" class="navbar-element"><p>Каталог</p></a>
                <a href="/job/my" class="navbar-element"><p>Топы</p></a>
                <a href="/title/top" class="navbar-element"><p>Форум</p></a>
            </div>
            <div class="navbar-search-bar">
                <NavSearchbar />
            </div>
            <div class="navbar-right">
                <a href="/bookmarks" class="navbar-element">Закладки</a>
                <div class="icon-button">
                    <img src={notificationIcon} alt="Уведомления">
                </div>
                <div class="icon-button">
                    <img src={settingsIcon} alt="Настройки">
                </div>
                {#if isAuthorized}
                    <div class="avatar-icon-container">
                        <button class="avatar-button" on:click={toggleUserMenu}>
                            <img src="#" alt="Аватар" class="avatar-icon">
                        </button>
                        {#if showUserMenu}
                            <div class="user-menu">
                                <div class="user-menu-item">Профиль</div>
                                <div class="user-menu-item">Настройки</div>
                                <div class="user-menu-item">Выход</div>
                            </div>
                        {/if}
                    </div>
                {:else}
                    <a href="/auth/login" class="login-button">Войти</a>
                {/if}
            </div>
        </div>
    </div>
</header>
