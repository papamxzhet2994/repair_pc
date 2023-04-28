<script>
  import ServecesInfo from "./ServecesInfo.svelte";
  
  
  let modalOpen = false;
  
  function closeModal() {
    modalOpen = false;
  }
</script>

<section id="services" class="services">
  <div class="container">
    <h2>Наши услуги</h2>
    <div class="service-cards">
      <div class="service-card" style="background-image: url('https://multiservice.com.ua/images/remont-pc-min.jpg.pagespeed.ce.YcRygA9olS.jpg')">
        <h3>Диагностика ПК</h3>
        <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
        <ServecesInfo title="Диагностика ПК" content="Мы предоставляем бесплатную диагностику вашего ПК и оцениваем необходимость его ремонта." on:click={closeModal}/>
      </div>
      <div class="service-card" style="background-image: url('https://remcor.ru/wp-content/uploads/2020/03/2e1c431baaa36d929c64ece60d9a7e44.jpg')">
        <h3>Ремонт</h3>
        <i class="fa-solid fa-screwdriver-wrench"></i>
        <ServecesInfo title="Ремонт" content="Мы предоставляем услуги по ремонту вашего компьютера." on:click={closeModal}/>
      </div>
      <div class="service-card" style="background-image: url('https://ba.lanagent.ru/wp-content/uploads/2022/02/_%D0%9A%D0%B0%D0%BA-%D0%BF%D0%BE%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C-%D1%87%D1%82%D0%BE-%D0%B4%D0%B5%D0%BB%D0%B0%D0%BB%D0%B8-%D0%BD%D0%B0-%D0%BA%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80%D0%B5-%D0%B7%D0%B0-%D0%BF%D0%BE%D1%81%D0%BB%D0%B5%D0%B4%D0%BD%D0%B5%D0%B5-%D0%B2%D1%80%D0%B5%D0%BC%D1%8F-e1645016774743.jpg')">
        <h3>Настройка ПО</h3>
        <i class="fa-solid fa-gears"></i>
        <ServecesInfo title="Настройка ПО" content="Мы предоставляем услуги по установке, обновлению и настройке операционной системы и программного обеспечения." on:click={closeModal}/>
      </div>
      <div class="service-card" style="background-image: url('https://s7e5a.scene7.com/is/image/metrohm/4790?$xh-544$')">
        <h3>Удаленная поддержка</h3>
        <i class="fa-solid fa-desktop"></i>
        <ServecesInfo title="Удаленная поддержка" content="Мы предоставляем услуги удаленной поддержки по решению проблем с вашим ПК через интернет." on:click={closeModal}/>
      </div>
      <div class="service-card" style="background-image: url('https://content.onliner.by/news/amp/90c8564eff204272a5aac1a2b13056bc.jpeg')">
        <h3>Сборка компьютера</h3>
        <i class="fa-solid fa-hammer"></i>
        <ServecesInfo title="Сборка компьютера" content="Мы предоставляем услуги сборки компьютера под ваши индивидуальные потребности и бюджет." on:click={closeModal}/>
       
      </div>
      <div class="service-card" style="background-image: url('https://static.baza.farpost.ru/v/1601900790523_bulletin')">
        <h3>Обучение</h3>
        <i class="fa-solid fa-graduation-cap"></i>
        <ServecesInfo title="Обучение" content="Обучение основам работы с ПК и программами" on:click={closeModal}/>
      </div>
    </div>
  </div>
</section>

<style>
 .services {
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: 'Source Sans Pro', Arial, Helvetica, sans-serif;
  background-color: #f5f5f5;
  
}


.service-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  width: 100%;
  max-width: 1200px;
}


.service-card {
  background-color: #fff;
  border-radius: 25px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: calc(33.33% - 20px);
  padding: 40px;
  margin-bottom: 30px;
  text-align: center;
  box-sizing: border-box;
  height: 310px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s;
  background-size: cover
}

.service-card:hover {
  transform: translateY(-5px);
}
  
.service-card h3 {
  font-size: 24px;
  margin-bottom: 20px;
  background-color: rgb(113, 0, 158);
  color: #fff;
}

i {
  font-size: 70px;
  background: linear-gradient(to bottom, rgb(142, 36, 170), rgb(63, 81, 181), rgb(33, 149, 243));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

}
   

@media (max-width: 768px){
  .service-card {
  width: 300px;
  margin-bottom: 30px;
}

.service-card:hover {
  transform: translateY(-5px);
  background-image: linear-gradient(to bottom, rgb(142, 36, 170), rgb(63, 81, 181), rgb(33, 149, 243)), url("");
  color: #fff;
}

.service-card h3 {
  font-size: 20px;
  margin-bottom: 20px;
}


.service-cards {
  margin-top: 30px;
  justify-content: center;
  flex-direction: column;
}
}
</style>
