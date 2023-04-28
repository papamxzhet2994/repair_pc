<script>
  import { scrollto } from "svelte-scrollto";
    export let title = "";
    export let content = "";
    export let isOpen = false;
    export let showModal;
    
    function closeModal() {
      isOpen = false;
    }
    
    function openModal() {
      isOpen = true;
      showModal();
    }
  </script>
  
  <button class="btn" on:click={openModal}>Узнать больше</button>
  
  {#if isOpen}
  <div class="modal" on:keydown={closeModal}>
    <div class="modal-content">
      <span class="close" on:click={closeModal} on:keydown={(e) => {if (e.key === "Enter") closeModal()}}>&times;</span>
      <h2>{title}</h2>
      <p>{content}</p>
      <a href="./#contact" use:scrollto={'#contact'} on:click={closeModal}>Связаться с нами</a>
    </div>
  </div>
  
  {/if}
  
  <style>
.modal {
  display: block;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
}

.modal-content {
  height: 268px;
  background-color: #f5f5f5;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  max-width: 600px;
  border-radius: 30px;
  color: black;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.btn {
  background-color: #7e2291;
  border: none;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  padding: 15px 30px;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
  margin-top: auto;
}
    
.btn:hover {
  background-color: #630077;
}
    
 .btn {
  opacity: 1;
  transform: translateY(0);
}
  
.btn:focus {
  outline: none;
}

.btn {
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.btn:hover {
  background-color: #7e2291;
  opacity: 1;
}

.btn:focus {
  outline: none;
}

a {
  background-color: #7e2291;
  border: none;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  padding: 15px 30px;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
  margin-top: auto;
  text-decoration: none;
}
  </style>
  