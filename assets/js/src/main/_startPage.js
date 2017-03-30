import React from 'react';
import ReactDOM from 'react-dom';

export class StartPage extends React.Component {
    constructor(props) {
        super(props);
        var self = this;

        this.registrationClick = this.registrationClick.bind(this);
        this.loginClick = this.loginClick.bind(this);
    }

    registrationClick(classClick) {
        sessionStorage.setItem("ViewApps", false);
        $(".register-form").find(".form-control").val("");
        $(".welcome-zone").slideUp();
        $(".register-form").slideDown();
    }
    loginClick() {
        sessionStorage.setItem("ViewApps", false);
        $(".login-form").find(".form-control").val("");
        $(".welcome-zone").slideUp();
        $(".login-form").slideDown();
    }
    render() {
        return (
            <div className="col-md-12  welcome-component welcome-zone">
                    <div className="animated bouncein welcomeTo">Welcome to </div>
                    <div className="animated fadeindown welcomeToName">ST Solutions</div>
                    <div className="animated slideinleft welcomeToDescr">test descr</div>
                    <div className="animated fadeindown btn-welcome continue-select" onClick={() => this.registrationClick()}>Register</div>
                    <div className="animated fadeindown btn-welcome login-select" onClick={() => this.loginClick()}>Login</div>
                </div>
        );
    }
}
