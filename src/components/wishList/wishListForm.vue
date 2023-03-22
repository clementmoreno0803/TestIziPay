<template>
  <form @submit.prevent="submitForm">
    <input type="text" v-model="comment">
    <!-- <input type="submit" value="Submit"> -->
  </form>
</template>

<script>

export default {
  data(){
    return{
        comment: ''
      }
    },
methods: {
submitForm() {
  this.$store.dispatch('submitForm', this.comment);
      this.comment= ''
    }  }
}
</script>
