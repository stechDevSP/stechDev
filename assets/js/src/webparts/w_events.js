(function(APP) {
    "use strict";

    /**
     * Root of the application
     */
    APP.EVENTS = {
    };


    APP.EVENTS.savePassword = function() {
        return true;
    };

    APP.EVENTS.mainEvents = function() {
        var viewApps = sessionStorage.getItem("ViewApps");
        if (viewApps) {
            $(".welcome-component").slideUp();
            $(".my-select-apps-zone").slideDown();
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

        $(".finish-resetPass").click(function() {
            var correctSave = APP.EVENTS.savePassword();
            if (correctSave) {
                $(".welcome-component").slideUp();
                $(".welcome-zone").slideDown();
            }
        });
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

    APP.EVENTS.appsEvents = function() {
        $(".selectPackage").click(function() {
            if ($(".cart-container").html() === "No apps selected") {
                $(".cart-container").empty();
            }

            var idPackage = $(this).data("card-id");
            var htmlCard = "<div class='infoCardAdded cardAdded_" + idPackage + "'><div class='logoDetails'><img src='" + $(".infoCard_" + idPackage).find(".logoCard").html() + "' /></div><div class='titleCard'>" + $(".cardTitle_" + idPackage).html() + "</div><div class='descriptionCard'>" + $(".infoCard_" + idPackage).find(".description").html() + "</div><div class='priceCardDetails'>Standard package:<b><span class='selectedEuroPriceDet'>" + $(".infoCard_" + idPackage).find(".euroPrice").find(".priceCard").html() + "</span><span class='selectedSterlinPriceDet'>" + $(".infoCard_" + idPackage).find(".sterlinPrice").find(".priceCard").html() + "</span><span class='selectedDollarPriceDet'>" + $(".infoCard_" + idPackage).find(".dollarPrice").find(".priceCard").html() + "</span></b><span class='currencyDetail'> " + $(".myCurrency").html()  + "</span></div><div class='priceSubDetails'>Standard package subscription:<b><span class='selectedEuroSubPriceDet'>" + $(".infoCard_" + idPackage).find(".euroPrice").find(".priceSub").html() + "</span><span class='selectedDollarSubPriceDet'>" + $(".infoCard_" + idPackage).find(".dollarPrice").find(".priceSub").html() + "</span><span class='selectedSterlinSubPriceDet'>" + $(".infoCard_" + idPackage).find(".sterlinPrice").find(".priceSub").html() + "</span></b><span class='currencyDetail'>" + $(".myCurrency").html()  + "</span></div><div class='hiddenInfo'><div class='pic1Details'>" + $(".infoCard_" + idPackage).find(".pic1Card").html() + "</div><div class='pic2Details'>" + $(".infoCard_" + idPackage).find(".pic2Card").html() + "</div><div class='pic3Details'>" + $(".infoCard_" + idPackage).find(".pic3Card").html() + "</div><div class='descrFullDetails'>" + $(".infoCard_" + idPackage).find(".descrFull").html() + "</div></div><div class='deleteCard' id='deleteCard_" + idPackage + "' data-card-id='" + idPackage + "'><img class='icon icons8-Delete' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAABEklEQVRIS+WWyxHCMAxEdzugA+gAqICkYkogdJB0QAl0IEaMPZOPLDk55BIfg60nrbQaiJ0Od+LgICAROQF4JVlbkl9P4pr7C+lGj24peA+gCKu9b4E6AI9ZBSbMgORnHcl2HMMCadCrIdUE5kD06UAyK/IPVZJOqyrCUhLaw0mw9H0A0Mz7ao53ytaDacxqiFlRliyAWUNoVpIvuoZdAXMhbkUrKgshtSDtxRPApWBa12e10ilEp0s3hXdCWLFHIlILyQm4sNJ4exDtiZ7Q1NFmiCBNCuCaOjSsiHwAnI2GTKYrMjXJe1SRtVTNEXZgb5K58upd5/rEgG3adZrNYkHOZR3BivcP8p8h2AKbft5Nuh8LOJobI3DWvwAAAABJRU5ErkJggg==' width='26' height='26' /></div></div>";

            $(".cart-container").append(htmlCard);
            $(".card_" + idPackage).hide();
            $(".cart-buttons, .confirm-cart, .clean-cart, .clean-sel-cart, .confirm-sel-cart").show();

            var newCounter = parseInt($(".orderNumber").html()) + 1;
            $(".orderNumber").html(newCounter);

            var newTotal = parseInt($(".infoCard_" + idPackage).find(".euroPrice").find(".priceCard").html()) + parseInt($(".totale-cart-value").html());
            $(".totale-cart-value").html(newTotal);

            var newSubTotal = parseInt($(".infoCard_" + idPackage).find(".euroPrice").find(".priceSub").html()) + parseInt($(".totale-sub-value").html());
            $(".totale-sub-value").html(newSubTotal);

            var newTotalSterlin = parseInt($(".infoCard_" + idPackage).find(".sterlinPrice").find(".priceCard").html()) + parseInt($(".totale-cart-value-sterlin").html());
            $(".totale-cart-value-sterlin").html(newTotalSterlin);

            var newSubTotalSterlin = parseInt($(".infoCard_" + idPackage).find(".sterlinPrice").find(".priceSub").html()) + parseInt($(".totale-sub-value-sterlin").html());
            $(".totale-sub-value-sterlin").html(newSubTotalSterlin);

            var newTotalDollar = parseInt($(".infoCard_" + idPackage).find(".dollarPrice").find(".priceCard").html()) + parseInt($(".totale-cart-value-dollar").html());
            $(".totale-cart-value-dollar").html(newTotalDollar);

            var newSubTotalDollar = parseInt($(".infoCard_" + idPackage).find(".dollarPrice").find(".priceSub").html()) + parseInt($(".totale-sub-value-dollar").html());
            $(".totale-sub-value-dollar").html(newSubTotalDollar);

            $("#deleteCard_" + idPackage).click(function(e) {
                e.preventDefault();
                var idPackage = $(this).data("card-id");
                $(".cardAdded_" + idPackage).remove();

                var newCounter = parseInt($(".orderNumber").html()) - 1;
                $(".orderNumber").html(newCounter);

                var newTotal = parseInt($(".totale-cart-value").html()) - parseInt($(".infoCard_" + idPackage).find(".euroPrice").find(".priceCard").html());
                $(".totale-cart-value").html(newTotal);

                var newSubTotal = parseInt($(".totale-sub-value").html()) - parseInt($(".infoCard_" + idPackage).find(".euroPrice").find(".priceSub").html());
                $(".totale-sub-value").html(newSubTotal);

                var newTotalSterlin = parseInt($(".totale-cart-value-sterlin").html()) - parseInt($(".infoCard_" + idPackage).find(".sterlinPrice").find(".priceCard").html());
                $(".totale-cart-value-sterlin").html(newTotalSterlin);

                var newSubTotalSterlin = parseInt($(".totale-sub-value-sterlin").html()) - parseInt($(".infoCard_" + idPackage).find(".sterlinPrice").find(".priceSub").html());
                $(".totale-sub-value-sterlin").html(newSubTotalSterlin);

                var newTotalDollar = parseInt($(".totale-cart-value-dollar").html()) - parseInt($(".infoCard_" + idPackage).find(".dollarPrice").find(".priceCard").html());
                $(".totale-cart-value-dollar").html(newTotalDollar);

                var newSubTotalDollar = parseInt($(".totale-sub-value-dollar").html()) - parseInt($(".infoCard_" + idPackage).find(".dollarPrice").find(".priceSub").html());
                $(".totale-sub-value-dollar").html(newSubTotalDollar);

                $(".card_" + idPackage).show();

                if (newCounter === 0) {
                    $(".cart-container").html("No apps selected");
                    $(".confirm-cart, .clean-cart").hide();
                }
            });
        });

        $(".cart-icon, .confirm-sel-cart").click(function() {
            $(".select-apps-zone, .payment-zone, .select-version").slideUp();
            $(".cart-details").slideDown();
            $(".select-currency").show();
        });
    };

    APP.EVENTS.cartDetailsEvents = function() {
        $(".clean-sel-cart").click(function() {
            $(".cart-container").html("No apps selected");
            $(".totale-cart-value, .totale-sub-value, .orderNumber").html(0);
            $(".card").show();
            $(".confirm-cart, .clean-cart").hide();
        });
    };

    APP.EVENTS.checkLoginReturn = function() {
        return true;
    };

    APP.EVENTS.loginEvents = function() {
        $(".finish-login").click(function() {
            var checkLogin = APP.EVENTS.checkLoginReturn();
            if (checkLogin) {
                $(".loginFailed").hide();
                $(".login-form").slideUp();
                $(".my-select-apps-zone").slideDown();
                $(".profile-drop").show();
                $(".cart-icon, .confirm-version, .cart-buttons, .clean-cart, .confirm-cart, .clean-version").hide();
            } else {
                $(".profile-drop").hide();
                $(".loginFailed").show();
            }
        });

        $(".go-shop").click(function() {
            $(".my-select-apps-zone").slideUp();
            $(".select-apps-zone").slideDown();
            $(".start-apps, .cardShop").hide();
            $(".cart-icon, .suggested-apps, .select-currency").show();

            var appsRemain = JSON.parse(sessionStorage.getItem("AppsShop"));
            $.each(appsRemain, function(index, value) {
                $(".cardId_" + value.Id).show();
            });

            $(".cart-container").html("No apps selected");
            $(".totale-cart-value, .totale-sub-value, .orderNumber").html(0);

            $(".packageVersions").hide();
            var versionSelected = sessionStorage.getItem("PackageSelected");
            $("." + versionSelected).show();
            $("." + versionSelected).addClass("packageSel");
        });

        $(".goBack-selectApps").click(function() {
            sessionStorage.setItem("ViewApps", true);
            location.reload();
        });
    };

    APP.EVENTS.startPageEvents = function() {
        $(".continue-select").click(function() {
            sessionStorage.setItem("ViewApps", false);
            $(".welcome-zone").slideUp();
            $(".register-form").slideDown();

        });

        $(".login-select").click(function() {
            sessionStorage.setItem("ViewApps", false);
            $(".welcome-zone").slideUp();
            $(".login-form").slideDown();
        });
    };


})(window.APP = window.APP || {});
