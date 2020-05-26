export default class Todo {
  constructor(data) {
    this._id = data.id
    this.description = data.description
    this.done = data.bool

  }
}