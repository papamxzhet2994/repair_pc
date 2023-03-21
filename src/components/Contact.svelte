<section id="contact">
<div class="contact-container">
    <div class="contact-details">
      <h2>Контакты</h2>
      <p>Вы можете связаться с нами любым удобным способом или заказать звонок</p>
      <p>г. Санкт-Петербург, ул. Садовая 6, Россия</p>
      <p>Телефон: +7 (123) 456-7890</p>
      <p>Email: example@example.com</p>
        <div class="social">
            <ul>
            <li><a href="https://vk.com/papamxzhet"><i class="fab fa-vk"></i></a></li>
            <li><a href="https://github.com/papamxzhet2994"><i class="fab fa-telegram"></i></a></li>
            </ul>
        </div>
    </div>
    <div class="call-request">
      <h2>Заказать звонок</h2>
      <form>
        <label for="name">*Имя:</label>
        <input type="text" id="name" name="name" required>
        <label for="phone">*Телефон:</label>
        <input type="tel" id="phone" name="phone" required>
        <div class="consent">
          <input type="checkbox" id="consent" name="consent" required>
          <label for="consent" class="checkbox-wrapper">Я даю согласие на обработку моих персональных данных</label>
        </div>
        <button type="submit">Отправить</button>
      </form>
    </div>
  </div>
</section>

<style>
ul li {
    list-style-type: none;
    display: inline;
    margin: 20px;
    
}
.contact-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-family: 'Source Sans Pro', Arial, Helvetica, sans-serif;
  background-color: #f5f5f5;
}

.contact-details {
  flex-basis: 45%;
  margin-left: 170px;
}

.call-request {
  flex-basis: 45%;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input[type="text"],
input[type="tel"] {
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
  width: 469px;
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
</style>