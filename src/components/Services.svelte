<section id="services" class="services">
    <div class="container">
      <h2>Наши услуги</h2>
      <div class="service-cards">
        <div class="service-card">
          <h3>Диагностика ПК</h3>
          <p>Бесплатная диагностика и оценка ремонта вашего ПК</p>
          <button class="btn">Узнать больше</button>
        </div>
        <div class="service-card">
          <h3>Ремонт</h3>
          <p>Оказание ремонта вашему комьютерув</p>
          <button class="btn">Узнать больше</button>
        </div>
        <div class="service-card">
          <h3>Настройка ПО</h3>
          <p>Установка, обновление и настройка ОС и ПО</p>
          <button class="btn">Узнать больше</button>
        </div>
    </div>
    </div>
</section>

<style>

h2{
  text-align: left;  
}

.services {
  background-color: #f5f5f5;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.service-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 50px;
  align-items: center;
  margin-top: 50px;
}

.service-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: calc(33.33% - 20px);
  padding: 40px;
  margin-bottom: 30px;
  text-align: center;
  box-sizing: border-box;
  
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
  border-radius: 30px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  padding: 15px 30px;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #630077;
}


  
</style>