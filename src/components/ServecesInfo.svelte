<script>
  import { scrollto } from "svelte-scrollto";
    export let title = "";
    export let content = "";
    export let isOpen = false;
    
function openModal() {
  isOpen = true;
  document.body.style.overflow = 'hidden';
}

    
function closeModal() {
  isOpen = false;
  document.body.style.overflow = 'auto';
}

  function handleDialogClick(event) {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  }
  </script>
  
  <button class="btn" on:click={openModal}>Узнать больше</button>

  {#if isOpen}
    <dialog class="modal" on:click={handleDialogClick} on:keydown={closeModal}>
      <div class="modal-content">
        <h2>{title}</h2>
        <p>{content}</p>
        <div class="modal-footer">
          <a href="./#contact" use:scrollto={'#contact'} on:click={closeModal}>Связаться с нами</a>
        </div>
      </div>
    </dialog>
  {/if}
  <style>

dialog {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: rgba(17, 17, 17, 0.5);
  border: none;
}

.modal-content {
  height: 268px;
  background-color: #f5f5f5;
  margin: auto;
  padding: 20px;
  max-width: 600px;
  border-radius: 30px;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: auto;
  padding-top: 20px;
  justify-content: space-between;
}

.close {
  color: #aaa;
  float: right;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  font-size: 30px;
  margin-left: auto;
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
  display: inline-block;
  text-align: center;
  margin-top: auto;
}

@media (max-width: 768px) {
  .modal{
    justify-content: center;
    align-items: center;
    position: fixed;
  }

  .modal-content{
    height: 270px;
    background-color: #f5f5f5;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    max-width: 600px;
    border-radius: 30px;
    color: black;
    width: 268px;
    overflow: auto;

  }

  .btn {
    opacity: 1;
  }

}
  </style>
  