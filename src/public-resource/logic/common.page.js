$(() => {
  console.log('hahahahh');
  // sidemenu和页面匹配
  var pageName = window.location.pathname;
  var $curPage = $('nav.navbar-default a[href$="' + pageName + '"]');
  var parendUl = $curPage.parent().parent('.nav-second-level').length;
  console.log(parendUl);
  if (parendUl > 0) {
    $curPage.addClass('active').parent().parent('ul').addClass('in').parent('li').addClass('active');
  } else {
    $curPage.addClass('active');
  }
});
