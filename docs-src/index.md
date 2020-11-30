---
layout: page.11ty.cjs
title: <materials-catalog> ⌲ Home
---

# &lt;materials-catalog>

`<materials-catalog>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<materials-catalog>` is just an HTML element. You can it anywhere you can use HTML!

```html
<materials-catalog></materials-catalog>
```

  </div>
  <div>

<materials-catalog></materials-catalog>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<materials-catalog>` can be configured with attributed in plain HTML.

```html
<materials-catalog name="HTML"></materials-catalog>
```

  </div>
  <div>

<materials-catalog name="HTML"></materials-catalog>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<materials-catalog>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name="lit-html";

render(html`
  <h2>This is a &lt;materials-catalog&gt;</h2>
  <materials-catalog .name=${name}></materials-catalog>
`, document.body);
```

  </div>
  <div>

<h2>This is a &lt;materials-catalog&gt;</h2>
<materials-catalog name="lit-html"></materials-catalog>

  </div>
</section>
