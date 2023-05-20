<script>
  import Button from './Button.svelte';
  import ReviewForm from './ReviewForm.svelte';

  let isModalOpen = false;



  function handleAddReview() {
    isModalOpen = true;
  }

  function handleCloseModal() {
    isModalOpen = false;
  }



  
  
</script>

<Button onAddReview={handleAddReview} />

{#if isModalOpen}
  <ReviewForm onClose={handleCloseModal} />
{/if}