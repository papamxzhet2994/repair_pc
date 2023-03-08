<header>
    <a href="/" class="logo">Ремонт компьютеров</a>
    <nav>
      <ul class="show">
        <li><a href="#services">Услуги</a></li>
        <li><a href="#about">О нас</a></li>
        <li><a href="#testimonials">Отзывы</a></li>
        <li><a href="#contact">Контакты</a></li>
      </ul>
    </nav>
  </header>

<style>

header {
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  transition: all 0.3s ease-in-out;
}


.logo {
  display: inline-block;
  margin: 20px;
  font-size: 26px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
  transition: all 0.3s ease-in-out;
}

.logo:hover {
  color: #ff6500;
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
  margin-right: 20px;
}

nav li:last-child {
  margin-right: 0;
}

nav a {
  display: block;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  color: #333;
  transition: all 0.3s ease-in-out;
}

nav a:hover {
  color: #ff6500;
}


@media (max-width: 768px) {
  nav {
    display: block;
    float: none;
    margin: 0;
  }

  nav ul {
    display: none;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
    opacity: 0;
    transform: translateY(-10px);
  }

  nav ul.show {
    display: block;
    opacity: 1;
    transform: translateY(0);
  }

  nav li {
    display: block;
    margin: 0;
    text-align: center;
  }

  nav a {
    display: inline-block;
    font-size: 18px;
    color: #333;
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
  }

  nav a:hover {
    color: #fff;
    background-color: #ff6500;
  }


}


</style>