<template>
<library-filter></library-filter>
<div class="library-container">
  <base-card>
    <ul>
      <li v-for="movie in library" :key="movie.id" >
      <movie-infos :movie='movie'
      :poster="movie.Poster"
      :title='movie.Title'
      :imdbRating="movie.imdbRating"
      :runtime="movie.Runtime"
      :plot="movie.Plot"
      >
      </movie-infos>
      </li>
    </ul>
  </base-card>
</div>
</template>

<script>
import libraryFilter from '@/components/Library/libraryFilter.vue';
import movieInfos from '../components/Library/libraryInfos.vue';
export default {
  components: {
    movieInfos,
    libraryFilter,
  },
  computed: {
    library() {
      return this.$store.getters.library;
    },
    // libraryNotEmpty(){
    //   return this.$store.state.libraryNotEmpty;
    // }
  },

  mounted() {
    this.$store.dispatch('getLibrary')
  }

}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
