const config = require('configModule');
const content = require('./templates/main.ejs');
const layout = require('layout-without-nav');
const dirsConfig = config.DIRS;

const renderData = Object.assign({}, dirsConfig);

module.exports = layout.init({
  pageTitle: '',
}).run(content(renderData));
