import React from 'react';
import ReactDOM from 'react-dom';

export class Registration extends React.Component {
    
    render() {
        return (
            <div className="col-md-12 welcome-component register-form form-group">
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
                        <div className="emailCompany col-md-6 col-xs-12">
                            <div className="alert alert-danger companyEmailAlert" role="alert">Please insert an email</div>
                            <label>Company Email (*):</label>
                            <input type="email" className="form-control companyEmail" aria-describedby="emailHelp" placeholder="Enter email" />
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
                            <div className="btn-welcome clean-register">Clean</div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <div className="btn-welcome finish-register">Complete</div>
                        </div>
                    </div>
                </div>
        );
    }
}
