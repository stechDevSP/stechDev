(function(APP) {
    "use strict";

    /**
     * Root of the application
     */
    APP.EVENTS = {};


    APP.EVENTS.savePassword = function() {
        return true;
    };

    APP.EVENTS.navEvents = function() {
        var viewApps = sessionStorage.getItem("ViewApps");
        if (viewApps === true) {
            $(".welcome-component").slideUp();
            $(".my-select-apps-zone").slideDown();
        } else {
            $(".welcome-component").slideUp();
            $(".welcome-zone").slideDown();
        }

        if ($(".totalApps").html() == "No apps found") {
            $(".totalApps").addClass("noElements");
        }

        if ($(".myApps").html() == "No apps found") {
            $(".myApps").addClass("noElements");
        }

        if ($(".other-apps").html() == "No apps suggested") {
            $(".other-apps").addClass("noElements");
        }

        $(".goBack-selectApps").click(function() {
            sessionStorage.setItem("ViewApps", true);
            location.reload();
        });

        $('.optionCurrency').click(function() {
            if ($(this).hasClass("euroCurrency")) {
                $(".euro").show();
                $(".dollaro").hide();
                $(".sterlina").hide();
                $(".currencyDetail").html(" €");
                $(".myCurrency").html("€");
            } else if ($(this).hasClass("dollarCurrency")) {
                $(".dollaro").show();
                $(".sterlina").hide();
                $(".euro").hide();
                $(".currencyDetail").html(" $");
                $(".myCurrency").html("$");
            } else {
                $(".sterlina").show();
                $(".dollaro").hide();
                $(".euro").hide();
                $(".currencyDetail").html(" £");
                $(".myCurrency").html("£");
            }

        });

        $(".logo").click(function() {
            $(".welcome-component").slideUp();
            $(".welcome-zone").slideDown();
            $(".cart-icon, .profile-drop, .select-currency").hide();
            $(".alert").hide();
            //$(".form-control").val("");
        });

        $(".go-resetPassword").click(function() {
            $(".welcome-component").slideUp();
            $(".reset-password").slideDown();
        });

        $(".go-upgradeSub").click(function() {
            $(".welcome-component").slideUp();
            $(".goBack-cart").hide();
            $(".select-currency").show();
            $(".select-version").slideDown();
        });

        $(".contactUs").click(function() {
            $(".contact-us").find(".form-control").val("");
            $(".welcome-component").slideUp();
            $(".contact-us").slideDown();
        });


        $(".finish-resetPass").click(function() {
            var correctSave = APP.EVENTS.savePassword();
            if (correctSave) {
                $(".welcome-component").slideUp();
                $(".welcome-zone").slideDown();
            }
        });

        $(".cart-icon").fancybox();
        // $(".cart-icon").click(function() {
        //     // $(".welcome-component").slideUp();
        //     // $(".registration-zone, .select-version").show();
        //     // $(".payment-zone").slideDown();


        // });
    };

    APP.EVENTS.getQueryString = function(variable, query) {
        // Returns query string value from URL.
        // Can pass in a URL string via query parm
        if (query) {
            query = query.split('?')[1];
        } else {
            query = window.location.search.substring(1);
        }
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == variable) {
                return unescape(pair[1]);
            }
        }
    };


})(window.APP = window.APP || {});
