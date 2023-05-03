<script setup lang="ts">
let {newComment} = defineProps(['newComment']);

</script>
<template>
    <div class="form">
    <form>
      <div class="form__group">
        <label>Leave a comment</label>
        <textarea
          :value="newComment"
          rows="10"
          required
          cols="50"
        ></textarea>
        <button>Submit</button>
      </div>
    </form>
  </div>
</template>
<style scoped>
.form {
  margin-top: 1.5em;
}

label {
  display: block;
  margin-bottom: 1em;
  font-weight: 700;
  font-family: Padauk, sans-serif;
}

textarea {
  width: 100%;
  margin-top: 0.5em;
}

button {
  border: unset;
  background: #79b791;
  color: #230c0f;
  font-weight: 700;
  padding: 1em 2.5em;
  margin-top: 1em;
}
</style>
