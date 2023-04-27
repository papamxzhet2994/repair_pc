<script>
  import supabase from "../../supabase";
  import AddReview from "./AddReview.svelte";

  let current = 0;
  let reviews = [];

  async function getReviews() {
    let { data, error } = await supabase
      .from('review')
      .select('*')

    if (error) {
      console.log(error);
      reviews = [];
    } else {
      reviews = data;
    }
  } 
  
  async function loadReviews() {
    await getReviews();
    const container = document.getElementById("reviews-container");
    container.innerHTML = "";
    reviews.forEach((review, i) => {
      const reviewEl = document.createElement("div");
      reviewEl.innerHTML = `
      <div class="review-card" style="display: ${i === current ? 'block' : 'none'};">
        <p>${review.review}</p>
        <div class="review-author">${review.name}</div>
      </div>
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
        @media screen and (max-width: 768px) {
          .review-card {
            width: 250px;
            height: auto;
            max-width: 100%;
          }
        }
        </style>
      `;
      container.appendChild(reviewEl);
    });
  }
  
  async function nextTestimonial() {
    current = (current + 1) % reviews.length;
    await loadReviews();
  }
  
  async function prevTestimonial() {
    current = (current - 1 + reviews.length) % reviews.length;
    await loadReviews();
  }
  
  loadReviews();
</script>

<section id="review" class="review">
  <div class="container">
    <h2>Отзывы наших клиентов</h2>
    <div class="review-cards" id="reviews-container"></div>
    <div class="buttons-container">
      <div class="buttons" style="text-align: center;">
        <button class="slide-left" on:click={prevTestimonial} disabled={current === 0}>Назад</button>
        <button class="slide-right" on:click={nextTestimonial} disabled={current === reviews.length - 1}>Вперед</button>
      </div>
      <div class="add-review-container">
        <AddReview />
      </div>
    </div>
  </div>
</section>

<style>
  .review {
    margin-top: 100px;
    margin-bottom: 100px;
    background-color: #ffffff;
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

