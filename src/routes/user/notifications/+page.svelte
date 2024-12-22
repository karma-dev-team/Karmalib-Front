<script lang="ts">
	import { NotificationsTypes } from "$lib/enums/NotificationsTypes";

    let data: { notifications: NotificationModel[] } = $props(); 

    let notificationsTypes = Object.keys(NotificationsTypes); 
    let currentType: NotificationsTypes = $state(NotificationsTypes.All); 

    let typesToString: { [type: string]: string } = { }
    typesToString[NotificationsTypes.All] = "Все"
    typesToString[NotificationsTypes.Important] = "Важные"
    typesToString[NotificationsTypes.Social] = "Социальные"
    typesToString[NotificationsTypes.Updates] = "Обновления"

    function handleCategorySwitch(type: NotificationsTypes) { 
        currentType = type;
    }
</script>

<div class="notifications-container">
    <h1>Уведомления</h1>
    <div class="notifications-categories">
        {#each notificationsTypes as currentNotification, i}
            <button 
                aria-label="{i.toString()}"
                class="notifications-category-button {currentNotification == currentType ? 'active' : ''}" 
                onclick={() => handleCategorySwitch(currentType)}
            >
                {typesToString[currentNotification]}
            </button>
        {/each}
    </div>
    <div class="notifications-list">
        {#each notifications as notification, i}
        <div class="notification-container">
            <div class="notification-image">
                <img src={notification.} alt="">
            </div>
        </div>
    </div>
</div>