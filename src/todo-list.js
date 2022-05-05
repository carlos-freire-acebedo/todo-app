import { LitElement, html } from 'lit-element';

class TodoList extends LitElement {

  static get properties() {
    return {
      items: { type: Array }
    };
  }

  constructor() {
    super();
    this.items = []  
  }

  render() {
    return html`
      ${
        this.items.map( item => html`<todo-item @eit-switch-checked="${this.newChecked}" .task=${item}></todo-item>`)
      }
    `;
  }
}
customElements.define('todo-list', TodoList);