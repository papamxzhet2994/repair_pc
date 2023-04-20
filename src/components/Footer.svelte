<script>
  import { scrollto } from "svelte-scrollto";
</script>

<footer>
    <div class="contact-container">
      <div class="contact-details">
      <h2>Контакты</h2>
      <p>Вы можете связаться с нами любым удобным способом или заказать звонок</p>
      <p>г. Санкт-Петербург, ул. Садовая 6, Россия</p>
      <p>Телефон: +7 (123) 456-7890</p>
      <p>Email: example@example.com</p>
    </div>
      <ul class="scroll">
        <li><a href="#hero" use:scrollto={'#hero'}><i class="fa-sharp fa-solid fa-arrow-up"></i></a></li>
        <li><a href="https://vk.com/papamxzhet"><i class="fab fa-vk"></i></a></li>
        <li><a href="https://github.com/papamxzhet2994"><i class="fab fa-github"></i></a></li>
      </ul>
    </div>
  <div class="rules">
      <p>© 2023 My Website. All rights reserved.</p>
  </div>
    
</footer>

<style>

  .rules {
    color: #fff;
    text-align: center;
  }

  footer {
    background-color: #55136e;
    padding: 10px;
  }


  .scroll a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: #333;
    color: #fff;
    border-radius: 50%;
    text-decoration: none;
    font-size: 24px;
    transition: all 0.3s ease-in-out;
  }

  ul li {
    list-style-type: none;
    display: inline;
    margin: 20px;
}
.contact-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  font-family: 'Source Sans Pro', Arial, Helvetica, sans-serif;
  background-color: #f5f5f5;
  padding: 20px;
  margin-bottom: 20px;
  
}


.contact-details {  
  justify-content: flex-start;
  margin-left: 20px;
  margin-bottom: 20px;
  font-size: 16px;
  color: #333;
  line-height: 1;
}

.scroll{
  display: table-column;
  justify-content: flex-end;
  align-items: flex-end;
  margin-left: auto;

}

.scroll a:hover { 
  color: #9700bd;
}

@media screen and (max-width: 768px) {
  .contact-container {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
  .contact-details {
    margin-left: 0;
    margin-bottom: 2rem;
  }

}
</style>
