<template>
<base-card>
  <h2>
    Try to find a movie..
  </h2>
    <form @submit.prevent="submitForm">
      <input type="text" v-model="formData">
    </form>
</base-card>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['query']),
},
methods:{
  submitForm() {
      this.$store.commit('SET_FORM_DATA', this.formData);
      this.$store.dispatch('getLibrary');
    }
}
}
</script>

<style>

</style>
