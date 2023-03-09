<footer class="footer">
    <div class="container">
        <div class="footer-nav">
          <ul>
            <li><a href="#services">Услуги</a></li>
            <li><a href="#about">О нас</a></li>
            <li><a href="#testimonials">Отзывы</a></li>
            <li><a href="#contact">Контакты</a></li>
          </ul>
        </div>
        <div class="footer-social">

        </div>
        <div class="contact-info">
        </div>
      </div>
  </footer>

<style>
 .footer {
  background-color: #222;
  color: #fff;
  padding: 80px 0;
  font-family: 'Source Sans Pro', Arial, Helvetica, sans-serif;
}



.footer-nav ul{
  justify-content: center;
  display:flex;
  margin: 0;
  padding: 0;
  list-style: none;
}

.footer-nav ul li,
.footer-social ul li {
  margin-right: 30px;
}

.footer-nav ul li:last-child,
.footer-social ul li:last-child {
  margin-right: 0;
}

.footer-nav a{
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s ease;
}

.footer-nav a:hover{
  color: #bbb;
}


@media only screen and (max-width: 768px) {
.footer-nav ul li,
.footer-social ul li {
margin-right: 20px;
}

.footer-nav ul li:last-child,
.footer-social ul li:last-child {
margin-right: 0;
}

.footer {
padding: 50px 0;
}
}

@media only screen and (max-width: 576px) {
.footer-nav ul li,
.footer-social ul li {
margin-right: 10px;
}

.footer {
padding: 30px 0;
}
}
</style>