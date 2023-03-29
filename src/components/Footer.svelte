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
      <div class="social">
            <ul>
            <li><a href="https://vk.com/papamxzhet"><i class="fab fa-vk"></i></a></li>
            <li><a href="https://github.com/papamxzhet2994"><i class="fab fa-github"></i></a></li>
            </ul>
        </div>
    </div>
  </div>
  <div class="container">
    <ul class="scroll">
      <li><a href="#hero" use:scrollto={'#hero'}><i class="fa-sharp fa-solid fa-arrow-up"></i></a></li>
    </ul>
  </div>
    <p>© 2023 My Website. All rights reserved.</p>
    
</footer>

<style>
  p{
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: #333;
  

  }

  footer {
    background-color: #000000;
    padding: 10px;
  }

  .container {
    max-width: 100%;
    margin: 0 auto;
  }

  .scroll {
    display: flex;
    justify-content: center;
    align-items: center;
    right: 16px;
    bottom: 16px;
    z-index: 2;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    list-style: none;
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
  font-size: 20px;
  font-weight: bold;
  color: #333;
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
  .social {
    align-items: start;
  }

  .social ul {
    justify-content: center;
    margin-bottom: 2rem;
  }

  .social ul li {
    margin-right: 1rem;
  margin-bottom: 1rem;
  }
}
</style>
