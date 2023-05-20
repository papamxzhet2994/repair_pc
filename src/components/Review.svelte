<script>
  import { writable } from 'svelte/store';
  import { onMount } from 'svelte';
  import supabase from "../../supabase";
  import AddReview from "./AddReview.svelte";
  import ReviewCard from "./ReviewCard.svelte";
  import {reviewsStore} from "../lib/store.js";
  let current = 0;
  let reviews = [];



  async function getReviews() {
    let { data, error } = await supabase
            .from('review')
            .select('*')
            .order('id', { ascending: false });
    if (error) {
      console.log(error);
      reviews = [];
    } else {
      reviews = data;
    }
    reviewsStore.set(reviews);
  }
  async function addReview(review) {
    const { data, error } = await supabase.from('review').insert([review]);
    if (error) {
      console.error(error);
    } else {
      const newReview = data ? data[0] : review; // Use the inserted data if available, otherwise use the review object
      reviews.unshift(newReview);
      reviewsStore.set([...reviews]);
      current = 0;
    }
  }

  async function nextTestimonial() {
    current = (current + 1) % reviews.length;
  }

  async function prevTestimonial() {
    current = (current - 1 + reviews.length) % reviews.length;
  }

  onMount(getReviews);
</script>

<section id="review" class="review">
  <div class="container">
    <h2>Отзывы наших клиентов</h2>
    <div class="review-cards" id="reviews-container">
      {#each $reviewsStore as review, i}
        <ReviewCard
                review={review}
                isVisible={i === current}
        />
      {/each}
    </div>
    <div class="buttons-container">
      <div class="buttons" style="text-align: center;">
        <button class="slide-left" on:click={prevTestimonial} disabled={current === 0}>Назад</button>
        <button class="slide-right" on:click={nextTestimonial} disabled={current === $reviewsStore.length - 1}>Вперед</button>
      </div>
      <div class="add-review-container">
        <AddReview on:reviewAdded={addReview} />
      </div>
    </div>
  </div>
</section>


<style>
  .review {
    margin-top: 100px;
    margin-bottom: 100px;
    background-color: #f5f5f5;
    padding: 50px 0;
    display: flex;
    justify-content: center;
    font-family: 'Source Sans Pro', Arial, Helvetica, sans-serif;
  }

  .review h2{
    text-align: center;
    padding-bottom: 50px;
  }

  .review-cards {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
  }

  .buttons-container {
    position: relative;
    width: 100%;
    height: 60px;
    margin-top: auto;
  }

  .buttons {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    text-align: center;
  }

  .buttons button {
    display: inline-block;
    background-color: #7e2291;
    color: #fff;
    padding: 10px 30px;
    border-radius: 15px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    margin: 0 10px;
  }

  .buttons button:active {
    transform: scale(0.95);
  }

  .buttons button:hover {
    background-color: #630077;
  }

  .add-review-container {
    width: 100%;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  @media (max-width: 768px) {
    .review {
      margin-top: 50px;
      margin-bottom: 50px;
      width: 100%;
    }

    .buttons {
      position: relative;
      width: 100%;
      height: 60px;
      margin-top: auto;
    }
  }
</style>
