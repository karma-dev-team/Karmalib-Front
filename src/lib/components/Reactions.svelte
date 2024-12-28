<script lang="ts">
    import type { ReactionTypes } from '$lib/enums/ReactionTypes';

    export let likesAmount = 0;
    export let dislikeAmount = 0;
    export let selectedReaction: ReactionTypes | null; 
    let isLiked = selectedReaction === "Like";
    let isDisliked = selectedReaction === "Dislike";

    function handleReaction(type: ReactionTypes): void {
        if (type === 'Like') {
            if (isLiked) {
                likesAmount--;
                isLiked = false;
            } else {
                likesAmount++;
                if (isDisliked) {
                    dislikeAmount--;
                    isDisliked = false;
                }
                isLiked = true;
            }
        } else if (type === 'Dislike') {
            if (isDisliked) {
                dislikeAmount--;
                isDisliked = false;
            } else {
                dislikeAmount++;
                if (isLiked) {
                    likesAmount--;
                    isLiked = false;
                }
                isDisliked = true;
            }
        }
    }
</script>

<style>
    .reactions-container {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .like-button, .dislike-button {
        display: flex;
        align-items: center;
        gap: 0.2rem;
        background-color: transparent;
        border: none;
        cursor: pointer;
        transition: transform 0.3s ease;
    }

    .like-button:hover, .dislike-button:hover {
        transform: scale(1.1);
    }

    .like-button span {
        font-size: 0.69rem;
        font-weight: bold;
    }

    .like-button, .dislike-button {
        color: #ffffff;
    }
</style>

<div class="reactions-container">
    <button class="like-button" onclick={() => handleReaction('Like')}>
        <svg xmlns="http://www.w3.org/2000/svg" 
            fill="{isLiked ? '#007bff' : 'currentColor'}" 
            height="16" 
            viewBox="0 0 24 24" 
            width="16">
            <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"/>
            <path d="M13.12 2.06L7.58 7.6c-.37.37-.58.88-.58 1.41V19c0 1.1.9 2 2 2h9c.8 0 1.52-.48 1.84-1.21l3.26-7.61C23.94 10.2 22.49 8 20.34 8h-5.65l.95-4.58c.1-.5-.05-1.01-.41-1.37-.59-.58-1.53-.58-2.11.01zM3 21c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2s-2 .9-2 2v8c0 1.1.9 2 2 2z"/>
        </svg>
        <span>{likesAmount}</span>
    </button>

    <button class="dislike-button" aria-label="2" onclick={() => handleReaction('Dislike')}>
        <svg xmlns="http://www.w3.org/2000/svg" 
            fill="{isDisliked ? '#007bff' : 'currentColor'}" 
            height="16" 
            viewBox="0 0 24 24" 
            width="16">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"/>
        </svg>
    </button>
</div>
