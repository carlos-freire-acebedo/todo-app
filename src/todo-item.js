import { LitElement, html, css } from 'lit-element';

class TodoItem extends LitElement {
  static get properties() {
    return {
      task: { type: Object }
    };
  }
  static get styles() {
    return css`
    p {
      display: flex;
      align-items: center;
    }
    eit-switch {
      margin-right: 10px;
    }
    .completed {
      text-decoration: line-through;
      color: #888;
    }
    .remove
    {
      margin-right: 5px;
    }
    `;
  }

  render() {
    return html`
    <p class="${this.task.completed ? 'completed' : ''}">
      <button class="remove" @click="${this.doRemove}">X</button>
      <eit-switch ?checked="${this.task.completed}" @eit-switch-checked="${this.checkedChanged}"></eit-switch>  ${ this.task.name }      
    </p>
    `;
  }

  doRemove()
  {
    this.dispatchEvent(new CustomEvent('todo-item-remove', {
      bubbles: true,
      composed: true,
      detail: this.task
    }));
  }

  checkedChanged(e) {
    this.task = {
      ...this.task,
      completed: e.detail
    };
  }
}
customElements.define('todo-item', TodoItem);