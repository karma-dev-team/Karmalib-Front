<script lang="ts">
	import type { PostModel } from "$lib/models/PostModel";
	import type { PostTagModel } from "$lib/models/PostTagModel";
    import PostCard from "$lib/components/PostCard.svelte";
    import TagsList from "$lib/components/TagsList.svelte";

    export let data; 
    let { posts, tags, popularPosts }: { posts: PostModel[], tags: PostTagModel[], popularPosts: PostModel[] } = data; 
</script>

<div class="forum-page">
    <div class="forum-container">
        <div class="forum-header">
            <div class="forum-header-top">
                <h1 class="header-title">Форум</h1>
                <div class="search-filters">
                    <div class="search-container">
                        <svg class="search-input-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                        <input class="search-input" placeholder="Что будем искать?"/>
                    </div>
                </div>
            </div>

            <div class="forum-header-bottom">
                <TagsList tags={tags}/>
            </div>
        </div>
        
        <div class="my-posts-container">
            <a href="/user/me/posts" class="my-posts">
                <span class="my-posts-button">
                    МОИ ПОСТЫ 
                    <svg class="my-posts-icon w-4 h-4 ml-1" focusable="false" viewBox="1 1 21 21" aria-hidden="true"><g fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_8424_88988)"><path d="M8 5.13354L15.1536 5.13355L15.1536 12.2871" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.13281 15.1506L15.05 5.23346" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_8424_88988"><rect width="20" height="20" fill="white"></rect></clipPath></defs></g></svg>
                </span>
            </a>
        </div>

        <div class="forum-posts">
            {#each posts as post}
                <PostCard post={post}/>
            {/each}
        </div>
    </div>
    <div class="forum-right-bar">
        <a href="/forum/create" class="forum-create-post">
            <span class="create-post">Создать пост</span>
        </a>
        <div class="popular-tag">
            <h3>Популярные теги</h3>
            <TagsList tags={tags}/>
        </div>
        <div class="popular-posts">
            <h3>Поплуярные посты за неделю</h3>
            <div class="popular-posts-container">
            {#each popularPosts as popularPost, i}
                <a class="post-popular-li" href="/forum/post/{popularPost.id}">
                    <div class="post-name">
                        {popularPost.title}
                    </div>
                    <div class="post-likes">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            fill="currentColor" 
                            height="16" 
                            viewBox="0 0 24 24" 
                            width="16">
                            <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"/>
                            <path d="M13.12 2.06L7.58 7.6c-.37.37-.58.88-.58 1.41V19c0 1.1.9 2 2 2h9c.8 0 1.52-.48 1.84-1.21l3.26-7.61C23.94 10.2 22.49 8 20.34 8h-5.65l.95-4.58c.1-.5-.05-1.01-.41-1.37-.59-.58-1.53-.58-2.11.01zM3 21c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2s-2 .9-2 2v8c0 1.1.9 2 2 2z"/>
                        </svg>
                        {popularPost.likesCount}
                    </div>
                </a>
            {/each}
        </div>
        </div>
    </div>
</div>

<style>
    .popular-posts-container { 
        display: flex;
        flex-direction: column;
        gap: 0.5rem; 
    }

    .post-name { 
        -webkit-line-clamp: 2;
        display: -webkit-box;
        overflow: hidden;
        word-break: break-word;
        -webkit-box-orient: vertical;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.5;
    }

    .post-popular-li:hover { 
        color: #2b85df;
    }

    .post-popular-li { 
        border-bottom: 1px solid #414141;
        margin-bottom: 8px;
        color: white; 
        gap: 0.8rem;
        align-items: center; 
        display: flex;
        justify-content: space-between;
    }

    .popular-posts { 
        display: flex;
        flex-direction: column;
        gap: 0.75rem; 
        padding: 16px 12px; 
        background-color: var(--bg-paper);
        border-radius: 8px;
        
    }

    .popular-tag { 
        padding: 18px 12px; 
        display: flex;
        flex-direction: column;
        gap: 0.85rem;
        background-color: var(--bg-paper);
        border-radius: 12px; 
    }

    .forum-page h3 { 
        color: #fff; 
    }

    .forum-right-bar { 
        display: flex; 
        flex-direction: column;
        gap: 0.75rem; 
    }
    
    .forum-create-post { 
        background: var(--primary);
        color: var(--text-on-primary);
        padding: 14px 32px;
        border-radius: 10px;
        display: flex;
        font-size: 13px;
        align-items: center;
        justify-content: center;
    }

    .forum-create-post:hover { 
        background-color: #2b85df;
    }

    .my-posts-container { 
        display: flex;
        flex-direction: row-reverse;
    }

    .forum-container { 
        display: flex;
        flex-direction: column;
    }

    .my-posts:hover { 
        text-decoration: none;
    }

    .my-posts:hover { 
        background: #2b85df;
    }

    .my-posts-icon { 
        width: 14px;
        height: 14px;
        margin-left: 6px;
    }

    .my-posts-button { 
        position: relative;
        z-index: 1;
        display: inherit;
        flex-direction: inherit;
        justify-content: inherit;
        align-items: inherit;
        width: 100%;
        font-size: 0.75rem;

    }

    .my-posts { 
        padding: 7px 15px;
        border-radius: 16px;
        font-size: 11px;
        width: auto;
        margin-bottom: 16px;
        background: var(--primary);
        color: var(--text-on-primary);
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }

    .forum-header-bottom { 
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        -webkit-overflow-scrolling: auto;
        display: flex;
        touch-action: pan-x;
        overflow-x: scroll;
        overflow-y: hidden;
        align-items: center;
        display: flex;
        gap: 2.25rem;
        margin-bottom: 1rem;
        width: 100%;
    }

    .forum-header-bottom::-webkit-scrollbar {
        width: 10px;
        height: 10px;
        background: hsla(0, 0%, 55%, .2);
    }

    .forum-header-bottom::-webkit-scrollbar-track { 
        border-radius: 10px;
        background: hsla(0, 0%, 55%, .7);
    }

    .forum-header-top { 
        display: flex;
        touch-action: pan-x;
        align-items: center;
        display: flex;
        gap: 2.25rem;
        margin-bottom: 1rem;
        width: 100%;
    }

    .forum-page { 
        width: 100%;
        padding: 12px; 
        padding-right: 20px;
        display: flex;
        gap: 1.75rem; 
    }

    .header-title { 
        color: white; 
        font-size: 1.3rem; 
    }

    .search-input-icon { 
        width: 20px;
        height: 20px;
        fill: white; 
        display: inline-block;
        flex-shrink: 0;
        user-select: none;
        margin-right: 10px !important;
    }

    .search-container { 
        flex-grow: 10;
        padding-left: 16px;
        position: relative;
        padding: 0 12px;
        border-radius: 16px;
        display: inline-flex;
        align-items: center;
        box-sizing: border-box;
        color: var(--text-primary);
        font-size: 1rem;
        cursor: text;
    }

    .search-container::before { 
        border-color: var(--bg-paper) !important;
        background-color: var(--bg-paper) !important;
        content: "";
        position: absolute;
        left: 0;
        display: block;
        width: 100%;
        height: 100%;
        border: 3px solid var(--bg-input);
        border-radius: 16px;
        background-color: var(--bg-input);
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.07);
        opacity: .8;
        transition: opacity .15s ease-in-out, box-shadow 225ms cubic-bezier(0,0,.2,1) 0ms;
    }

    .search-input { 
        padding: 9px 2px 10px;
        z-index: 10;
    }
</style>