import { LitElement, html, css } from 'lit-element';
import './eit-input'

class TodoApp extends LitElement {
  static get properties() {
    return {
      todos: { type: Array },
      newTodo: { type: String }
    };
  }

  constructor() {
    super();
    this.todos = [];  
    this.newTodo = '';
  }

  static get styles() {
    return css`
    `;
  }

  render() {
    return html`
    <eit-input placeholder="Introduce el nuevo todo y pulsa enter" id="newTodoInput" .value="${this.newTodo}" @input="${(e) => this.newTodo = e.detail}" @eit-input-enter="${this.addTodo}"></eit-input>
    <hr>
    <todo-list .items=${this.todos} @todo-item-remove="${this.remove}"></todo-list>
    `;
  }

  remove(e) {
    console.log(e);
    this.todos = this.todos.filter(todo => todo != e.detail);
  }

  addTodo(e)
  {
    this.todos = [...this.todos, {name: e.detail, completed: false }];
    this.newTodo = '';
  }
}
customElements.define('todo-app', TodoApp);