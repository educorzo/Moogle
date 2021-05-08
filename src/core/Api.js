export default class Api {
  constructor (url, accessToken) {
    this.url = url
    this.accessToken = accessToken
  }

  async search (searchTerm) {
    const keywords = searchTerm.trim()
    if (keywords === '') {
      return {}
    }

    const token = this.accessToken.Token
    const url = this._buildUrl(keywords)

    return fetch(url, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).then(function (response) {
      return response.json()
    })
      .catch(function (error) {
        return { error: { message: error.message } }
      })
  }

  _buildUrl (searchTerm) {
    const encodedSearchTerm = encodeURIComponent(searchTerm)
    const url = this.url + 'search?q=' + encodedSearchTerm + '&type=album,artist,track'

    return url
  }
}
