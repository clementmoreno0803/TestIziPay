<template>
<li>
  <div :style="backgroundImageStyle">
      <div class="sub-info">
      <h3>{{title}}</h3>
      <span>{{runtime}}</span>
      <span>{{imdbRating}}</span>
    <button v-on:click="handleAddToWishlist()">Voir plus tard</button>
      </div>
      <span>{{plot}}</span>
  </div>
</li>
</template>

<script>
import {
} from 'vuex'
export default {
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
        boxShadow: '3px -86px 400px 0px rgba(0,0,0,1) inset'
      }
    }
  },
  methods: {
   handleAddToWishlist() {
    console.log(this.movie)
      this.$store.dispatch('addToWishlist', this.movie);
    }
  },
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
  margin: 0.5rem 0;
}

div {
  margin: 0;
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
