<script>
  import { scrollto } from "svelte-scrollto";
</script>

<footer id="footer">
    <div class="contact-container">
      <div class="contact-details">
      <h2>Контакты</h2>
      <p>Вы можете связаться с нами любым удобным способом или заказать звонок</p>
      <p>г. Санкт-Петербург, ул. Солевая 69, Россия</p>
      <p>Телефон: +7 (123) 456-7890</p>
      <p>Email: pcrescuer@mail.ru</p>
    </div>
      <ul class="scroll">
        <li><a href="#hero" use:scrollto={'#hero'}><i class="fa-sharp fa-solid fa-arrow-up"></i></a></li>
        <li><a href="https://vk.com/papamxzhet"><i class="fab fa-vk"></i></a></li>
        <li><a href="https://t.me/papamxzhet"><i class="fab fa-telegram"></i></a></li>
      </ul>
    </div>  
</footer>
<div class="rule">
  <p>© 2023 PC Rescuer. Все права защищены.</p>
</div>

<style>
#footer {
  background-color: #f2f2f2;
  padding: 20px;
}

.contact-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.contact-details h2 {
  text-align: start;
  font-size: 24px;
}

.contact-details p {
  font-size: 18px;
  line-height: normal;
}

.scroll li {
  margin-left: 10px;
  margin-bottom: 10px;
  list-style: none;
  cursor: pointer;
  transition: 0.3s;
}

.scroll li a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #810791;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}

.scroll li a:hover {
  background-color: #61056d;
}

.scroll li a i {
  color: #ffffff;
  font-size: 16px;
}


.rule {
  text-align: center;
  margin-top: 20px;
}

.rule p {
  font-size: 14px;
  color: #666;
}

@media (max-width: 768px) {
  .contact-container {
    flex-direction: column;
    text-align: center;
  }

  .rule {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .scroll {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-right: 50px;
  }
}
</style>
