import './assets/main.css'
import 'vue-final-modal/style.css'

import { createVfm } from 'vue-final-modal'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
const vfm = createVfm()
app.use(vfm).mount('#app')