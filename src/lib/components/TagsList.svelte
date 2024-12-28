<script lang="ts">
    interface TagModel { 
        name: string;
        slug?: string;  
    }

    export let tags: TagModel[];  
    $: limit = 10; 
    $: isMoreOpen = false; 

    function changeIsMoreOpen() { 
        isMoreOpen = !isMoreOpen; 
        limit = 1000; 
    }
</script>

<style>
    .tag-element { 
        text-decoration: none;
        background-color: hsla(240, 4%, 50%, 0.07);
        color: #c4c4c4;
        padding: 5px 15px; 
        border-radius: 14px;
    }

    .tag-element:hover { 
        color: #225ad3;
    }

    .tags-list { 
        display: flex;
        gap: 0.55rem; 
    }
</style>

<div class="tags-list">
    {#each tags as tag, i}
        {#if i > limit}
            <button onclick={changeIsMoreOpen}>Еще {tags.length - limit}</button>
        {:else}
            <a class="tag-element" href="{tag.slug}" aria-label={i.toString()} title="{tag.name}">#{tag.name}</a>
        {/if}
        {#if isMoreOpen}
            <button onclick={changeIsMoreOpen}>Скрыть</button>
        {/if}
    {/each}
</div>