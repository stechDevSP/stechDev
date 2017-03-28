import React from 'react';
import ReactDOM from 'react-dom';

export class Login extends React.Component {
    render() {
        return (
            <div className="col-md-12 welcome-component login-form form-group">
                    <div className="goBack-homepage">
                        <img className="icon icons8-Long-Arrow-Left" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAA30lEQVRIS+2U/Q2CMBTE7ybQDWQDdQNHcARH0wl0Ax3BEXADneCZI21SPgOlEGPoX9Dy+utdj0fMNDgTBwso2unfsM7MMgBXySC5j5aj+rZiM9sBuANYO9Ao9Y3FZnZwSgrIJCAzO3q7QrUk0ymq2tVg6xvAM5h/BM+a17rGi2ReOqh/6QGJycKF5KmwPgDpBJuY3bpqvOUhSNK3c4D0zwi2SgirW6fN3T3pgttgn55hyFvDUAlFDZY03l2wSUCBjTefxMlADqYWdAaQkVTvix6j2soQ6gIa4lbp2/+z7gvHwkYbyI5xugAAAABJRU5ErkJggg==" width="26" height="26" />
                        <div className="backLabel">Back to homepage</div>
                    </div>
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
                            <label>Password (*):</label>
                            <input type="password" className="form-control" id="pwdLogin" placeholder="Enter password" />
                        </div>
                    </div>
                    <div className="btn-welcome finish-login">OK</div>
                </div>
        );
    }
}
