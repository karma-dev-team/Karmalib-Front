<script>
    import { createEventDispatcher } from 'svelte';
  
    export let fromEmail = '';
    let message = '';
  
    const dispatch = createEventDispatcher();
  
    function sendEmail() {
      if (message.trim()) {
        dispatch('send', { fromEmail, message });
      } else {
        alert("Please enter a message.");
      }
    }
  
    function closeModal() {
      dispatch('close');
    }
  </script>
  
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <style>
    .modal-content {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: white;
      padding: 20px;
      border-radius: 8px;
      width: 300px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      z-index: 1000;
    }
  
    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }
  
    .modal-body {
      margin-bottom: 10px;
    }
  
    button {
      cursor: pointer;
      padding: 8px 16px;
      font-size: 14px;
    }
  
    .send-button {
      background-color: #4CAF50;
      color: white;
      border: none;
    }
  
    .cancel-button {
      background-color: #f44336;
      color: white;
      border: none;
    }
  </style>
  
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <div class="modal-content" on:click|stopPropagation>
    <div class="modal-header">
      <h3>Email Us</h3>
      <button on:click={closeModal}>✖️</button>
    </div>
    <div class="modal-body">
      <!-- svelte-ignore a11y_label_has_associated_control -->
      <label><strong>From:</strong> {fromEmail}</label>
      <textarea
        bind:value={message}
        placeholder="Let us know what you need."
        rows="4"
        style="width: 100%; margin-top: 10px;"
      ></textarea>
    </div>
    <div class="modal-footer" style="display: flex; gap: 10px;">
      <button class="send-button" on:click={sendEmail}>SEND</button>
      <button class="cancel-button" on:click={closeModal}>CANCEL</button>
    </div>
  </div>
  
  <!-- This outer div listens for clicks outside the modal to close it -->
  <button style="position: fixed; top: 0; left: 0; right: 0; bottom: 0;" on:click={closeModal}></button>
  