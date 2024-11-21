<script>
  import { goto } from '$app/navigation';

  let searchQuery = '';

  function performSearch() {
    if (searchQuery.trim()) {
      goto(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  }
</script>

<style>
  .search-bar {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  input {
    padding: 5px;
    font-size: 16px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    padding: 5px 10px;
    font-size: 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }
</style>

<div class="search-bar">
  <input
    type="text"
    bind:value={searchQuery}
    placeholder="Введите запрос..."
    on:keydown={(e) => e.key === 'Enter' && performSearch()}
  />
  <button on:click={performSearch}>Искать</button>
</div>
