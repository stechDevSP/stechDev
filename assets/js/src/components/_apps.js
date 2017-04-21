import React from 'react';
import ReactDOM from 'react-dom';

import { ModalPopup } from '../reusable/modal.jsx';

export class Apps extends React.Component {
    getInitialState() {
        return {
            apps: []
        };
    }
    constructor(props) {
        super(props);
        var self = this;

        this.goBackClick = this.goBackClick.bind(this);
        this.packageClick = this.packageClick.bind(this);
        this.finishClick = this.finishClick.bind(this);
        this.cleanClick = this.cleanClick.bind(this);

        var appsArray = [];

        var arrayStorage = sessionStorage.getItem("AllApps");
        if (arrayStorage) {
            appsArray = JSON.parse(arrayStorage);
            //test
        } else {

            //get my apps, if my login is empty get all

            appsArray = [{
                "Logo": "../_img/png/checkup.png",
                "Id": 1,
                "Name": "ST-CheckUp Intranet",
                "Description": "Assessment of your site collection",
                "DescriptionFull": "You could check how many librariers/lists you have in your site, how many users access to your pages and more other information",
                "Pic1": "#",
                "Pic2": "#",
                "Pic3": "#",
                "StartPrice": 300,
                "MonthPrice": 10,
                "StartDollarPrice": 360,
                "MonthDollarPrice": 12,
                "StartSterlinPrice": 270,
                "MonthSterlinPrice": 9
            }, {
                "Logo": "../_img/png/pdfIcon2.png",
                "Id": 2,
                "Name": "ST-PdfMaker",
                "Description": "Select an item from one of your list & create in few steps your Pdf",
                "DescriptionFull": "Create your custom pdf files with drag & drop all the information you need from a Sharepoint's list/library",
                "Pic1": "#",
                "Pic2": "#",
                "Pic3": "#",
                "StartPrice": 300,
                "MonthPrice": 10,
                "StartDollarPrice": 360, // euro x 1.2,
                "MonthDollarPrice": 12,
                "StartSterlinPrice": 270, // euro x 0.9,
                "MonthSterlinPrice": 9
            }, {
                "Logo": "../_img/png/helpdeskIcon2.png",
                "Id": 3,
                "Name": "ST-MultiList",
                "Description": "Select & trasform one list in a task list with a lot of functionalities",
                "DescriptionFull": "Select a list a trasform it in a task list or checkbox list or wishlist",
                "Pic1": "#",
                "Pic2": "#",
                "Pic3": "#",
                "StartPrice": 200,
                "MonthPrice": 10,
                "StartDollarPrice": 240,
                "MonthDollarPrice": 12,
                "StartSterlinPrice": 180,
                "MonthSterlinPrice": 9
            }, {
                "Logo": "../_img/png/hrIcon2.png",
                "Id": 4,
                "Name": "ST-Project Gantter",
                "Description": "Help your users to schedule and track all activities",
                "DescriptionFull": "You could help all your users to create activities tracker and gantt for any projects",
                "Pic1": "#",
                "Pic2": "#",
                "Pic3": "#",
                "StartPrice": 300,
                "MonthPrice": 10,
                "StartDollarPrice": 360,
                "MonthDollarPrice": 12,
                "StartSterlinPrice": 270,
                "MonthSterlinPrice": 9
            }];

            sessionStorage.setItem("AllApps", JSON.stringify(appsArray));
        }

        self.state = { apps: appsArray };
    }
    goBackClick() {
        $(".welcome-component").slideUp();
        $(".welcome-zone").slideDown();
        $(".cart-icon, .select-currency, .profile-drop, .cart-buttons").hide();
        $(".cardShop").show();

    }
    packageClick(idPackage) {
        if ($(".cart-container").html() === "No apps selected") {
            $(".cart-container").empty();
        }

        var idPackage = idPackage;
        var htmlCard = "<div class='infoCardAdded cardAdded_" + idPackage + "'><div class='logoDetails'><img src='" + $(".infoCard_" + idPackage).find(".logoCard").html() + "' /></div><div class='titleCard'>" + $(".cardTitle_" + idPackage).html() + "</div><div class='descriptionCard'>" + $(".infoCard_" + idPackage).find(".description").html() + "</div><div class='priceCardDetails'>Standard package:<b><span class='euro selectedEuroPriceDet'>" + $(".infoCard_" + idPackage).find(".euroPrice").find(".priceCard").html() + "</span><span class='sterlina selectedSterlinPriceDet'>" + $(".infoCard_" + idPackage).find(".sterlinPrice").find(".priceCard").html() + "</span><span class='dollaro selectedDollarPriceDet'>" + $(".infoCard_" + idPackage).find(".dollarPrice").find(".priceCard").html() + "</span></b><span class='currencyDetail'> " + $(".myCurrency").html() + "</span></div><div class='priceSubDetails'>Standard package subscription:<b><span class='euro selectedEuroSubPriceDet'>" + $(".infoCard_" + idPackage).find(".euroPrice").find(".priceSub").html() + "</span><span class='dollaro selectedDollarSubPriceDet'>" + $(".infoCard_" + idPackage).find(".dollarPrice").find(".priceSub").html() + "</span><span class='sterlina selectedSterlinSubPriceDet'>" + $(".infoCard_" + idPackage).find(".sterlinPrice").find(".priceSub").html() + "</span></b><span class='currencyDetail'>" + $(".myCurrency").html() + "</span></div><div class='hiddenInfo'><div class='pic1Details'>" + $(".infoCard_" + idPackage).find(".pic1Card").html() + "</div><div class='pic2Details'>" + $(".infoCard_" + idPackage).find(".pic2Card").html() + "</div><div class='pic3Details'>" + $(".infoCard_" + idPackage).find(".pic3Card").html() + "</div><div class='descrFullDetails'>" + $(".infoCard_" + idPackage).find(".descrFull").html() + "</div></div><div class='deleteCard' id='deleteCard_" + idPackage + "' data-card-id='" + idPackage + "'><img class='icon icons8-Delete' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAABEklEQVRIS+WWyxHCMAxEdzugA+gAqICkYkogdJB0QAl0IEaMPZOPLDk55BIfg60nrbQaiJ0Od+LgICAROQF4JVlbkl9P4pr7C+lGj24peA+gCKu9b4E6AI9ZBSbMgORnHcl2HMMCadCrIdUE5kD06UAyK/IPVZJOqyrCUhLaw0mw9H0A0Mz7ao53ytaDacxqiFlRliyAWUNoVpIvuoZdAXMhbkUrKgshtSDtxRPApWBa12e10ilEp0s3hXdCWLFHIlILyQm4sNJ4exDtiZ7Q1NFmiCBNCuCaOjSsiHwAnI2GTKYrMjXJe1SRtVTNEXZgb5K58upd5/rEgG3adZrNYkHOZR3BivcP8p8h2AKbft5Nuh8LOJobI3DWvwAAAABJRU5ErkJggg==' width='26' height='26' /></div></div>";

        $(".cart-container-prev").append(htmlCard);
        $(".card_" + idPackage).hide();
        $(".cart-buttons").show();

        var allSelected = true;
        $.each($(".totalApps").find(".card"), function(i, v){
            if($(v).css('display') === 'block'){
                allSelected = false;
            }
        });

        if (allSelected) {
            $(".totalApps").append("<div class='allSelected'>No more apps to select</div>");
        }else{
            $(".allSelected").remove();
        }

        var newCounter = parseInt($(".orderNumber").html()) + 1;
        $(".orderNumber").html(newCounter);

        var newTotal = parseInt($(".infoCard_" + idPackage).find(".euroPrice").find(".priceCard").html()) + parseInt($(".totale-cart-value").html());
        $(".totale-cart-value").html(newTotal);

        var newSubTotal = parseInt($(".infoCard_" + idPackage).find(".euroPrice").find(".priceSub").html()) + parseInt($(".totale-sub-value").html());
        $(".totale-sub-value").html(newSubTotal);

        var newTotalSterlin = parseInt($(".infoCard_" + idPackage).find(".sterlinPrice").find(".priceCard").html()) + parseInt($(".totale-cart-value-sterlin").html());
        $(".totale-cart-value-sterlin").html(newTotalSterlin);

        var newSubTotalSterlin = parseInt($(".infoCard_" + idPackage).find(".sterlinPrice").find(".priceSub").html()) + parseInt($(".totale-sub-value-sterlin").html());
        $(".totale-sub-value-sterlin").html(newSubTotalSterlin);

        var newTotalDollar = parseInt($(".infoCard_" + idPackage).find(".dollarPrice").find(".priceCard").html()) + parseInt($(".totale-cart-value-dollar").html());
        $(".totale-cart-value-dollar").html(newTotalDollar);

        var newSubTotalDollar = parseInt($(".infoCard_" + idPackage).find(".dollarPrice").find(".priceSub").html()) + parseInt($(".totale-sub-value-dollar").html());
        $(".totale-sub-value-dollar").html(newSubTotalDollar);

        // $("#deleteCard_" + idPackage).click(function(e) {
        //     e.preventDefault();
        //     var idPackage = $(this).data("card-id");
        //     $(".cardAdded_" + idPackage).remove();

        //     var newCounter = parseInt($(".orderNumber").html()) - 1;
        //     $(".orderNumber").html(newCounter);

        //     var newTotal = parseInt($(".totale-cart-value").html()) - parseInt($(".infoCard_" + idPackage).find(".euroPrice").find(".priceCard").html());
        //     $(".totale-cart-value").html(newTotal);

        //     var newSubTotal = parseInt($(".totale-sub-value").html()) - parseInt($(".infoCard_" + idPackage).find(".euroPrice").find(".priceSub").html());
        //     $(".totale-sub-value").html(newSubTotal);

        //     var newTotalSterlin = parseInt($(".totale-cart-value-sterlin").html()) - parseInt($(".infoCard_" + idPackage).find(".sterlinPrice").find(".priceCard").html());
        //     $(".totale-cart-value-sterlin").html(newTotalSterlin);

        //     var newSubTotalSterlin = parseInt($(".totale-sub-value-sterlin").html()) - parseInt($(".infoCard_" + idPackage).find(".sterlinPrice").find(".priceSub").html());
        //     $(".totale-sub-value-sterlin").html(newSubTotalSterlin);

        //     var newTotalDollar = parseInt($(".totale-cart-value-dollar").html()) - parseInt($(".infoCard_" + idPackage).find(".dollarPrice").find(".priceCard").html());
        //     $(".totale-cart-value-dollar").html(newTotalDollar);

        //     var newSubTotalDollar = parseInt($(".totale-sub-value-dollar").html()) - parseInt($(".infoCard_" + idPackage).find(".dollarPrice").find(".priceSub").html());
        //     $(".totale-sub-value-dollar").html(newSubTotalDollar);

        //     $(".card_" + idPackage).show();

        //     if (newCounter === 0) {
        //         $(".cart-container").html("No apps selected");
        //         $(".confirm-cart, .clean-cart").hide();
        //     }
        // });
    }
    finishClick() {
        $(".select-apps-zone, .payment-zone, .select-version, .cart-details").slideUp();

        var priceStandard = parseInt($(".totale-cart-value").html());
        var priceEnterprise = parseInt($(".totale-cart-value").html()) * 5;
        var pricePremium = parseInt($(".totale-cart-value").html()) * 10;

        var subStandard = parseInt($(".totale-sub-value").html());
        var subEnterprise = parseInt($(".totale-sub-value").html()) * 5;
        var subPremium = parseInt($(".totale-sub-value").html()) * 10;

        $(".standard").find(".priceEuroVersion").html(priceStandard + " €");
        $(".standard").find(".valueEuroPrice").html(subStandard + " €");

        $(".enterprise").find(".priceEuroVersion").html(priceEnterprise + " €");
        $(".enterprise").find(".valueEuroPrice").html(subEnterprise + " €");

        $(".premium").find(".priceEuroVersion").html(pricePremium + " €");
        $(".premium").find(".valueEuroPrice").html(subPremium + " €");

        var priceSterlinStandard = parseInt($(".totale-cart-value-sterlin").html());
        var priceSterlinEnterprise = parseInt($(".totale-cart-value-sterlin").html()) * 5;
        var priceSterlinPremium = parseInt($(".totale-cart-value-sterlin").html()) * 10;

        var subSterlinStandard = parseInt($(".totale-sub-value-sterlin").html());
        var subSterlinEnterprise = parseInt($(".totale-sub-value-sterlin").html()) * 5;
        var subSterlinPremium = parseInt($(".totale-sub-value-sterlin").html()) * 10;

        $(".standard").find(".priceSterlinVersion").html(priceSterlinStandard + " £");
        $(".standard").find(".valueSterlinPrice").html(subSterlinStandard + " £");

        $(".enterprise").find(".priceSterlinVersion").html(priceSterlinEnterprise + " £");
        $(".enterprise").find(".valueSterlinPrice").html(subSterlinEnterprise + " £");

        $(".premium").find(".priceSterlinVersion").html(priceSterlinPremium + " £");
        $(".premium").find(".valueSterlinPrice").html(subSterlinPremium + " £");


        var priceDollarStandard = parseInt($(".totale-cart-value-dollar").html());
        var priceDollarEnterprise = parseInt($(".totale-cart-value-dollar").html()) * 5;
        var priceDollarPremium = parseInt($(".totale-cart-value-dollar").html()) * 10;

        var subDollarStandard = parseInt($(".totale-sub-value-dollar").html());
        var subDollarEnterprise = parseInt($(".totale-sub-value-dollar").html()) * 5;
        var subDollarPremium = parseInt($(".totale-sub-value-dollar").html()) * 10;

        $(".standard").find(".priceDollarVersion").html(priceDollarStandard + " $");
        $(".standard").find(".valueDollarPrice").html(subDollarStandard + " $");

        $(".enterprise").find(".priceDollarVersion").html(priceDollarEnterprise + " $");
        $(".enterprise").find(".valueDollarPrice").html(subDollarEnterprise + " $");

        $(".premium").find(".priceDollarVersion").html(priceDollarPremium + " $");
        $(".premium").find(".valueDollarPrice").html(subDollarPremium + " $");

        $(".package").removeClass("packageSel");
        $(".packageVersions").show();
        $(".select-version").slideDown();
        $(".select-currency").show();
        $(".btn-versions").hide();

        var htmlCard = $(".cart-container-prev").html();

        sessionStorage.setItem("MyAppsDetails", htmlCard);
    }
    cleanClick() {
        $(".cart-container").html("No apps selected");
        $(".orderNumber,.totale-cart-value,.totale-sub-value,.totale-cart-value-sterlin,.totale-sub-value-sterlin,.totale-cart-value-dollar,.totale-sub-value-dollar").html(0);
        $(".card").show();
        $(".confirm-cart, .clean-cart").hide();
        $(".allSelected").remove();

        this.packageClick = this.packageClick.bind(this);
    }
    render() {
        var self = this;

        var items = this.state.apps.map(function(item, i) {
            var app = (
                <div className={"col-md-3 col-sm-6 col-xs-12 card cardShop card_" + i + " cardId_" + item.Id} key={i}>
                    <div className={"titleCard cardTitle_" + i}>{item.Name}</div>
                        <div className="flip-container">
                            <div className="flipper">
                                <div className={"front " + item.Name}></div>
                                <div className={'back boxInfo boxInfo_' + item.Name + " infoCard_" + i}>
                                    <div className="description">{item.Description}</div>
                                    <div className="euro euroPrice backInfo">
                                        <div><div className="startPack">Start Price</div>: <span className="priceCard">{item.StartPrice}</span> €</div>
                                        <div><div className="monthlySub">Monthly Subscription</div>: <span className="priceSub">{item.MonthPrice}</span> €</div>
                                    </div>
                                    <div className="dollaro dollarPrice backInfo">
                                        <div><div className="startPack">Start Price</div>: <span className="priceCard">{item.StartDollarPrice}</span> $</div>
                                        <div><div className="monthlySub">Monthly Subscription</div>: <span className="priceSub">{item.MonthDollarPrice}</span> $</div>
                                    </div>
                                    <div className="sterlina sterlinPrice backInfo">
                                        <div><div className="startPack">Start Price</div>: <span className="priceCard">{item.StartSterlinPrice}</span> £</div>
                                        <div><div className="monthlySub">Monthly Subscription</div>: <span className="priceSub">{item.MonthSterlinPrice}</span> £</div>
                                    </div>
                                    <div className="hiddenInfo">
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
                    <div data-card-id={i} className={"btn-welcome selectPackage select_" + i} onClick={() => self.packageClick(i)}>Add to cart</div>
                </div>
            );
            return app;

            if (!this.state.apps.length) {
                items = "No apps found";
            }
        });

        return (
            <div>
                <div className="goBack-homepage" onClick={() => this.goBackClick()}>
                    <img className="icon icons8-Long-Arrow-Left" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAA30lEQVRIS+2U/Q2CMBTE7ybQDWQDdQNHcARH0wl0Ax3BEXADneCZI21SPgOlEGPoX9Dy+utdj0fMNDgTBwso2unfsM7MMgBXySC5j5aj+rZiM9sBuANYO9Ao9Y3FZnZwSgrIJCAzO3q7QrUk0ymq2tVg6xvAM5h/BM+a17rGi2ReOqh/6QGJycKF5KmwPgDpBJuY3bpqvOUhSNK3c4D0zwi2SgirW6fN3T3pgttgn55hyFvDUAlFDZY03l2wSUCBjTefxMlADqYWdAaQkVTvix6j2soQ6gIa4lbp2/+z7gvHwkYbyI5xugAAAABJRU5ErkJggg==" width="26" height="26" />
                    <div className="backLabel">Back to homepage</div>
                </div>
                <div className="col-md-12 title-select-apps start-apps">Select your apps</div>
                <div className="col-md-12 description-panel">In here you could find all the apps in our store, buy it or view more details about it. Click more info for check some details about an apps and add it on your cart.</div>
                <div className="col-md-12 title-select-apps suggested-apps">Other suggested apps</div>
                <div className="col-md-12 totalApps">{items}</div>
                <div className="cart-buttons">
                    <div className="col-md-12">
                        <div className="col-md-6 col-xs-12">
                            <div className="btn-welcome clean-sel-cart" onClick={() => this.cleanClick()}>Clean</div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <div className="btn-welcome confirm-sel-cart" onClick={() => this.finishClick()}>Continue</div>
                        </div>
                    </div>
                </div>
                <div className="cart-container-prev"></div>
            </div>
        );
    }
}
