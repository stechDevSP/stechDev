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
                $(".dollarPrice").hide();
                $(".sterlinPrice").hide();
                $(".euroPrice").show();

                $(".selectedSterlinPriceDet").hide();
                $(".selectedDollarPriceDet").hide();
                $(".selectedEuroPriceDet").show();

                $(".selectedSterlinSubPriceDet").hide();
                $(".selectedDollarSubPriceDet").hide();
                $(".selectedEuroSubPriceDet").show();

                $(".sterlin-total-cart").hide();
                $(".dollar-total-cart").hide();
                $(".euro-total-cart").show();

                $(".priceSterlinVersion").hide();
                $(".valueSterlinPrice").hide();

                $(".priceDollarVersion").hide();
                $(".valueDollarPrice").hide();

                $(".priceEuroVersion").show();
                $(".valueEuroPrice").show();

                $(".currencyDetail").html(" €");
                $(".myCurrency").html("€");
            } else if ($(this).hasClass("dollarCurrency")) {
                $(".euroPrice").hide();
                $(".sterlinPrice").hide();
                $(".dollarPrice").show();

                $(".selectedEuroPriceDet").hide();
                $(".selectedSterlinPriceDet").hide();
                $(".selectedDollarPriceDet").show();

                $(".selectedEuroSubPriceDet").hide();
                $(".selectedSterlinSubPriceDet").hide();
                $(".selectedDollarSubPriceDet").show();

                $(".euro-total-cart").hide();
                $(".sterlin-total-cart").hide();
                $(".dollar-total-cart").show();

                $(".priceEuroVersion").hide();
                $(".valueEuroPrice").hide();

                $(".priceSterlinVersion").hide();
                $(".valueSterlinPrice").hide();

                $(".priceDollarVersion").show();
                $(".valueDollarPrice").show();

                $(".currencyDetail").html(" $");
                $(".myCurrency").html("$");
            } else {
                $(".euroPrice").hide();
                $(".dollarPrice").hide();
                $(".sterlinPrice").show();

                $(".selectedEuroPriceDet").hide();
                $(".selectedDollarPriceDet").hide();
                $(".selectedSterlinPriceDet").show();

                $(".selectedEuroSubPriceDet").hide();
                $(".selectedDollarSubPriceDet").hide();
                $(".selectedSterlinSubPriceDet").show();

                $(".euro-total-cart").hide();
                $(".dollar-total-cart").hide();
                $(".sterlin-total-cart").show();

                $(".priceEuroVersion").hide();
                $(".valueEuroPrice").hide();

                $(".priceDollarVersion").hide();
                $(".valueDollarPrice").hide();

                $(".priceSterlinVersion").show();
                $(".valueSterlinPrice").show();

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
        $(".goBack-apps").click(function() {
            $(".cart-details").slideUp();
            $(".select-apps-zone").slideDown();
        });

        $(".clean-cart, .clean-sel-cart").click(function() {
            $(".cart-container").html("No apps selected");
            $(".totale-cart-value, .totale-sub-value, .orderNumber").html(0);
            $(".card").show();
            $(".confirm-cart, .clean-cart").hide();
        });

        $(".confirm-cart").click(function() {
            $(".cart-details").slideUp();
            $(".select-version").slideDown();

            var priceStandard = parseInt($(".totale-cart-value").html());
            var priceEnterprise = parseInt($(".totale-cart-value").html()) * 5;
            var pricePremium = parseInt($(".totale-cart-value").html()) * 10;

            var subStandard = parseInt($(".totale-sub-value").html());
            var subEnterprise = parseInt($(".totale-sub-value").html()) * 5;
            var subPremium = parseInt($(".totale-sub-value").html()) * 10;

            $(".standard").find(".priceEuroVersion").html(priceStandard + $(".myCurrency").html() );
            $(".standard").find(".valueEuroPrice").html(subStandard + $(".myCurrency").html() );

            $(".enterprise").find(".priceEuroVersion").html(priceEnterprise + $(".myCurrency").html() );
            $(".enterprise").find(".valueEuroPrice").html(subEnterprise + $(".myCurrency").html() );

            $(".premium").find(".priceEuroVersion").html(pricePremium + $(".myCurrency").html() );
            $(".premium").find(".valueEuroPrice").html(subPremium + $(".myCurrency").html() );


            var priceSterlinStandard = parseInt($(".totale-cart-value-sterlin").html());
            var priceSterlinEnterprise = parseInt($(".totale-cart-value-sterlin").html()) * 5;
            var priceSterlinPremium = parseInt($(".totale-cart-value-sterlin").html()) * 10;

            var subSterlinStandard = parseInt($(".totale-sub-value-sterlin").html());
            var subSterlinEnterprise = parseInt($(".totale-sub-value-sterlin").html()) * 5;
            var subSterlinPremium = parseInt($(".totale-sub-value-sterlin").html()) * 10;

            $(".standard").find(".priceSterlinVersion").html(priceSterlinStandard + " £");
            $(".standard").find(".valueSterlinPrice").html(subSterlinStandard + " £");

            $(".enterprise").find(".priceSterlinVersion").html(priceSterlinEnterprise + " £");
            $(".enterprise").find(".valueSterlinPrice").html(subSterlinEnterprise + " £");

            $(".premium").find(".priceSterlinVersion").html(priceSterlinPremium + " £");
            $(".premium").find(".valueSterlinPrice").html(subSterlinPremium + " £");


            var priceDollarStandard = parseInt($(".totale-cart-value-dollar").html());
            var priceDollarEnterprise = parseInt($(".totale-cart-value-dollar").html()) * 5;
            var priceDollarPremium = parseInt($(".totale-cart-value-dollar").html()) * 10;

            var subDollarStandard = parseInt($(".totale-sub-value-dollar").html());
            var subDollarEnterprise = parseInt($(".totale-sub-value-dollar").html()) * 5;
            var subDollarPremium = parseInt($(".totale-sub-value-dollar").html()) * 10;

            $(".standard").find(".priceDollarVersion").html(priceDollarStandard + " $");
            $(".standard").find(".valueDollarPrice").html(subDollarStandard + " $");

            $(".enterprise").find(".priceDollarVersion").html(priceDollarEnterprise + " $");
            $(".enterprise").find(".valueDollarPrice").html(subDollarEnterprise + " $");

            $(".premium").find(".priceDollarVersion").html(priceDollarPremium + " $");
            $(".premium").find(".valueDollarPrice").html(subDollarPremium + " $");
        });
    };

    APP.EVENTS.checkLoginReturn = function() {
        return true;
    };

    APP.EVENTS.loginEvents = function() {
        $(".login-select").click(function() {
            sessionStorage.setItem("ViewApps", false);
            $(".welcome-zone").slideUp();
            $(".login-form").slideDown();
        });

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

    APP.EVENTS.paymentEvents = function() {
        $(".goBack-package").click(function() {
            $(".payment-zone").slideUp();
            $(".select-version").slideDown();
        });

        $(".confirm-payment").click(function() {
            var r = confirm("Are you sure to pay these apps?");
            if (r == true) {
                console.log("Finish payment...You pressed OK!");
                var companyName = $(".companyName").html();
                var packageSel = $(".packageSelected").html();
                var urlSite = APP.EVENTS.getQueryString("SPUrl");

                var storedApps = [];
                var storedNameApps = [];

                $.each($(".infoCardAdded"), function(index, value) {
                    var appName = $(this).find(".titleCard").html();
                    var appDescr = $(this).find(".descriptionCard").html();
                    var appDescriptionFull = $(this).find(".descrFull").html();
                    var appPic1 = $(this).find(".pic1Details").html();
                    var appPic2 = $(this).find(".pic2Details").html();
                    var appPic3 = $(this).find(".pic3Details").html();
                    var appStartPrice = $(this).find(".priceDetails").html();
                    var appMonthPrice = $(this).find(".priceSubDetails").html();

                    var appSelected = {
                        "Name": appName,
                        "Description": appDescr,
                        "DescriptionFull": appDescriptionFull,
                        "Pic1": appPic1,
                        "Pic2": appPic2,
                        "Pic3": appPic3,
                        "StartPrice": appStartPrice,
                        "MonthPrice": appMonthPrice
                    };

                    storedApps.push(appSelected);

                    storedNameApps.push(appName);

                });

                sessionStorage.setItem("AppsNames", JSON.stringify(storedNameApps));
                APP.EVENTS.storePaymentApps(companyName, urlSite, storedApps, packageSel);
            } else {
                console.log("You pressed Cancel!");
            }
        });
    };

    APP.EVENTS.storePaymentApps = function(companyName, urlSite, storedApps, packageSel) {
        console.log("Your apps is stored");

        sessionStorage.setItem("PackageSelected", packageSel);
        sessionStorage.setItem("CompanyName", companyName);
        sessionStorage.setItem("UrlSite", urlSite);
        sessionStorage.setItem("AppsSelected", JSON.stringify(storedApps));

        location.reload();
    };

    APP.EVENTS.registrationEvents = function() {
        $(".goBack-homepage").click(function() {
            $(".welcome-component").slideUp();
            $(".welcome-zone").slideDown();
            $(".cart-icon, .select-currency, .profile-drop").hide();
        });

        $(".finish-register").click(function() {
            if ($(".companyName").val() === "") {
                $(".companyNameAlert").show();
            } else {
                $(".companyNameAlert").hide();
            }

            if ($(".companyLocation").val() === "") {
                $(".companyLocationAlert").show();
            } else {
                $(".companyLocationAlert").hide();
            }

            if ($(".companyEmail").val() === "") {
                $(".companyEmailAlert").show();
            } else {
                $(".companyEmailAlert").hide();
            }

            if ($(".companyConfirmEmail").val() === "") {
                $(".companyConfirmEmailAlert").show();
            } else {
                $(".companyConfirmEmailAlert").hide();
            }

            if ($(".companyPassword").val() === "") {
                $(".companyPasswordAlert").show();
            } else {
                $(".companyPasswordAlert").hide();
            }

            if ($(".companyConfirmPassword").val() === "") {
                $(".companyConfirmPassAlert").show();
            } else {
                $(".companyConfirmPassAlert").hide();
            }

            if ($(".companyName").val() !== "" && $(".companyLocation").val() !== "" && $(".companyEmail").val() !== "" && $(".companyPassword").val() !== "" && $(".companyConfirmPassword").val() !== "") {
                if ($(".companyPassword").val() === $(".companyConfirmPassword").val() && $(".companyEmail").val() === $(".companyConfirmEmail").val() && $(".companyEmail").val().indexOf('@') > 0) {
                    $(".register-form").slideUp();
                    $(".select-apps-zone").slideDown();
                    $(".companyNameAlert, .companyLocationAlert, .companyEmailAlert, .companyConfirmEmailAlert, .companyConfirmEmailAlert2, .companyPasswordAlert, .companyConfirmPassAlert, .companyConfirmPassAlert2").hide();
                    $(".cart-icon, .select-currency").show();
                } else {
                    if ($(".companyPassword").val() !== $(".companyConfirmPassword").val()) {
                        $(".companyConfirmPassAlert2").show();
                        $(".companyConfirmEmailAlert2").hide();
                    }
                    if ($(".companyEmail").val() !== $(".companyConfirmEmail").val() || $(".companyEmail").val().indexOf('@') < 0) {
                        $(".companyConfirmEmailAlert2").show();
                        $(".companyConfirmPassAlert2").hide();
                    }
                }

            }
        });

        $(".clean-register").click(function() {
            $(".register-form").find("input").val("");
            $('.alert').hide();
        });
    };

    APP.EVENTS.startPageEvents = function() {
        $(".continue-select").click(function() {
            sessionStorage.setItem("ViewApps", false);
            $(".welcome-zone").slideUp();
            $(".register-form").slideDown();

        });
    };

    APP.EVENTS.versionEvents = function() {
        $(".goBack-cart").click(function() {
            $(".select-version").slideUp();
            $(".cart-details").slideDown();
        });

        $(".package").click(function() {
            $(".package").removeClass("packageSel");
            $(this).addClass("packageSel");
            $(".clean-version, .confirm-version").show();

            $(".priceEuroPackageSel").html($(this).find(".priceEuroVersion").html());
            $(".priceSterlinPackageSel").html($(this).find(".priceSterlinVersion").html());
            $(".priceDollarPackageSel").html($(this).find(".priceDollarVersion").html());

            $(".subEuroPackageSel").html($(this).find(".valueEuroPrice").html());
            $(".subSterlinPackageSel").html($(this).find(".valueSterlinPrice").html());
            $(".subDollarPackageSel").html($(this).find(".valueDollarPrice").html());

            $(".packageSelected").html($(this).find(".nameVersion").html());
        });

        $(".clean-version").click(function() {
            $(".package").removeClass("packageSel");
        });


        $(".confirm-version").click(function() {
            var r = confirm("Are you sure to buy these business plan?");
            if (r == true) {
                console.log("Go to the payment...You pressed OK!");

                var totalToPay = parseInt($(".pricePackageSel").html()) + parseInt($(".subPackageSel").html()) + $(".myCurrency").html() ;
                var divPayment = "<div class='packageBusiness'>Your business plan: <b>" + $(".packageSelected").html() + "</b></div><div class='startPricePay'>Start bundle: " + $(".pricePackageSel").html() + "</div><div class='subPricePay'>Monthly Subscription: " + $(".subPackageSel").html() + "</div><div class='totalToPay'>Total = " + totalToPay + "</div>";
                $(".payment-container").html(divPayment);
                $(".numberPackages").html($(".orderNumber").html());

                $(".select-version").slideUp();
                $(".payment-zone").slideDown();
            } else {
                console.log("You pressed Cancel!");
            }
        });
    };

})(window.APP = window.APP || {});
