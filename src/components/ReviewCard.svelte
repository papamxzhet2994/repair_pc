<script>
    export let review;
    export let isVisible;

    function getStarRating(rating) {
        const star = '★';
        const emptyStar = '☆';
        const fullStars = star.repeat(Math.floor(rating));
        const emptyStars = emptyStar.repeat(5 - Math.ceil(rating));
        return fullStars + emptyStars;
    }
</script>

{#if isVisible}
    <div class="review-card">
        <p>{review.review}</p>
        <div class="review-author">{review.name}</div>
        <div class="review-rating">{getStarRating(review.rating)}</div>
    </div>
{/if}

<style>
    .review-card {
        background-color: #fff;
        box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        padding: 30px;
        margin-bottom: 40px;
        width: 900px;
        height: auto;
    }

    p {
        font-size: 24px;
        line-height: 28px;
        margin-bottom: 20px;
    }

    .review-author {
        font-size: 18px;
        font-weight: bold;
        margin-top: 20px;
    }

    .review-rating {
        font-size: 24px;
    }

    @media screen and (max-width: 768px) {
        .review-card {
            width: 250px;
            height: auto;
            max-width: 100%;
        }
    }
</style>
