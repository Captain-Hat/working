var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
var dirVars = require('../base/dir-vars.config.js');
var pageArr = require('../base/page-entries.config.js');

var configPlugins = [
  /* 全局shimming */
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery',
    'window.$': 'jquery',
    layer: 'layer'
  }),
  /* 抽取出所有通用的部分 */
  new webpack.optimize.CommonsChunkPlugin({
    name: 'commons/commons', // 需要注意的是，chunk的name不能相同！！！
    filename: '[name]/bundle.js',
    minChunks: 4,
  }),
  /* 抽取出chunk的css */
  new ExtractTextPlugin('[name]/styles.css'),
  // /* 配置好Dll */
  // new webpack.DllReferencePlugin({
  //   context: dirVars.staticRootDir, // 指定一个路径作为上下文环境，需要与DllPlugin的context参数保持一致，建议统一设置为项目根目录
  //   manifest: require('../../manifest.json'), // 指定manifest.json
  //   name: 'dll',  // 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与DllPlugin的name参数保持一致
  // }),
  //复制目录(针对第三方文件夹形式的插件)
  new CopyWebpackPlugin([{
    from: dirVars.staticRootDir + '/vendor/plugins/layer',
    to: dirVars.staticRootDir + '/build/static/js/plugins/layer'
  }]),
  new CopyWebpackPlugin([{
    from: dirVars.staticRootDir + '/vendor/fonts',
    to: dirVars.staticRootDir + '/build/static/css/fonts'
  }]),
  new CopyWebpackPlugin([{
    from: dirVars.staticRootDir + '/vendor/css/font-awesome.min93e3.css',
    to: dirVars.staticRootDir + '/build/static/css/awesome'
  }]),
  new CopyWebpackPlugin([{
    from: dirVars.staticRootDir + '/src/public-resource/img',
    to: dirVars.staticRootDir + '/build/static/images'
  }]),
  new CopyWebpackPlugin([{
    from: dirVars.staticRootDir + '/vendor/css/patterns',
    to: dirVars.staticRootDir + '/build/static/css/patterns'
  }]),
];

pageArr.forEach((page) => {
  const htmlPlugin = new HtmlWebpackPlugin({
    filename: `${page}/page.html`,
    template: path.resolve(dirVars.pagesDir, `./${page}/html.js`),
    chunks: [page, 'commons/commons'],
    hash: true, // 为静态资源生成hash值
    xhtml: true,
  });
  configPlugins.push(htmlPlugin);
});

module.exports = configPlugins;