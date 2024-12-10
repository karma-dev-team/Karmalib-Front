<script lang="ts">
	import type { CommentModel } from "$lib/models/CommentModel";
	import type { UserModel } from "$lib/models/UserModel";
	import { formatHumanReadableDate } from "$lib/utils/DatetimeFormtting";
	import { v4 } from "uuid";

    let { comments, user }: { comments: CommentModel[], user: UserModel } = $props(); 
    
    let newComment = $state("");
    let isSpoiler = $state(false);

    const addComment = () => {
        if (newComment.trim()) {
            comments = [
                ...comments,
                {
                    id: v4(),
                    author: user, 
                    text: newComment,
                    isSpoiler,
                    likes: 0,
                    dislikes: 0,
                    createdAt: new Date(), 
                },
            ];
            newComment = "";
            isSpoiler = false;
        }
    };

    const deleteComment = (id: String) => {
        comments = comments.filter((comment) => comment.id !== id);
    };

    const likeComment = (id: String) => {
        comments = comments.map((comment) =>
            comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment
        );
    };

    const dislikeComment = (id: String) => {
        comments = comments.map((comment) =>
            comment.id === id ? { ...comment, dislikes: comment.dislikes + 1 } : comment
        );
    };
</script>

<style>
    .comment-section {
        background: #1e1e1e;
        color: #fff;
        padding: 1rem;
        border-radius: 8px;
    }

    .comment-input {
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
    }

    .comment-input textarea {
        width: 100%;
        background: #2e2e2e;
        color: #fff;
        border: none;
        border-radius: 5px;
        padding: 0.5rem;
    }

    .comments-list {
        margin-top: 1rem;
    }

    .comment {
        border-bottom: 1px solid #444;
        padding: 0.5rem 0;
        position: relative;
    }

    .comment .author {
        font-weight: bold;
    }

    .comment .timestamp {
        font-size: 0.8rem;
        color: #888;
    }

    .comment-actions {
        display: flex;
        gap: 1rem;
    }

    .comment-actions button {
        background: none;
        border: none;
        color: #fff;
        cursor: pointer;
    }

    .delete-btn {
        color: #ff4d4d;
        cursor: pointer;
    }

    .spoiler {
        color: #888;
        font-style: italic;
    }
</style>

<div class="comment-section">
    <!-- Input for adding a comment -->
    <div class="comment-input">
        <textarea
            placeholder="Оставить комментарий"
            bind:value={newComment}
            maxlength="500"
        ></textarea>
        <label>
            <input type="checkbox" bind:checked={isSpoiler} /> Спойлер
        </label>
        <button onclick={addComment}>Добавить</button>
    </div>

    <!-- Comments list -->
    <div class="comments-list">
        {#each comments as comment (comment.id)}
            <div class="comment">
                <div class="author">{comment.author}</div>
                <div class="timestamp">{formatHumanReadableDate(comment.createdAt.toDateString())}</div>
                <p class={comment.isSpoiler ? "spoiler" : ""}>
                    {comment.text}
                </p>
                <div class="comment-actions">
                    <button onclick={() => likeComment(comment.id)}>
                        👍 {comment.likes}
                    </button>
                    <button onclick={() => dislikeComment(comment.id)}>
                        👎 {comment.dislikes}
                    </button>
                    {#if user.isStaff}
                        <button class="delete-btn" onclick={() => deleteComment(comment.id)}>
                            🗑 Удалить
                        </button>
                    {/if}
                </div>
            </div>
        {/each}
    </div>
</div>