<script>
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
      <div class="buttons" style="text-align: center;">
        <button on:click={prevTestimonial} disabled={current === 0}>Назад</button>
        <button on:click={nextTestimonial} disabled={current === testimonials.length - 1}>Вперед</button>
      </div>
    </div>
  </div>
</section>

<style>
  .testimonials {
    background-color: #f5f5f5;
    padding: 60px 0;
    display: flex;
    justify-content: center;
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
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 30px;
    width: 100%;
    margin-bottom: 40px;
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

  .buttons {
    margin: 0 auto;
    display: block;
    text-align: center;
    margin-top: 20px;
  }

  .buttons button {
    display: inline-block;
    background-color: #7e2291;
    color: #fff;
    padding: 10px 20px;
    border-radius: 30px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    margin: 0 10px;
  }

  .buttons button:hover {
    background-color: #630077;
  }
  h2{
    margin-left: 0;
  }
</style>


