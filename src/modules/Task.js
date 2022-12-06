export default class Task {
  constructor(order, description, completed =false) {
    this.order = order
    this.description = description
    this.completed = completed
  }
}