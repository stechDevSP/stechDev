import React from 'react';
import ReactDOM from 'react-dom';
import { Registration } from '../main/_registration.js';
import { Login } from '../main/_login.js';

export class StartPage extends React.Component {
    getInitialState() {
        return {
            showLogin: false,
            showRegistration: false
        };
    }
    constructor(props) {
        super(props);
        var self = this;

        this.registrationClick = this.registrationClick.bind(this);
        this.loginClick = this.loginClick.bind(this);

        self.state = { showLogin: false, showRegistration: false };
    }
    registrationClick(classClick) {
        this.setState({ showLogin: false });
        this.setState({ showRegistration: true });
        sessionStorage.setItem("ViewApps", false);
        $(".register-form").find(".form-control").val("");
        $(".welcome-zone").slideUp();
        $(".registration-zone").slideDown();
        $(".register-form").show();
    }
    loginClick() {
        this.setState({ showRegistration: false });
        this.setState({ showLogin: true });
        sessionStorage.setItem("ViewApps", false);
        $(".login-form").find(".form-control").val("");
        $(".welcome-zone").slideUp();
        $(".login-zone").slideDown();
        $(".login-form").show();
    }
    render() {
        return (
            <div>
                <div className="col-md-12 welcome-component welcome-zone">
                    <div className="animated fadeindown welcomeTo">Welcome to </div>
                    <div className="animated fadeindown welcomeToName">ST Solutions</div>
                    <div className="animated bouncein welcomeToDescr">
                        <div>Hi, we are Stech - Sharepoint Technical Solutions, a brand new company formed by a group of very professional dev with a great knowledge about Sharepoint and Microsoft's products.</div>
                        <div>Stech Solutions is an new hub of innovative Sharepoint's services.</div>
                        <div>Here you could find some apps that isn't available in the out of the box infrastructure.</div>
                        <div>How many times you would check how your intranet works...how many users really use your infrastructure...</div>
                        <div>Help your users to work easily and faster...</div>
                        <div>Create fast and very dinamically Pdf files to export...</div>
                        <div><b>Now you can!</b></div>
                        <div>Manage, with simple steps and features, your intranet activities.</div>
                        <div>Everything merged with your existing Sharepoint environment</div>
                        <div>Find in the library everything you need.</div>
                        <div>With some simple steps you could improve your company IT and help your employees to work better.</div>
                    </div>
                    <div className="animated fadeindown btn-welcome continue-select" onClick={() => this.registrationClick()}>Register</div>
                    <div className="animated fadeindown btn-welcome login-select" onClick={() => this.loginClick()}>Login</div>
                </div>
                <div className="col-md-12 welcome-component registration-zone">
                    {this.state.showRegistration ? <Registration /> : <div className="noAccess">You don't have permissions for view this area</div>}
                </div>
                <div className="col-md-12 welcome-component login-zone">
                    {this.state.showLogin ? <Login /> : <div className="noAccess">You don't have permissions for view this area</div>}
                </div>
            </div>
        );
    }
}
