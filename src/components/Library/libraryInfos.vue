<template>
<li>
  <div :style="backgroundImageStyle">
      <div class="container">
        <div class="titre">
          <h3>{{title}}</h3>
          <button v-on:click="handleAddToWishlist()">Voir plus tard</button>
        </div>
      <div class="infos">
      <span>{{runtime}}</span>
      <span>{{imdbRating}}/10</span>
      </div>
      <span class="description">{{plot}}</span>
      </div>
      <div class="buttons">
        <h4>Qu'avez vous pensez de ce film: </h4>
        <comment-form></comment-form>
      </div>
  </div>
</li>
</template>

<script>
import commentForm from '../comments/commentForm.vue'

export default {
  components:{
    commentForm
  },
  props: {
    title: {
      type: String,
      required: true
    },
    runtime:{
      type: String,
      required: true
    },
    plot:{
      type: String,
      required: true
    },
    imdbRating:{
      type: Number,
      required: true
    },
    movie: {
      type: Object,
      required: true
    },
    poster:{
      type: String,
      required: true
    }
  },
  computed: {
    backgroundImageStyle() {
      return {
        backgroundImage: `url(${this.poster})`,
        height: '100%',
        backgroundSize: 'cover',
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        boxShadow: '3px -86px 400px 0px rgba(0,0,0,1) inset',
      }
    }
  },
  methods: {
   handleAddToWishlist() {
    console.log(this.movie)
      this.$store.dispatch('addToWishlist', this.movie);
    }
  }
}
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  height: 400px;
  width: 500px;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

div {
  margin: 0;

}

.container{
  display: flex;
  padding: 0 50px;
  flex-direction: column;
  align-items: flex-start;
}
.titre{
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}
.description{
  margin: 0;
    padding: 0;
    text-align: left;
    font-size: 0.8rem;
}
.infos{
    width: calc(100% - 30px);
    display: flex;
    justify-content: space-between;
}

span {
  font-weight: 600;
}
.actions {
  display: flex;
  justify-content: flex-end;
}

.movie {
  background: red;
  color: white;
  padding: 5px;
  border: 1px solid white;
}

.serie {
  background: purple;
  color: white;
  padding: 5px;
  border: 1px solid white;
}
</style>
