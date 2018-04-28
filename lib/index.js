'use strict';

var _require = require('markdown-to-jsx'),
    compiler = _require.compiler;

module.exports = {
  type: 'postProcessor',
  name: 'markdown-jsx',
  process: function process(value, key, options) {
    return compiler(value, {
      overrides: options.overrides
    });
  }
};