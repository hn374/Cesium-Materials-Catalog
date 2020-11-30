---
layout: page.11ty.cjs
title: <materials-catalog> ⌲ Install
---

# Install

`<materials-catalog>` is distributed on npm, so you can install it locally or use it via npm CDNs like unpkg.com.

## Local Installation

```bash
npm i materials-catalog
```

## CDN

npm CDNs like [unpkg.com]() can directly serve files that have been published to npm. This works great for standard JavaScript modules that the browser can load natively.

For this element to work from unpkg.com specifically, you need to include the `?module` query parameter, which tells unpkg.com to rewrite "bare" module specificers to full URLs.

### HTML
```html
<script type="module" src="https://unpkg.com/materials-catalog?module"></script>
```

### JavaScript
```html
import {MaterialsCatalog} from 'https://unpkg.com/materials-catalog?module';
```
