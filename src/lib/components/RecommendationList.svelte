<script lang="ts">  
    import type { RecommendationModel } from "$lib/models/RecommendationModel";

    export let recommendations: RecommendationModel[] = [];
  </script>
  
  <style>
    .recommendation-list {
      list-style: none;
      margin: 0;
      padding: 0;
    }
  
    .recommendation-item {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
      border: 1px solid #ccc;
      padding: 1rem;
      border-radius: 8px;
      background-color: #1e1e2f;
      color: white;
    }
  
    .recommendation-item img {
      width: 64px;
      height: 64px;
      object-fit: cover;
      margin-right: 1rem;
      border-radius: 8px;
    }
  
    .recommendation-content {
      flex: 1;
    }
  
    .recommendation-title {
      font-size: 1.2rem;
      font-weight: bold;
    }
  
    .recommendation-meta {
      font-size: 0.9rem;
      margin-top: 0.5rem;
      color: #aaa;
    }
  
    .recommendation-rating {
      font-size: 0.9rem;
      font-weight: bold;
      color: #f39c12;
    }
  </style>
  
  <ul class="recommendation-list">
    {#each recommendations as recommendation (recommendation.id)}
      <li class="recommendation-item">
        <!-- Thumbnail -->
        {#if recommendation.title.coverImage}
          <img src={recommendation.title.coverImage.path || recommendation.title.coverImage.blob} alt={recommendation.title.name} />
        {/if}
  
        <!-- Content -->
        <div class="recommendation-content">
          <div class="recommendation-title">{recommendation.title.name}</div>
          <div class="recommendation-meta">
            <span>Author: {recommendation.authorId}</span> •
            <span>Updated: {new Date(recommendation.updatedAt).toLocaleDateString()}</span>
          </div>
        </div>
  
        <!-- Rating -->
        <div class="recommendation-rating">Rating: {recommendation.rating}</div>
      </li>
    {/each}
  </ul>
  