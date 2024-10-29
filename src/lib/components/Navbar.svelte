<script lang="ts">
    import logoImage from '$lib/images/KarmaLibLogo.png'
	import EmailModal from './EmailModal.svelte';
    import NavSearchbar from './NavSearchbar.svelte';

    export let isAuthorized: boolean; 

    // State to control modal visibility and initial "from" email address
    let showModal: boolean = false;
    let fromEmail: string = "your.email@example.com";

    // Toggle modal visibility
    function toggleModal() {
        showModal = !showModal;
    }

    // Handle sending email data (you would typically send this to an API)
    function handleSend(event: CustomEvent<{ fromEmail: string; message: string }>) {
        const emailData = event.detail;
        console.log("Email data to be sent:", emailData);
        toggleModal(); // Close modal after "sending"
    }
</script>

<header class="navbar"> 
    <nav class="navbar-left">
        <div class="navbar-header">
            <div class="navbar-category">
                СМОТРЕТЬ КАТЕГОРИИ
            </div>

            <div class="navbar-right-bar">
                <a href="/news" class="navbar-news">
                    Новости
                </a>
                <div class="navbar-send-mail">
                    <button class="open-button" on:click={toggleModal}>Email us</button>
                </div>
            </div>
        </div>

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

            {#if showModal}
                <EmailModal fromEmail={fromEmail} on:send={handleSend} on:close={toggleModal} />
            {/if}

            <a href="/messages" class="navbar-element">
                Сообщения
            </a>
        </div>
    </nav>
    <nav class="navbar-right">
        <NavSearchbar />
    </nav>
</header>

<style>
    .navbar-logo * { 
        color: green; 
        font-size: large;
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