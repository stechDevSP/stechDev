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
        var appsArray = [];
        var allApps = [];

        var arrayStorage = sessionStorage.getItem("AppsSelected");
        if (arrayStorage) {
            appsArray = JSON.parse(arrayStorage);
            //test
        } else {
            //get my apps

        }

        var allApps = JSON.parse(sessionStorage.getItem("AllApps"));
        var appsArray2 = [];

        if (appsArray.length && allApps.length) {
            $.each(allApps, function(iAll, eAll) {
                var find = false;
                $.each(appsArray, function(iMy, eMy) {
                    if (eMy.Name === eAll.Name) {
                        find = true;
                    }
                });
                if (!find) {
                    appsArray2.push(eAll);
                }
            });
        } else {
            appsArray2 = allApps;
        }

        sessionStorage.setItem("AppsShop", JSON.stringify(appsArray2));

        self.state = {
            apps: appsArray,
            appsRemain: appsArray2
        };
    }
    render() {
        var myObj = this;

        var items;
        if (this.state.apps) {
            items = this.state.apps.map(function(item, i) {
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
        } else {
            items = "<div className='noElements'>No apps found</div>";
        }


        var otherItems;
        if (this.state.appsRemain) {
            otherItems = this.state.appsRemain.map(function(item, i) {
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
        } else {
            otherItems = "<div className='noElements'>No apps suggested</div>";
        }

        return (
            <div className="col-md-12 welcome-component my-select-apps-zone">
                <div>
                    <div className="col-md-12 title-select-apps">My apps</div>
                    <div className="col-md-12">{items}</div>
                    <hr />
                    <div className="col-md-12 title-select-apps title-sugg">Other suggested apps</div>
                    <div className="col-md-12 other-apps">{otherItems}</div>
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
