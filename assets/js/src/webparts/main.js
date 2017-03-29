import React from 'react';
import ReactDOM from 'react-dom';

import { ModalPopup } from '../components/modal.jsx';
import { PayPalButton } from '../components/paypal.jsx';

import { StartPage } from '../main/_startPage.js';
import { Registration } from '../main/_registration.js';
import { Login } from '../main/_login.js';
import { Apps } from '../main/_apps.js';
import { MyApps } from '../main/_myApps.js';
import { CartDetails } from '../main/_cartDetails.js';
import { Version } from '../main/_version.js';
import { Payment } from '../main/_payment.js';
import { ResetPassword } from '../main/_resetPassword.js';


(function(APP) {
    "use strict";

    APP.MAIN = {};

    APP.MAIN.init = function() {
        var WelcomePage = React.createClass({
            render: function() {
                return (
                    <div className="container">
                        <StartPage />
                        <Login />
                        <MyApps />
                        <Registration />
                        <Apps />
                        <CartDetails />
                        <Version />
                        <Payment />
                        <ResetPassword />
                    </div>
                );
            }
        });

        ReactDOM.render(
            <WelcomePage />,
            document.getElementById('welcome-panel')
        );

        APP.EVENTS.mainEvents();
        APP.EVENTS.appsEvents();
        APP.EVENTS.cartDetailsEvents();
        APP.EVENTS.loginEvents();
        APP.EVENTS.startPageEvents();
    };

})(window.APP = window.APP || {});
