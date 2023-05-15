<script>
    import swal from 'sweetalert';
    import supabase from '../../supabase.js';
  
    let requests = [];

    function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }

    function openNav() {
      document.getElementById("mySidenav").style.width = "500px";
    }
  
    async function getRequests() {
        const user = supabase.auth.updateUser;
        if (!user) {
            swal({
                title: "Ошибка",
                text: "Войдите в аккаунт или зарегистрируйтесь",
                icon: "error",
            })
        return;
        } 
      const { data, error } = await supabase
        .from('repair')
        .select('email')
        .limit(5);
  
      if (error) {
        console.error(error);
        return;
      }
  
      requests = data.map((row) => row.email);
    }
  </script>
  
  <div id="mySidenav" class="sidenav">
    <a href="javascript:void(0)" class="closebtn" on:click={() => closeNav()}>x</a>
    {#if requests.length === 0}
      <p>No requests found</p>
    {:else}
      {#each requests as email}
        <p>{email}</p>
      {/each}
    {/if}
  </div>
  
  
  <span style="font-size:15px;cursor:pointer" on:click={() => getRequests()} on:click={openNav}>История заявок</span>
  

<div id="mySidenav" class="sidenav">
    <a href="javascript:void(0)" class="closebtn" on:click={() => closeNav()}>x</a>
    <p>История заявок</p>
  </div>




  <style>
   .sidenav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
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
}

p {
  color: white;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
}

  </style>