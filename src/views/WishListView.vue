<template>
<h1>Wishlist</h1>
<base-card>

  <ul>
    <wish-list-infos v-for="list in wishlist"
    :key="list.id"
    :id="list.id"
    :poster="list.Poster"
    :title="list.Title"
    :type="list.Type"
    :year="list.Year"
    :mode="typeStyle"></wish-list-infos>
  </ul>

</base-card>
</template>

<script>
import wishListInfos from '../components/wishList/wishListInfos.vue'
// import { mapGetters } from 'vuex'
export default {
  components: {
    wishListInfos
  },
  computed: {
    wishlist() {
      return this.$store.getters.getWishlist
    }
  },
}
</script>

<style scoped>
ul li{
  list-style: none;
}
</style>
