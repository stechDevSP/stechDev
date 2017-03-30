import React from 'react';
import ReactDOM from 'react-dom';

export class ContactUs extends React.Component {
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
        $(".contact-us").find(".form-control").val("");
    }
    finishClick() {
        var nameUser = $("#nameContact").val();
        var nameCompany = $("#nameCompanyContact").val();
        var emailCompany = $("#emailCompanyContact").val();
        var askFor = $("#selContact").val();
        var messageText = $("#comment").val();
        var sendTo = "stechDevSP@gmail.com";

        $.each($(".contact-us").find(".form-control"), function() {
            if ($(this).val() === "") {
                $(this).parent().find(".alert").show();
            } else {
                $(this).parent().find(".alert").hide();
            }
        });

        if (nameUser !== "" && nameCompany !== "" && emailCompany !== "" && messageText !== "") {
            console.log("Send email service");
        }

    }
    render() {
        return (
            <div className="col-md-12 welcome-component contact-us form-group">
                <div className="goBack-homepage" onClick={() => this.goBackClick()}>
                    <img className="icon icons8-Long-Arrow-Left" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAA30lEQVRIS+2U/Q2CMBTE7ybQDWQDdQNHcARH0wl0Ax3BEXADneCZI21SPgOlEGPoX9Dy+utdj0fMNDgTBwso2unfsM7MMgBXySC5j5aj+rZiM9sBuANYO9Ao9Y3FZnZwSgrIJCAzO3q7QrUk0ymq2tVg6xvAM5h/BM+a17rGi2ReOqh/6QGJycKF5KmwPgDpBJuY3bpqvOUhSNK3c4D0zwi2SgirW6fN3T3pgttgn55hyFvDUAlFDZY03l2wSUCBjTefxMlADqYWdAaQkVTvix6j2soQ6gIa4lbp2/+z7gvHwkYbyI5xugAAAABJRU5ErkJggg==" width="26" height="26" />
                    <div className="backLabel">Back to homepage</div>
                </div>
                <div className="titleRegister">Contact Us</div>
                <div className="form-contact">
                    <div className="nameContact form-component">
                        <div className="alert alert-danger nameAlert" role="alert">Please insert your name</div>
                        <div className="label-contact titleInput">Name(*):</div>
                        <input type="text" className="form-control" placeholder="Insert your name" id="nameContact" />
                    </div>
                    <div className="companyContact form-component">
                        <div className="alert alert-danger companyNameAlert" role="alert">Please insert the company name</div>
                        <div className="label-contact titleInput">Company(*):</div>
                        <input type="text" className="form-control" placeholder="Insert your company name"  id="nameCompanyContact"/>
                    </div>
                    <div className="emailContact form-component">
                        <div className="alert alert-danger companyEmailAlert" role="alert">Please insert the company email</div>
                        <div className="label-contact titleInput">Email(*):</div>
                        <input type="text" className="form-control" placeholder="Insert your email"  id="emailCompanyContact"/>
                    </div>
                    <div className="askFor form-component">
                        <div className="alert alert-danger askAlert" role="alert">Please select a category</div>
                        <div className="label-contact titleInput">Ask for(*):</div>
                        <select className="form-control" id="selContact">
                            <option></option>
                            <option>General info</option>
                            <option>Price</option>
                            <option>Customisations</option>
                            <option>Support & Info - ST-CheckUp</option>
                            <option>Support & Info - ST-PdfMaker</option>
                            <option>Support & Info - ST-HelpDesk</option>
                            <option>Support & Info - ST-HR</option>
                        </select>
                    </div>
                    <div className="message">
                        <div className="alert alert-danger companyMessageAlert" role="alert">Please insert a message</div>
                        <div className="label-contact titleInput">Message(*):</div>
                        <textarea className="form-control" rows="5" id="comment" placeholder="Insert your message" ></textarea>
                    </div>
                </div>
                <div className="button-container">
                    <div className="col-md-12">
                        <div className="col-md-6 col-xs-12">
                            <div className="btn-welcome clean-contact" onClick={() => this.cleanClick()}>Clean</div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <div className="btn-welcome send-email" onClick={() => this.finishClick()}>Send</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
