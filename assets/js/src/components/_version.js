import React from 'react';
import ReactDOM from 'react-dom';
import { Payment } from '../components/_payment.js';

export class Version extends React.Component {
    getInitialState() {
        return {
            showSelectApps: false,
            finalValue: 0,
            totalToPayEuro: 0,
            totalToPaySterlin: 0,
            totalToPayDollar: 0,
            valueToPayEuro: 0,
            valueToPaySterlin: 0,
            valueToPayDollar: 0,
            subToPayEuro: 0,
            subToPaySterlin: 0,
            subToPayDollar: 0,
            myCurrency: 'EUR',
            numberPackages: 0,
            packageSelected: ""
        };
    }
    constructor(props) {
        super(props);
        var self = this;

        this.goBackClick = this.goBackClick.bind(this);
        this.selectClick = this.selectClick.bind(this);
        this.finishClick = this.finishClick.bind(this);
        this.cleanClick = this.cleanClick.bind(this);

        var myAppsSelected = sessionStorage.getItem("MyAppsDetails");
        var myPackageSel = sessionStorage.getItem("packageSelected");

        if (myPackageSel) {
            $("." + myPackageSel).addClass("packageSel");
        }

        self.state = {
            showSelectApps: false,
            myAppsDetails: myAppsSelected
        };
    }
    goBackClick() {
        $(".select-version").slideUp();
        $(".select-apps-zone").slideDown();
        this.setState({ showSelectApps: false });
        //$(".cart-details").slideDown();
    }
    selectClick(classClick) {
        $(".package").removeClass("packageSel");
        $("." + classClick).find(".package").addClass("packageSel");
        $(".btn-versions").show();

        $(".priceEuroPackageSel").html($("." + classClick).find(".priceEuroVersion").html());
        $(".priceSterlinPackageSel").html($("." + classClick).find(".priceSterlinVersion").html());
        $(".priceDollarPackageSel").html($("." + classClick).find(".priceDollarVersion").html());

        $(".subEuroPackageSel").html($("." + classClick).find(".valueEuroPrice").html());
        $(".subSterlinPackageSel").html($("." + classClick).find(".valueSterlinPrice").html());
        $(".subDollarPackageSel").html($("." + classClick).find(".valueDollarPrice").html());

        $(".packageSelected").html($("." + classClick).find(".nameVersion").html());

        sessionStorage.setItem("packageSelected", $("." + classClick).find(".nameVersion").html());

        $(".packageSelDetails").html("Your business plan: " + $("." + classClick).find(".nameVersion").html());
    }
    finishClick() {
        var r = confirm("Are you sure to buy these business plan?");
        if (r == true) {
            console.log("Go to the payment...You pressed OK!");

            var totalToPayEuro = parseInt($(".priceEuroPackageSel").html()) + parseInt($(".subEuroPackageSel").html()) + " €";
            var totalToPaySterlin = parseInt($(".priceSterlinPackageSel").html()) + parseInt($(".subSterlinPackageSel").html()) + " £";
            var totalToPayDollar = parseInt($(".priceDollarPackageSel").html()) + parseInt($(".subDollarPackageSel").html()) + " $";

            var finalValue = 0;
            var myCurrency = "EUR";

            if ($(".myCurrency").html() === "€") {
                finalValue = parseInt($(".priceEuroPackageSel").html()) + parseInt($(".subEuroPackageSel").html());
                myCurrency = "EUR";
            } else if ($(".myCurrency").html() === "£") {
                finalValue = parseInt($(".priceSterlinPackageSel").html()) + parseInt($(".subSterlinPackageSel").html());
                myCurrency = "GBP";
            } else {
                finalValue = parseInt($(".priceDollarPackageSel").html()) + parseInt($(".subDollarPackageSel").html());
                myCurrency = "USD";
            }

            this.setState({
                showSelectApps: true,
                finalValue: finalValue,
                myCurrency: myCurrency,
                totalToPayEuro: totalToPayEuro,
                totalToPaySterlin: totalToPaySterlin,
                totalToPayDollar: totalToPayDollar,
                valueToPayEuro: parseInt($(".priceEuroPackageSel").html()),
                valueToPaySterlin: parseInt($(".priceSterlinPackageSel").html()),
                valueToPayDollar: parseInt($(".priceDollarPackageSel").html()),
                subToPayEuro: parseInt($(".subEuroPackageSel").html()),
                subToPaySterlin: parseInt($(".subSterlinPackageSel").html()),
                subToPayDollar: parseInt($(".subDollarPackageSel").html()),
                numberPackages: $(".orderNumber").html(),
                packageSelected: $(".packageSelected").html()
            });

            $(".version-select-zone").slideUp();
            $(".select-currency").hide();

            $(".payment-zone").slideDown();

            var htmlPayment = "";

            if (myCurrency === "EUR") {
                htmlPayment = "<div className='euro totalStartPriceEuro'><div className='startPricePayEuro'>Total start bundle: <span className='finalPackageSel'><b>" + parseInt($(".priceEuroPackageSel").html()) + "</b></span> €</div><div className='subPricePay'>You will pay <span className='finalSubSel'><b>" + parseInt($(".subEuroPackageSel").html()) + "</b></span> for your monthly subscription</div><div className='totalToPay'>Total to pay: <span className='finalTotSel'><b>" + totalToPayEuro + "</b></span></div></div>";
            } else if (myCurrency === "GBP") {
                htmlPayment = "<div className='sterlina totalStartPriceEuro'><div className='startPricePaySterlin'>Total start bundle: <span className='finalPackageSel'><b>" + parseInt($(".priceSterlinPackageSel").html()) + "</b></span> £</div><div className='subPricePay'>You will pay <span className='finalSubSel'><b>" + parseInt($(".subSterlinPackageSel").html()) + "</b></span> for your monthly subscription</div><div className='totalToPay'>Total to pay: <span className='finalTotSel'><b>" + totalToPaySterlin + "</b></span></div></div>";
            } else {
                htmlPayment = "<div className='dollaro totalStartPriceEuro'><div className='startPricePayDollar'>Total start bundle: <span className='finalPackageSel'><b>" + parseInt($(".priceDollarPackageSel").html()) + "</b></span> $</div><div className='subPricePay'>You will pay  <span className='finalSubSel'><b>" + parseInt($(".subDollarPackageSel").html()) + "</b></span> for your monthly subscription</div><div className='totalToPay'>Total to pay: <span className='finalTotSel'><b>" + totalToPayDollar + "</b></span></div></div>";
            }

            sessionStorage.setItem("MyPaymentDetails", htmlPayment);
        } else {
            console.log("You pressed Cancel!");
        }
    }
    cleanClick() {
        $(".package").removeClass("packageSel");
    }
    render() {
        return (
            <div>
                <div className="version-select-zone">
                    <div className="goBack-cart" onClick={() => this.goBackClick()}>
                        <img className="icon icons8-Long-Arrow-Left" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAA30lEQVRIS+2U/Q2CMBTE7ybQDWQDdQNHcARH0wl0Ax3BEXADneCZI21SPgOlEGPoX9Dy+utdj0fMNDgTBwso2unfsM7MMgBXySC5j5aj+rZiM9sBuANYO9Ao9Y3FZnZwSgrIJCAzO3q7QrUk0ymq2tVg6xvAM5h/BM+a17rGi2ReOqh/6QGJycKF5KmwPgDpBJuY3bpqvOUhSNK3c4D0zwi2SgirW6fN3T3pgttgn55hyFvDUAlFDZY03l2wSUCBjTefxMlADqYWdAaQkVTvix6j2soQ6gIa4lbp2/+z7gvHwkYbyI5xugAAAABJRU5ErkJggg==" width="26" height="26" />
                        <div className="backLabel">Back to cart</div>
                    </div>
                    <div className="title-select-version">Select your Business Plan</div>
                    <div className="col-md-12 description-panel"></div>
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
                                    <div className="titlePrice">Monthly Subscription: </div>
                                    <div className="euro valueEuroPrice"></div>
                                    <div className="sterlina valueSterlinPrice"></div>
                                    <div className="dollaro valueDollarPrice"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 animated fadeindown packageVersions enterprise">
                            <div className="package" onClick={() => this.selectClick("enterprise")}>
                                <div className="nameVersion">Enterprise</div>
                                <div className="detailsVersion">
                                    <ul className="featurePackage">
                                        <li>From 1 to 5 site collections</li>
                                        <li>50% sale on the first annual renewal</li>
                                    </ul>
                                </div>
                                <div className="euro priceEuroVersion">
                                    
                                </div>
                                <div className="sterlina priceSterlinVersion">
                                    
                                </div>
                                <div className="dollaro priceDollarVersion">
                                    
                                </div>
                                <div className="subPriceVersion">
                                    <div className="titlePrice">Monthly Subscription: </div>
                                    <div className="euro valueEuroPrice"></div>
                                    <div className="sterlina valueSterlinPrice"></div>
                                    <div className="dollaro valueDollarPrice"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 animated fadeindown packageVersions premium">
                            <div className="package" onClick={() => this.selectClick("premium")}>
                                <div className="nameVersion">Premium</div>
                                <div className="detailsVersion">
                                    <ul className="featurePackage">
                                        <li>Unlimited site collections</li>
                                        <li>Free renewal for the first time</li>
                                        <li>Free support for the first week</li>
                                        <li>First 2 months free monthly subscription</li>
                                    </ul>
                                </div>
                                <div className="euro priceEuroVersion">
                                    
                                </div>
                                <div className="sterlina priceSterlinVersion">
                                    
                                </div>
                                <div className="dollaro priceDollarVersion">
                                    
                                </div>
                                <div className="subPriceVersion">
                                    <div className="titlePrice">Monthly Subscription: </div>
                                    <div className="euro valueEuroPrice"></div>
                                    <div className="sterlina valueSterlinPrice"></div>
                                    <div className="dollaro valueDollarPrice"></div>
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

                    <div className="col-md-12 btn-versions">
                        <div className="col-md-6 col-xs-12">
                            <div className="btn-welcome clean-version" onClick={() => this.cleanClick()}>Clean</div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <div className="btn-welcome confirm-version" onClick={() => this.finishClick()}>Complete</div>
                        </div>
                    </div>
                    
                </div>
                <div className="welcome-component payment-zone">
                    {this.state.showSelectApps ? <Payment packageSelected={this.state.packageSelected} numberPackages={this.state.numberPackages} totalToPayEuro={this.state.totalToPayEuro} totalToPaySterlin={this.state.totalToPaySterlin} totalToPayDollar={this.state.totalToPayDollar} valueToPayEuro={this.state.valueToPayEuro} valueToPaySterlin={this.state.valueToPaySterlin} valueToPayDollar={this.state.valueToPayDollar} subToPayEuro={this.state.subToPayEuro} subToPaySterlin={this.state.subToPaySterlin} subToPayDollar={this.state.subToPayDollar} finalValue={this.state.finalValue} myCurrency={this.state.myCurrency}/> : <div className="noAccess">You don't have permissions for view this area</div>}
                </div>
            </div>

        );
    }
}
