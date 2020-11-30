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
      .container {
        border: solid 1px gray;
        padding: 64px 20px;
        max-width: 1000px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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
        border: 1px solid black;
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
        border: 1px solid black;
      }

      .deleteButton:hover {
        background-color: #FB7570;
      }

      .mainContainer {
        display: flex;
        margin-top: 32px;
        color: #E0E0E1;
      }

      .listContainer {
        background-color: #0F0F13;
        margin-right: 32px;
        border: 1px solid #E0E0E1;
        width: 250px;
        display: flex;
        align-items: center;
        flex-direction: column;
        overflow: auto;
        height: 264px;
      }

      .noMaterialsLabel {
        font-style: italic;
      }

      .listItem {
        border: 1px solid #E0E0E1;
        width: 99%;
        padding: 4px 0px;
        background-color: #0F0F13;
        color: #E0E0E1;
        text-align: left;
      }

      .listLabels {
        margin: 0px;
        margin-left: 4px;
      }

      .valueContainer {
        color: #E0E0E1;
        background-color: #16171B;
        padding: 15px 30px;
      }

      .valueContainerRowOne {
        display: flex;
      }

      .valueContainerRowTwo {
        display: flex;
      }

      .valueContainerRowThree {
        display: flex;
      }

      .nameContainer {
        margin-right: 32px;
      }

      .volumeContainer {
        margin-right: 32px;
      }

      .deliveryDate {
        margin-bottom: 20px;
      }

      .totalCost {
        margin-top: 32px;
        color: #E0E0E1;
        margin-left: 164px;
        align-self: flex-start;
      }
    `;
  }

  static get properties() {
    return {
      totalCost: {type: Number},
      listOfMaterials: {type: Array},
      currentlySelectedMaterial: {type: Object},
    };
  }

  constructor() {
    super();
    this.totalCost = 0;
    this.listOfMaterials = [];
    this.currentlySelectedMaterial = this.listOfMaterials[0];
  }

  render() {
    return html`
      <div class="container">
        <h1 class="materialsHeader">Materials</h1>
        <div class="buttonsContainer">
          <button class="addButton" @click="${this._handleAddClick}">Add</button>
          <button class="deleteButton" @click="${this._handleDeleteClick}">Delete</button>
        </div>
        <div class="mainContainer">
          <div class="listContainer">
            ${(this.listOfMaterials.length != 0) ? this.listOfMaterials.map(item => html`
              <button class="listItem" @click="${e => this._handleSelect(e, item.id)}">
                <p class="listLabels">${item.name}</p>
                <p class="listLabels">${item.volume} m&sup3;</p>
              </button>
            `) 
            : html`<p class="noMaterialsLabel">No Materials</p>`}
          </div>
          <div class="valueContainer">
            <div class="valueContainerRowOne">
              <div class="nameContainer">
                <p>Name</p>
                <input value=${this.currentlySelectedMaterial ? this.currentlySelectedMaterial.name : ""} type="text" @change=${e => this._handleChange(e, "name", this.currentlySelectedMaterial.id)}>
              </div>
              <div>
                <p>Color</p>
              </div>
            </div>
            <div class="valueContainerRowTwo">
              <div class="volumeContainer">
                <p>Volume (m&sup3;)</p>
                <input value=${this.currentlySelectedMaterial ? this.currentlySelectedMaterial.volume : 0} type="text" @change=${e => this._handleChange(e, "volume")}>
              </div>
              <div>
                <p>Cost (USD per m&sup3;)</p>
                <input value=${this.currentlySelectedMaterial ? this.currentlySelectedMaterial.cost : 0} type="text" @change=${e => this._handleChange(e, "cost")}>
              </div>
            </div>
            <div class="valueContainerRowThree">
              <div class="deliveryDate">
                <p>Delivery Date</p>
                <input value=${this.currentlySelectedMaterial ? this.currentlySelectedMaterial.deliveryDate : "1/1/2020 "} type="text" @change=${e => this._handleChange(e, "deliveryDate")}>
              </div>
            </div>
          </div>
        </div>
        <div class="totalCost">Total Cost: $${this.totalCost}</div>
      </div>
    `;
  }

  _handleAddClick() {
    let materialsObject = {
      id: this.listOfMaterials.length,
      name: "Insert Name",
      color: "",
      volume: 0,
      cost: 0,
      deliveryDate: "1/1/2020",
    }

    this.listOfMaterials.push(materialsObject);
    this.currentlySelectedMaterial = materialsObject;
    this.calculateTotalCost();
    this.requestUpdate();
  }

  _handleDeleteClick() {
    this.listOfMaterials.forEach((item, index) => {
      if (item.id == this.currentlySelectedMaterial.id) {
        delete this.listOfMaterials[index]
        this.currentlySelectedMaterial = this.listOfMaterials[0];
      }
    });

    this.calculateTotalCost();
    this.requestUpdate();
  }

  _handleChange(e, inputField, id) {
    if (inputField == "name") {
      this.currentlySelectedMaterial.name = e.target.value;
    } else if (inputField == "volume") {
      this.currentlySelectedMaterial.volume = e.target.value;
    } else if (inputField == "cost") {
      this.currentlySelectedMaterial.cost = e.target.value;
    } else if (inputField == "deliveryDate") {
      this.currentlySelectedMaterial.deliveryDate = e.target.value;
    }

    this.listOfMaterials.forEach((item, index) => {
      if (item.id == id) {
        this.listOfMaterials[index] = this.currentlySelectedMaterial;
      }
    });

    this.calculateTotalCost();
    this.requestUpdate();
  }

  _handleSelect(e, id) {
    // Update currently selected item
    this.listOfMaterials.forEach((item, index) => {
      if (item.id == id) {
        this.currentlySelectedMaterial = this.listOfMaterials[index];
      }
    });

    this.requestUpdate();
    console.log(id);
  }

  calculateTotalCost() {
    console.log(this.listOfMaterials);
    if (this.listOfMaterials?.length > 0) {
      var sum = 0;

      this.listOfMaterials.forEach(item => {
        var itemTotal = item.volume * item.cost;
        sum += itemTotal;
      });

      this.totalCost = sum;
    }
  }
}

window.customElements.define('materials-catalog', MaterialsCatalog);
