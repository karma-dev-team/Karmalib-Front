<script lang="ts">
    import logoImage from '$lib/images/KarmaLibLogo.png';
    import NavSearchbar from './NavSearchbar.svelte';
    import notificationIcon from '$lib/images/NotificationIcon.svg';
    import settingsIcon from '$lib/images/SettingsIcon.svg';
    import burgerIcon from '$lib/images/BurgerIcon.svg';
    import emailIcon from '$lib/images/EmailIcon.svg';

    export let isAuthorized: boolean;

    let showUserMenu = false; // Для всплывающего меню пользователя
    let showSearchMenu = false; 

    function toggleUserMenu() {
        showUserMenu = !showUserMenu;
    }

    function toggleSearchMenu() { 
        showSearchMenu = !showUserMenu; 
    }
</script>


<header class="navbar">
    <div class="navbar-container">
        <!-- Верхняя панель -->
        <div class="navbar-header">
            <div class="navbar-category">
                <img  class="navbar-category-image" src={burgerIcon} alt="Категории">
                <div class="navbar-category-text">СМОТРЕТЬ КАТЕГОРИИ</div>
            </div>
            <div class="navbar-right">
                <a href="/forum/news" class="navbar-element-header">Новости</a>
                <div class="icon-button">
                    <img src={emailIcon} alt="Email">
                </div>
            </div>
        </div>

        <!-- Нижняя панель -->
        <div class="navbar-bottom">
            <div class="navbar-left">
                <a class="navbar-logo" href="/">
                    <img src={logoImage} alt="Лого" width="32px" height="32px">
                </a>
                <a href="/catalog" class="navbar-element"><p>Каталог</p></a>
                <a href="/title/top" class="navbar-element"><p>Топы</p></a>
                <a href="/forum" class="navbar-element"><p>Форум</p></a>
                
                <a onclick={toggleSearchMenu} href="#" class="navbar-element">
                    <svg class="SvgIcon_root__n_a0S SvgIcon_fontSize-small__fjOf4" focusable="false" viewBox="0 0 24 24" aria-hidden="true" style="margin-left:-2px;margin-right:6px;width:1rem;height:1rem;fill: currentcolor;"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                    <p>Поиск</p>
                </a>
            </div>
            <div class="navbar-right">
                <a href="/bookmarks" class="navbar-element">Закладки</a>
                <div class="icon-button navbar-element">
                    <img src={notificationIcon} alt="Уведомления" style="width: 15px">
                </div>
                <div class="icon-button  navbar-element">
                    <img src={settingsIcon} alt="Настройки">
                </div>
                {#if isAuthorized}
                    <div class="avatar-icon-container">
                        <button class="avatar-button" onclick={toggleUserMenu}>
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
                    <a href="/auth/login" class="login-button navbar-element">Войти</a>
                {/if}
            </div>
        </div>
    </div>
</header>


<style>
    /* Основной стиль навигации */
    .navbar {
        display: flex;
        justify-content: center;
        width: 100%;
        background-color: #1b1c1d;
        color: white;
        position: fixed;
        top: 0;
        left: 0;
        height: 75px;
        z-index: 1000;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
    }

    .navbar-category-text { 
        cursor: pointer;
        float: left;
        font-family: "FuturaLTPro-BoldCond", arial, sans-serif;
        font-size: 11px;
        letter-spacing: .035em;
        position: relative;
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

    .navbar-category-image {
        margin-right: 8px;
        height: 10px;
    }

    /* Центр */
    .navbar-left {
        display: flex;
        align-items: center;
    }

    .navbar-logo img {
        width: 32px;
        margin-right: 10px;
    }

    .navbar-element {
        cursor: pointer;
        font-size: 14px;
        color: #D9D9D9;
        text-decoration: none;
        position: relative;
        display: inline-flex;
        vertical-align: middle;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        box-sizing: border-box;
        min-width: auto;
        margin: 0;
        font-weight: 400;
        font-size: 12px;
        line-height: 1.5;
        letter-spacing: .055em;
        text-decoration: none;
        text-transform: uppercase;
        cursor: pointer;
        touch-action: manipulation;
        padding: 8px 12px 10px;
        height: 100%;
        transition: color 0.2s ease, border-bottom 0.2s ease;
    }
    
    .navbar-element:hover::before { 
        height: 3px;
        opacity: 1;
    }

    .navbar-element::before { 
        top: unset;
        height: 0;
        border-radius: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 0;
        content: "";
        position: absolute;
        background: var(--primary);
        white-space: nowrap;
        transition: all .15s ease;
        will-change: box-shadow, transform;
        opacity: 1;
    }

    .navbar-element-header { 
        cursor: pointer;
        font-size: 14px;
        color: #D9D9D9;
        text-decoration: none;
        padding: 8px; 
        margin-right: 16px;
        transition: color 0.2s ease, border-bottom 0.2s ease;
    }

    .navbar-element-header:hover { 
        color: white; 
    }

    /* Правая часть */
    .navbar-right {
        display: flex;
        align-items: center;
    }

    .icon-button img {
        width: 18px;
        cursor: pointer;
        opacity: 0.8;
        transition: opacity 0.2s ease;
    }

    .icon-button img:hover {
        opacity: 1;
    }

    .icon-button { 
        display: flex;
        align-items: center;
    }

    .login-button {
        color: #8591db; 
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

    .navbar-header { 
        display: flex;
        align-items: center;
        padding-right: 10px;
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
    }
</style>
