/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import i18n from './plugins/i18n'
import '@/assets/font/stylesheet.css'
import '@/assets/scss/main.scss'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)
app.use(i18n).mount('#app')
