<script lang="ts">
	import Tabs from "$lib/components/Tabs.svelte";
    import { NotificationsTypes } from "$lib/enums/NotificationsTypes";
    import type { NotificationModel } from "$lib/models/NotificationModel";
    export let data: { notifications: NotificationModel[] }; // Data from `load()`

    let notifications = data.notifications;

    // Notification categories and options for Tabs
    let notificationsTypes = Object.keys(NotificationsTypes);
    let typesToString: { [type: string]: string } = {
        [NotificationsTypes.All]: "Все",
        [NotificationsTypes.Important]: "Важные",
        [NotificationsTypes.Social]: "Социальные",
        [NotificationsTypes.Updates]: "Обновления",
    };

    let filterOptions = notificationsTypes.map(type => ({
        name: typesToString[type],
        count: notifications.filter(notif => notif.type === type).length,
    }));

    let currentType: string = NotificationsTypes.All;

    // Handle category change
    function handleCategoryChange(option: { name: string }) {
        currentType = notificationsTypes.find(type => typesToString[type] === option.name) || NotificationsTypes.All;
    }

    // Filtered notifications based on the current type
    let filteredNotifications = () =>
        notifications.filter(notif => notif.type === currentType || currentType === NotificationsTypes.All);
</script>

<div class="notifications-container">
    <h1>Уведомления</h1>

    <!-- Tabs Component -->
    <Tabs
        options={filterOptions}
        onCategoryChange={handleCategoryChange}
        activeCategoryId={typesToString[currentType]}
        fontSize="1rem"
    />

    <!-- Notifications List -->
    <div class="notifications-list">
        {#each filteredNotifications() as notif}
            <div class="notification-container">
                <!-- Notification Icon/Image -->
                <div class="notification-image">
                    {#if notif.titleEntity?.coverImage.blob}
                        <img src={notif.titleEntity.coverImage.blob} alt="Title Image">
                    {/if}
                    {#if notif.comment?.author.avatar?.blob}
                        <img src={notif.comment.author.avatar.blob} alt="User Avatar">
                    {/if}
                </div>

                <!-- Notification Content -->
                <div class="notification-content">
                    <h3>{notif.title}</h3>
                    <p>{notif.content}</p>

                    <!-- Additional details based on notification type -->
                    {#if notif.comment}
                        <p>Comment by: {notif.comment.author.publicUsername}</p>
                        <blockquote>{notif.comment.text}</blockquote>
                    {/if}
                    {#if notif.titleEntity}
                        <p>Title: {notif.titleEntity.name}</p>
                        <p>Genre: {notif.titleEntity.genres.map(genre => genre.name).join(", ")}</p>
                        <small>Status: {notif.titleEntity.titleStatus}</small>
                    {/if}
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    .notifications-container {
        background-color: #121212;
        color: #fff;
        padding: 20px;
        font-family: Arial, sans-serif;
    }

    h1 {
        margin-bottom: 20px;
    }

    .notifications-list {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .notification-container {
        display: flex;
        gap: 15px;
        align-items: center;
        padding: 10px;
        border: 1px solid #444;
        border-radius: 5px;
        background-color: #1e1e1e;
    }

    .notification-image img {
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 5px;
    }

    .notification-content h3 {
        font-size: 1.1rem;
        margin: 0;
    }

    .notification-content p {
        margin: 5px 0;
        font-size: 0.9rem;
        color: #aaa;
    }

    .notification-content blockquote {
        margin: 0;
        padding: 5px 10px;
        border-left: 3px solid #1e90ff;
        background-color: #222;
        font-size: 0.9rem;
        color: #fff;
    }

    .notification-content small {
        font-size: 0.8rem;
        color: #888;
    }
</style>
