export default class ApiStub {
  constructor (response) {
    this.response = response
  }

  async search () {
    return Promise.resolve(this.response)
  }
}
