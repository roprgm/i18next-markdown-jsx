# Introduction

[![npm version](https://badge.fury.io/js/i18next-markdown-jsx-plugin.svg)](https://badge.fury.io/js/i18next-markdown-jsx-plugin)
[![Build Status](https://travis-ci.org/roprgm/i18next-markdown-jsx.svg?branch=master)](https://travis-ci.org/roprgm/i18next-markdown-jsx)

This is a i18next postProcessor converting markdown language to JSX components.

# Getting Started

Source can be loaded via [npm](https://www.npmjs.com/package/i18next-markdown-jsx-plugin).

```
$ npm install i18next-markdown-jsx-plugin
```

Wiring up:

```js
import i18next from 'i18next';
import markdownJsx from 'i18next-markdown-jsx-plugin';

i18next
  .use(markdownJsx)
  .init(i18nextOptions);
```

# Usage sample

```js
// given loaded resources
// translation: {
//   key: '# This is an _example_',
// }

i18next.t('key', { postProcess: 'markdown-jsx' });
```

Will return `<h1>This is an <em>example</em></h1>`



