import React from 'react';
import ReactDOM from 'react-dom';

import { MyApps } from '../components/_myApps.js';
import { Apps } from '../components/_apps.js';
import { CartDetails } from '../components/_cartDetails.js';
import { Version } from '../components/_version.js';
import { Payment } from '../components/_payment.js';

export class Login extends React.Component {
    getInitialState() {
        return {
            showMyApps: false
        };
    }
    constructor(props) {
        super(props);
        var self = this;

        this.goBackClick = this.goBackClick.bind(this);
        this.cleanClick = this.cleanClick.bind(this);
        this.finishClick = this.finishClick.bind(this);

        self.state = { showMyApps: false };
    }
    goBackClick() {
        $(".login-zone").slideUp();
        $(".welcome-zone").slideDown();
        $(".cart-icon, .select-currency, .profile-drop").hide();
    }
    cleanClick() {
        $(".alert").hide();
        $(".login-form").find(".form-control").val("");
    }
    finishClick() {
        var nameCompany = $(".myLoginCompanyName").val();
        var passwordCompany = $("#myPwdLogin").val();

        $.each($(".login-form").find(".form-control"), function() {
            if ($(this).val() === "") {
                $(this).parent().parent().find(".alert").show();
            } else {
                $(this).parent().parent().find(".alert").hide();
            }
        });

        if (nameCompany !== "" && passwordCompany !== "") {
            //checkLogin
            var usersArray = [];
            var arrayUsersStorage = sessionStorage.getItem("finalRegisteredUsers");
            if (arrayUsersStorage) {
                usersArray = JSON.parse(arrayUsersStorage);
            }

            var checkLogin = false;
            $.each(usersArray, function(index, value) {
                if (nameCompany === value.Email && passwordCompany === value.Password) {
                    checkLogin = true;
                }
            });

            if (checkLogin) {
                this.setState({ showMyApps: true });

                $(".login-form").slideUp();
                $(".my-select-apps-zone").slideDown();
                $(".profile-drop").show();
                $(".alert").hide();
                $(".cart-icon, .cart-buttons, .clean-cart, .confirm-cart, .btn-versions").hide();
            } else {
                this.setState({ showMyApps: false });
                $(".profile-drop").hide();
                $(".loginFailed").show();
            }
        }

    }
    render() {
        return (
            <div>
                <div className="login-form form-group">
                    <div className="goBack-homepage" onClick={() => this.goBackClick()}>
                        <img className="icon icons8-Long-Arrow-Left" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAA30lEQVRIS+2U/Q2CMBTE7ybQDWQDdQNHcARH0wl0Ax3BEXADneCZI21SPgOlEGPoX9Dy+utdj0fMNDgTBwso2unfsM7MMgBXySC5j5aj+rZiM9sBuANYO9Ao9Y3FZnZwSgrIJCAzO3q7QrUk0ymq2tVg6xvAM5h/BM+a17rGi2ReOqh/6QGJycKF5KmwPgDpBJuY3bpqvOUhSNK3c4D0zwi2SgirW6fN3T3pgttgn55hyFvDUAlFDZY03l2wSUCBjTefxMlADqYWdAaQkVTvix6j2soQ6gIa4lbp2/+z7gvHwkYbyI5xugAAAABJRU5ErkJggg==" width="26" height="26" />
                        <div className="backLabel">Back to homepage</div>
                    </div>
                    <div className="titleRegister">Sign in</div>
                    <div className="alert alert-danger loginFailed" role="alert">Try again! Company name or password is not correct!</div>
                    <div className="nameCompany">
                        <div className="alert alert-danger loginCompanyNameAlert" role="alert">Please insert the user account</div>
                        <label>User Account (*):</label>
                        <input type="text" className="form-control myLoginCompanyName" placeholder="Insert your user account"/>
                    </div>
                    <div className="passwordCompany">
                        <div className="alert alert-danger loginPasswordAlert" role="alert">Please insert a password</div>
                        <div className="form-group">
                            <label>Password (*):</label>
                            <input type="password" className="form-control" id="myPwdLogin" placeholder="Enter password" />
                        </div>
                    </div>
                    <div className="button-container">
                        <div className="col-md-12">
                            <div className="col-md-6 col-xs-12">
                                <div className="btn-welcome clean-login" onClick={() => this.cleanClick()}>Clean</div>
                            </div>
                            <div className="col-md-6 col-xs-12">
                                <div className="btn-welcome finish-login" onClick={() => this.finishClick()}>Ok</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="welcome-component my-select-apps-zone">
                    {this.state.showMyApps ? <MyApps /> : <div className="noAccess">You don't have permissions for view this area</div>}
                </div>
                <div className="welcome-component select-version">
                    {this.state.showMyApps ? <Version /> : <div className="noAccess">You don't have permissions for view this area</div>}
                </div>
                <div className="welcome-component cart-details">
                    {this.state.showMyApps ? <CartDetails /> : <div className="noAccess">You don't have permissions for view this area</div>}
                </div>
                <div className="welcome-component select-apps-zone">
                    {this.state.showMyApps ? <Apps /> : <div className="noAccess">You don't have permissions for view this area</div>}
                </div>
            </div>
        );
    }
}
