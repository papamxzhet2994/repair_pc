<script>

</script>
<section id="services" class="services">
  <div class="container">
    <h2>Наши услуги</h2>
    <div class="service-cards">
      <div class="service-card">
        <h3>Диагностика ПК</h3>
        <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
        <p>Бесплатная диагностика и оценка ремонта вашего ПК</p>
        <button class="btn more-info-btn">Узнать больше</button>
      </div>
      <div class="service-card">
        <h3>Ремонт</h3>
        <i class="fa-solid fa-screwdriver-wrench"></i>
        <p>Оказание услуг ремонта вашему комьютеров</p>
        <button class="btn more-info-btn">Узнать больше</button>
      </div>
      <div class="service-card">
        <h3>Настройка ПО</h3>
        <i class="fa-solid fa-gears"></i>
        <p>Установка, обновление и настройка ОС и ПО</p>
        <button class="btn more-info-btn">Узнать больше</button>
      </div>
      <div class="service-card">
        <h3>Удаленная поддержка</h3>
        <i class="fa-solid fa-desktop"></i>
        <p>Решение проблем с ПК удаленно через интернет</p>
        <button class="btn more-info-btn">Узнать больше</button>
      </div>
      <div class="service-card">
        <h3>Сборка компьютера</h3>
        <i class="fa-solid fa-hammer"></i>
        <p>Сборка ПК под ваши потребности и бюджет</p>
        <button class="btn more-info-btn">Узнать больше</button>
      </div>
      <div class="service-card">
        <h3>Обучение</h3>
        <i class="fa-solid fa-graduation-cap"></i>
        <p>Обучение основам работы с ПК и программами</p>
        <button class="btn more-info-btn">Узнать больше</button>
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
}

.service-card:hover {
  transform: translateY(-5px);
  background-image: linear-gradient(to bottom, rgb(142, 36, 170), rgb(63, 81, 181), rgb(33, 149, 243)), url("");
  color: #fff;
}
  
.service-card h3 {
  font-size: 24px;
  margin-bottom: 20px;
}
    
.service-card p {
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 30px;
}
    
.btn {
  background-color: #7e2291;
  border: none;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  padding: 15px 30px;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
  margin-top: auto;
}
    
.btn:hover {
  background-color: #630077;
}
    
.service-card:hover .btn {
  opacity: 1;
  transform: translateY(0);
}
    
.service-card:hover .btn:focus {
  outline: none;
}

.service-card .btn {
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}
    
.service-card .btn:hover {
  background-color: #7e2291;
  opacity: 1;
}
    
.service-card .btn:focus {
  outline: none;
}

/* .hidden {
  display: none;
} */

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

.service-card p {
  font-size: 18px;
  line-height: 20px;
  margin-bottom: 30px;
}

.btn {
  font-size: 16px;
  padding: 10px 20px;
  margin-top: auto;
}

.service-card:hover .btn {
  opacity: 1;
  transform: translateY(0);
}

.service-card .btn {
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.service-card .btn:hover {
  background-color: #7e2291;
  opacity: 1;
}

.service-card .btn:focus {
  outline: none;
}

.service-cards {
  margin-top: 30px;
  justify-content: center;
  flex-direction: column;
}
}
</style>
