import React from 'react';
import ReactDOM from 'react-dom';

export class Registration extends React.Component {
    constructor(props) {
        super(props);
        var self = this;

        this.goBackClick = this.goBackClick.bind(this);
        this.finishClick = this.finishClick.bind(this);
        this.cleanClick = this.cleanClick.bind(this);
    }
    goBackClick(){
        $(".welcome-component").slideUp();
        $(".welcome-zone").slideDown();
        $(".cart-icon, .select-currency, .profile-drop").hide();
    }
    finishClick() {
        if ($(".register-form").find("input").val() === "") {
            $(this).parent().find(".alert").show();
        } else {
            $(this).parent().find(".alert").hide();
        }

        if ($(".companyName").val() !== "" && $(".companyLocation").val() !== "" && $(".companyEmail").val() !== "" && $(".companyPassword").val() !== "" && $(".companyConfirmPassword").val() !== "") {
            if ($(".companyPassword").val() === $(".companyConfirmPassword").val() && $(".companyEmail").val() === $(".companyConfirmEmail").val() && $(".companyEmail").val().indexOf('@') > 0) {
                $(".register-form").slideUp();
                $(".select-apps-zone").slideDown();
                $(".alert").hide();
                $(".cart-icon, .select-currency").show();
            } else {
                if ($(".companyPassword").val() !== $(".companyConfirmPassword").val()) {
                    $(".companyConfirmPassAlert2").show();
                    $(".companyConfirmEmailAlert2").hide();
                }
                if ($(".companyEmail").val() !== $(".companyConfirmEmail").val() || $(".companyEmail").val().indexOf('@') < 0) {
                    $(".companyConfirmEmailAlert2").show();
                    $(".companyConfirmPassAlert2").hide();
                }
            }

        }

    }
    cleanClick() {
        $(".register-form").find("input").val("");
        $('.alert').hide();
    }
    render() {
        return (
            <div className="col-md-12 welcome-component register-form form-group">
                    <div className="goBack-homepage" onClick={() => this.goBackClick()}>
                        <img className="icon icons8-Long-Arrow-Left" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAA30lEQVRIS+2U/Q2CMBTE7ybQDWQDdQNHcARH0wl0Ax3BEXADneCZI21SPgOlEGPoX9Dy+utdj0fMNDgTBwso2unfsM7MMgBXySC5j5aj+rZiM9sBuANYO9Ao9Y3FZnZwSgrIJCAzO3q7QrUk0ymq2tVg6xvAM5h/BM+a17rGi2ReOqh/6QGJycKF5KmwPgDpBJuY3bpqvOUhSNK3c4D0zwi2SgirW6fN3T3pgttgn55hyFvDUAlFDZY03l2wSUCBjTefxMlADqYWdAaQkVTvix6j2soQ6gIa4lbp2/+z7gvHwkYbyI5xugAAAABJRU5ErkJggg==" width="26" height="26" />
                        <div className="backLabel">Back to homepage</div>
                    </div>
                    <div className="titleRegister">Registration form</div>
                    <div className="col-md-12">
                        <div className="nameCompany col-md-6 col-xs-12">
                            <div className="alert alert-danger companyNameAlert" role="alert">Please insert the company name</div>
                            <label>Company Name (*):</label>
                            <input type="text" className="form-control companyName" placeholder="Insert your company name"/>
                        </div>
                        <div className="locationCompany col-md-6 col-xs-12">
                            <div className="alert alert-danger companyLocationAlert" role="alert">Please insert the company location</div>
                            <label>Company Location (*):</label>
                            <input type="text" className="form-control companyLocation" placeholder="Insert your company location"/>
                        </div>
                    </div>
                    <div className="col-md-12">
                    <div className="alert alert-danger companyConfirmEmailAlert2" role="alert">Please insert a correct email</div>
                        <div className="emailCompany col-md-6 col-xs-12">
                            <div className="alert alert-danger companyEmailAlert" role="alert">Please insert an email</div>
                            <label>Company Email (*):</label>
                            <input type="email" className="form-control companyEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="confirmEmailCompany col-md-6 col-xs-12">
                            <div className="alert alert-danger companyConfirmEmailAlert" role="alert">Please confirm your email</div>
                            <label>Confirm Email (*):</label>
                            <input type="email" className="form-control companyConfirmEmail" aria-describedby="emailHelp" placeholder="Confirm your email" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="alert alert-danger companyConfirmPassAlert2" role="alert">Please insert a correct password</div>
                        <div className="passwordCompany col-md-6 col-xs-12">
                            <div className="alert alert-danger companyPasswordAlert" role="alert">Please insert a password</div>
                            <label>Password (*):</label>
                            <input type="password" className="form-control companyPassword" placeholder="Enter password"/>
                        </div>
                        <div className="confirmPassCompany col-md-6 col-xs-12">
                            <div className="alert alert-danger companyConfirmPassAlert" role="alert">Please insert a confirm password</div>
                            <label>Confirm password (*):</label>
                            <input type="password" className="form-control companyConfirmPassword" placeholder="Confirm your password"/>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="col-md-6 col-xs-12">
                            <div className="btn-welcome clean-register" onClick={() => this.cleanClick()}>Clean</div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <div className="btn-welcome finish-register" onClick={() => this.finishClick()}>Complete</div>
                        </div>
                    </div>
                </div>
        );
    }
}
