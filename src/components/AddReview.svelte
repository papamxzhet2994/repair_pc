<script>
  import Button from './Button.svelte';
  import ReviewForm from './ReviewForm.svelte';
  import { isModalOpen } from '../lib/store.js';

  function handleAddReview() {
    isModalOpen.set(true);
  }

  function handleCloseModal() {
    isModalOpen.set(false);
  }



</script>

<Button onAddReview={handleAddReview} />

{#if $isModalOpen}
  <ReviewForm onClose={handleCloseModal} />
{/if}