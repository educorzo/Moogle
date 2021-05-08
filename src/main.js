import Vue from 'vue'
import * as configuration from '../config.json'
import App from './App.vue'
import Api from './core/Api'
import AccessToken from './core/AccessToken.js'
import store from './Store'

Vue.config.productionTip = false
const accessToken = new AccessToken(window.location)

if (accessToken.isEmpty()) {
  window.location.href = configuration.loginSpotifyUri
} else {
  new Vue({
    store,
    provide: { api: new Api(configuration.spotifyApiUrl, accessToken) },
    render: h => h(App)
  }).$mount('#app')
}
