<script>
  import { scrollto } from "svelte-scrollto";
</script>

<header class="header">
  <a href="/" class="logo">Ремонт компьютеров</a>
  <nav>
    <ul class="nav-links">
      <li><a href="#services" use:scrollto={'#services'}>Услуги</a></li>
      <li><a href="#about" use:scrollto={'#about'}>О нас</a></li>
      <li><a href="#masters" use:scrollto={'#masters'}>Мастера</a></li>
      <li><a href="#testimonials" use:scrollto={'#testimonials'}>Отзывы</a></li>
      <li><a href="#contact" use:scrollto={'#contact'}>Контакты</a></li>
      <li><a href="#hero" use:scrollto={'#hero'}><i class="fa-sharp fa-solid fa-arrow-up"></i></a></li>
    </ul>
  </nav>
</header>

<style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    z-index: 999;
    transition: all 0.3s ease-in-out;
    font-family: 'Source Sans Pro', Arial, Helvetica, sans-serif;
  }

  .logo {
    font-size: 26px;
    font-weight: bold;
    text-decoration: none;
    color: #333;
    transition: all 0.3s ease-in-out;
    background: linear-gradient(to right,rgb(142, 36, 170), rgb(63, 81, 181), rgb(33, 149, 243));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-left: 10px;
    margin-top: 1px;
  }

  .nav-links {
    display: flex;
    margin: 0;
    padding: 0;
  }

  .nav-links li {
    list-style: none;
    margin-right: 50px;
  }

  .nav-links li:last-child {
    margin-right: 0;
  }

  .nav-links a {
    display: block;
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    color: #000000;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }

  .nav-links a:hover {
    color: #ff6500;
  }
</style>
