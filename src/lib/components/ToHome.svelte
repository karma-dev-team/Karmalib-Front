<script lang="ts">
	import { goto } from "$app/navigation";

    function handleToHome() { 
        goto(link); 
    }

    export let text: string; 
    export let link: string = "/"; 
</script>

<button class="to-home" onclick={handleToHome} aria-label="dsa">
    <svg class="SvgIcon_root__n_a0S SvgIcon_color-textSecondary__qygJX SvgIcon_fontSize-medium__NwgG6" focusable="false" viewBox="0 0 19 18" aria-hidden="true"><g fill="none" opacity="0.6"><path d="M7.97461 15.0586L2.91628 10.0003L7.97461 4.94193" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.083 10L3.05801 10" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
    <p>{text}</p>
</button>

<style>
    .to-home { 
        display: flex;
        padding: 5px 8px;
        font-size: 11px;
        background-color: transparent;
    }

    .to-home:hover { 
        background-color: var(--bg-paper);
    }
</style>

