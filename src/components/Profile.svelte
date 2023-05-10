<script>
    import swal from "sweetalert";
    import supabase from "../../supabase";
  
    let email = "";
    let password = "";
    let firstName = "";
    let lastName = "";
    let loggedIn = false;
  
    // Сохранение данных в LocalStorage
    function saveToLocalStorage() {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("lastName", lastName);
      localStorage.setItem('loggedIn', loggedIn.toString());
    }
  
    // Загрузка данных из LocalStorage
    function loadFromLocalStorage() {
      email = localStorage.getItem("email") || "";
      password = localStorage.getItem("password") || "";
      firstName = localStorage.getItem("firstName") || "";
      lastName = localStorage.getItem("lastName") || "";
      loggedIn = localStorage.getItem("loggedIn") === "true";
    }
  
    loadFromLocalStorage();
  
    async function signIn() {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        swal("Ошибка", error.message, "error");
      } else {
        loggedIn = true;
        saveToLocalStorage();
      }
    }
  
    async function signUp() {
  const { data: users, error } = await supabase
    .from("users")
    .select()
    .eq("email", email);

  if (error) {
    console.error(error);
    return;
  }

  if (users && users.length > 0) {
    swal(
      "Пользователь уже зарегистрирован",
      "Попробуйте войти с помощью своего пароля",
      "warning"
    );
  } else {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error(error);
    } else {
      console.log(firstName, lastName);
      await supabase.from("users").insert([
        {
          email,
          password,
          firstName,
          lastName,
        },
      ]);
      loggedIn = true;
      saveToLocalStorage();
    }
  }
}

  
    async function logout() {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error(error);
      } else {
        loggedIn = false;
        saveToLocalStorage();
      }
    }
  
    async function checkAuth() {
        const { user, error } = await supabase.auth.refreshSession()
        if (error) {
            console.error(error);
        } else if (user) {
            loggedIn = true;
            saveToLocalStorage();
        }

}
checkAuth();
  

function showModal(id) {
  const modal = document.getElementById(id);
  modal.showModal();

  modal.addEventListener('close', () => {
    modal.removeAttribute('open');
  });
}
  </script>

{#if !loggedIn}
<button on:click={() => showModal('login-dialog')}>Войти или зарегистрироваться</button>
<div class="form-container">
  <dialog id="login-dialog">
    <div class="form-container">
      <i onclick="document.getElementById('login-dialog').close()" class="fas fa-times"></i>
    <h2>Войти или зарегистрироваться</h2>
    <form on:submit|preventDefault={signIn}>
      <h1>Войти</h1>
      <div class="form-group">
        <label>Email:
            <input type="email" bind:value={email} required />
        </label>
      </div>
      <div class="form-group">
        <label>Пароль:
            <input type="password" bind:value={password} required />
        </label>
    </div>
      <button type="submit">Войти</button>
    </form>
    <form on:submit|preventDefault={signUp}>
      <h1>Зарегистрироваться</h1>
      <div class="form-group">
        <label>Имя:
            <input type="text" bind:value={firstName} required />
        </label> 
    </div>
      <div class="form-group">
        <label>Фамилия:
            <input type="text" bind:value={lastName} required />
        </label>
      </div>
      <div class="form-group">
        <label>Email:
            <input type="email" bind:value={email} required />
        </label>
      </div>
      <div class="form-group">
        <label>Пароль:
            <input type="password" bind:value={password} required />
        </label>
      </div>
      <button type="submit">Зарегистрироваться</button>
    </form>
  </div>
</dialog>
</div>  
{:else}
<div class="logged">
  <h1>{lastName} {firstName}</h1>
  <button on:click={logout}>Выйти</button>
</div>
{/if}


<style>
dialog {
  top: 0;
  left: 0;
  width: 500px;
  height: 100%;
  margin: auto;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  background-color: white;
  z-index: 10;
  overflow: hidden;
  display: flex;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  width: 100%;
}

label {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #555;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 10px;
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="password"]:focus {
  outline: none;
  border-color: #5cb85c;
}

button[type="submit"] {
  padding: 10px;
  font-size: 16px;
  background-color: #5cb85c;
  color: #fff;
  border: none;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #449d44;
}

/* Стили для кнопки "Войти или зарегистрироваться" */
button {
  padding: 10px;
  font-size: 16px;
  background-color: #5cb85c;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #449d44;
}



</style>