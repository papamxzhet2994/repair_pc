<section id="contact" class="contact">
    <div class="container">
      <h2>Контакты</h2>
      <div class="contact-inner">
        <div class="contact-form">
          <h3>Напишите нам</h3>
          <form>
            <div class="form-group">
              <label for="name">Ваше имя</label>
              <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group">
                <label for="email">Ваш email</label>
                <input type="email" id="email" name="email" required>
              </div>
              <div class="form-group">
                <label for="message">Ваше сообщение</label>
                <textarea id="message" name="message" rows="6" required></textarea>
              </div>
              <button class="btn" type="submit">Отправить</button>
            </form>
          </div>
          <div class="contact-info">
            <h3>Контактная информация</h3>
            <ul>
              <li><i class="fa-sharp fa-solid fa-location-dot"></i>Адрес: ул. Пушкина, д.10, офис 5</li>
              <li><i class="fa-solid fa-phone"></i>Телефон: +7 (999) 123-45-67</li>
              <li><i class="fa-solid fa-envelope"></i>Email: info@pc-repair.com</li>
            </ul>
          </div>
        </div>
    </div>
</section>

<style>

.contact {
  background-color: #f5f5f5;
  padding: 60px 0;
}

.contact h2 {
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 40px;
}

.contact-inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.contact-form {
  width: 60%;
  margin-right: 40px;
}

.contact-form h3 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
}

.contact-form form {
  display: flex;
  flex-direction: column;
}

.contact-form label {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.contact-form input,
.contact-form textarea {
  font-size: 16px;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: none;
  background-color: #fff;
}

.contact-form textarea {
  resize: none;
}

.contact-form button {
  font-size: 18px;
  font-weight: bold;
  padding: 15px 30px;
  border-radius: 5px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.contact-form button:hover {
  background-color: #0062cc;
}

.contact-info {
  width: 35%;
}

.contact-info h3 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
}

.contact-info ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.contact-info li {
  font-size: 18px;
  margin-bottom: 10px;
}

.contact-info i {
  margin-right: 10px;
  font-size: 20px;
  color: #007bff;
}
</style>