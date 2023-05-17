<script>
    import { onMount } from 'svelte';

    let currentImage = 0;
    let images = [
        'https://minsk.pozitive.org/images/adresa/minsk.jpg',
        'https://logo.clearbit.com/rubyonrails.com',
        'https://logo.clearbit.com/apple.com',
    ];

    function nextImage() {
        currentImage = (currentImage + 1) % images.length;
    }

    function previousImage() {
        currentImage = (currentImage - 1 + images.length) % images.length;
    }

    onMount(() => {
        const interval = setInterval(nextImage, 5000);

        return () => {
            clearInterval(interval);
        };
    });
</script>

<div class="slider">
    <button on:click={previousImage}>&lt;</button>
    <img src={images[currentImage]} alt="Slide" />
    <button on:click={nextImage}>&gt;</button>
</div>

<style>
    .slider {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .slider img {
        max-width: 100%;
        height: auto;
    }

    .slider button {
        width: 50px;
        height: 50px;
        font-size: 24px;
    }
</style>
