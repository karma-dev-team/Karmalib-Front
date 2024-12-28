<script lang="ts">
    import type { NotificationModel } from "$lib/models/NotificationModel";

    export let notifications: NotificationModel[] = [];

    const hasTitleEntity = (notification: NotificationModel) => !notification.titleEntity;
    const hasComment = (notification: NotificationModel) => !notification.comment;
</script>

<style>
    .notification {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        padding: 1rem;
        background: #2e2e2e;
        color: var(--text-primary, #fff);
        margin-bottom: 0.5rem;
        border-radius: 5px;
        border-left: 4px solid #4caf50;
    }

    .notification.unread {
        border-left-color: #ff9800;
    }

    .notification img {
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 5px;
    }

    .notification-content {
        flex: 1;
    }

    .notification-title {
        font-weight: bold;
        margin-bottom: 0.5rem;
    }

    .notification-message {
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
    }

    .chapter-info {
        font-size: 0.8rem;
        color: #bbb;
    }
</style>

<div>
    {#each notifications as notification}
        <div class="notification {notification.read ? '' : 'unread'}">
            <!-- If titleEntity exists, show its logo -->
            {#if hasTitleEntity(notification)}
                <img src={notification.titleEntity?.coverImage.path} alt="Title Logo" />
            {/if}

            <!-- If comment exists, show author's avatar (placeholder in this example) -->
            {#if hasComment(notification)}
                <img src="/images/avatar-placeholder.png" alt="Author Avatar" />
            {/if}

            <!-- Notification content -->
            <div class="notification-content">
                <div class="notification-title">{notification.title}</div>
                <div class="notification-message">{notification.content}</div>

                <!-- Additional details for titleEntity -->
                {#if hasTitleEntity(notification)}
                    <div class="chapter-info">
                        A new chapter has been added for <strong>{notification.titleEntity?.name}</strong>.
                    </div>
                {/if}

                <!-- Additional details for comment -->
                {#if hasComment(notification)}
                    <div class="chapter-info">
                        Comment from <strong>{notification.comment?.author.publicUsername || notification.comment?.author.username}</strong>.
                    </div>
                {/if}
            </div>
        </div>
    {/each}
</div>
