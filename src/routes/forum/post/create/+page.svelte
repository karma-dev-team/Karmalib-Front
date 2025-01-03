<script lang="ts">
	import InputField from "$lib/components/InputField.svelte";
    import ToHome from "$lib/components/ToHome.svelte";

    let titlePost = ""
</script>

<div class="page-create">
    <ToHome text="Назад"/>
    <div class="page-form">
        <h1>Создание поста</h1>
        <InputField bind:value={titlePost} placeholder="Заголовок"/>
        
    </div>
</div>