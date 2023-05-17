<script>
  export let onClose;
  export let closeModal ;
  import supabase from "../../supabase.js";
  import swal from "sweetalert";

  let name = '';
  let review = '';

  async function handleSubmit(event) {
    event.preventDefault();


    const {data: {user}, error} = await supabase.auth.getUser();

    if (error) {
      swal({
        title: "Ошибка",
        text: error.message,
        icon: "error"
      })
      handleCancel();
    }

    console.log("Текущий пользователь:", user);

    if (!user) {
      swal("Ошибка", "Только зарегистрированные пользователи могут оставлять отзывы", "error");
      return;
    }
    if (name.trim() === '' || review.trim() === '') {
      swal({
        title: "Ошибка",
        text: "Пожайлуста, заполните все поля",
        icon: "error"
      })
      return;
    }
  addReview();

    async function addReview() {

      const {data, error} = await supabase.from("review").insert([
        {
          name: name,
          review: review
        }
      ]);

      if (error) {
        console.log("Ошибка при отправке отзыва:", error);
        handleCancel();
      } else {
        console.log("Отзыв успешно отправлен:", data);
        name = "";
        review = "";
        swal("Успешно", "Спасибо за ваш отзыв!", "success");
        handleCancel();
      }
    }
  }
  function handleCancel() {
    onClose();
  }

</script>


  <div class="reviews-container">
  <div class="modal" class:modal-open={true}>
    <div class="modal-content">
      <h2>Добавить отзыв</h2>
      <form on:submit={handleSubmit}>
        <label>
          Имя:
          <input type="text" bind:value={name} />
        </label>
        <label>
          Ваш отзыв:
          <textarea bind:value={review}></textarea>
        </label>
        <button class="send" type="submit">Отправить</button>
        <button class="close" on:click={handleCancel}><i class="fa-sharp fa-solid fa-xmark"></i></button>
      </form>
    </div>
  </div>
</div>

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
  overflow-y: auto;
  overflow-x: hidden;
  transition: 0.3s;
}

.modal-open {
  overflow-y: auto;
  overflow-x: hidden;
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
    text-align: start;
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

.modal-content input[type="text"]{
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

textarea {
    font-size: 18px;
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
    border-radius: 15px;
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

  .modal-content input[type="text"] {
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