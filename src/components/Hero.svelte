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
      <Modal bind:isOpen={isOpen} onClose={closeModal}/>
    </div>
</section>

<style>
.hero{
  height: 750px;
  background: linear-gradient(/*135deg*/to bottom,rgb(142, 36, 170), rgb(63, 81, 181), rgb(33, 149, 243));
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Source Sans Pro', Arial, Helvetica, sans-serif;
  /* animation: gradient 5s ease infinite; */
}

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
  
  .hero-inner {
    text-align: center;
    color: #ffffff;
}

.hero h1 {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 2rem;
}


.hero .btn {
  font-size: 1.25rem;
  padding: 1rem 2rem;
  background-color: #7e2291;
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.hero .btn:hover {
  background-color: #630077;
  transform: translateY(-2px);
}


</style>


