export default class AccessToken {
  constructor (currentLocation) {
    const hash = currentLocation.hash.substring(1)

    this.Token = new URLSearchParams(hash).get('access_token')
  }

  isEmpty () {
    return this.Token === null
  }
}
