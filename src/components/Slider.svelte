<script>
    import { onMount } from 'svelte';

    let currentImage = 0;
    let images = [
        'https://minsk.pozitive.org/images/adresa/minsk.jpg',
        'https://kompline.net/image/catalog/Remont/uslugi2.png',
        'https://kompline.net/image/catalog/Remont/uslugi4.png',
    ];

    function nextImage() {
        currentImage = (currentImage + 1) % images.length;
    }

    onMount(() => {
        const interval = setInterval(nextImage, 5000);

        return () => {
            clearInterval(interval);
        };
    });
</script>

<div class="slider">
    <img src={images[currentImage]} alt="master" />
</div>


<style>
    .slider {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .slider img {
        width: 1000px;
        height: 400px;
        max-width: 100%;
        max-height: 100%;
        height: auto;
        border-radius: 15px;
    }

    .slider button {
        width: 50px;
        height: 50px;
        font-size: 24px;
    }
</style>
