import React from 'react';
import ReactDOM from 'react-dom';

import { ModalPopup } from '../components/modal.jsx';

import { StHelpDesk } from '../webparts/st-helpdesk.jsx';
import { StCheckUp } from '../webparts/st-checkup.jsx';
import { StHr } from '../webparts/st-hr.jsx';
import { StPdfMaker } from '../webparts/st-pdfmaker.jsx';

export class MyApps extends React.Component {
    getInitialState() {
        return {
            showHelpDesk: false,
            showCheckUp: false,
            showHr: false,
            showHPdfMaker: false,
            apps: [],
            appsRemain: []
        };
    }
    constructor(props) {
        super(props);
        var self = this;

        this.handleClick = this.handleClick.bind(this);

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
    handleClick(nameApp) {
        var myApps = true;

        if (nameApp == "ST-CheckUp") {
            this.setState({ showCheckUp: true });
            this.setState({ showHPdfMaker: false });
            this.setState({ showHelpDesk: false });
            this.setState({ showHr: false });
            myApps = false;
        } else {
            this.setState({ showCheckUp: false });
        }

        if (nameApp == "ST-IPdf") {
            this.setState({ showHPdfMaker: true });
            this.setState({ showCheckUp: false });
            this.setState({ showHelpDesk: false });
            this.setState({ showHr: false });
            myApps = false;
        } else {
            this.setState({ showHPdfMaker: false });
        }

        if (nameApp == "ST-HelpDesk") {
            this.setState({ showHelpDesk: true });
            this.setState({ showHPdfMaker: false });
            this.setState({ showCheckUp: false });
            this.setState({ showHr: false });
            myApps = false;
        } else {
            this.setState({ showHelpDesk: false });
        }

        if (nameApp == "ST-HR") {
            this.setState({ showHr: true });
            this.setState({ showHPdfMaker: false });
            this.setState({ showHelpDesk: false });
            this.setState({ showCheckUp: false });
            myApps = false;
        } else {
            this.setState({ showHr: false });
        }

        if (myApps) {
            $(".goBack-selectApps").hide();
            $(".view-my-apps, .profile-drop, .select-currency").show();
        } else {
            $(".view-my-apps, .profile-drop, .select-currency").hide();
            $(".goBack-selectApps").show();
        }
    }
    render() {
        var self = this;

        var items;
        if (this.state.apps && this.state.apps.length > 0) {
            items = this.state.apps.map(function(item, i) {
                var app = (
                    <div className="col-md-3 col-sm-6 col-xs-12 card myCardRedirect" key={i} data-myApp={item.Name} onClick={() => self.handleClick(item.Name)} >
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
            items = "No apps found";
        }


        var otherItems;
        if (this.state.appsRemain && this.state.appsRemain.length > 0) {
            otherItems = this.state.appsRemain.map(function(item, i) {
                var app2 = (
                    <div className="col-md-3 col-sm-6 col-xs-12 card otherShopCard" key={i}>
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
            otherItems = "No apps suggested";
        }

        return (
            <div className="col-md-12 welcome-component my-select-apps-zone">
                 <div className="goBack-selectApps">
                    <img className="icon icons8-Long-Arrow-Left" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAA30lEQVRIS+2U/Q2CMBTE7ybQDWQDdQNHcARH0wl0Ax3BEXADneCZI21SPgOlEGPoX9Dy+utdj0fMNDgTBwso2unfsM7MMgBXySC5j5aj+rZiM9sBuANYO9Ao9Y3FZnZwSgrIJCAzO3q7QrUk0ymq2tVg6xvAM5h/BM+a17rGi2ReOqh/6QGJycKF5KmwPgDpBJuY3bpqvOUhSNK3c4D0zwi2SgirW6fN3T3pgttgn55hyFvDUAlFDZY03l2wSUCBjTefxMlADqYWdAaQkVTvix6j2soQ6gIa4lbp2/+z7gvHwkYbyI5xugAAAABJRU5ErkJggg==" width="26" height="26" />
                    <div className="backLabel">Back to apps</div>
                </div> 
                <div className="view-my-apps">
                    <div>
                        <div className="col-md-12 title-select-apps">My apps</div>
                        <div className="col-md-12 myApps">{items}</div>
                        <hr />
                        <div className="col-md-12 title-select-apps title-sugg">Other suggested apps</div>
                        <div className="col-md-12 other-apps">{otherItems}</div>
                    </div>
                    <div className="col-md-12 btn-suggested">
                        <div className="col-md-9">&nbsp;</div>
                        <div className="col-md-3 col-sm- 12 col-xs-12">
                            <div className="btn-welcome go-shop">Go to shop</div>
                        </div>
                    </div>
                </div>
                <div id="view" className="div-React">
                    {this.state.showCheckUp ? <STCheckUp /> : <div className="STCheckUp"></div>}
                    {this.state.showHPdfMaker ? <StPdfMaker /> : <div className="StPdfMaker"></div>}
                    {this.state.showHelpDesk ? <StHelpDesk /> : <div className="StHelpDesk"></div>}
                    {this.state.showHr ? <StHr /> : <div className="StHr"></div>}
                </div>
            </div>
        );
    }
}
