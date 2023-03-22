import { createStore } from 'vuex'
// import moviesModule from './modules/moviesModule/index.js'
import generateId from "../utils/id.js"
import  {search, getByTitle}  from "../utils/clients.js"

export default createStore({
  strict:true,
  state:{
      formData: {},
      library: [],
      comment: '',
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
      addToWishlist({ commit }, movie) {
      commit('addMovieToWishlist', movie);
      }
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

          addMovieToWishlist(state,movie) {
              state.wishlist.push(movie)
              console.log(state.wishlist)
               }
  }
})
