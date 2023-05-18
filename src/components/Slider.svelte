<script>
        import { afterUpdate, onMount } from 'svelte';

        let currentImage = 0;
        let images = [
                'https://kompline.net/image/catalog/Remont/uslugi1.png',
                'https://kompline.net/image/catalog/Remont/uslugi11.png',
                'https://kompline.net/image/catalog/Remont/uslugi13.png',
                'https://kompline.net/image/catalog/Remont/uslugi2.png',
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

        let transitionInProgress = false;

        afterUpdate(() => {
                transitionInProgress = false;
        });

        function handleTransitionEnd() {
                transitionInProgress = false;
        }
</script>

<div class="slider">
{#if !transitionInProgress}
    {#key currentImage}
        <img src={images[currentImage]} alt="master" class="fade-in" on:transitionend={handleTransitionEnd}/>
    {/key}
{/if}
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
    margin-bottom: 20px;
 }

 .fade-in {
    opacity: 0;
    animation: fade-in 2s forwards;
 }

@keyframes fade-in {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@media screen and (max-width: 600px) {
    .slider img {
        width: 1000px;
        height: 220px;
        border-radius: 15px;
        margin-bottom: 20px;
    }
}
</style>
