
const {compiler} = require('markdown-to-jsx')

module.exports = {
  type: 'postProcessor',
  name: 'markdown-jsx',
  process: function(value, key, options) {
    return compiler(value, {
      overrides: options.overrides
    })
  }
}
