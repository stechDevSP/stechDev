import React from 'react';
import ReactDOM from 'react-dom';

export class ResetPassword extends React.Component {
    render() {
        return (
            <div className="col-md-12 welcome-component reset-password form-group">
                    <div className="titleRegister">Reset your password</div>
                    <div className="alert alert-danger loginFailed" role="alert">Try again! Company name or password is not correct!</div>
                    <div className="nameCompany">
                        <div className="alert alert-danger resetOldPassAlert" role="alert">Please insert your old password</div>
                        <label>You old password (*):</label>
                        <input type="password" className="form-control" id="oldPwdReset" placeholder="Enter password" />
                    </div>
                    <div className="passwordCompany">
                        <div className="alert alert-danger resetPasswordAlert" role="alert">Please insert a password</div>
                        <div className="form-group">
                            <label htmlFor="pwd titleInput">Password (*):</label>
                            <input type="password" className="form-control" id="pwdReset" placeholder="Enter password" />
                        </div>
                    </div>
                    <div className="passwordCompany">
                        <div className="alert alert-danger resetConfirmPasswordAlert" role="alert">Please insert a confirm password</div>
                        <div className="form-group">
                            <label htmlFor="pwd titleInput">Confirm Password (*):</label>
                            <input type="password" className="form-control" id="confirmPwdReset" placeholder="Confirm password" />
                        </div>
                    </div>
                    <div className="btn-welcome finish-resetPass">OK</div>
                </div>
        );
    }
}
