import React from 'react';
import ReactDOM from 'react-dom';
import fx from 'money';

export class Version extends React.Component {
    
    render() {
        return (
            <div className="col-md-12 welcome-component select-version">
                    <div className="goBack-cart">
                        <img className="icon icons8-Long-Arrow-Left" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAA30lEQVRIS+2U/Q2CMBTE7ybQDWQDdQNHcARH0wl0Ax3BEXADneCZI21SPgOlEGPoX9Dy+utdj0fMNDgTBwso2unfsM7MMgBXySC5j5aj+rZiM9sBuANYO9Ao9Y3FZnZwSgrIJCAzO3q7QrUk0ymq2tVg6xvAM5h/BM+a17rGi2ReOqh/6QGJycKF5KmwPgDpBJuY3bpqvOUhSNK3c4D0zwi2SgirW6fN3T3pgttgn55hyFvDUAlFDZY03l2wSUCBjTefxMlADqYWdAaQkVTvix6j2soQ6gIa4lbp2/+z7gvHwkYbyI5xugAAAABJRU5ErkJggg==" width="26" height="26" />
                        <div className="backLabel">Back to cart</div>
                    </div>
                    <div className="title-select-version">Select your Business Plan</div>
                    <div className="col-md-12 container-packages">
                        <div className="col-md-4 animated fadeindown packageVersions standard">
                            <div className="package">
                                <div className="nameVersion">Standard</div>
                                <div className="detailsVersion">
                                    <ul className="featurePackage">
                                        <li>Up to 1 site collection installation</li>
                                    </ul>
                                </div>
                                <div className="priceVersion">
                                    
                                </div>
                                <div className="subPriceVersion">
                                    <div className="titlePrice">Subscription</div>
                                    <div className="valuePrice"></div>
                                    <div className="titlePrice"> monthly</div>
                                </div>
                            </div>
                        </div>
                    
                        <div className="col-md-4 animated fadeindown packageVersions enterprise">
                            <div className="package">
                                <div className="nameVersion">Enterprise</div>
                                <div className="detailsVersion">
                                    <ul className="featurePackage">
                                        <li>From 1 to 5 site collections</li>
                                    </ul>
                                </div>
                                <div className="priceVersion">
                                    
                                </div>
                                <div className="subPriceVersion">
                                    <div className="titlePrice">Subscription</div>
                                    <div className="valuePrice"></div>
                                    <div className="titlePrice"> monthly</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 animated fadeindown packageVersions premium">
                            <div className="package">
                                <div className="nameVersion">Premium</div>
                                <div className="detailsVersion">
                                    <ul className="featurePackage">
                                        <li>Unlimited site collections</li>
                                    </ul>
                                </div>
                                <div className="priceVersion">
                                    
                                </div>
                                <div className="subPriceVersion">
                                    <div className="titlePrice">Subscription</div>
                                    <div className="valuePrice"></div>
                                    <div className="titlePrice"> monthly</div>
                                </div>
                            </div>
                        </div>
                        <div className="priceSel pricePackageSel"></div>
                        <div className="priceSel subPackageSel"></div>
                        <div className="priceSel packageSelected"></div>
                    </div>

                    <div className="col-md-12">
                        <div className="col-md-6 col-xs-12">
                            <div className="btn-welcome clean-version">Clean</div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <div className="btn-welcome confirm-version">Complete</div>
                        </div>
                    </div>
                </div>
        );
    }
}



