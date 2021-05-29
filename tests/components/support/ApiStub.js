export default class ApiStub {
  constructor (response) {
    this.response = response
  }

  async search () {
    return Promise.resolve(this.response)
  }

  async autoCompleteSearch () {
    return Promise.resolve(this.response)
  }
}
