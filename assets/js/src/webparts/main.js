import React from 'react';
import ReactDOM from 'react-dom';

import { ModalPopup } from '../components/modal.jsx';
import { PayPalButton } from '../components/paypal.jsx';

import { StartPage } from '../main/_startPage.js';
import { Registration } from '../main/_registration.js';
import { Login } from '../main/_login.js';

import { ResetPassword } from '../main/_resetPassword.js';
import { ContactUs } from '../main/_contactUs.js';


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
                        <Registration />
                        <ResetPassword />
                        <ContactUs />
                    </div>
                );
            }
        });

        ReactDOM.render(
            <WelcomePage />,
            document.getElementById('welcome-panel')
        );

        APP.EVENTS.navEvents();
    };

})(window.APP = window.APP || {});
