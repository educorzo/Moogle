import clean from './TermCleaner'
import fetchResources from './Fetcher'
import { completeSearch, onlyArtistSearch, withLimit } from './SearchTermUrlBuilder'

export default class Api {
  constructor (url, accessToken) {
    this.url = url
    this.accessToken = accessToken
  }

  async search (searchTerm) {
    const keywords = clean(searchTerm)
    if (keywords === '') {
      return {}
    }

    const url = completeSearch(this.url, keywords)

    return this._get(url)
  }

  async autoCompleteSearch (searchTerm) {
    const keywords = clean(searchTerm)
    if (keywords === '') {
      return {}
    }

    const url = withLimit(onlyArtistSearch(this.url, keywords), 3)

    return this._get(url)
  }

  async _get (url) {
    const headers = {
      Authorization: 'Bearer ' + this.accessToken.Token
    }

    return fetchResources(url, headers)
  }
}
