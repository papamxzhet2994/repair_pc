<script>
    export let value = 0;
    export let rating = 0;

    function handleClick(star) {
        if (value === star) {
            value = 0;
            rating = 0;
        } else {
            value = star;
            rating = star;
        }
    }
</script>

<style>
    .star-rating {
        display: inline-block;
        font-size: 24px;
        cursor: pointer;
    }

    .star {
        color: #000;
    }

    .star.selected {
        color: #f7d342;
        }
</style>

<div class="star-rating">
    {#each [1, 2, 3, 4, 5] as star}
    <span
            class="star {star <= value ? 'selected' : ''}"
            on:click={() => handleClick(star)}

    >
      ★
    </span>
    {/each}
</div>
