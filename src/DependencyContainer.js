export default class DependencyContainer {
  constructor (dependencies) {
    this.dependencies = dependencies
  }

  getContainer () {
    return this.dependencies
  }
}
