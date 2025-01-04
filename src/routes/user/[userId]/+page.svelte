<script>
    // Static data for the profile
    const user = {
        id: "2711187",
        username: "Амантай-Галымжан",
        email: "galymzhan.amantaj@gmail.com",
        gender: "Не указан", // Gender not specified
        registrationDate: "29 августа 2024",
        daysOnSite: 122,
        stats: {
            chaptersRead: 28,
            likesGiven: 0,
            commentsMade: 1,
            coins: 0.00,
            energy: 100,
        }
    };
</script>

<style>
    .profile-container {
        color: #fff;
        font-family: Arial, sans-serif;
        padding: 20px;
    }

    .header {
        display: flex;
        align-items: center;
        gap: 50px;
        padding-bottom: 20px;
        border-bottom: 1px solid #3b3b3b;
    }

    .avatar {
        width: 100px;
        height: 100px;
        background-color: #333;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 48px;
        font-weight: bold;
        color: #666;
    }

    .username {
        font-size: 28px;
        font-weight: bold;
    }

    .stats {
        margin-top: 10px;
        display: flex;
        gap: 15px;
        font-size: 14px;
    }

    .badge {
        background-color: transparent;
        color: #ddd;
        border: 1px solid #444;
        padding: 5px 10px;
        border-radius: 15px;
    }

    .tabs {
        margin-top: 20px;
        display: flex;
        gap: 15px;
    }

    .tab {
        font-size: 14px;
        padding: 10px 15px;
        background-color: #222;
        color: #ddd;
        border-radius: 5px;
        cursor: pointer;
    }

    .tab:hover {
        background-color: #333;
    }

    .tab.active {
        background-color: #444;
    }

    .details {
        margin-top: 20px;
        padding: 10px;
        background-color: #222;
        color: #ccc;
        border-radius: 5px;
        font-size: 14px;
    }

</style>

<div class="profile-container">
    <!-- Header -->
    <div class="header">
        <div class="avatar">👤</div>
        <div>
            <div class="username">{user.username}</div>
            <div class="stats">
                <span>{user.stats.chaptersRead} Прочитано глав</span>
                <span>{user.stats.likesGiven} Лайков к главам</span>
                <span>{user.stats.commentsMade} Комментариев</span>
            </div>
            <!-- Coins and Settings -->
            <div class="stats" style="margin-top: 20px;">
                <div class="badge">💰 {user.stats.coins.toFixed(2)}</div>
                <div class="badge">⚡ {user.stats.energy}</div>
                <a class="button-primary" href="/user/{user.id}/settings">🔧 НАСТРОЙКИ</a>
            </div>
        </div>
    </div>



    <!-- Tabs -->
    <div class="tabs">
        <div class="tab active">ПРОФИЛЬ</div>
        <div class="tab">ЗАКЛАДКИ</div>
        <div class="tab">ИНВЕНТАРЬ</div>
        <div class="tab">ОБМЕНЫ</div>
        <div class="tab">КОММЕНТАРИИ</div>
        <div class="tab">ПОСТЫ</div>
    </div>

    <!-- Details -->
    <div class="details">
        <div>
            <strong>id:</strong> {user.id}
        </div>
        <div>
            <strong>Пол:</strong> {user.gender}
        </div>
        <div>
            <strong>Почта:</strong> {user.email}
        </div>
        <div>
            На сайте с {user.registrationDate} ({user.daysOnSite} дня)
        </div>
    </div>
</div>
