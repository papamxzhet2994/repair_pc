<script>
  import Modal from './Modal.svelte';

  let isOpen = false;

  function openModal() {
    isOpen = true;
  }

  function closeModal() {
    isOpen = false;
  }
</script>

<section class="hero">
    <div class="hero-inner">
      <h1>Ремонт ПК</h1>
      <p>Качественный ремонт компьютеров и ноутбуков по доступным ценам</p>
      <button class="btn" on:click={openModal}>Заказать ремонт</button>
      <canvas class="orb-canvas"></canvas>
      <Modal bind:isOpen={isOpen} onClose={closeModal}/>
    </div>

</section>


<style>

.hero {
  background: linear-gradient(135deg, #c850c0, #4158d0);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;
}

/* Анимация градиента */
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Стили для главного заголовка */
h1 {
  font-size: 3rem;
  color: #fff;
  text-shadow: 1px 1px #000;
}

/* Стили для описания */
p {
  font-size: 1.5rem;
  color: #fff;
  text-shadow: 1px 1px #000;
  margin-bottom: 2rem;
}

/* Стили для кнопки заказа ремонта */
.btn {
  padding: 1rem 2rem;
  background-color: #fff;
  color: #000;
  border: none;
  border-radius: 3px;
  font-size: 1.2rem;
  cursor: pointer;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn:active {
  transform: translateY(1px);
}

</style>