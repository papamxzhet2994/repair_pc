<script>
  import { scrollto } from "svelte-scrollto";
</script>

<header>
  <a href="/" class="logo">Ремонт компьютеров</a>
  <nav>
    <ul class="show">
      <li><a href="#services" use:scrollto ={'#services'}>Услуги</a></li>
      <li><a href="#about" use:scrollto = {'#about'}>О нас</a></li>
      <li><a href="#testimonials" use:scrollto = {'#testimonials'}>Отзывы</a></li>
      <li><a href="#contact" use:scrollto = {'#contact'}>Контакты</a></li>
      <li><a href="#hero" use:scrollto = {'#hero'}><i class="fa-sharp fa-solid fa-arrow-up"></i></a></li>
    </ul>
  </nav>
</header>


<style>

header {
  background-color: #630077;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin-left: 8px;
  margin-right: 8px;
  z-index: 999;
  transition: all 0.3s ease-in-out;
  font-family: 'Source Sans Pro', Arial, Helvetica, sans-serif;
  
}


.logo {
  display: inline-block;
  margin-top: 10px;
  margin-left: 10px;
  font-size: 26px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
  transition: all 0.3s ease-in-out;
  background: linear-gradient(to left, #cdaa51, #e1dfe9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

nav {
  float: right;
  margin: 20px;
  
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

nav li {
  display: inline-block;
  margin-right: 50px;
}

nav li:last-child {
  margin-right: 0;
}

nav a {
  display: block;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

nav a:hover {
  color: #ff6500;
}
</style>
