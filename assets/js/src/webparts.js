import $ from 'jquery';

(function(APP) {
    "use strict";

    /**
     * WEBPARTS
     */
     APP.WEBPARTS = {};

    /**
     * Executes webpart initialization
     */
     APP.WEBPARTS.init = function() {
            $('.webpart-display').each(function() {
                var display = $(this).attr('data-display');
                switch (display.toLowerCase()) {
                    default:
                    break;
                }
            });
    };

})(window.APP = window.APP || {});
