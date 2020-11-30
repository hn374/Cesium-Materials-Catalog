/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

import {LitElement, html, css} from 'lit-element';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MaterialsCatalog extends LitElement {
  static get styles() {
    return css`
      /* :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 1000px;
      } */

      .container {
        border: solid 1px gray;
        padding: 16px;
        max-width: 1000px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #24242B;
      }

      .materialsHeader {
        color: #E0E0E1;
        font-size: 48px;
      }

      .buttonsContainer {
        display: flex;
      }

      .addButton {
        background-color: #2E76DB;
        border-radius: 25px;
        padding: 5px 20px;
        font-size: 24px;
        color: white;
        margin-right: 12px;
      }

      .addButton:hover {
        background-color: #ABD7FB;
      }

      .deleteButton {
        background-color: #FA414B;
        border-radius: 25px;
        padding: 5px 20px;
        font-size: 24px;
        color: white;
      }

      .deleteButton:hover {
        background-color: #FB7570;
      }
    `;
  }

  static get properties() {
    return {
      /**
       * The name to say "Hello" to.
       */
      name: {type: String},

      /**
       * The number of times the button has been clicked.
       */
      count: {type: Number},
    };
  }

  constructor() {
    super();
    this.name = 'World';
    this.count = 0;
  }

  render() {
    return html`
      <div class="container">
        <h1 class="materialsHeader">Materials</h1>
        <div class="buttonsContainer">
          <button class="addButton">Add</button>
          <button class="deleteButton">Delete</button>
        </div>
        <div class="mainContainer">
          <div class="listContainer"></div>
          <div class="valueContainer"></div>
        </div>
      </div>
    `;
  }

  _onClick() {
    this.count++;
  }
}

window.customElements.define('materials-catalog', MaterialsCatalog);
