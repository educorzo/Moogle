import Vue from 'vue'
import * as configuration from '../config.json'
import App from './App.vue'
import Api from './api/Api'
import AccessToken from './core/AccessToken.js'
import store from './Store'
import DependencyContainer from './DependencyContainer'

Vue.config.productionTip = false
const accessToken = new AccessToken(window.location)

if (accessToken.isEmpty()) {
  window.location.href = configuration.loginSpotifyUri
} else {
  const dependencyContainer = new DependencyContainer({ api: new Api(configuration.spotifyApiUrl, accessToken) })
  new Vue({
    store,
    provide: dependencyContainer.getContainer(),
    render: h => h(App)
  }).$mount('#app')
}
