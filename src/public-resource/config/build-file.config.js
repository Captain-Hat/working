require('!!file-loader?name=index.html!../../index.html');
module.exports = {
  js: {
    html5shiv: require('!!file-loader?name=static/js/[name].[ext]!../../../vendor/ie-fix/html5shiv.min.js'),
    respond: require('!!file-loader?name=static/js/[name].[ext]!../../../vendor/ie-fix/respond.min.js'),
    jquery: require('!!file-loader?name=static/js/[name].[ext]!jquery/dist/jquery.min.js'),

    bootstrap: require('!!file-loader?name=static/js/[name].[ext]!../../../vendor/bootstrap.min.js'),
    metisMenu: require('!!file-loader?name=static/js/plugins/[name].[ext]!../../../vendor/plugins/metisMenu/jquery.metisMenu.js'),
    slimscroll: require('!!file-loader?name=static/js/plugins/[name].[ext]!../../../vendor/plugins/slimscroll/jquery.slimscroll.min.js'),
    hplus: require('!!file-loader?name=static/js/[name].[ext]!../../../vendor/hplus.min.js?v=4.1.0'),
    pace: require('!!file-loader?name=static/js/plugins/[name].[ext]!../../../vendor/plugins/pace/pace.min.js'),
  },
  images: {
    'login-bg': require('!!file-loader?name=static/images/[name].[ext]!../imgs/login-bg.jpg'),
    'favicon': require('!!file-loader?name=[name].[ext]!../../favicon.ico'),
  },
  css: {
    bootstrap: require('!!file-loader?name=static/css/[name].[ext]!../../../vendor/css/bootstrap.min14ed.css?v=3.3.6'),
    awesome: require('!!file-loader?name=static/css/[name].[ext]!../../../vendor/css/font-awesome.min93e3.css?v=4.4.0'),
    animate: require('!!file-loader?name=static/css/[name].[ext]!../../../vendor/css/animate.min.css'),
    style: require('!!file-loader?name=static/css/[name].[ext]!../../../vendor/css/style.min862f.css?v=4.1.0'),
  },
  // dll: {
  //   js: require('!!file-loader?name=dll/dll.js!../../dll/dll.js'),
  //   css: require('!file-loader?name=dll/dll.css!../../dll/dll.css'),
  // },
  // 多文件的恶心插件
  special: {
    layer: '../../build-need/layer/layer.min.js',
    awesome: '../../build-need/awesome/font-awesome.min93e3.css',
  },
};
