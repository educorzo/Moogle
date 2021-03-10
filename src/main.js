import Vue from 'vue'
import Config from '../config.js'
import App from './App.vue'
import Api from './core/Api'
import AccessToken from './core/AccessToken.js'

Vue.config.productionTip = false
const accessToken = new AccessToken(window.location)

if (accessToken.isEmpty()) {
  window.location.href = Config.loggingSpotifyUri
} else {
  new Vue({
    render: h => h(App, {
      props: { Api: new Api(Config.spotifyApiUrl, accessToken) }
    })
  }).$mount('#app')
}
