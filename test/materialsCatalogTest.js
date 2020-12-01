import {MaterialsCatalog} from '../materials-catalog.js';
import {fixture, html} from '@open-wc/testing';

const assert = chai.assert;

suite('materials-catalog', () => {
  test('is defined', () => {
    const el = document.createElement('materials-catalog');
    assert.instanceOf(el, MaterialsCatalog);
  });

  test('renders with a set name', async () => {
    const el = await fixture(html`<materials-catalog name="Test"></materials-catalog>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, Test!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });
});
