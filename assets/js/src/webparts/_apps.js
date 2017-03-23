import React from 'react';
import ReactDOM from 'react-dom';

import { ModalPopup } from '../w_components/modal.jsx';

export class Apps extends React.Component {
    getInitialState() {
        return {
            apps: []
        };
    }
    constructor(props) {
        super(props);
        var self = this;
        var appsArray = [];

        var arrayStorage = sessionStorage.get("AppsSelected");
        if (arrayStorage) {
            appsArray = arrayStorage;
            //test
        } else {

            //get my apps, if my login is empty get all

            appsArray = [{
                "Name": "ST-CheckUp",
                "Description": "Assessment of your site collection",
                "DescriptionFull": "You could check how many librariers/lists you have in your site, how many users access to your pages and more other information",
                "Pic1": "#",
                "Pic2": "#",
                "Pic3": "#",
                "StartPrice": 400,
                "MonthPrice": 10
            }, {
                "Name": "ST-IPdf",
                "Description": "Create your pdf",
                "DescriptionFull": "Create your custom pdf files with drag & drop all the information you need from a Sharepoint's list/library",
                "Pic1": "#",
                "Pic2": "#",
                "Pic3": "#",
                "StartPrice": 500,
                "MonthPrice": 10
            }, {
                "Name": "ST-HelpDesk",
                "Description": "Help your users",
                "DescriptionFull": "You could help and support all your users about IT, General problems, HR, requests and much more",
                "Pic1": "#",
                "Pic2": "#",
                "Pic3": "#",
                "StartPrice": 200,
                "MonthPrice": 10
            }, {
                "Name": "ST-HR",
                "Description": "Manage your company, your users",
                "DescriptionFull": "You could manage timesheets, tickets, customer companies, vacation requests, sickness",
                "Pic1": "#",
                "Pic2": "#",
                "Pic3": "#",
                "StartPrice": 400,
                "MonthPrice": 10
            }];
        }

        self.state = { apps: appsArray };
    }
    render() {
        var myObj = this;

        var items = this.state.apps.map(function(item, i) {
            var app = (
                <div className={"col-md-3 card card_" + i} key={i}>
                    <div className={"titleCard cardTitle_" + i}>{item.Name}</div>
                        <div className="flip-container">
                            <div className="flipper">
                                <div className={"front " + item.Name}></div>
                                <div className={'back boxInfo boxInfo_' + item.Name + " infoCard_" + i}>
                                    <div className="description">{item.Description}</div>
                                    <div><b>Start Price</b> : <span className="priceCard">{item.StartPrice}</span>€ </div>
                                    <div><b>Monthly Subscription</b> : <span className="priceSub">{item.MonthPrice}</span>€ x month</div>
                                </div>  
                            </div>
                        </div>
                    <ModalPopup viewSave="modal-hide-save" className={"btn-welcome moreInfo infoPopup_" + i} text="More info" titleCard={item.Name} fullDescr={item.DescriptionFull} pic1={item.Pic1} pic2={item.Pic2} pic3={item.Pic3} />
                    <div data-card-id={i} className={"btn-welcome selectPackage select_" + i}>Add to cart</div>
                </div>
            );
            return app;

            if (!this.state.apps.length) {
                items = "<div className='noElements'>No apps found</div>";
            }
        });

        return (
            <div className="col-md-12 select-apps-zone welcome-component">
                <div className="col-md-12 title-select-apps start-apps">Select your apps</div>
                <div className="col-md-12 title-select-apps suggested-apps">Suggested apps</div>
                <div className="col-md-12">{items}</div>
                <div className="cart-buttons">
                    <div className="col-md-12">
                        <div className="col-md-6 col-xs-12">
                            <div className="btn-welcome clean-sel-cart">Clean</div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <div className="btn-welcome confirm-sel-cart">Go to cart</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
