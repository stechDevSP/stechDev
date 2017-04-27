import React from 'react';
import ReactDOM from 'react-dom';

export class Payment extends React.Component {
    getInitialState() {
        return {
            myPrice: 0,
            myCurrency: 'EUR',
            showFinalButton: false
        };
    }
    constructor(props) {
        super(props);
        var self = this;

        this.goBackClick = this.goBackClick.bind(this);
        this.finishClick = this.finishClick.bind(this);


        var totalToPay = this.props.finalValue;

        var totalToPayEuro = this.props.totalToPayEuro;
        var totalToPaySterlin = this.props.totalToPaySterlin;
        var totalToPayDollar = this.props.totalToPayDollar;

        var valueToPayEuro = this.props.valueToPayEuro;
        var valueToPaySterlin = this.props.valueToPaySterlin;
        var valueToPayDollar = this.props.valueToPayDollar;

        var subToPayEuro = this.props.subToPayEuro;
        var subToPaySterlin = this.props.subToPaySterlin;
        var subToPayDollar = this.props.subToPayDollar;

        var mySelectedCurrency = this.props.myCurrency;
        var numberPackages = this.props.numberPackages;
        var packageSelected = this.props.packageSelected;

        var myAppsDetails = sessionStorage.getItem("MyAppsDetails");
        var currencyFinalDetails = sessionStorage.getItem("MyPaymentDetails");

        self.state = {
            myPrice: totalToPay,
            myCurrency: mySelectedCurrency,
            totalToPayEuro: totalToPayEuro,
            totalToPaySterlin: totalToPaySterlin,
            totalToPayDollar: totalToPayDollar,
            valueToPayEuro: valueToPayEuro,
            valueToPaySterlin: valueToPaySterlin,
            valueToPayDollar: valueToPayDollar,
            subToPayEuro: subToPayEuro,
            subToPaySterlin: subToPaySterlin,
            subToPayDollar: subToPayDollar,
            numberPackages: numberPackages,
            packageSelected: packageSelected,
            myAppsDetails: myAppsDetails,
            currencyFinalDetails: currencyFinalDetails
        };

        if ($(".myCurrency").html() === "€") {
            $(".euro").show();
            $(".dollaro").hide();
            $(".sterlina").hide();
        } else if ($(".myCurrency").html() === "$") {
            $(".dollaro").show();
            $(".sterlina").hide();
            $(".euro").hide();
        } else {
            $(".sterlina").show();
            $(".dollaro").hide();
            $(".euro").hide();
        }
    }
    goBackClick() {
        $(".payment-zone").slideUp();
        $(".btn-versions").hide();
        $(".select-currency").show();
        $(".package").removeClass("packageSel");
        $(".version-select-zone").slideDown();
    }
    finishClick() {
        // var r = confirm("Are you sure to pay these apps?");
        // if (r == true) {
            console.log("Finish payment...You pressed OK!");
            var companyName = $(".companyName").html();
            var urlSite = APP.EVENTS.getQueryString("SPUrl");

            var storedApps = [];
            var storedNameApps = [];

            $.each($(".content").find(".infoCardAdded"), function(index, value) {
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
            console.log("Your apps is stored");

            sessionStorage.setItem("PackageSelected", this.props.packageSelected);
            sessionStorage.setItem("CompanyName", companyName);
            sessionStorage.setItem("UrlSite", urlSite);

            sessionStorage.removeItem("AppsSelected");
            sessionStorage.setItem("AppsSelected", JSON.stringify(storedApps));

            var arrayUsersStorage = sessionStorage.getItem("registeredUsers");
            sessionStorage.setItem("finalRegisteredUsers", arrayUsersStorage);

            location.reload();
        // } else {
        //     console.log("You pressed Cancel!");
        // }
    }
    render() {
        return (
            <div>
                <div className="goBack-package" onClick={() => this.goBackClick()}>
                    <img className="icon icons8-Long-Arrow-Left" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAA30lEQVRIS+2U/Q2CMBTE7ybQDWQDdQNHcARH0wl0Ax3BEXADneCZI21SPgOlEGPoX9Dy+utdj0fMNDgTBwso2unfsM7MMgBXySC5j5aj+rZiM9sBuANYO9Ao9Y3FZnZwSgrIJCAzO3q7QrUk0ymq2tVg6xvAM5h/BM+a17rGi2ReOqh/6QGJycKF5KmwPgDpBJuY3bpqvOUhSNK3c4D0zwi2SgirW6fN3T3pgttgn55hyFvDUAlFDZY03l2wSUCBjTefxMlADqYWdAaQkVTvix6j2soQ6gIa4lbp2/+z7gvHwkYbyI5xugAAAABJRU5ErkJggg==" width="26" height="26" />
                    <div className="backLabel">Back to business plan</div>
                </div>
                <div className="cart">
                    <div className="cart-title">Your will bought <span className="numberPackages">{this.state.numberPackages}</span> apps:</div>
                    <div className="cart-container">
                        <div className="content" dangerouslySetInnerHTML={{__html: this.state.myAppsDetails}}></div>
                    </div>
                    <div className="payment-container">
                        <div className='packageBusiness'>Your business plan: <b>{this.state.packageSelected}</b>
                        </div>
                        <div className="content" dangerouslySetInnerHTML={{__html: this.state.currencyFinalDetails}}></div>
                    </div>
                    <form method="post" action="https://www.sandbox.paypal.com/cgi-bin/webscr" className="paypal-button" target="_top">
                        <div className="hide" id="errorBox"></div>
                        <input type="hidden" name="button" value="buynow" />
                        <input type="hidden" name="item_name" value="Stech" />
                        <input type="hidden" name="amount" value={this.state.myPrice} />
                        <input type="hidden" name="currency_code" value={this.state.myCurrency} />
                        <input type="hidden" name="shipping" value="0" />
                        <input type="hidden" name="tax" value="0" />
                        <input type="hidden" name="notify_url" value="https://paypal.github.io/JavaScriptButtons/test" />
                        <input type="hidden" name="env" value="www.sandbox" />
                        <input type="hidden" name="cmd" value="_xclick" />
                        <input type="hidden" name="business" value="stechDevSP@gmail.com" />
                        <input type="hidden" name="bn" value="JavaScriptButton_buynow" />
                        <button type="submit" className="btn-paypal" onClick={() => this.finishClick()}>&nbsp;</button>
                    </form>
                </div>
            </div>
        );
    }
}
