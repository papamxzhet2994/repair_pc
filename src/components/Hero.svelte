<script>
  import Repair from './Repair.svelte';

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
      <Repair bind:isOpen={isOpen} onClose={closeModal}/>
    </div>
</section>

<style>
.hero {
  height: 770px;
  background: linear-gradient(to left, rgba(118, 0, 196, 0.459), rgba(63, 81, 181, 0.863), rgb(33, 149, 243)), url('https://phonoteka.org/uploads/posts/2022-02/1645277293_39-phonoteka-org-p-remont-kompyuterov-fon-42.jpg');
  background-position: left;
  background-size: cover;
  display: flex;
  justify-content: flex;
  align-items: center;
  font-family: 'Source Sans Pro', Arial, Helvetica, sans-serif;
  
}


.hero h1 {
  font-size: 4rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-weight: 700;
  line-height: 1.2;
  font-family: 'Source Sans Pro', Arial, Helvetica, sans-serif;
  color: #fff;
}

.hero-inner{
  color: #fff;
  margin-left: 50px;
}


.hero .btn {
  font-size: 1.25rem;
  padding: 1rem 2rem;
  background-color: #7e2291;
  color: #fff;
  border: 2px solid #7e2291;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-family: 'Source Sans Pro', Arial, Helvetica, sans-serif;
}

.hero .btn:hover {
  background-color: #630077;
  border-color: #630077;
  transform: translateY(-2px);
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
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
    border-radius: 10px;

  }

  .hero-inner {
    margin:auto;
    color: #ffffff;
    text-align: center;
  }
}
</style>


