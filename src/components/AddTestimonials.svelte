<script>
     export let isOpen = false;
    export let onClose;
  
    function closeModal() {
      isOpen = false;
      onClose();
    }
</script>

{#if isOpen}
  <div class="modal" class:modal-open={isOpen}>
      <div class="modal-content">
        <slot>
            <h2>Добавить отзыв</h2>
            <form>
              <label>
                Имя:
                <input type="text" name="name" />
              </label>
              <label>
                Ваш отзыв:
                <textarea name="problem"></textarea>
              </label>
              <button class="send">Отправить</button>
            </form>
        </slot>
        <button class="close" on:click={closeModal}><i class="fa-sharp fa-solid fa-xmark"></i></button>
      </div>
      </div>
  {/if}


  <style>
.modal {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.6);
}

.modal-open {
  overflow-y: auto;
}

.modal-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

input[type="text"],
textarea {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  font-size: 16px;
  margin-top: 5px;
  margin-bottom: 10px;
}

.send {
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
}

.send:hover {
  background-color: #3e8e41;
}
    </style>