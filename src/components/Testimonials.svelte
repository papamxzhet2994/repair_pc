<script>
  import AddTestimonials from "./AddTestimonials.svelte";

  let isOpen = false;

  function openModal() {
  isOpen = true;
  }

  function closeModal() {
  isOpen = false;
  }

  let current = 0;

  const testimonials = [
    {
      text: "Быстро и качественно починили мой компьютер. Большое спасибо!",
      author: "Алексей Петров"
    },
    {
      text: "Я долго искал сервис, который смог бы починить мой ноутбук. Ребята справились на ура!",
      author: "Ирина Смирнова"
    },
    {
      text: "Я уже несколько раз обращался в этот сервис по ремонту компьютеров и всегда оставался доволен.",
      author: "Владимир Иванов"
    }
  ];

  function nextTestimonial() {
    current = (current + 1) % testimonials.length;
  }

  function prevTestimonial() {
    current = (current - 1 + testimonials.length) % testimonials.length;
  }


</script>

<section id="testimonials" class="testimonials">
  <div class="container">
    <h2>Отзывы наших клиентов</h2>
    <div class="testimonial-cards">
      {#each testimonials as testimonial, i}
        {#if i === current}
          <div class="testimonial-card" style="display: block;">
            <p>{testimonial.text}</p>
            <div class="testimonial-author">{testimonial.author}</div>
          </div>
        {:else}
          <div class="testimonial-card" style="display: none;"></div>
        {/if}
      {/each}
      <div class="buttons-container">
        <div class="buttons" style="text-align: center;">
          <button class="slide-left" on:click={prevTestimonial} disabled={current === 0}>Назад</button>
          <button class="btn" on:click={openModal}>Добавить отзыв</button>
          <AddTestimonials bind:isOpen={isOpen} onClose={closeModal}/>
          <button class="slide-right" on:click={nextTestimonial} disabled={current === testimonials.length - 1}>Вперед</button>
        </div>
      </div>
    </div>
  </div>
</section>

ч

<style>
  .testimonials {
    margin-top: 100px;
    margin-bottom: 100px;
  }

  .testimonials h2{
    text-align: center;
    padding-bottom: 50px;
  }

 .testimonials {
  background-color: #ffffff;
  padding: 50px 0;
  display: flex;
  justify-content: center;
  font-family: 'Source Sans Pro', Arial, Helvetica, sans-serif;
}

.testimonial-cards {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
}

.testimonial-card {
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

.testimonial-card p {
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 20px;
}

.testimonial-author {
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
  .testimonial-card {
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


