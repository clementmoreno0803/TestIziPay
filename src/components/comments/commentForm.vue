<template>
<form @submit.prevent="submitComment">
  <input type="text" v-model="comment">
</form>
</template>

<script>
export default {
  data() {
    return {
      comment: ''
    }
  },
  methods: {
    submitComment() {
      this.$store.commit('send_comment', this.comment);
      // this.$store.dispatch('getLibrary');
    }
  }
}
</script>

<style>

</style>
