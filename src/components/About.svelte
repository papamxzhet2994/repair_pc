<section id="about" class="about">
  <div class="container">
      <h2>Пару слов о нас</h2>
      <div class="about-inner">
        <div class="about-text">
          <p>Мы команда профессионалов, которая занимается ремонтом компьютеров и ноутбуков уже более 10 лет. Мы предоставляем услуги на высоком уровне, используя только качественные комплектующие и инструменты.</p>
          <p>Наши мастера обладают большим опытом в области ремонта компьютеров и ноутбуков. Мы стремимся предоставить нашим клиентам быстрое и качественное обслуживание по доступным ценам.</p>
        </div>
        <div class="about-image">
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fzewerok.ru%2Fwp-content%2Fuploads%2F2021%2F06%2Fxy_5Hv4rTAU.jpg&f=1&nofb=1&ipt=b346e93a56924e1f730b3b205d21b7e7254f3260ad006c9a05bdedd7ff532dae&ipo=images" alt="О нас">
        </div>
      </div>
    </div>
  </section>

<style>

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
.about {
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  text-align: center;
  font-family: 'Source Sans Pro', Arial, Helvetica, sans-serif;
}
.about h2 {
  font-size: 26px;
  margin-bottom: 60px;
  color: #000000;
  text-align: center;
}
.about p {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 30px;
  color: #000000;
}
.about-inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.about-text {
  flex-basis: 100%;
  text-align: left;
}
.about-text p:first-child {
  margin-top: 0;
}
.about-image {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 450px;
  position: relative;
  overflow: hidden;
  flex-basis: 100%;
}
.about-image img {
  max-width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.1);
  transition: all 0.3s ease-in-out;
}
.about-image img:hover {
  transform: translate(-50%, -50%) scale(1.2);
}
.about-inner {
  flex-wrap: nowrap;
}
.about-text {
  flex-basis: 50%;
  margin-right: 50px;
}
.about-image {
  flex-basis: 45%;
}
.about-image img {
  position: relative;
  top: auto;
  left: auto;
  transform: none;
  transition: all 0.5s ease-in-out;
}
.about-image img:hover {
  transform: scale(1.05);
}


@media (max-width: 768px) {
  .about {
    padding: 50px 0;
  }

  .about h2 {
    font-size: 22px;
    margin-bottom: 30px;
  }

  .about p {
    font-size: 16px;
    margin-bottom: 20px;
  }

  .about-inner {
    flex-direction: column;
  }

  .about-text {
    margin-right: 0;
    text-align: center;
  }

  .about-image {
    height: 300px;
  }


  
}
</style>
