<template>
<form @submit.prevent="submitComment" class="formulaire">
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
      this.comment= ''
    },
  }
}
</script>

<style scoped>
.formulaire{
  padding-bottom: 30px;
}
</style>
