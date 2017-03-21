function appsEvents() {
    $(".selectPackage").click(function() {
        if ($(".cart-container").html() === "No apps selected") {
            $(".cart-container").empty();
        }

        var idPackage = $(this).data("card-id");
        var htmlCard = "<div class='infoCardAdded cardAdded_" + idPackage + "'><div class='titleCard'>" + $(".cardTitle_" + idPackage).html() + "</div><div class='descriptionCard'>" + $(".infoCard_" + idPackage).find(".description").html() + "</div><div class='priceCardDetails'>Standard package: <b>" + $(".infoCard_" + idPackage).find(".priceCard").html() + " euro</b></div><div class='priceSubDetails'>Standard package subscription: <b>" + $(".infoCard_" + idPackage).find(".priceSub").html() + " euro</b></div><div class='deleteCard' id='deleteCard_" + idPackage + "' data-card-id='" + idPackage + "'><img class='icon icons8-Delete' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAABEklEQVRIS+WWyxHCMAxEdzugA+gAqICkYkogdJB0QAl0IEaMPZOPLDk55BIfg60nrbQaiJ0Od+LgICAROQF4JVlbkl9P4pr7C+lGj24peA+gCKu9b4E6AI9ZBSbMgORnHcl2HMMCadCrIdUE5kD06UAyK/IPVZJOqyrCUhLaw0mw9H0A0Mz7ao53ytaDacxqiFlRliyAWUNoVpIvuoZdAXMhbkUrKgshtSDtxRPApWBa12e10ilEp0s3hXdCWLFHIlILyQm4sNJ4exDtiZ7Q1NFmiCBNCuCaOjSsiHwAnI2GTKYrMjXJe1SRtVTNEXZgb5K58upd5/rEgG3adZrNYkHOZR3BivcP8p8h2AKbft5Nuh8LOJobI3DWvwAAAABJRU5ErkJggg==' width='26' height='26' /></div></div>";
        $(".cart-container").append(htmlCard);
        $(".card_" + idPackage).hide();
        $(".confirm-cart, .clean-cart, .clean-sel-cart, .confirm-sel-cart").show();

        var newCounter = parseInt($(".orderNumber").html()) + 1;
        $(".orderNumber").html(newCounter);

        var newTotal = parseInt($(".infoCard_" + idPackage).find(".priceCard").html()) + parseInt($(".totale-cart-value").html());
        $(".totale-cart-value").html(newTotal);

        var newSubTotal = parseInt($(".infoCard_" + idPackage).find(".priceSub").html()) + parseInt($(".totale-sub-value").html());
        $(".totale-sub-value").html(newSubTotal);

        $("#deleteCard_" + idPackage).click(function(e) {
            e.preventDefault();
            var idPackage = $(this).data("card-id");
            $(".cardAdded_" + idPackage).remove();

            var newCounter = parseInt($(".orderNumber").html()) - 1;
            $(".orderNumber").html(newCounter);

            var newTotal = parseInt($(".totale-cart-value").html()) - parseInt($(".infoCard_" + idPackage).find(".priceCard").html());
            $(".totale-cart-value").html(newTotal);

            var newSubTotal = parseInt($(".totale-sub-value").html()) - parseInt($(".infoCard_" + idPackage).find(".priceSub").html());
            $(".totale-sub-value").html(newSubTotal);

            $(".card_" + idPackage).show();

            if (newCounter === 0) {
                $(".cart-container").html("No apps selected");
                $(".confirm-cart, .clean-cart").hide();
            }
        });
    });

    $(".cart-icon, .confirm-sel-cart").click(function() {
        $(".select-apps-zone").slideUp();
        $(".payment-zone").slideUp();
        $(".select-version").slideUp();
        $(".cart-details").slideDown();
    });
}

function cartDetailsEvents() {
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

        $(".standard").find(".priceVersion").html(priceStandard + "€");
        $(".standard").find(".valuePrice").html(subStandard + "€");

        $(".enterprise").find(".priceVersion").html(priceEnterprise + "€");
        $(".enterprise").find(".valuePrice").html(subEnterprise + "€");

        $(".premium").find(".priceVersion").html(pricePremium + "€");
        $(".premium").find(".valuePrice").html(subPremium + "€");
    });
}

function loginEvents() {
    $(".login-select").click(function() {
        $(".welcome-zone").slideUp();
        $(".login-form").slideDown();
    });
}

function paymentEvents() {
    $(".goBack-package").click(function() {
        $(".payment-zone").slideUp();
        $(".select-version").slideDown();
    });

    $(".confirm-payment").click(function() {
        var r = confirm("Are you sure to pay these apps?");
        if (r == true) {
            console.log("Finish payment...You pressed OK!");
        } else {
            console.log("You pressed Cancel!");
        }
    });
}

function registrationEvents() {
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
            if ($(".companyPassword").val() === $(".companyConfirmPassword").val()) {
                $(".register-form").slideUp();
                $(".select-apps-zone").slideDown();
                $(".cart-icon").show();
                $(".companyNameAlert").hide();
                $(".companyLocationAlert").hide();
                $(".companyEmailAlert").hide();
                $(".companyPasswordAlert").hide();
                $(".companyConfirmPassAlert").hide();
                $(".companyConfirmPassAlert2").hide();
            } else {
                $(".companyConfirmPassAlert2").show();
            }

        }
    });

    $(".clean-register").click(function() {
        $(".register-form").find("input").val("");
    });
}

function startPageEvents() {
    $(".continue-select").click(function() {
        $(".welcome-zone").slideUp();
        $(".register-form").slideDown();

    });
}

function versionEvents() {
    $(".goBack-cart").click(function() {
        $(".select-version").slideUp();
        $(".cart-details").slideDown();
    });

    $(".package").click(function() {
        $(".package").removeClass("packageSel");
        $(this).addClass("packageSel");
        $(".clean-version").show();
        $(".confirm-version").show();

        $(".pricePackageSel").html($(this).find(".priceVersion").html() + "€");
        $(".subPackageSel").html($(this).find(".valuePrice").html() + "€");
        $(".packageSelected").html($(this).find(".nameVersion").html());
    });

    $(".clean-version").click(function() {
        $(".package").removeClass("packageSel");
    });


    $(".confirm-version").click(function() {
        var r = confirm("Are you sure to buy these business plan?");
        if (r == true) {
            console.log("Go to the payment...You pressed OK!");
            var totalToPay = parseInt($(".pricePackageSel").html()) + parseInt($(".subPackageSel").html());
            var divPayment = "<div class='packageBusiness'>Your business plan: <b>" + $(".packageSelected").html() + "</b></div><div class='startPricePay'>Start bundle: " + $(".pricePackageSel").html() + " €</div><div class='subPricePay'>Monthly Subscription:" + $(".subPackageSel").html() + " €</div><div class='totalToPay'>Total = " + totalToPay + " €</div>";
            $(".payment-container").html(divPayment);
            $(".numberPackages").html($(".orderNumber").html());

            $(".select-version").slideUp();
            $(".payment-zone").slideDown();
        } else {
            console.log("You pressed Cancel!");
        }
    });
}
