<script>
    export let onAddReview;
    
    function handleClick() {
      onAddReview();
    }
  </script>
  
  <div class="container">
    <button class="btn" on:click={handleClick}>
      <slot>Добавить отзыв</slot>
    </button>
  </div>

  <style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  
}

.btn {
  position: absolute ;
  background-color: #7e2291;
  color: #fff;
  padding: 10px 30px;
  border-radius: 15px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 30px;
}

.btn:hover {
  background-color: #630077;
}

.btn:active {
  transform: scale(0.95);
}

  </style>