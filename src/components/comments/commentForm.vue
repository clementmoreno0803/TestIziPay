<template>
<form @submit.prevent="submitComment">
  <input type="text" v-model="comment">
  <button type="submit">Submit</button>
</form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      comment: ''
    }
  },
  methods: {
    ...mapActions(['sendComment']),
    submitComment() {
      const data = {
        commentaire: this.comment,
      }
      this.sendComment(data)
    console.log(data)
    },
  }
}
</script>

<style>

</style>
