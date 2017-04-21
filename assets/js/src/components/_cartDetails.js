import React from 'react';
import ReactDOM from 'react-dom';

export class CartDetails extends React.Component {
    constructor(props) {
        super(props);
        var self = this;

        this.goBackClick = this.goBackClick.bind(this);
        this.finishClick = this.finishClick.bind(this);
        this.cleanClick = this.cleanClick.bind(this);
    }
    goBackClick() {
        $(".cart-details").slideUp();
        $(".select-apps-zone").slideDown();
    }
    finishClick() {
        $(".cart-details").slideUp();
        $(".select-version").slideDown();

        var priceStandard = parseInt($(".totale-cart-value").html());
        var priceEnterprise = parseInt($(".totale-cart-value").html()) * 5;
        var pricePremium = parseInt($(".totale-cart-value").html()) * 10;

        var subStandard = parseInt($(".totale-sub-value").html());
        var subEnterprise = parseInt($(".totale-sub-value").html()) * 5;
        var subPremium = parseInt($(".totale-sub-value").html()) * 10;

        $(".standard").find(".priceEuroVersion").html(priceStandard + " €");
        $(".standard").find(".valueEuroPrice").html(subStandard + " €");

        $(".enterprise").find(".priceEuroVersion").html(priceEnterprise + " €");
        $(".enterprise").find(".valueEuroPrice").html(subEnterprise + " €");

        $(".premium").find(".priceEuroVersion").html(pricePremium + " €");
        $(".premium").find(".valueEuroPrice").html(subPremium + " €");


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

    }
    cleanClick() {
        $(".cart-container").html("No apps selected");
        $(".totale-cart-value, .totale-sub-value, .orderNumber").html(0);
        $(".card").show();
        $(".confirm-cart, .clean-cart").hide();
    }
    render() {
        return (
            <div>
                    <div className="goBack-apps" onClick={() => this.goBackClick()}>
                        <img className="icon icons8-Long-Arrow-Left" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAA30lEQVRIS+2U/Q2CMBTE7ybQDWQDdQNHcARH0wl0Ax3BEXADneCZI21SPgOlEGPoX9Dy+utdj0fMNDgTBwso2unfsM7MMgBXySC5j5aj+rZiM9sBuANYO9Ao9Y3FZnZwSgrIJCAzO3q7QrUk0ymq2tVg6xvAM5h/BM+a17rGi2ReOqh/6QGJycKF5KmwPgDpBJuY3bpqvOUhSNK3c4D0zwi2SgirW6fN3T3pgttgn55hyFvDUAlFDZY03l2wSUCBjTefxMlADqYWdAaQkVTvix6j2soQ6gIa4lbp2/+z7gvHwkYbyI5xugAAAABJRU5ErkJggg==" width="26" height="26" />
                        <div className="backLabel">Back to apps</div>
                    </div>
                    <div className="cart">
                        <div className="cart-title">Your cart</div>
                        <div className="cart-container">
                            No apps selected
                        </div>
                        <div className="euro euro-total-cart">
                            <div className="totale-cart">Standard bundle: <span className="totale-cart-value">0</span>€</div>
                            <div className="totale-cart">Standard Subscription: <span className="totale-sub-value">0</span>€ x month</div>
                        </div>
                        <div className="sterlina sterlin-total-cart">
                            <div className="totale-cart">Standard bundle: <span className="totale-cart-value-sterlin">0</span>€</div>
                            <div className="totale-cart">Standard Subscription: <span className="totale-sub-value-sterlin">0</span>€ x month</div>
                        </div>
                        <div className="dollaro dollar-total-cart">
                            <div className="totale-cart">Standard bundle: <span className="totale-cart-value-dollar">0</span>€</div>
                            <div className="totale-cart">Standard Subscription: <span className="dollaro totale-sub-value-dollar">0</span>€ x month</div>
                        </div>

                        <div className="col-md-12">
                            <div className="col-md-6 col-xs-12">
                                <div className="btn-welcome clean-cart" onClick={() => this.cleanClick()}>Clean</div>
                            </div>
                            <div className="col-md-6 col-xs-12">
                                <div className="btn-welcome confirm-cart" onClick={() => this.finishClick()}>Complete</div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}
