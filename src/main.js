import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as firebase from "./firestore"
import BaseCard from './components/Ui/BaseCard.vue'
import BaseButton from './components/Ui/BaseButton.vue'

createApp(App).use(store).component('base-button', BaseButton).component('base-card',BaseCard).use(router).use(firebase).mount('#app')
