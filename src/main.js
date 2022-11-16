import { createApp } from 'vue'
import './assets/main.scss'
import router from './router'

import App from './App.vue'

// Importējam vēlamās komponentes
import Header from './components/HeaderComponent.vue'
import AudioPlayer from './components/AudioPlayerComponent.vue'
import Nav from './components/NavigationComponent.vue'
import Login from './views/Login.vue'
const app = createApp(App)

// Komponenetes kuras mēs pievienojam šeit būs globāli pieejamas
app
    .component('Header', Header)
    .component('AudioPlayer', AudioPlayer)
    .component('Nav', Nav)
    .component('Login', Login);

// Šādi aktivizē rūteri
app.use(router)

app.mount('#app')
