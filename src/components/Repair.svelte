<script>
  import supabase from "../../supabase.js";
  import swal from 'sweetalert';
  export let isOpen = false;
  export let onClose;

  function closeModal() {
    isOpen = false;
    onClose();
  }


  let name = "";
  let email = "";
  let problem = "";
  let date = new Date();

  async function handleSubmit(event) {
    event.preventDefault();
    const {data, error} = await supabase.from("repair").insert([
      {
        name: name,
        email: email,
        problem: problem,
        date: date
      }
    ]);
    if (error) {
      console.log(error);
      closeModal();
    } else {
      console.log("Успешно отправлено");
      name = "";
      email = "";
      problem = "";
      closeModal();
      swal({
        title: "Успешно",
        text: "Мы рассмотрим вашу заявку в скором времени!",
        icon: "success",
});
    }
  }

</script>

{#if isOpen}
  <div class="modal" class:modal-open={isOpen}>
    <div class="modal-content">
      <slot>
        <h2>Заказать ремонт</h2>
        <form on:submit={handleSubmit}>
          <label>
            Имя:
            <input type="text" name="name" required bind:value={name}/>
          </label>
          <label>
            Email:
            <input type="email" name="email" required bind:value={email}/>
          </label>
          <label>
            Проблема:
            <textarea name="problem" required bind:value={problem}></textarea>
          </label>
          <button class="send" type="submit">Отправить</button>
        </form>
      </slot>
      <button class="close" on:click={closeModal}><i class="fa-sharp fa-solid fa-xmark"></i></button>
    </div>
  </div>
{/if}
  

<style>
.modal {
  color: black;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.modal-open {
  opacity: 1;
}

.modal-content {
    position: relative;
    background-color: #fff;
    padding: 40px;
    max-width: 600px;
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.modal-content h2 {
    font-size: 2rem;
    margin-bottom: 20px;
}

.modal-content label {
    display: block;
    text-align: left;
    margin-bottom: 20px;
    font-size: 1.2rem;
}
.modal-content textarea{
display: block; 
width: 100%;
height: 100px; 
padding: 8px; 
border: 1px solid #ccc;
border-radius: 4px; 
resize: vertical;
}

.modal-content input[type="text"],
.modal-content input[type="email"] {
display: block;
width: 100%;
padding: 10px;
border-radius: 5px;
border: 1px solid #ccc;
font-size: 1rem;
margin-top: 5px;
}

.modal-content button.send {
display: block;
width: 400px;
margin: 0 auto;
padding: 10px;
border-radius: 15px;
border: none;
background-color: #810791;
color: #fff;
font-size: 1.2rem;
margin-top: 40px;
justify-content: center;
cursor: pointer;
}

.modal-content button.send:hover{
    background-color: #61056d;
}

.modal-content button.close {
position: absolute;
top: 10px;
right: 10px;
background-color: transparent;
border: none;
cursor: pointer;
}

.modal-content button.close i {
font-size: 2rem;
color: #333;
}


@media (max-width: 768px) {
  .modal {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
  }
  .modal-content {
    padding: 20px;
    max-width: 100%;
    width: 100%;
    border-radius: 15;
  }

  .modal-content h2 {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  .modal-content label {
    display: block;
    text-align: left;
    margin-bottom: 20px;
    font-size: 1rem;
  }

  .modal-content textarea{
    display: block;
    width: 329px;
    height: 100px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
  }

  .modal-content input[type="text"],
  .modal-content input[type="email"] {
    display: block;
    width: 325px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 1rem;
    margin-top: 5px;
    padding-right: 10px;
  }

  .modal-content button.send {
    display: block;
    width: 100%;
    margin: 0 auto;
    padding: 10px;
    border-radius: 15px;
    border: none;
    background-color: #810791;
    color: #fff;
    font-size: 1.2rem;
    margin-top: 40px;
    justify-content: center;
  }
}
</style>
  