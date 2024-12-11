<script lang="ts">
	import CommentSection from "$lib/components/CommentSection.svelte";
	import type { PostModel } from "$lib/models/PostModel";
	import type { UserModel } from "$lib/models/UserModel";

    export let data: { user: UserModel, post: PostModel }
    let { user, post } = data; 
</script>

<div class="post-page">
    <div class="post-container">
        <div class="post-author">
            <div class="avatar-container">
                <img src={post.author.avatar?.path} alt="" class="avatar-image">
            </div>
        </div>
    </div>
    <div class="comments-container">
        <CommentSection comments={post.comments} user={user}/>
    </div>
</div>

<style>
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
    }
</style>