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
      <li class="scroll-top"><a href="#hero" use:scrollto={'#hero'}><i class="fa-sharp fa-solid fa-arrow-up"></i></a></li>
    </ul>
  </nav>
</header>


<style>
   .header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 999;
    transition: all 0.3s ease-in-out;
    font-family: 'Source Sans Pro', Arial, Helvetica, sans-serif;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
   }

  .logo {
    font-size: 26px;
    font-weight: bold;
    text-decoration: none;
    background: linear-gradient(to right,rgb(142, 36, 170), rgb(63, 81, 181), rgb(33, 149, 243));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-top: 1px;
  }

.nav-links {
    display: flex;
    margin: 0;
    padding: 0;
  }

  .nav-links li {
    list-style: none;
    margin: 20px;
  }

  .nav-links li:last-child {
    margin-right: 10;
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
    color: #7107ad;
    transform: translateY(-2px); 
  }

  .scroll-top {
  position: fixed;
  right: 16px;
  bottom: 16px;
  z-index: 2;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}


.scroll-top a {
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




@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .scroll-top {
    display: none;
  }

  .header {
    position: fixed;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 999;
    transition: all 0.3s ease-in-out;
    font-family: 'Source Sans Pro', Arial, Helvetica, sans-serif;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
   }

  .logo {
    font-size: 22px;
    font-weight: bold;
    text-decoration: none;
    color: #333;
    transition: all 0.3s ease-in-out;
    background: linear-gradient(to right,rgb(142, 36, 170), rgb(63, 81, 181), rgb(33, 149, 243));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-top: 1px;
    margin: auto;
  }

  

}
</style>


