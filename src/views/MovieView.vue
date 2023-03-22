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
<div>
  <ul>
    <comment-list v-for="com in commentaire"
    :key="com.id"
    :comment='com.review'></comment-list>
  </ul>
</div>
</template>

<script>
import libraryFilter from '@/components/Library/libraryFilter.vue';
import movieInfos from '../components/Library/libraryInfos.vue';
import commentList from '@/components/comments/commentList.vue';
export default {
  components: {
    movieInfos,
    libraryFilter,
    commentList
  },
  computed: {
    library() {
      return this.$store.getters.library;
    },
    commentaire(){
      return this.$store.getters.messages;
  }
  },
  created(){
    this.$store.dispatch('getComments');
  },
  mounted() {
    this.$store.dispatch('getLibrary');
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

li{
  margin: 10px;
}


.controls {
  display: flex;
  justify-content: space-between;
}
</style>
