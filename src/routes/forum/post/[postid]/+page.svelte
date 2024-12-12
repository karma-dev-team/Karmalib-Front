<script lang="ts">
	import CommentSection from "$lib/components/CommentSection.svelte";
	import PostTag from "$lib/components/PostTag.svelte";
	import Reactions from "$lib/components/Reactions.svelte";
	import type { PostModel } from "$lib/models/PostModel";
	import type { UserModel } from "$lib/models/UserModel";
	import { formatHumanReadableDate } from "$lib/utils/DatetimeFormtting";

    export let data: { user: UserModel, post: PostModel }
    let { user, post } = data; 
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