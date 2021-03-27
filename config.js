const authorizeSpotifyUri = 'https://accounts.spotify.com/authorize?response_type=token'

const redirectUri = 'https://educorzo.github.io/Moogle/' // This parameter must be registered in Spotify
const clientId = '0088361d36ae4c6c8e4efe3b5e6b89d7' // This value should be set when deploying

export default {
  loggingSpotifyUri: authorizeSpotifyUri + '&redirect_uri=' + redirectUri + '&client_id=' + clientId,
  spotifyApiUrl: 'https://api.spotify.com/v1/'
}
