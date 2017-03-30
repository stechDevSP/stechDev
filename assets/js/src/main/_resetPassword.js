import React from 'react';
import ReactDOM from 'react-dom';

export class ResetPassword extends React.Component {
    constructor(props) {
        super(props);
        var self = this;

        this.goBackClick = this.goBackClick.bind(this);
        this.cleanClick = this.cleanClick.bind(this);
        this.finishClick = this.finishClick.bind(this);
    }
    goBackClick() {
        $(".welcome-component").slideUp();
        $(".welcome-zone").slideDown();
        $(".cart-icon, .select-currency, .profile-drop").hide();
    }
    cleanClick() {
        $(".alert").hide();
        $(".reset-password").find(".form-control").val("");
    }
    finishClick() {
        console.log("Reset Password service");
    }
    render() {
        return (
            <div className="col-md-12 welcome-component reset-password form-group">
                    <div className="goBack-homepage" onClick={() => this.goBackClick()}>
                        <img className="icon icons8-Long-Arrow-Left" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAA30lEQVRIS+2U/Q2CMBTE7ybQDWQDdQNHcARH0wl0Ax3BEXADneCZI21SPgOlEGPoX9Dy+utdj0fMNDgTBwso2unfsM7MMgBXySC5j5aj+rZiM9sBuANYO9Ao9Y3FZnZwSgrIJCAzO3q7QrUk0ymq2tVg6xvAM5h/BM+a17rGi2ReOqh/6QGJycKF5KmwPgDpBJuY3bpqvOUhSNK3c4D0zwi2SgirW6fN3T3pgttgn55hyFvDUAlFDZY03l2wSUCBjTefxMlADqYWdAaQkVTvix6j2soQ6gIa4lbp2/+z7gvHwkYbyI5xugAAAABJRU5ErkJggg==" width="26" height="26" />
                        <div className="backLabel">Back to homepage</div>
                    </div>
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
                    <div className="button-container">
                        <div className="col-md-12">
                            <div className="col-md-6 col-xs-12">
                                <div className="btn-welcome clean-resetPass" onClick={() => this.cleanClick()}>Clean</div>
                            </div>
                            <div className="col-md-6 col-xs-12">
                                <div className="btn-welcome finish-resetPass" onClick={() => this.finishClick()}>Ok</div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}
