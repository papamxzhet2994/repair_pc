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
    if (event.target === event.currentTarget && isOpen) {
      closeModal();
    }
  }
</script>

<button class="btn" on:click={openModal}>Узнать больше</button>

{#if isOpen}
  <dialog class="modal" on:click={handleDialogClick} on:keydown={closeModal}>
    <div class="modal-content">
      <i class="fas fa-times" on:click={closeModal} />
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

i {
  cursor: pointer;
  font-size: 28px;
  margin-left: auto;
}

i:hover {
  color: #7e2291;
}

.modal-content {
  height: auto;
  background-color: #f5f5f5;
  padding: 20px;
  max-width: 600px;
  border-radius: 15px;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  border: none;
  margin: auto;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: auto;
  padding-top: 20px;
  justify-content: space-between;
}

.btn {
  background-color: #7e2291;
  border: none;
  border-radius: 15px;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  padding: 10px 20px;
  transition: background-color 0.3s ease;
  margin-top: auto;
}

.btn:hover {
  background-color: #630077;
}

.btn:active {
  transform: scale(0.98);
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
  border-radius: 15px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  transition: background-color 0.3s ease;
  margin-top: auto;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  margin-top: auto;
}

a:active {
  transform: scale(0.98);
}

@media (max-width: 500px) {

  .modal-content{
    height: auto;
    background-color: #f5f5f5;
    margin-left: 35px;
    padding: 20px;
    border: 1px solid #888;
    max-width: 600px;
    border-radius: 15px;
    color: black;
    width: 268px;
    overflow: auto;

  }

  .btn {
    opacity: 1;
    font-size: 14px;
  }

  dialog {
    width: 100%;
    height: 100%;
    overflow: auto;
    background: rgba(17, 17, 17, 0.5);
    border: none;
    border-radius: none;
  }

}
  </style>
  