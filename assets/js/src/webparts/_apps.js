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

        var arrayStorage = sessionStorage.getItem("AllApps");
        if (arrayStorage) {
            appsArray = JSON.parse(arrayStorage);
            //test
        } else {

            //get my apps, if my login is empty get all

            appsArray = [{
                "Logo": "../_img/png/assessIcon.png",
                "Id": 1,
                "Name": "ST-CheckUp",
                "Description": "Assessment of your site collection",
                "DescriptionFull": "You could check how many librariers/lists you have in your site, how many users access to your pages and more other information",
                "Pic1": "#",
                "Pic2": "#",
                "Pic3": "#",
                "StartPrice": 400,
                "MonthPrice": 10, 
                "StartDollarPrice": 360,
                "MonthDollarPrice": 9,
                "StartSterlinPrice": 520,
                "MonthSterlinPrice": 14
            }, {
                "Logo": "../_img/png/pdfIcon.png",
                "Id": 2,
                "Name": "ST-IPdf",
                "Description": "Create your pdf",
                "DescriptionFull": "Create your custom pdf files with drag & drop all the information you need from a Sharepoint's list/library",
                "Pic1": "#",
                "Pic2": "#",
                "Pic3": "#",
                "StartPrice": 500,
                "MonthPrice": 10,
                "StartDollarPrice": 450,
                "MonthDollarPrice": 9,
                "StartSterlinPrice": 650,
                "MonthSterlinPrice": 14
            }, {
                "Logo": "../_img/png/helpdeskIcon.png",
                "Id": 3,
                "Name": "ST-HelpDesk",
                "Description": "Help your users",
                "DescriptionFull": "You could help and support all your users about IT, General problems, HR, requests and much more",
                "Pic1": "#",
                "Pic2": "#",
                "Pic3": "#",
                "StartPrice": 200,
                "MonthPrice": 10,
                "StartDollarPrice": 180,
                "MonthDollarPrice": 9,
                "StartSterlinPrice": 260,
                "MonthSterlinPrice": 14
            }, {
                "Logo": "../_img/png/hrIcon.png",
                "Id": 4,
                "Name": "ST-HR",
                "Description": "Manage your company, your users",
                "DescriptionFull": "You could manage timesheets, tickets, customer companies, vacation requests, sickness",
                "Pic1": "#",
                "Pic2": "#",
                "Pic3": "#",
                "StartPrice": 400,
                "MonthPrice": 10,
                "StartDollarPrice": 360,
                "MonthDollarPrice": 9,
                "StartSterlinPrice": 520,
                "MonthSterlinPrice": 14
            }];

            sessionStorage.setItem("AllApps", JSON.stringify(appsArray));
        }

        self.state = { apps: appsArray };
    }
    render() {
        var myObj = this;

        var items = this.state.apps.map(function(item, i) {
            var app = (
                <div className={"col-md-3 card cardShop card_" + i + " cardId_" + item.Id} key={i}>
                    <div className={"titleCard cardTitle_" + i}>{item.Name}</div>
                        <div className="flip-container">
                            <div className="flipper">
                                <div className={"front " + item.Name}></div>
                                <div className={'back boxInfo boxInfo_' + item.Name + " infoCard_" + i}>
                                    <div className="description">{item.Description}</div>
                                    <div className="euroPrice">
                                        <div><b>Start Price</b> : <span className="priceCard">{item.StartPrice}</span>€ </div>
                                        <div><b>Monthly Subscription</b> : <span className="priceSub">{item.MonthPrice}</span>€ x month</div>
                                    </div>
                                    <div className="dollarPrice">
                                        <div><b>Start Price</b> : <span className="priceCard">{item.StartDollarPrice}</span>$ </div>
                                        <div><b>Monthly Subscription</b> : <span className="priceSub">{item.MonthDollarPrice}</span>$ x month</div>
                                    </div>
                                    <div className="sterlinPrice">
                                        <div><b>Start Price</b> : <span className="priceCard">{item.StartSterlinPrice}</span>£ </div>
                                        <div><b>Monthly Subscription</b> : <span className="priceSub">{item.MonthSterlinPrice}</span>£ x month</div>
                                    </div>
                                    <div className="hiddenInfo">
                                        <div className="selectedPrice">{item.StartPrice}</div>
                                        <div className="selectedSubPrice">{item.MonthPrice}</div>
                                        <div className="logoCard">{item.Logo}</div>
                                        <div className="descrFull">{item.DescriptionFull}</div>
                                        <div className="pic1Card">{item.Pic1}</div>
                                        <div className="pic2Card">{item.Pic2}</div>
                                        <div className="pic3Card">{item.Pic3}</div>
                                    </div>
                                </div>  
                            </div>
                        </div>
                    <ModalPopup viewSave="modal-hide-save" className={"btn-welcome moreInfo infoPopup_" + i} text="More info" titleCard={item.Name} fullDescr={item.DescriptionFull} pic1={item.Pic1} pic2={item.Pic2} pic3={item.Pic3} />
                    <div data-card-id={i} className={"btn-welcome selectPackage select_" + i}>Add to cart</div>
                </div>
            );
            return app;

            if (!this.state.apps.length) {
                items = "No apps found";
            }
        });

        return (
            <div className="col-md-12 select-apps-zone welcome-component">
                <div className="col-md-12 title-select-apps start-apps">Select your apps</div>
                <div className="col-md-12 title-select-apps suggested-apps">Other suggested apps</div>
                <div className="col-md-12 totalApps">{items}</div>
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
