<script>
  import { scrollto } from "svelte-scrollto";
  import Profile from "./Profile.svelte";
</script>

<header class="header">
  <a href="/" class="logo">PC Rescuer</a>
 
  <nav>
    <ul class="nav-links">
      <li><a href="#services" use:scrollto={'#services'}>Услуги</a></li>
      <li><a href="#about" use:scrollto={'#about'}>О нас</a></li>
      <li><a href="#masters" use:scrollto={'#masters'}>Мастера</a></li>
      <li><a href="#review" use:scrollto={'#review'}>Отзывы</a></li>
      <li><a href="#footer" use:scrollto={'#footer'}>Контакты</a></li>
    </ul>
  </nav>
  <li class="profile"><Profile /></li>
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
    margin: auto;
   }

  .logo {
    font-size: 26px;
    font-weight: bold;
    text-decoration: none;
    background: linear-gradient(to right,rgb(142, 36, 170), rgb(63, 81, 181), rgb(33, 149, 243));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-top: 1px;
    margin-left: 20px;
  }

.nav-links {
    display: flex;

  }

  .nav-links li {
    list-style: none;
    margin: 20px;
    display: block;
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


  .profile {
    display: flex;
    list-style: none;
    margin-bottom: 20px;
  }




@media (max-width: 768px) {
  .nav-links {
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


