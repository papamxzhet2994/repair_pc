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
      const { data, error }  = await supabase.auth.signUp({
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
            firstName,
            lastName,
          },
        ]);
        loggedIn = true;
        saveToLocalStorage();
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
  
  </script>


{#if !loggedIn}
<div class="form-container">
    <h2>Войти или зарегистрироваться</h2>
    <form on:submit|preventDefault={signIn}>
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
{:else}
<h1>{lastName} {firstName}</h1>
<button on:click={logout}>Выйти</button>
{/if}

<style>
.form-container {
  width: 400px;
  margin: 0;
  background-color: #f5f5f5;
  border-radius: 5px;
  padding: 20px;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 10px;
}

label {
  margin-right: 10px;
}

input[type="email"],
input[type="password"],
input[type="text"] {
  padding: 8px;
  border-radius: 5px;
  border: none;
  margin-top: 5px;
  margin-bottom: 10px;
}

button {
  background-color: #0074d9;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  cursor: pointer;
}

button:hover {
  background-color: #3d80e4;
}


</style>