(function ($) {
  'use strict';

  function domReady() {
    $('body').addClass('jquery');
  }

  $('html').removeClass('no-js').addClass('has-js');
  $(domReady);
})();
