<script>
    let { children, close } = $props();
</script>

<div class="modal-backdrop" onclick={close}>
    <div class="modal-content" onclick={e => e.stopPropagation()}>
        {@render children()}
    </div>
</div>

<style>
    .modal-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .modal-content {
        background: white;
        padding: 1em;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
</style>
