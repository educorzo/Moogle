const authorizeSpotifyUri = 'https://accounts.spotify.com/authorize?response_type=token'
const redirectUri = 'http://localhost:8080/' // This parameter must be registered in Spotify
const clientId = 'babf2f19af8144b1a31371477968389e' // This value should be set when deploying

export default {
  loggingSpotifyUri: authorizeSpotifyUri + '&redirect_uri=' + redirectUri + '&client_id=' + clientId,
  spotifyApiUrl: 'https://api.spotify.com/v1/'
}
