import React from 'react';
import ReactDOM from 'react-dom';
import fx from 'money';

export class Payment extends React.Component {
    
    render() {
        return (
            <div className="col-md-12 payment-zone">
                    <div className="goBack-package">
                        <img className="icon icons8-Long-Arrow-Left" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAA30lEQVRIS+2U/Q2CMBTE7ybQDWQDdQNHcARH0wl0Ax3BEXADneCZI21SPgOlEGPoX9Dy+utdj0fMNDgTBwso2unfsM7MMgBXySC5j5aj+rZiM9sBuANYO9Ao9Y3FZnZwSgrIJCAzO3q7QrUk0ymq2tVg6xvAM5h/BM+a17rGi2ReOqh/6QGJycKF5KmwPgDpBJuY3bpqvOUhSNK3c4D0zwi2SgirW6fN3T3pgttgn55hyFvDUAlFDZY03l2wSUCBjTefxMlADqYWdAaQkVTvix6j2soQ6gIa4lbp2/+z7gvHwkYbyI5xugAAAABJRU5ErkJggg==" width="26" height="26" />
                        <div className="backLabel">Back to packages</div>
                    </div>
                    <div className="cart">
                        <div className="cart-title">Your will bought <span className="numberPackages">0</span> apps for:</div>
                        <div className="payment-container">
                                    
                        </div>
                        <div>
                            <div>Go to Paypal</div>
                            <div id="button-Paypal"></div>
                        </div>
                        <div className="btn-welcome confirm-payment">Confirm</div>
                    </div>
                </div>
        );
    }
}
