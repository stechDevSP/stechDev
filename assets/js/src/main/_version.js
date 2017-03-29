import React from 'react';
import ReactDOM from 'react-dom';
import fx from 'money';

export class Version extends React.Component {
    constructor(props) {
        super(props);
        var self = this;

        this.goBackClick = this.goBackClick.bind(this);
        this.selectClick = this.selectClick.bind(this);
        this.finishClick = this.finishClick.bind(this);
        this.cleanClick = this.cleanClick.bind(this);
    }
    goBackClick() {
        $(".select-version").slideUp();
        $(".cart-details").slideDown();
    }
    selectClick(classClick) {
        $(".package").removeClass("packageSel");
        $("." + classClick).find(".package").addClass("packageSel");
        $(".clean-version, .confirm-version").show();

        $(".priceEuroPackageSel").html($("." + classClick).find(".priceEuroVersion").html());
        $(".priceSterlinPackageSel").html($("." + classClick).find(".priceSterlinVersion").html());
        $(".priceDollarPackageSel").html($("." + classClick).find(".priceDollarVersion").html());

        $(".subEuroPackageSel").html($("." + classClick).find(".valueEuroPrice").html());
        $(".subSterlinPackageSel").html($("." + classClick).find(".valueSterlinPrice").html());
        $(".subDollarPackageSel").html($("." + classClick).find(".valueDollarPrice").html());

        $(".packageSelected").html($("." + classClick).find(".nameVersion").html());
    }
    finishClick() {
        var r = confirm("Are you sure to buy these business plan?");
        if (r == true) {
            console.log("Go to the payment...You pressed OK!");

            var totalToPay = parseInt($(".pricePackageSel").html()) + parseInt($(".subPackageSel").html()) + $(".myCurrency").html();
            var divPayment = "<div class='packageBusiness'>Your business plan: <b>" + $(".packageSelected").html() + "</b></div><div class='startPricePay'>Start bundle: " + $(".pricePackageSel").html() + "</div><div class='subPricePay'>Monthly Subscription: " + $(".subPackageSel").html() + "</div><div class='totalToPay'>Total = " + totalToPay + "</div>";
            $(".payment-container").html(divPayment);
            $(".numberPackages").html($(".orderNumber").html());

            $(".select-version").slideUp();
            $(".payment-zone").slideDown();
        } else {
            console.log("You pressed Cancel!");
        }
    }
    cleanClick() {
        $(".package").removeClass("packageSel");
    }
    render() {
        return (
            <div className="col-md-12 welcome-component select-version">
                    <div className="goBack-cart" onClick={() => this.goBackClick()}>
                        <img className="icon icons8-Long-Arrow-Left" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAA30lEQVRIS+2U/Q2CMBTE7ybQDWQDdQNHcARH0wl0Ax3BEXADneCZI21SPgOlEGPoX9Dy+utdj0fMNDgTBwso2unfsM7MMgBXySC5j5aj+rZiM9sBuANYO9Ao9Y3FZnZwSgrIJCAzO3q7QrUk0ymq2tVg6xvAM5h/BM+a17rGi2ReOqh/6QGJycKF5KmwPgDpBJuY3bpqvOUhSNK3c4D0zwi2SgirW6fN3T3pgttgn55hyFvDUAlFDZY03l2wSUCBjTefxMlADqYWdAaQkVTvix6j2soQ6gIa4lbp2/+z7gvHwkYbyI5xugAAAABJRU5ErkJggg==" width="26" height="26" />
                        <div className="backLabel">Back to cart</div>
                    </div>
                    <div className="title-select-version">Select your Business Plan</div>
                    <div className="col-md-12 container-packages">
                        <div className="col-md-4 animated fadeindown packageVersions standard">
                            <div className="package" onClick={() => this.selectClick("standard")}>
                                <div className="nameVersion">Standard</div>
                                <div className="detailsVersion">
                                    <ul className="featurePackage">
                                        <li>Up to 1 site collection installation</li>
                                    </ul>
                                </div>
                                <div className="euro priceEuroVersion">
                                    
                                </div>
                                <div className="sterlina priceSterlinVersion">
                                    
                                </div>
                                <div className="dollaro priceDollarVersion">
                                    
                                </div>
                                <div className="subPriceVersion">
                                    <div className="titlePrice">Subscription</div>
                                    <div className="euro valueEuroPrice"></div>
                                    <div className="sterlina valueSterlinPrice"></div>
                                    <div className="dollaro valueDollarPrice"></div>
                                    <div className="titlePrice"> monthly</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 animated fadeindown packageVersions enterprise">
                            <div className="package" onClick={() => this.selectClick("enterprise")}>
                                <div className="nameVersion">Enterprise</div>
                                <div className="detailsVersion">
                                    <ul className="featurePackage">
                                        <li>From 1 to 5 site collections</li>
                                    </ul>
                                </div>
                                <div className="euro priceEuroVersion">
                                    
                                </div>
                                <div className="sterlina priceSterlinVersion">
                                    
                                </div>
                                <div className="dollaro priceDollarVersion">
                                    
                                </div>
                                <div className="subPriceVersion">
                                    <div className="titlePrice">Subscription</div>
                                    <div className="euro valueEuroPrice"></div>
                                    <div className="sterlina valueSterlinPrice"></div>
                                    <div className="dollaro valueDollarPrice"></div>
                                    <div className="titlePrice"> monthly</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 animated fadeindown packageVersions premium">
                            <div className="package" onClick={() => this.selectClick("premium")}>
                                <div className="nameVersion">Premium</div>
                                <div className="detailsVersion">
                                    <ul className="featurePackage">
                                        <li>Unlimited site collections</li>
                                    </ul>
                                </div>
                                <div className="euro priceEuroVersion">
                                    
                                </div>
                                <div className="sterlina priceSterlinVersion">
                                    
                                </div>
                                <div className="dollaro priceDollarVersion">
                                    
                                </div>
                                <div className="subPriceVersion">
                                    <div className="titlePrice">Subscription</div>
                                    <div className="euro valueEuroPrice"></div>
                                    <div className="sterlina valueSterlinPrice"></div>
                                    <div className="dollaro valueDollarPrice"></div>
                                    <div className="titlePrice"> monthly</div>
                                </div>
                            </div>
                        </div>
                        <div className="priceSel priceEuroPackageSel"></div>
                        <div className="priceSel priceSterlinPackageSel"></div>
                        <div className="priceSel priceDollarPackageSel"></div>
                        <div className="priceSel subEuroPackageSel"></div>
                        <div className="priceSel subSterlinPackageSel"></div>
                        <div className="priceSel subDollarPackageSel"></div>
                        <div className="priceSel packageSelected"></div>
                    </div>

                    <div className="col-md-12">
                        <div className="col-md-6 col-xs-12">
                            <div className="btn-welcome clean-version" onClick={() => this.cleanClick()}>Clean</div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <div className="btn-welcome confirm-version" onClick={() => this.finishClick()}>Complete</div>
                        </div>
                    </div>
                </div>
        );
    }
}
