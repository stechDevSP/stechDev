import React from 'react';
import ReactDOM from 'react-dom';
import fx from 'money';

export class Payment extends React.Component {
    constructor(props) {
        super(props);
        var self = this;

        this.goBackClick = this.goBackClick.bind(this);
        this.finishClick = this.finishClick.bind(this);
    }
    goBackClick() {
        $(".payment-zone").slideUp();
        $(".btn-versions").hide();
        $(".package").removeClass("packageSel");
        $(".select-version").slideDown();
    }

    finishClick() {
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
            console.log("Your apps is stored");

            sessionStorage.setItem("PackageSelected", packageSel);
            sessionStorage.setItem("CompanyName", companyName);
            sessionStorage.setItem("UrlSite", urlSite);
            sessionStorage.setItem("AppsSelected", JSON.stringify(storedApps));

            location.reload();
        } else {
            console.log("You pressed Cancel!");
        }
    }

    render() {
        return (
            <div>
                    <div className="goBack-package" onClick={() => this.goBackClick()}>
                        <img className="icon icons8-Long-Arrow-Left" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAA30lEQVRIS+2U/Q2CMBTE7ybQDWQDdQNHcARH0wl0Ax3BEXADneCZI21SPgOlEGPoX9Dy+utdj0fMNDgTBwso2unfsM7MMgBXySC5j5aj+rZiM9sBuANYO9Ao9Y3FZnZwSgrIJCAzO3q7QrUk0ymq2tVg6xvAM5h/BM+a17rGi2ReOqh/6QGJycKF5KmwPgDpBJuY3bpqvOUhSNK3c4D0zwi2SgirW6fN3T3pgttgn55hyFvDUAlFDZY03l2wSUCBjTefxMlADqYWdAaQkVTvix6j2soQ6gIa4lbp2/+z7gvHwkYbyI5xugAAAABJRU5ErkJggg==" width="26" height="26" />
                        <div className="backLabel">Back to business plan</div>
                    </div>
                    <div className="cart">
                        <div className="cart-title">Your will bought <span className="numberPackages">0</span> apps:</div>
                        <div className="cart-container"></div>
                        <div className="payment-container">
                                    
                        </div>

                        
                        <div>
                            <div><img className="buttonPayPal" src="../_img/png/paypal-button.jpg" width="200" /></div>
                            <div id="button-Paypal"></div>
                        </div>
                        <div className="btn-welcome confirm-payment" onClick={() => this.finishClick()}>Confirm</div>
                    </div>
                </div>
        );
    }
}
