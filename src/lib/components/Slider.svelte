<script lang="ts">
    import { onMount } from "svelte";
    import TitleShortCard from "./TitleShortCard.svelte";
    import type { TitleModel } from "$lib/models/TitleModel";

    export let titles: TitleModel[] = []; // Принимаем массив TitleModel

    let scrollContainer: HTMLDivElement;
    let showLeftArrow = false;
    let showRightArrow = false;
    let isMobile = false;

    onMount(() => {
        updateArrows();

        // Определение мобильности
        isMobile = window.innerWidth <= 768;
        window.addEventListener("resize", () => {
            isMobile = window.innerWidth <= 768;
            updateArrows();
        });
    });

    function updateArrows() {
        if (scrollContainer) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
            showLeftArrow = scrollLeft > 0;
            showRightArrow = scrollLeft < scrollWidth - clientWidth;
        }
    }

    function scrollLeft() {
        if (scrollContainer) {
            scrollContainer.scrollBy({ left: -200, behavior: "smooth" });
        }
    }

    function scrollRight() {
        if (scrollContainer) {
            scrollContainer.scrollBy({ left: 200, behavior: "smooth" });
        }
    }
</script>

<style>
    .scroll-wrapper {
        position: relative;
        width: 100%;
        overflow: hidden;
    }

    .scroll-container {
        display: flex;
        gap: 10px;
        scroll-behavior: smooth;
        overflow-x: hidden;
        width: 100%;
        max-width: 100%;
        margin: 0 auto;
    }

    .scroll-button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background-color: rgba(0, 0, 0, 0.6);
        color: white;
        border: none;
        border-radius: 50%;
        width: 2.5rem;
        height: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .scroll-wrapper:hover .scroll-button {
        opacity: 1;
    }

    .scroll-button.left {
        left: 0.5rem;
    }

    .scroll-button.right {
        right: 0.5rem;
    }

    .card { 
        width: 5%;
        min-width: 170px;
    }

    @media (max-width: 768px) {
        .scroll-button {
            display: none;
        }
    }
</style>

<div class="scroll-wrapper">
    {#if showLeftArrow && !isMobile}
        <button class="scroll-button left" on:click={scrollLeft}>←</button>
    {/if}

    <div
        class="scroll-container"
        bind:this={scrollContainer}
        on:scroll={updateArrows}
    >
        {#each titles as item}
            <div class="card">
                <TitleShortCard title={item} />
            </div>
        {/each}
    </div>

    {#if showRightArrow && !isMobile}
        <button class="scroll-button right" on:click={scrollRight}>→</button>
    {/if}
</div>
