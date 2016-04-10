var CORE_JS = (function ($) {

  var variables = '',

    init      = function() {
      $('html').removeClass('no-js').addClass('has-js');
      $(domReady);
    },

    domReady  = function() {
      $('body').addClass('jquery');
    };

  return {
    go: init
  };

})(jQuery);
