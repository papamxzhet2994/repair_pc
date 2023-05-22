<script>
  import swal from 'sweetalert';
  import supabase from '../../supabase.js';
  import { onMount } from "svelte";

  let requests = [];

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  function openNav() {
    document.getElementById("mySidenav").style.width = "500px";
  }

  async function getRequests() {
    const user = supabase.auth.getUser();
    if (!user) {
      swal({
        title: "Ошибка",
        text: "Войдите в аккаунт или зарегистрируйтесь",
        icon: "error",
      });
      return;
    }

    const { data, error } = await supabase
            .from('repair')
            .select('email, date, problem')
            .eq('email', (await user).data.user.email)
            .order('date', { ascending: false });
    if (error) {
      console.error(error);
      return;
    }

    requests = data.map((row) => ({
      email: row.email,
      date: new Date(row.date).toLocaleDateString('ru-RU'),
      problem: row.problem
    }));
  }
</script>
<div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" on:click={() => closeNav()}>&times;</a>
  {#if requests.length === 0}
    <p>У Вас нет заявок</p>
  {:else}
    {#each requests as request}
      <h1>{request.date}</h1>
      <div class="email">
        <h4>{request.email}</h4>
      </div>
      <p class="text">Проблема: {request.problem}</p>
    {/each}
  {/if}
</div>

<span style="font-size: 15px; cursor: pointer;" on:click={() => { getRequests(); openNav(); }}>История заявок</span>
<div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" on:click={() => closeNav()}>x</a>
  <p>История заявок</p>
</div>
<style>
  .text {
    padding: 8px 12px;
    justify-content: space-between;
    text-indent: 10px;
  }
  h4 {
    text-align: end;
    margin-right: 30px;
    color: #fff;
  }

  .email {
    border: 1px solid white;
    width: 480px;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    margin-left: 20px;
  }

  .sidenav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 10000;
    top: 0;
    right: 0;
    background-color: rgba(12, 12, 12, 0.4);
    backdrop-filter: blur(10px);
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
  }

  .sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
  }

  .sidenav a:hover {
    color: #f1f1f1;
  }

  .sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
    color: black;
  }

  p {
    color: white;
    text-align: end;
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
    margin-right: 30px;
    line-height: 1.5;
  }

  h1 {
    color: white;
    text-align: start;
    margin-left: 30px;
  }
</style>