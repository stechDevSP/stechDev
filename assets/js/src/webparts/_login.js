import React from 'react';
import ReactDOM from 'react-dom';

export class Login extends React.Component {
    render() {
        return (
            <div className="col-md-12 welcome-component login-form form-group">
                    <div className="titleRegister">Sign in</div>
                    <div className="alert alert-danger loginFailed" role="alert">Try again! Company name or password is not correct!</div>
                    <div className="nameCompany">
                        <div className="alert alert-danger loginCompanyNameAlert" role="alert">Please insert the company name</div>
                        <label>Company Name (*):</label>
                        <input type="text" className="form-control loginCompanyName" placeholder="Insert your company name"/>
                    </div>
                    <div className="passwordCompany">
                        <div className="alert alert-danger loginPasswordAlert" role="alert">Please insert a password</div>
                        <div className="form-group">
                            <label for="pwd titleInput">Password (*):</label>
                            <input type="password" className="form-control" id="pwdLogin" placeholder="Enter password" />
                        </div>
                    </div>
                    <div className="btn-welcome finish-login">OK</div>
                </div>
        );
    }
}
