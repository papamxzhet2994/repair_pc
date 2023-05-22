<script>
  import supabase from "../../supabase";
  import swal from "sweetalert";

  let name = "";
  let phone = "";
  let service = "";

  async function handleSubmit(event) {
    event.preventDefault();
    const { data, error } = await supabase.from("servicesOrder").insert([
      {
        name: name,
        phone: phone,
        service: service
      }
    ]);
    if (error) {
      console.log(error);
    } else {
      console.log("Успешно отправлено");
      name = "";
      phone = "";
      service = "";
      swal({
        title: "Успешно",
        text: "Мы рассмотрим вашу заявку в скором времени!",
        icon: "success",
      });
    }
  }

</script>


<section id="contact">
  <div class="call-request">
    <h1>Оставьте свою заявку, мы свяжемся с вами в ближайшее время</h1>
    <h2>Введите номер телефона</h2>
    <form on:submit={handleSubmit}>
      <label for="name">*Имя:</label>
      <input type="text" id="name" name="name" required bind:value={name}/>
      <label for="phone">*Телефон:</label>
      <input type="tel" id="phone" name="phone" required bind:value={phone} maxlength="12" />
      <label for="service">Что вам требуется:</label>
      <select id="service" name="service" bind:value={service} required>
        <option value="" selected disabled>Выберите услугу</option>
        <option value="diagnostic">Диагностика ПК</option>
        <option value="repair">Ремонт</option>
        <option value="setup">Настройка ПО</option>
        <option value="remoteSupport">Удаленная поддержка</option>
        <option value="assemblingPC">Сборка компьютера</option>
        <option value="learning">Обучение</option>
      </select>
      <button class="btn" type="submit">Отправить</button>
    </form>
  </div>
</section>

<style>
  .call-request {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-family: 'Source Sans Pro', sans-serif;
    text-align: center;
  }

  h2 {
    font-size: 20px;
    margin-bottom: 1rem;
  }

  label {
    display: block;
    margin-bottom: 10px;
  }

  input[type="text"],
  input[type="tel"] {
    padding: 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid #ccc;
    margin-bottom: 1rem;
    width: 468px;
    color: #333;
  }

  input[type="text"]:hover,
  input[type="tel"]:hover,
  input[type="text"]:focus,
  input[type="tel"]:focus {
    background-color: rgba(221, 96, 247, 0.274);
  }

  .btn {
    background-color: #7e2291;
    color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    margin-bottom: 30px;
    font-size: 1.2em;
    padding: 10px 20px;
  }

  .btn:hover {
    background-color: #630077;
  }

  .btn:active {
    transform: scale(0.95);
  }

  label {
    display: flex;
    align-items: center;
  }

  select {
    display: block;
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    font-weight: normal;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin-bottom: 20px;
  }

  select:focus {
    border-color: #80bdff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  @media screen and (max-width: 768px) {
    .call-request {
      flex-basis: 100%;
    }

    input[type="text"],
    input[type="tel"] {
      width: 341px;
    }
  }
</style>
