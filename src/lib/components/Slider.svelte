<script lang="ts">
    import { onMount } from "svelte";
    import TitleShortCard from "./TitleShortCard.svelte";

    let { titles }: { titles: TitleModel[] } = $props();
    

    // State variables
    let scrollPosition = 0;
    let maxScroll = 0;
    let showLeftArrow = $state(false);
    let showRightArrow = $state(false);
    let isMobile = $state(false);
    let sliderContainer: HTMLDivElement;

    // Set up event listeners and responsive behavior on mount
    onMount(() => {
        // Set max scroll based on slider content width
        updateMaxScroll();
        
        // Update isMobile flag based on screen width
        isMobile = window.innerWidth <= 768;
        window.addEventListener("resize", () => {
            isMobile = window.innerWidth <= 768;
        });
    });

    // Update max scroll position based on content
    function updateMaxScroll() {
        if (sliderContainer) {
            maxScroll = sliderContainer.scrollWidth - sliderContainer.clientWidth;
            updateArrows();
        }
    }

    // Update arrow visibility based on scroll position
    function updateArrows() {
        showLeftArrow = scrollPosition > 0;
        showRightArrow = scrollPosition < maxScroll;
    }

    // Scroll functions
    function scrollLeft() {
        if (sliderContainer) {
            sliderContainer.scrollBy({ left: -200, behavior: "smooth" });
            scrollPosition = Math.max(0, scrollPosition - 200);
            updateArrows();
        }
    }

    function scrollRight() {
        if (sliderContainer) {
            sliderContainer.scrollBy({ left: 200, behavior: "smooth" });
            scrollPosition = Math.min(maxScroll, scrollPosition + 200);
            updateArrows();
        }
    }
</script>

<style>
    /* Wrapper styling */
    .slider-wrapper {
        position: relative;
        width: 100%;
        overflow: hidden;
    }

    /* Container for the slider items */
    .slider-container {
        display: flex;
        overflow-x: auto;
        scroll-behavior: smooth;
        padding: 1rem 0;
        gap: 1rem;
    }

    /* Base styles for both arrow buttons */
    .arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background-color: rgba(0, 0, 0, 0.6);
        border: none;
        color: white;
        font-size: 1.5rem;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: opacity 0.3s ease;
        opacity: 0;
    }

    /* Show buttons on hover */
    .slider-wrapper:hover .arrow {
        opacity: 1;
    }

    /* Left arrow */
    .arrow.left {
        left: 0.5rem;
    }

    /* Right arrow */
    .arrow.right {
        right: 0.5rem;
    }

    /* Optional: make buttons only appear when hovering near the left/right edges */
    .slider-wrapper:hover .arrow.left:hover,
    .slider-wrapper:hover .arrow.right:hover {
        opacity: 1;
    }

    /* Mobile: Hide arrows */
    @media (max-width: 768px) {
        .arrow {
            display: none;
        }
    }
</style>

<div class="slider-wrapper">
    {#if showLeftArrow && !isMobile}
        <button class="arrow left" onclick={() => scrollLeft()}>⬅️</button>
    {/if}

    <div
        class="slider-container"
        bind:this={sliderContainer}
        onscroll={() => {
            scrollPosition = sliderContainer.scrollLeft;
            updateArrows();
        }}
    >
        {#each titles as title}
            <TitleShortCard title={title} />
        {/each}
    </div>

    <!-- Right Arrow -->
    {#if showRightArrow && !isMobile}
        <button class="arrow right" onclick={() => scrollRight()}>➡️</button>
    {/if}
</div>
