import React from 'react';
import ReactDOM from 'react-dom';

export class PayPalButton extends React.Component {
  constructor() {
    super();
    // you can take this value from a config.js module for example.
    this.merchantId = '6XF3MPZBZV6HU';
  }

  componentDidMount() {
    let container = this.props.id;
    let merchantId = this.merchantId;
    window.paypalCheckoutReady = function() {
      paypal.checkout.setup(merchantId, {
        locale: 'it_IT',
        environment: 'sandbox',
        container: container,
      });
    }
  }

  render() {
    return(
      <div><a id={this.props.id} href="/checkout" /></div>
    );
  }
}