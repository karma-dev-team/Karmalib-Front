<script lang="ts">
	import type { TitleTagModel } from "$lib/models/TitleTagModel";

    export let tags: TitleTagModel[];  
    $: limit = 10; 
    $: isMoreOpen = false; 

    function changeIsMoreOpen() { 
        isMoreOpen = !isMoreOpen; 
        limit = 1000; 
    }
</script>

<div class="tags-list">
    {#each tags as tag, i}
        {#if i > limit}
            <button onclick={changeIsMoreOpen}>Еще {tags.length - limit}</button>
        {:else}
            <a class="tag-element" href="{tag.slug}" aria-label={i.toString()} title="{tag.name}">{tag.name}</a>
        {/if}
        {#if isMoreOpen}
            <button onclick={changeIsMoreOpen}>Скрыть</button>
        {/if}
    {/each}
</div>