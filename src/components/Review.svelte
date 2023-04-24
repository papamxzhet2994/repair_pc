<script>
  import supabase from "../../supabase";
import AddReview from "./AddReview.svelte";

let current = 0;

let review = [];

async function fetchReview() {
  const { data, error } = await supabase
    .from('review')
    .select('*');
  if (error) {
    console.log(error);
  } else {
    review = data;
  }
}

fetchReview();


function nextTestimonial() {
  current = (current + 1) % review.length;
}

function prevTestimonial() {
  current = (current - 1 + review.length) % review.length;
}


</script>

<section id="review" class="review">
<div class="container">
  <h2>Отзывы наших клиентов</h2>
  <div class="review-cards">
    {#each review as review, i}
    {#if i === current}
    <div class="review-card" style="display: block;">
      <p>{review.text}</p>
      <div class="review-author">{review.author}</div>
    </div>
      {:else}
        <div class="review-card" style="display: none;"></div>
        {/if}
        {/each}
        <div class="buttons-container">
          <div class="buttons" style="text-align: center;">
        <button class="slide-left" on:click={prevTestimonial} disabled={current === 0}>Назад</button>
        <button class="slide-right" on:click={nextTestimonial} disabled={current === review.length - 1}>Вперед</button>
      </div>
      
      <div class="add-review-container">
      </div>
    </div>
  </div>
  <AddReview />
</div>
</section>




<style>
.review {
  margin-top: 100px;
  margin-bottom: 100px;
}

.review h2{
  text-align: center;
  padding-bottom: 50px;
}

.review {
background-color: #ffffff;
padding: 50px 0;
display: flex;
justify-content: center;
font-family: 'Source Sans Pro', Arial, Helvetica, sans-serif;
}

.review-cards {
display: flex;
justify-content: space-between;
flex-wrap: wrap;
align-items: center;
text-align: center;
}

.review-card {
background-color: #fff;
box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.1);
border-radius: 10px;
padding: 30px;
margin-bottom: 40px;
width: 900px;
height: auto;
animation: slide-left 0.5s ease-in-out forwards;
animation: slide-right 0.5s ease-in-out backwards;
}

.review-card p {
font-size: 24px;
line-height: 28px;
margin-bottom: 20px;
}

.review-author {
font-size: 18px;
font-weight: bold;
margin-top: 20px;
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



@media (max-width: 768px) {
.review-card {
  width: 100%;
  height: auto;
  padding: 20px;
  text-align: center;
}

.buttons {
  position: relative;
  width: 100%;
  height: 60px;
  margin-top: auto;
}
}

</style>


