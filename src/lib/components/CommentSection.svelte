<script lang="ts">
    import type { CommentModel } from "$lib/models/CommentModel";
    import type { UserModel } from "$lib/models/UserModel";
    import { formatHumanReadableDate } from "$lib/utils/DatetimeFormtting";
    import Reactions from "$lib/components/Reactions.svelte"

    let { comments, user }: { comments: CommentModel[], user: UserModel } = $props(); 
    
    let newComment = $state("");
    let isSpoiler = $state(false);

    const addComment = () => {
        if (newComment.trim()) {
            comments = [
                ...comments,
                {
                    id: crypto.randomUUID(),
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

    const deleteComment = (id: string) => {
        comments = comments.filter((comment) => comment.id !== id);
    };

    const likeComment = (id: string) => {
        comments = comments.map((comment) =>
            comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment
        );
    };

    const dislikeComment = (id: string) => {
        comments = comments.map((comment) =>
            comment.id === id ? { ...comment, dislikes: comment.dislikes + 1 } : comment
        );
    };
</script>

<style>
    :root {
        --text-primary: #ffffff; /* Основной цвет текста */
        --background-input: #3c3c3c; /* Фон для ввода */
        --border-color: #555; /* Цвет границы для ввода */
    }

    .comment-section {
        padding: 0.5rem;
        font-family: Arial, sans-serif;
    }

    .comment-input {
        display: flex;
        flex-direction: column;
        margin-bottom: 0.5rem;
    }

    .comment-input textarea {
        width: 100%;
        background: var(--background-input);
        color: var(--text-primary);
        border: 1px solid var(--border-color);
        border-radius: 4px;
        padding: 0.4rem;
        font-size: 0.9rem;
        resize: none;
    }

    .comment-input label {
        display: flex;
        align-items: center;
        margin: 0.4rem 0;
        font-size: 0.8rem;
        color: var(--text-primary);
    }

    .comment-input button {
        align-self: flex-start;
        background: #007bff;
        color: var(--text-primary);
        border: none;
        border-radius: 4px;
        padding: 0.3rem 0.6rem;
        font-size: 0.8rem;
        cursor: pointer;
    }

    .comment-input button:hover {
        background: #0056b3;
    }

    .comments-list {
        font-size: 0.9rem;
    }

    .comment {
        padding: 0.4rem 0;
        border-top: 1px solid var(--border-color);
        font-size: 0.9rem;
    }

    .comment .author {
        font-weight: bold;
        color: var(--text-primary);
    }

    .comment .timestamp {
        font-size: 0.75rem;
        color: #bbb;
        margin-left: 0.5rem;
    }

    .comment p {
        margin: 0.4rem 0;
        font-size: 0.9rem;
        color: var(--text-primary);
    }

    .comment .spoiler {
        color: #aaa;
        font-style: italic;
    }

    .comment-actions {
        display: flex;
        gap: 0.5rem;
        font-size: 0.8rem;
        margin-top: 0.2rem;
        align-items: center;
    }

    .comment-actions span { 
        color: var(--text-primary); 
    }

    .delete-btn {
        color: #dc3545;
        font-size: 0.8rem;
        cursor: pointer;
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
            <div class="comment" id={comment.id}>
                <div>
                    <span class="author">{comment.author.publicUsername || comment.author.username}</span>
                    <span class="timestamp">{formatHumanReadableDate(comment.createdAt.toISOString())}</span>
                </div>
                <p class={comment.isSpoiler ? "spoiler" : ""}>
                    {comment.text}
                </p>
                <div class="comment-actions">
                    <Reactions selectedReaction={null}/>
                    {#if user.isStaff}
                        <span class="delete-btn" onclick={() => deleteComment(comment.id)}>Удалить</span>
                    {/if}
                </div>
            </div>
        {/each}
    </div>
</div>
