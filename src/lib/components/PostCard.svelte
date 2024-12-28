<script lang="ts">
	import type { PostModel } from "$lib/models/PostModel";
    import Reactions from "$lib/components/Reactions.svelte"; 
	import TagsList from "./TagsList.svelte";
 
    export let post: PostModel;
  
    // Format the date for display
    const formatDate = (date: Date): string => {
      const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'long', year: 'numeric' };
      return new Date(date).toLocaleDateString('ru-RU', options);
    };
  
    // Get first attachment (if available)
    const firstAttachment = post.attachments?.[0]?.path || '';
  </script>
  
  <style>
    .post-card {
      background-color: #1c1c1c;
      border-radius: 8px;
      padding: 1rem;
      margin-bottom: 1rem;
      color: white;
      font-family: Arial, sans-serif;
    }
  
    .post-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  
    .post-author {
      font-weight: bold;
      color: #aaa;
    }
  
    .post-title {
      font-size: 1.2rem;
      font-weight: bold;
      margin: 0.5rem 0;
    }
  
    .post-text {
      font-size: 1rem;
      margin-bottom: 1rem;
      line-height: 1.5;
    }
  
    .post-attachment {
      margin: 1rem 0;
      border-radius: 8px;
      overflow: hidden;
    }
  
    .post-attachment img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  
    .post-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.9rem;
    }
  
    .post-actions {
      display: flex;
      gap: 1rem;
    }
  
    .post-actions div {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      cursor: pointer;
      color: #aaa;
    }
  
    .post-actions div:hover {
      color: white;
    }


    .post-author-image { 
        object-fit: cover;
        width: 100%;
        height: 100%;
        color: transparent;
        text-align: center;
        width: 24px;
        height: 24px;
        text-indent: 10000px;
    }

    .post-author-container { 
        display: flex;
        align-items: center;
        gap: 0.35rem;
    }

    .post-date { 
        color: var(--disabled); 
        font-size: .875rem;
    }
  </style>
  
  <div class="post-card {post.pinned ? 'pinned' : ''}">
    <!-- Header -->
    <div class="post-header">
        <div class="post-author-container">
            <img src={post.author.avatar?.blob || post.author.avatar?.path} alt="" class="post-author-image">
            <div class="post-author">{post.author.username} вещает</div>
        </div>
      <div class="post-date">{formatDate(post.createdAt)}</div>
    </div>
  
    <!-- Title -->
    <div class="post-title">{post.title}</div>
  
    <!-- Text -->
    <div class="post-text">{post.text}</div>
  
    <!-- Attachment (if any) -->
    {#if firstAttachment}
      <div class="post-attachment">
        <img src={firstAttachment} alt="Post Attachment" />
      </div>
    {/if}
  
    <!-- Footer -->
    <div class="post-footer">
      <!-- Actions -->
      <div class="post-actions">
        <Reactions selectedReaction={null}/>
        <div>
          💬 {post.comments?.length || 0}
        </div>
      </div>
  
      <TagsList tags={post.tags}/>
    </div>
  </div>
  