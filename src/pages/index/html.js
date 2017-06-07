const config = require('configModule');
const content = require('./content.ejs');
const layout = require('layout');

const componentRenderData = Object.assign({}, config);
module.exports = layout.init({
  pageTitle: '',
}).run(content(componentRenderData));
