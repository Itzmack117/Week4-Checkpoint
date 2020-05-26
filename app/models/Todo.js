export default class Todo {
  constructor(data) {
    this._id = data.id
    this.body = data.body
    this.done = data.bool

  }
}