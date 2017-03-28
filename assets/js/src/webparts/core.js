(function(APP) {
    "use strict";

    /**
     * Root of the application
     */
    APP.GLOBAL = {

    };

    $(document).ready(function() {
        APP.GLOBAL.init();
    });

    /**
     * Init the main components and webparts
     */
     APP.GLOBAL.init = function() {
        APP.MAIN.init();
    };


})(window.APP = window.APP || {});
