<script>
import swal from "sweetalert";
import supabase from "../../supabase";
import HistorySidenav from "./HistorySidenav.svelte";

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
  localStorage.setItem('loggedIn', loggedIn);
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
    swal({
      title: "Ошибка",
      text: "Неверный логин или пароль",
      icon: "error",
    });
    const modal = document.getElementById("login-dialog");
    modal.close();
  } else {
    // Fetch user details from the database and update local storage
    const { data: users, error } = await supabase
      .from("users")
      .select()
      .eq("email", email);

    if (error) {
      console.error(error);
      return;
    }

    if (users && users.length > 0) {
      firstName = users[0].firstName;
      lastName = users[0].lastName;
      saveToLocalStorage();
    }

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
    const modal = document.getElementById("registration-dialog");
    modal.close();
  } else {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error(error);
    } else {
      await supabase.from("users").insert([
        {
          email,
          password,
          firstName,
          lastName,
        },
      ]);

      // Update local storage
      saveToLocalStorage();

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
    // Clear local storage
    localStorage.clear();
    loggedIn = false;
    saveToLocalStorage();
  }
}

  async function checkAuth() {
      const { user, error } = await supabase.auth.getUser(URLSearchParams.toString());
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
<button class="login" on:click={() => showModal('login-dialog')}>Войти или зарегистрироваться</button>
  <dialog id="login-dialog">
    <div class="form-container">
      <i on:click={() => document.getElementById('login-dialog').close()} class="fas fa-times"></i>
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
      <p>Нет аккаунта? <a style="cursor: pointer; text-decoration: underline" on:click={() => {
        showModal('registration-dialog');
        document.getElementById('login-dialog').close();
      }}>Зарегистрироваться</a></p>
    </form>
  </div>
</dialog>

<!-- Form.svelte: <form><slot/></form>
<Form>
<Input>
  <Button>Какой-то текст</Button>
</Form> -->

<div id="registration-form" class="form-container">
  <dialog id="registration-dialog">
    <div class="form-container">
      <i on:click={() => document.getElementById('registration-dialog').close()} class="fas fa-times"></i>
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
<section class="logged">
  <a style="cursor: pointer; text-decoration: underline; color: black;"><HistorySidenav /></a>
  <h1>{lastName} {firstName}</h1>
  <button class="logout" on:click={logout}>Выйти</button>
</section>

{/if}


<style>
a {
  cursor: pointer;
  font-size: 18px;
}

p {
  font-size: 18px;
}

dialog {
  border: none;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  overflow: hidden;
  width: 500px;
  max-width: 100%;
  background: white;
  padding: 1rem;
  z-index: 0;
}

.form-container {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

form {
  display: flex;
  flex-direction: column;
  z-index: 0;
}

form button {
  align-self: flex-end;
  margin-top: 1rem;
  padding: 10px 30px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  color: white;
  background: linear-gradient(to right,rgb(142, 36, 170), rgb(63, 81, 181), rgb(33, 149, 243));
}

form button:hover {
  background: linear-gradient(to left, rgb(33, 149, 243), rgb(142, 36, 170), rgb(63, 81, 181));
  transition: all 0.3s ease-in-out;
}

.form-group input {
  display: block;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 16px;
  line-height: 1.4;
  width: 450px;
  margin-right: 150px;
  margin-top: 10px;
}

i {
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 1.5rem;
  color: #ccc;
}

i:hover{
  color: #6700ac;
}

.logged {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-right: 10px;
}

.logged h1{
  font-size: 18px;
  font-weight: bold;
  margin-top: 30px;
  margin-right: 10px;
}

button.login {
  background-color: #6700ac;
  color: #fff;
  padding: 8px 20px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  
}

button.login:hover {
  background-color: #53008a;
  transition: all 0.3s ease-in-out;
}

button.logout {
  background-color: #6700ac;
  color: #fff;
  padding: 8px 20px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  margin-right: 15px;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
}

button.logout:hover {
  background-color: #53008a;
  transition: all 0.3s ease-in-out;
}
</style>