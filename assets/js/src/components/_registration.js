import React from 'react';
import ReactDOM from 'react-dom';

import { Apps } from '../components/_apps.js';
import { CartDetails } from '../components/_cartDetails.js';
import { Version } from '../components/_version.js';


export class Registration extends React.Component {
    getInitialState() {
        return {
            arrayUsers: [],
            showSelectApps: false
        };
    }
    constructor(props) {
        super(props);
        var self = this;

        this.goBackClick = this.goBackClick.bind(this);
        this.finishClick = this.finishClick.bind(this);
        this.cleanClick = this.cleanClick.bind(this);

        var usersArray = [];
        var arrayUsersStorage = sessionStorage.getItem("finalRegisteredUsers");
        if (arrayUsersStorage) {
            usersArray = JSON.parse(arrayUsersStorage);
        }

        self.state = {
            showSelectApps: false,
            arrayUsers: usersArray
        };
    }
    goBackClick() {
        $(".registration-zone").slideUp();
        $(".welcome-zone").slideDown();
        $(".cart-icon, .select-currency, .profile-drop").hide();
        this.setState({ showSelectApps: false });
    }
    finishClick() {
        if ($(".companyName").val() === "") {
            $(".companyNameAlert").show();
        } else {
            $(".companyNameAlert").show();
        }

        if ($(".companyAccount").val() === "") {
            $(".companyAccountAlert").show();
        } else {
            $(".companyAccountAlert").show();
        }

        if ($(".companyEmail").val().indexOf('@') < 0) {
            $(".companyEmailAlert").show();
        } else {
            $(".companyEmailAlert").show();
        }

        if ($(".companyPassword").val() === "") {
            $(".companyPasswordAlert").show();
        } else {
            $(".companyPasswordAlert").show();
        }


        if ($(".companyName").val() !== "" && $(".companyEmail").val().indexOf('@') > 0 && $(".companyAccount").val() !== "" && $(".companyPassword").val() !== "") {
            this.setState({ showSelectApps: true });

            var usersArray = [];
            var arrayUsersStorage = sessionStorage.getItem("finalRegisteredUsers");
            if (arrayUsersStorage) {
                usersArray = JSON.parse(arrayUsersStorage);
            }

            var userToAdd = {
                Name: $(".userName").val(),
                JobTitle: $(".jobtitle").val(),
                CompanyName: $(".companyName").val(),
                CompanyJobCategory: $("#selJobCategory").val(),
                CompanyLocation: $(".companyLocation").val(),
                CompanyPhoneNumber: $(".companyPhone").val(),
                CompanyEmail: $(".companyEmail").val(),
                UserAccount: $(".companyAccount").val(),
                Password: $(".companyPassword").val()
            };

            usersArray.push(userToAdd);

            sessionStorage.setItem("registeredUsers", JSON.stringify(usersArray));

            this.setState({ arrayUsers: usersArray });

            $(".register-form").slideUp();
            $(".select-apps-zone").slideDown();
            $(".alert").hide();
            $(".select-currency").show();
            $(".cart-icon").show();
        } else {
            this.setState({ showSelectApps: false });
        }
    }
    cleanClick() {
        //$(".register-form").find("input").val("");
        $('.alert').hide();
    }
    render() {
        return (
            <div>
                <div className="register-form form-group">
                    <div className="goBack-homepage" onClick={() => this.goBackClick()}>
                        <img className="icon icons8-Long-Arrow-Left" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAA30lEQVRIS+2U/Q2CMBTE7ybQDWQDdQNHcARH0wl0Ax3BEXADneCZI21SPgOlEGPoX9Dy+utdj0fMNDgTBwso2unfsM7MMgBXySC5j5aj+rZiM9sBuANYO9Ao9Y3FZnZwSgrIJCAzO3q7QrUk0ymq2tVg6xvAM5h/BM+a17rGi2ReOqh/6QGJycKF5KmwPgDpBJuY3bpqvOUhSNK3c4D0zwi2SgirW6fN3T3pgttgn55hyFvDUAlFDZY03l2wSUCBjTefxMlADqYWdAaQkVTvix6j2soQ6gIa4lbp2/+z7gvHwkYbyI5xugAAAABJRU5ErkJggg==" width="26" height="26" />
                        <div className="backLabel">Back to homepage</div>
                    </div>
                    <div className="titleRegister">Registration form</div>
                    <div className="col-md-12">
                        <div className="nameCompany col-md-6 col-xs-12">
                            <label>Full Name:</label>
                            <input type="text" className="form-control userName" placeholder="Insert your full name"/>
                        </div>
                        <div className="jobTitle col-md-6 col-xs-12">
                            <label>Job title:</label>
                            <input type="text" className="form-control jobtitle" placeholder="Insert your job title"/>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="nameCompany col-md-6 col-xs-12">
                            <div className="alert alert-danger companyNameAlert" role="alert">Please insert the company name</div>
                            <label className="labelInfo">Company Name (*):</label>
                            <div className="tooltipReg" title="Insert your company name">i</div>
                            <input type="text" className="form-control companyName" placeholder="Insert your company name"/>
                        </div>
                        <div className="jobCategory col-md-6 col-xs-12">
                            <label>Job category:</label>
                            <select className="form-control" id="selJobCategory" placeholder="Select your job category">
                                <option disabled>Select your job category</option>
                                <option>Agriculture, Food and Natural Resources</option>
                                <option>Architecture and Construction</option>
                                <option>Arts, Audio/Video Technology & Communications</option>
                                <option>Business Management & Administration</option>
                                <option>Education & Training</option>
                                <option>Finance</option>
                                <option>Government & Public Administration</option>
                                <option>Health Science</option>
                                <option>Hospitality & Tourism </option>
                                <option>Information Technology</option>
                                <option>Law, Public Safety, Corrections & Security</option>
                                <option>Manufacturing</option>
                                <option>Marketing, Sales and Service</option>
                                <option>Science, Technology, Engineering & Mathematics</option>
                                <option>Transportation, Distribution & Logistics</option>
                                <option>Other</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="locationCompany col-md-6 col-xs-12">
                            <label>Company Location:</label>
                            <input type="text" className="form-control companyLocation" placeholder="Insert your company location"/>
                        </div>
                        <div className="locationCompany col-md-6 col-xs-12">
                            <div className="alert alert-danger companyEmailAlert" role="alert">Please insert an email</div>
                            <label className="labelInfo">Company Email (*):</label>
                            <div className="tooltipReg" title="Insert a valid email">i</div>
                            <input type="text" className="form-control companyEmail" placeholder="Insert your company email"/>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="emailCompany col-md-6 col-xs-12">
                            <div className="alert alert-danger companyAccountAlert" role="alert">Please insert an email</div>
                            <label className="labelInfo">User Account (*):</label>
                            <div className="tooltipReg" title="Insert an user account with admin role">i</div>
                            <input type="email" className="form-control companyAccount" aria-describedby="accountHelp" placeholder="Enter account" />
                        </div>
                        <div className="passwordCompany col-md-6 col-xs-12">
                            <div className="alert alert-danger companyPasswordAlert" role="alert">Please insert a password</div>
                            <label className="labelInfo">User Password (*):</label>
                            <div className="tooltipReg" title="Insert the password of your user account">i</div>
                            <input type="password" className="form-control companyPassword" placeholder="Enter password"/>
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
                <div className="welcome-component select-version">
                    {this.state.showSelectApps ? <Version /> : <div className="noAccess">You don't have permissions for view this area</div>}
                </div>
                <div className="welcome-component cart-details">
                    {this.state.showSelectApps ? <CartDetails /> : <div className="noAccess">You don't have permissions for view this area</div>}
                </div>
                <div className="welcome-component select-apps-zone">
                    {this.state.showSelectApps ? <Apps /> : <div className="noAccess">You don't have permissions for view this area</div>}
                </div>
            </div>
        );
    }
}
