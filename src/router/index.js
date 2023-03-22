import { createRouter, createWebHashHistory } from 'vue-router'
import MovieView from '../views/MovieView.vue'
const routes = [
  {
    path: '/',
    name: 'MovieView',
    component: MovieView,
  },
  {
    path: '/whislist',
    name: 'wishListView',
    // route level code-splitting
    // this generates a separate chunk (series.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "whishList" */ '../views/WishListView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
