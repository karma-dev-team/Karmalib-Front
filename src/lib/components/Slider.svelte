<script lang="ts">
    import { onMount } from "svelte";
	import TitleShortCard from "./TitleShortCard.svelte";
	import type { TitleModel } from "$lib/models/TitleModel";

    export let titles: TitleModel[] = []; // Принимаем массив TitleModel

    let scrollContainer: HTMLDivElement;
    let scrollPosition = 0;
    let maxScroll = 0;
    let showLeftArrow = false;
    let showRightArrow = false;
    let isMobile = false;

    onMount(() => {
        updateMaxScroll();

        // Определение мобильности
        isMobile = window.innerWidth <= 768;
        window.addEventListener("resize", () => {
            isMobile = window.innerWidth <= 768;
            updateMaxScroll();
        });
    });

    function updateMaxScroll() {
        if (scrollContainer) {
            maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
            updateArrows();
        }
    }

    function updateArrows() {
        showLeftArrow = scrollPosition > 0;
        showRightArrow = scrollPosition < maxScroll;
    }

    function scrollLeft() {
        if (scrollContainer) {
            scrollContainer.scrollBy({ left: -200, behavior: "smooth" });
            scrollPosition = Math.max(0, scrollPosition - 200);
            updateArrows();
        }
    }

    function scrollRight() {
        if (scrollContainer) {
            scrollContainer.scrollBy({ left: 200, behavior: "smooth" });
            scrollPosition = Math.min(maxScroll, scrollPosition + 200);
            updateArrows();
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
        gap: 1rem;
        overflow-x: auto;
        scroll-behavior: smooth;
        padding: 1rem 0;
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
        on:scroll={() => {
            scrollPosition = scrollContainer.scrollLeft;
            updateArrows();
        }}
    >
        {#each titles as item}
            <div class="card">
                <TitleShortCard title={item}/>
            </div>
        {/each}
    </div>

    {#if showRightArrow && !isMobile}
        <button class="scroll-button right" on:click={scrollRight}>→</button>
    {/if}
</div>
