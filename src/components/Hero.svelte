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
  background: linear-gradient(to bottom ,rgb(153, 0, 196), rgb(63, 81, 181), rgb(33, 149, 243));
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Source Sans Pro', Arial, Helvetica, sans-serif;
}
  
.hero-inner {
  text-align: center;
  color: #ffffff;
}

.hero h1 {
  font-size: 4rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-weight: 700;
  line-height: 1.2;
  font-family: 'Source Sans Pro', Arial, Helvetica, sans-serif;
}

.hero p {
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 2rem;
  font-weight: 300;
  line-height: 1.2;
  font-family: 'Source Sans Pro', Arial, Helvetica, sans-serif;
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
  font-family: 'Source Sans Pro', Arial, Helvetica, sans-serif;
}

.hero .btn:hover {
  background-color: #630077;
  transform: translateY(-2px);
  box-shadow: 0 5px 5px rgba(0,0,0,0.2);
}



@media (max-width: 768px) {
  .hero {
    height: 500px;
    font-size: 1.5rem;
  }

  .hero h1 {
    font-size: 3rem;
  }

  .hero p {
    font-size: 1rem;
  }

  .hero .btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }

  .hero-inner {
    text-align: center;
    color: #ffffff;
  }
}
</style>


