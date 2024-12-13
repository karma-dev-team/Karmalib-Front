<script lang="ts">
	import CommentSection from "$lib/components/CommentSection.svelte";
	import PostTag from "$lib/components/PostTag.svelte";
	import Reactions from "$lib/components/Reactions.svelte";
	import type { PostModel } from "$lib/models/PostModel";
	import type { UserModel } from "$lib/models/UserModel";
	import { formatHumanReadableDate } from "$lib/utils/DatetimeFormtting";

    let { data } = $props(); 
    let { user, post }: { user: UserModel, post: PostModel } = data; 
</script>

<div class="post-page">
    <div class="post-container">
        <div class="post-author">
            <div class="post-author-left">
                <div class="avatar-container">
                    <img src={post.author.avatar?.path} alt="" class="avatar-image">
                </div>
                <p>{post.author.publicUsername || post.author.username}</p>
            </div>
            <div class="post-author-right">
                {formatHumanReadableDate(post.createdAt.toISOString())}
            </div>
        </div>
        <div class="post-content">
            {post.text}
        </div>
        <div class="post-files">
            {#if post.attachments !== null || post.attachments !== undefined}
                {#each post.attachments as attachment}
                    <div class="attachment-container">
                        <img src={attachment.blob || attachment.path} alt={attachment.name} class="attachment-cover"/>
                        <div class="image-container">
                            <img 
                                src={attachment.blob || attachment.path} alt={attachment.name} 
                                class="image-image" 
                                aria-label="главная картинка поста"
                            />
                        </div>
                    </div>
                {/each}
            {/if}
        </div>
        <div class="post-bottom">
            <div class="post-reactions">
                <Reactions likesAmount={100} selectedReaction={"Like"}/>
            </div>
            <div class="post-tags">                                                            
                {#each post.tags as tag}
                    <PostTag tag={tag}/>
                {/each}
            </div>
        </div>
    </div>
    <div class="comments-container">
        <CommentSection comments={post.comments} user={user}/>
    </div>
</div>

<style>
    .image-image { 
        margin: 0 auto !important;
        background-repeat: no-repeat;
        z-index: 1;
        display: flex;
        -webkit-backdrop-filter: blur(50px);
        backdrop-filter: blur(50px);
        width: auto !important;
        height: 100%;
        transition: opacity .15s ease-in;
    }

    .image-container { 
        margin: 0 auto !important;
        background-repeat: no-repeat;
        z-index: 1;
        display: flex;
        -webkit-backdrop-filter: blur(50px);
        backdrop-filter: blur(50px);
        width: auto !important;
        height: 100%;
    }
    
    .attachment-cover { 
        width: 100%;
        height: 100%;
        top: 0;
        transition: all 300ms ease-in-out;
        left: 0;
        position: absolute;
        backdrop-filter: blur(50px);
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 15px;
        filter: blur(40px) !important;
    }

    .post-files { 
        display: flex;
        gap: 1rem; 
    }

    .attachment-container { 
        transition: all 1s ease-in-out;
        flex-direction: column;
        align-items: center;
        cursor: pointer; 
        display: flex;
        justify-content: center;
        overflow: hidden;
        z-index: 0;
        border-radius: 10px !important;
        min-height: 292px;
        position: relative;
        width: 100%;
        border-radius: 10px !important;
    }

    .attachment-container:hover .attachment-cover {
        transition: all .5s ease-in;
        filter: blur(14px) !important;
    }

    .post-content { 
        color: var(--text-secondary);
    }

    .post-tags { 
        display: flex;
    }

    .post-bottom { 
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .post-page { 
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .post-container { 
        display: flex;
        flex-direction: column;
        gap: 1rem; 
        padding: 1rem; 
        background-color: var(--bg-paper);
        border-radius: 10px;
    }

    .post-author, .post-author-left { 
        display: flex;
        align-items: center;
    }

    .post-author-left { 
        color: var(--text-secondary); 
        gap: 8px; 
    }

    .post-author-left p { 
        font-weight: 600;
        font-size: .875rem;
    }

    .post-author-right { 
        font-size: .875rem;
        color: var(--disabled); 
    }

    .post-author { 
        justify-content: space-between;
    }

    .avatar-container { 
        width: 24px;
        height: 24px;
        position: relative;
        display: flex;
        flex-shrink: 0;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        border-radius: 50%;
        font-size: 1.25rem;
        line-height: 1;
        background-color: var(--bg-paper);
    }
</style>