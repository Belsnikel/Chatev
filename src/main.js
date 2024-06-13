import {createApp} from 'vue'
import App from './App.vue'

import {createRouter, createWebHistory} from 'vue-router'
import Event_ from './components/Event_.vue'
import Publication_ from './components/Publication_.vue'
import Header_ from './components/Header_'
import BaseDialog from './components/UI/BaseDialog'
import {initializeApp} from 'firebase/app'
import {createHead} from '@vueuse/head'

const app = createApp(App)
const head = createHead()

const router = createRouter({
  history: createWebHistory('/content/'),
  routes: [
    {path: '/event/:id', component: Event_},
    {path: '/localhost:[0-9][0-9][0-9][0-9]', component: Header_},
    {
      path: '/publication/:id',
      component: Publication_,
      name: 'Chatev',
      meta: {title: 'Chatev'},
    },
  ],
})

app.component('base-dialog', BaseDialog)

app.use(router)
app.use(head)
app.mount('#app')

//todo перенести в dotenv переменные

const firebaseConfig = {
  apiKey: 'AIzaSyCxZMTS0SxkJy_3HWzDMnKVFhG6YRllBRQ',
  authDomain: 'chatev-test.firebaseapp.com',
  projectId: 'chatev-test',
  storageBucket: 'chatev-test.appspot.com',
  messagingSenderId: '31422350667',
  appId: '1:31422350667:web:1189607dcb9716bf54d4ce',
  measurementId: 'G-R94PGD1VZF',
}

const firebaseApp = initializeApp(firebaseConfig)
app.use(firebaseApp)
