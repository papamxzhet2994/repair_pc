<script>
  import { scrollto } from "svelte-scrollto";
</script>

<footer>
  <div class="container">
    <ul class="scroll">
      <li><a href="#hero" use:scrollto={'#hero'}><i class="fa-sharp fa-solid fa-arrow-up"></i></a></li>
    </ul>
  </div>
    <p>© 2023 My Website. All rights reserved.</p>
</footer>

<style>
  p{
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: #333;
  

  }

  footer {
    background-color: #eee;
    padding: 10px;
  }

  .container {
    max-width: 100%;
    margin: 0 auto;
  }

  .scroll {
    display: flex;
    justify-content: center;
    align-items: center;
    right: 16px;
    bottom: 16px;
    z-index: 2;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    list-style: none;
  }

  .scroll a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: #333;
    color: #fff;
    border-radius: 50%;
    text-decoration: none;
    font-size: 24px;
    transition: all 0.3s ease-in-out;
  }
</style>
