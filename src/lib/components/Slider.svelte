<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import TitleShortCard from "./TitleShortCard.svelte";
    import type { TitleModel } from "$lib/models/TitleModel";

    export let titles: TitleModel[] = []; // Принимаем массив TitleModel

    let scrollContainer: HTMLDivElement;
    let showLeftArrow = false;
    let showRightArrow = false;
    let isMobile = false;

    const SCROLL_AMOUNT = 200; // Расстояние прокрутки
    const SCROLL_DURATION = 300; // Длительность в миллисекундах

    function updateArrows() {
        if (scrollContainer) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
            showLeftArrow = scrollLeft > 0;
            showRightArrow = scrollLeft < scrollWidth - clientWidth;
        }
    }

    function smoothScroll(targetScrollLeft: number) {
        if (!scrollContainer) return;

        const startScrollLeft = scrollContainer.scrollLeft;
        const distance = targetScrollLeft - startScrollLeft;
        const startTime = performance.now();

        function animateScroll(currentTime: number) {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / SCROLL_DURATION, 1);

            // Используем ease-in-out для плавности
            const ease = progress < 0.5
                ? 2 * progress * progress
                : -1 + (4 - 2 * progress) * progress;

            scrollContainer.scrollLeft = startScrollLeft + distance * ease;

            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            }
        }

        requestAnimationFrame(animateScroll);
    }

    function scroll(direction: "left" | "right") {
        if (scrollContainer) {
            const targetScrollLeft =
                direction === "left"
                    ? scrollContainer.scrollLeft - SCROLL_AMOUNT
                    : scrollContainer.scrollLeft + SCROLL_AMOUNT;

            smoothScroll(targetScrollLeft);
        }
    }

    onMount(() => {
        const resizeHandler = () => {
            isMobile = window.innerWidth <= 768;
            updateArrows();
        };

        isMobile = window.innerWidth <= 768;
        updateArrows();

        window.addEventListener("resize", resizeHandler);
        scrollContainer?.addEventListener("scroll", updateArrows);

        onDestroy(() => {
            window.removeEventListener("resize", resizeHandler);
            scrollContainer?.removeEventListener("scroll", updateArrows);
        });
    });
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
        overflow-x: hidden;
        -webkit-overflow-scrolling: touch; /* Для iOS плавности */
        width: 100%;
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
        <button class="scroll-button left" on:click={() => scroll("left")}>←</button>
    {/if}

    <div
        class="scroll-container"
        bind:this={scrollContainer}
    >
        {#each titles as item}
            <div class="card">
                <TitleShortCard title={item} />
            </div>
        {/each}
    </div>

    {#if showRightArrow && !isMobile}
        <button class="scroll-button right" on:click={() => scroll("right")}>→</button>
    {/if}
</div>
