<script lang="ts">
    import logoImage from '$lib/images/KarmaLibLogo.png'
    import NavSearchbar from './NavSearchbar.svelte';

    export let isAuthorized: boolean; 

    let showPopup = false;

</script>

<header class="navbar"> 
    <div class="navbar-header">
        <div class="navbar-category">
            СМОТРЕТЬ КАТЕГОРИИ
        </div>

        <div class="navbar-right-bar">
            <a href="/news" class="navbar-news">
                Новости
            </a>
            <div class="navbar-send-mail">
                <button class="open-button">Email us</button>

            </div>
        </div>
    </div>
    <nav class="navbar-left">
        <div class="navbar-bottom">
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



            <a href="/messages" class="navbar-element">
                Сообщения
            </a>

            <nav class="navbar-search-bar">
                <NavSearchbar />
            </nav>
        </div>
    </nav>
</header>

<style>
    .navbar-left { 
        display: flex;
    }

    .navbar-logo * { 
        color: green; 
        font-size: large;
    }

    .navbar { 
        flex-direction: column;
    }

    .navbar-header { 
        justify-content: space-between;
        width: 100%;
        padding: 0 50px; 
    }

    .navbar-right-bar, .navbar-header, .navbar-bottom { 
        display: flex;
    }

    .navbar-category { 
        color: white; 
    }

    .navbar, .navbar-left, .navbar-element { 
        display: flex; 
        align-items: center;    
    }

    .navbar-element { 
        color: white; 
    }

    .navbar a { 
        text-decoration: none;
        color: white; 
    }

    .navbar-element { 
        cursor: pointer;
        margin: 0 15px; 
    }

    .navbar-logo { 
        margin-right: 15px;
    }

    .navbar-element { 
        position: relative;
        display: inline-block;
    }

    .navbar { 
        padding: 12px 24px;
        margin-left: auto;
        margin-right: auto;
        width: min(100%, 1600px);
        flex-wrap: wrap;
        background-color: #2E303D;
        justify-content: space-between;
    }
</style>