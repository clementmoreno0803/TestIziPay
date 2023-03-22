import { createStore } from 'vuex'
// import moviesModule from './modules/moviesModule/index.js'
import generateId from "../utils/id.js"
import  { search, getByTitle}  from "../utils/clients.js"
import axios from 'axios'

export default createStore({
  strict:true,
  state:{
      formData: {},
      library: [],
      comment: '',
      comments: [],
      wishlist: [],
  },
  getters: {
    // Render tous les films et séries depuis le 1er call Api
    // Peu de détails (titre, poster ..)
    library(state){
    return state.library
    },
    // Permet de s'assurer que le tableau n'est pas vide
    // Sinon renvoi un message d'erreur
    //
    libraryNotEmpty(state){
      return state.library && state.library.length > 0;
    },
    // Deuxième problème : Pas d'Id dans les réponses
    // Comment trigger le bon pour l'ajouter dans le tableau des wishList ensuite ??
    getWishlist(state) {
      return state.wishlist;
    },
    //
    //
    displayComments(state){
      return state.comments
    }
  },
  actions: {
    getLibrary({commit,state} ) {
        search(state.formData)
        .then(res => {
          console.log(res)
          return res.Search.map(movie => {
            movie.id = generateId()
            return movie
          })
        })
        .then(res => {
          return res.map(movie => {
          return getByTitle(movie.Title)
          })
        })
        .then(promises =>{
          return Promise.all(promises)
        })
        .then(res => {
          commit('SET_LIBRARY', res)})
      },

      // ---
      // POST request pour envoyer les commentaires en DB

       async sendComment({ commit }, data) {
        try {
        const response = await axios.post('https://izipay-3f2a9-default-rtdb.firebaseio.com/comment.json', data);
        console.log(response.data)
        commit('send_post_request', response.data);
        alert('Merci d\'avoir donner votre avis sur ce film' )
        } catch (error) {
          console.log(error);
          alert('Une erreur est survenue lors de votre saisie, veuillez retenter plus tard' )
        }
      },

      // ----
      // Récupérer les commentaire depuis DB

      async getComments({commit}) {
          axios.get('https://izipay-3f2a9-default-rtdb.firebaseio.com/comment.json')
      .then((response) => {
          commit('set_messages', response.data);
        })
      .catch((error) => {
        console.error(error);
      });
  },
      // ----
      addToWishlist({ commit }, movie) {
      commit('addMovieToWishlist', movie);
      },
    },
        mutations: {
          // Réponse du Call Api
          // Store tous les films et séries dans Library
          SET_LIBRARY(state,library){
            state.library = library
          },
          // Data provenant de l'input de formulaire
          // Permettant de passer les params selon le choix utilisateur
          SET_FORM_DATA(state, formData) {
            state.formData = formData
          },

          send_post_request(state, data) {
            state.comment = data;
          },

          set_messages(state, comments){
            state.comments = comments;
            console.log(comments)
          },

          addMovieToWishlist(state,movie) {
              state.wishlist.push(movie)
          },
  }
})
