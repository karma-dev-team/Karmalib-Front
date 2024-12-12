<script lang="ts">
	import type { PostTagModel } from "$lib/models/PostTagModel";

    export let tag: PostTagModel; 
</script>

<div class="post-tag">
    <span class="post-tag-text">#{tag.name}</span>
</div>

<style>
    .post-tag { 
        background-color: hsla(240, 4%, 49%, .07);
        display: inline-block;
        vertical-align: initial;
        margin: 2px;
        padding: 7px 12px;
        border-radius: 12px;
        color: #fff;
        font-weight: 400;
        font-size: 14px;
        line-height: 1;
        text-align: center;
        text-transform: none;
        white-space: nowrap;
    }

    .post-tag-text { 
        font-weight: 400;
        font-size: 14px;
        line-height: 1;
        text-align: center;
        text-transform: none;
        white-space: nowrap;
        color: rgb(245, 245, 245); 
    }
</style>