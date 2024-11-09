<script lang="ts">
    import logoImage from '$lib/images/KarmaLibLogo.png'
    import NavSearchbar from './NavSearchbar.svelte';
    import notificationIcon from '$lib/images/NotificationIcon.svg'
    import settingsIcon from '$lib/images/SettingsIcon.svg'
    import burgerIcon from '$lib/images/BurgerIcon.svg'
    import emailIcon from '$lib/images/EmailIcon.svg'

    export let isAuthorized: boolean; 


    function openEmailPopup() { 

    }
</script>

<style>
    .navbar-left { 
        display: flex;
    }

    .navbar-news { 
        color: #B7B7B7; 
    }

    .navbar-logo * { 
        color: green; 
        font-size: large;
        cursor: pointer;
    }

    .navbar-header { 
        justify-content: space-between;
        width: 100%;
    }

    .navbar-right-bar, .navbar-header, .navbar-bottom { 
        display: flex;
    }

    .navbar-right-bar { 
        align-items: center;
    }

    .navbar-right { 
        align-items: center;
        display: flex;
    }

    .navbar-bottom { 
        justify-content: space-between;
        width: 100%;
    }

    .navbar-left { 
        display: flex;
        align-items: center;
    }

    .navbar-category { 
        color: #D9D9D9; 
        cursor: pointer;
        font-size: 14px; 
    }

    .navbar, .navbar-element { 
        display: flex; 
        align-items: center;    
    }

    .navbar-element { 
        color: white; 
        position: relative;
        display: inline-block;
        cursor: pointer;
        margin: 0 15px; 
        font-size: 16px; 
        padding: 10px 12px 8px;
        height: 100%;
    }

    .navbar-element:hover { 
        border-bottom: 5px solid #1f2f95;
    }

    .navbar a { 
        text-decoration: none;
    }

    .navbar {
        flex-direction: column;
        padding: 12px 210px;
        padding-bottom: 2px;
        margin-left: auto;
        margin-right: auto;
        width: 100%; 
        flex-wrap: wrap;
        background-color: #2E303D;
        justify-content: space-between;
        height: 100%;
    }

    .open-button { 
        border: none; 
        background: none;
        color: #B7B7B7; 
    }

    .navbar-send-mail { 
        padding-left: 10px;
        margin-left: 15px;  
        border-left: 1px solid #b7b7b77b; 
        cursor: pointer;
    }

    .open-button-icon { 
        width: 18px;
    }

    .icon-button { 
        padding-top: 5px;
    }
</style>  

<header class="navbar"> 
    <div class="navbar-header">
        <div class="navbar-category">
            <img src={burgerIcon} alt="">
            СМОТРЕТЬ КАТЕГОРИИ
        </div>

        <div class="navbar-right-bar">
            <a href="/forum/news" class="navbar-news">
                Новости
            </a>
            <div class="navbar-send-mail">
                <button class="open-button" on:click={openEmailPopup}>Email us</button>
                <img src={emailIcon} alt="" class="open-button-icon">
            </div>
        </div>
    </div>
    <div class="navbar-bottom">
        <div class="navbar-left">
            <div class="navbar-logo">
                <img src={logoImage} alt=""/>
            </div>
            <div class="navbar-find-work navbar-element">
                Найти работу
            </div>
            
            <div class="navbar-my-work navbar-element">
                Моя работа                  
            </div>

            <div class="navbar-element">
                Финансы
            </div>



            <a href="/messages/chat" class="navbar-element">
                Сообщения
            </a>
        </div>

        <nav class="navbar-search-bar">
            <NavSearchbar />
        </nav>

        <div class="navbar-right">
            <div class="navbar-element">
                Заладки
            </div>

            <div class="navbar-element icon-button">
                <img src={notificationIcon} alt="">
            </div>
            
            <div class="navbar-element icon-button">
                <img src={settingsIcon} alt="">
            </div>
            
            {#if isAuthorized}
                <div class="avatar-icon-container">
                    <img src="#" alt="" class="avatar-icon">
                </div>
            {:else}
                <a href="/auth/login" class="login-button">Войти</a>
            {/if}

        </div>
    </div>
</header>

