import React from 'react';
import ReactDOM from 'react-dom';

import { ModalPopup } from '../w_components/modal.jsx';

export class MyApps extends React.Component {
    getInitialState() {
        return {
            apps: [],
            appsRemain: []
        };
    }
    constructor(props) {
        super(props);
        var self = this;

        //get my apps
        var appsArray = [{
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
        }];

        //get all remain apps
        var appsArray2 = [, {
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

        self.state = { 
            apps: appsArray,
            appsRemain: appsArray2 
        };
    }
    render() {
        var myObj = this;

        var items = this.state.apps.map(function(item, i) {
            var app = (
                <div className="col-md-3 card" key={i}>
                    <div className="flip-container">
                        <div className={"titleCard cardTitle_" + i}>{item.Name}</div>
                        <div className="myCard">
                            <div className={"front " + item.Name}></div>
                        </div>
                    </div>
                </div>
            );
            return app;
        });

        if(!this.state.apps.length){
            items = "<div className='noElements'>No apps found</div>";
        }

        var otherItems = this.state.appsRemain.map(function(item, i) {
            var app2 = (
                <div className="col-md-3 card" key={i}>
                    <div className="flip-container">
                        <div className={"titleCard cardTitle_" + i}>{item.Name}</div>
                        <div className="myCard">
                            <div className={"front " + item.Name}></div>
                        </div>
                    </div>
                </div>
            );
            return app2;
        });

        if(!this.state.appsRemain.length){
            otherItems = "<div className='noElements'>No apps suggested</div>";
        }

        return (
            <div className="col-md-12 welcome-component my-select-apps-zone">
                <div>
                    <div className="col-md-12 title-select-apps">My apps</div>
                    <div className="col-md-12">{items}</div>
                    <hr />
                    <div className="col-md-12 title-select-apps title-sugg">Other suggested apps</div>
                    <div className="col-md-12">{otherItems}</div>
                </div>
                <div className="col-md-12 btn-suggested">
                    <div className="col-md-9">&nbsp;</div>
                    <div className="col-md-3 col-xs-12">
                        <div className="btn-welcome go-shop">Go to shop</div>
                    </div>
                </div>
            </div>
        );
    }
}
