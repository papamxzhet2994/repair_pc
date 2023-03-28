<script>
    const masters = [
      {
        name: 'Иван Иванов',
        specialization: 'Ремонт и сборка ПК',
        experience: 'Стаж: 10лет',
        photo: 'https://via.placeholder.com/150'
      },
      {
        name: 'Петр Петров',
        specialization: 'Установка и настройка ПО',
        experience: 'Стаж: 5 лет',
        photo: 'https://via.placeholder.com/150'
      },
      {
        name: 'Анна Сидорова',
        specialization: 'Удаленная поддержка ПК',
        experience: 'Стаж: 7 лет',
        photo: 'https://via.placeholder.com/150'
      }
    ];
  </script>
  
  <section class="masters" id="masters">
    <h2>Наши мастера</h2>
    <div class="master-cards">
      {#each masters as master}
        <div class="master-card">
          {#if master.photo}
            <img src="{master.photo}" alt="{master.name}" class="master-photo">
          {/if}
          <h3>{master.name}</h3>
          <p>{master.specialization}</p>
          <p>{master.experience}</p>
        </div>
      {/each}
    </div>
  </section>
  
  <style>

    

    .masters {
      text-align: center;
      background-color: #f5f5f5;
    }
  
    .masters h2 {
      font-size: 26px;
      padding-top: 50px;
    }
  
    .master-cards {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
    }
  
    .master-card {
      background-color: #f9f9f9;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      margin: 20px;
      margin-top: 50px;
      margin-bottom: 70px;
      padding: 20px;
      text-align: center;
      transition: transform 0.3s;
      width: 300px;
    }
  
    .master-card:hover {
      transform: translateY(-5px);
    }
  
    .master-photo {
      border-radius: 50%;
      height: 150px;
      margin-bottom: 10px;
      width: 150px;
    }
  
    .master-card h3 {
      color: #333;
      font-size: 24px;
      margin-bottom: 10px;
    }
  
    .master-card p {
      color: #666;
      font-size: 18px;
      margin-bottom: 5px;
    }

    .master-card:hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }

    @media screen and (max-width: 768px) {
      .master-card {
        width: 100%;
        margin-bottom: 30px;
      }

      .master-card:hover {
        transform: none;
      }

      .master-card h3 {
        font-size: 20px;
        margin-bottom: 10px;
      }

      .master-card p {
        font-size: 16px;
        margin-bottom: 5px;
      }

      .master-photo {
        height: 100px;
        width: 100px;
        margin-bottom: 10px;
      }

      .masters h2 {
        font-size: 20px;
        padding-top: 30px;
      }

      .masters {
        padding: 20px;
      }
      
    }
  </style>
  