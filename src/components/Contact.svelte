<section id="contact">
    <div class="call-request">
      <h1>Не нашли свою проблему в списке?</h1>
      <h2>Заказать звонок</h2>
      <form>
        <label for="name">*Имя:</label>
        <input type="text" id="name" name="name" required>
        <label for="phone">*Телефон:</label>
        <input type="tel" id="phone" name="phone" required>
        <div class="consent">
          <input type="checkbox" id="consent" name="consent" required class="checkbox1">
          <label for="consent" class="checkbox-wrapper">Я даю согласие на обработку моих <a href="https://youtu.be/Qw36OnngxB0"> персональных данных</a></label>
        </div>
        <button type="submit">Отправить</button>
      </form>
    </div>
</section>

<style>

.call-request {
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-family: 'Source Sans Pro', sans-serif;
}

h2 {
  font-size: 20px;
  margin-bottom: 1rem;
}

label {
  display: block;
}

input[type="text"],
input[type="tel"] {
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
  width: 468px;
}



input[type="text"]:hover,
input[type="tel"]:hover,
input[type="text"]:focus,
input[type="tel"]:focus {
  background-color: rgba(221, 96, 247, 0.274);
}

button[type="submit"] {
  background-color: #7e2291;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  margin-bottom: 30px;
  
}

button[type="submit"]:hover {
  background-color: #630077;
}

.consent {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.consent input[type="checkbox"] {
  margin-right: 0.5rem;
}

.consent label {
  margin-left: 5px;
}

input[type="checkbox"] {
  appearance: none;
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 3px;
  position: relative;
  margin-right: 0.5rem;
}

input[type="checkbox"]::before {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  width: 10px;
  height: 10px;
  border-radius: 2px;
  background-color: #7e2291;
  transition: transform 0.3s ease-in-out;
}

input[type="checkbox"]:checked::before {
  transform: translate(-50%, -50%) scale(1);
  
}

label {
  display: flex;
  align-items: center;
  
}

a {
  margin-left: 5px;
}

@media screen and (max-width: 768px) {

  .call-request {
    flex-basis: 100%;

  }

  input[type="text"],
  input[type="tel"] {
    width: 341px;
  }

  .checkbox-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
  }
}
</style>