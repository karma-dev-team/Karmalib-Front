<script lang="ts">
    import searchIcon from '$lib/images/SearchIcon.svg'
  
   let searchQuery = '';
</script>
  
<style>
  .search-bar {
    display: flex;
    align-items: center;
    border: 2px solid rgba(131, 133, 144, 0.5);
    border-radius: 5px;
    padding: 4px 2px;
    padding-right: 7px; 
    position: relative;
    max-width: 800px;
    transition: max-width .2s ease-in-out;
    background-color: #2E303D;
    min-width: 500px;
  }

  .search-bar input[type="text"] {
    border: none;
    outline: none;
    flex: 1;
    margin-left: 7px;
    padding: 5px;
  }

  .search-bar input { 
    background-color: #2E303D;
    caret-color: white;
    font-size: 14px; 
  }

  .search-input { 
    font-size: 14px; 
  }

  .search-icon { 
    padding: 4px; 
    width: 29px; 
  }
</style>

<div class="search-bar">
  <input type="text" placeholder="Search" bind:value={searchQuery} class="search-input"/>
  
  <img src={searchIcon} alt="" class="search-icon">
</div>
