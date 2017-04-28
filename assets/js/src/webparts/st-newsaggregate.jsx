import React from 'react';

export class StNewsAggregate extends React.Component {
    constructor(props) {
        super(props);
        var self = this;

        this.confirmClick = this.confirmClick.bind(this);
        this.sendClick = this.sendClick.bind(this);
        this.cleanClick = this.cleanClick.bind(this);

        var newsArray = [{
            "UrlImage": "../img_news/abc-news-au.png",
            "Title": "ABC News (AU)",
            "Category": "general",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=abc-news-au&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/al-jazeera-english.png",
            "Title": "Al Jazeera English",
            "Category": "general",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=al-jazeera-english&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/ars-technica.png",
            "Title": "Ars Technica",
            "Category": "technology",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=ars-technica&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/associated-press.png",
            "Title": "Associated Press",
            "Category": "general",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=associated-press&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/bbc-news.png",
            "Title": "BBC News",
            "Category": "general",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=bbc-news&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/bbc-sport.png",
            "Title": "BBC Sport",
            "Category": "sport",
            "Language": "en",
            "Category": "general",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=bbc-sport&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/bild.png",
            "Title": "Bild",
            "Category": "general",
            "Language": "de",
            "Url":"https://newsapi.org/v1/articles?source=bild&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/bloomberg.png",
            "Title": "Bloomberg",
            "Category": "business",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=bloomberg&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/breitbart-news.png",
            "Title": "Breitbart News",
            "Category": "politics",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=breitbart-news&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/business-insider-uk.png",
            "Title": "Business Insider (UK)",
            "Category": "business",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=business-insider-uk&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/business-insider.png",
            "Title": "Business Insider",
            "Category": "business",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=business-insider&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/buzzfeed.png",
            "Title": "Buzzfeed",
            "Category": "entertainment",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=buzzfeed&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/cnbc.png",
            "Title": "CNBC",
            "Category": "business",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=cnbc&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/cnn.png",
            "Title": "CNN",
            "Category": "general",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=cnn&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/daily-mail.png",
            "Title": "Daily Mail",
            "Category": "entertainment",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=daily-mail&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/der-tagesspiegel.png",
            "Title": "Der Tagesspiegel",
            "Category": "general",
            "Language": "de",
            "Url":"https://newsapi.org/v1/articles?source=der-tagesspiegel&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/die-zeit.png",
            "Title": "Die Zeit",
            "Category": "business",
            "Language": "de",
            "Url":"https://newsapi.org/v1/articles?source=die-zeit&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/engadget.png",
            "Title": "Engadget",
            "Category": "technology",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=engadget&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/entertainment-weekly.png",
            "Title": "Entertainment Weekly",
            "Category": "entertainment",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=entertainment-weekly&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/espn.png",
            "Title": "ESPN",
            "Category": "sport",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=espn&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/espn-cric-info.png",
            "Title": "ESPN Cric Info",
            "Category": "sport",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=espn-cric-info&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/financial-times.png",
            "Title": "Financial Times",
            "Category": "business",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=financial-times&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/focus.png",
            "Title": "Focus",
            "Category": "general",
            "Language": "de",
            "Url":"https://newsapi.org/v1/articles?source=focus&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/football-italia.png",
            "Title": "Football Italia",
            "Category": "sport",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=football-italia&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/fortune.png",
            "Title": "Fortune",
            "Category": "business",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=fortune&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/four-four-two.png",
            "Title": "FourFourTwo",
            "Category": "sport",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=four-four-two&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/fox-sports.png",
            "Title": "Fox Sports",
            "Category": "sport",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=fox-sports&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/google-news.png",
            "Title": "Google News",
            "Category": "general",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=google-news&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/gruenderszene.png",
            "Title": "Gruenderszene",
            "Category": "technology",
            "Language": "de",
            "Url":"https://newsapi.org/v1/articles?source=gruenderszene&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/hacker-news.png",
            "Title": "Hacker News",
            "Category": "technology",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=hacker-news&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/handelsblatt.png",
            "Title": "Handelsblatt",
            "Category": "business",
            "Language": "de",
            "Url":"https://newsapi.org/v1/articles?source=handelsblatt&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/ign.png",
            "Title": "IGN",
            "Category": "gaming",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=ign&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/independent.png",
            "Title": "Independent",
            "Category": "general",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=independent&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/mashable.png",
            "Title": "Mashable",
            "Category": "entertainment",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=mashable&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/metro.png",
            "Title": "Metro",
            "Category": "general",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=metro&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/mirror.png",
            "Title": "Mirror",
            "Category": "general",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=mirror&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/mtv-news.png",
            "Title": "MTV News",
            "Category": "music",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=mtv-news&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/mtv-news-uk.png",
            "Title": "MTV News (UK)",
            "Category": "music",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=mtv-news-uk&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/national-geographic.png",
            "Title": "National Geographic ",
            "Category": "science & nature",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=national-geographic&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/new-scientist.png",
            "Title": "New Scientist",
            "Category": "science & nature",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=new-scientist&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/new-york-magazine.png",
            "Title": "New York Magazine",
            "Category": "general",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=new-york-magazine&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/newsweek.png",
            "Title": "News Week",
            "Category": "general",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=newsweek&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/nfl-news.png",
            "Title": "NFL News",
            "Category": "sport",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=nfl-news&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/polygon.png",
            "Title": "Polygon",
            "Category": "gaming",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=polygon&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/recode.png",
            "Title": "Recode",
            "Category": "technology",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=recode&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/reddit-r-all.png",
            "Title": "Reddit / r / all",
            "Category": "general",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=reddit-r-all&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/reuters.png",
            "Title": "Reuters",
            "Category": "general",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=reuters&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/spiegel-online.png",
            "Title": "Spiegel Online",
            "Category": "general",
            "Language": "de",
            "Url":"https://newsapi.org/v1/articles?source=spiegel-online&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/t3n.png",
            "Title": "T3n",
            "Category": "technology",
            "Language": "de",
            "Url":"https://newsapi.org/v1/articles?source=t3n&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/talksport.png",
            "Title": "TalkSport",
            "Category": "sport",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=talksport&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/techcrunch.png",
            "Title": "TechCrunch",
            "Category": "technology",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=techcrunch&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/techradar.png",
            "Title": "TechRadar",
            "Category": "technology",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=techradar&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/the-economist.png",
            "Title": "The Economist",
            "Category": "business",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=the-economist&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/the-guardian-au.png",
            "Title": "The Guardian (AU)",
            "Category": "general",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=the-guardian-au&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/the-guardian-uk.png",
            "Title": "The Guardian (UK)",
            "Category": "general",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=the-guardian-uk&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/the-hindu.png",
            "Title": "The Hindu",
            "Category": "general",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=the-hindu&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/the-huffington-post.png",
            "Title": "The Huffington Post",
            "Category": "general",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=the-huffington-post&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/the-lad-bible.png",
            "Title": "The Lad Bible",
            "Category": "entertainment",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=the-lad-bible&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/the-new-york-times.png",
            "Title": "The New York Times",
            "Category": "general",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=the-new-york-times&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/the-next-web.png",
            "Title": "The Next Web",
            "Category": "technology",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=the-next-web&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/the-sport-bible.png",
            "Title": "The Sport Bible",
            "Category": "sport",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=the-sport-bible&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/the-telegraph.png",
            "Title": "The Telegraph",
            "Category": "general",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=the-telegraph&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/the-times-of-india.png",
            "Title": "The Times of India",
            "Category": "general",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=the-times-of-india&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/the-verge.png",
            "Title": "The Verge",
            "Category": "technology",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=the-verge&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/the-wall-street-journal.png",
            "Title": "The Wall Street Journal",
            "Category": "business",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=the-wall-street-journal&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/the-washington-post.png",
            "Title": "The Washington Post",
            "Category": "general",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=the-washington-post&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/time.png",
            "Title": "TIME",
            "Category": "general",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=time&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/usa-today.png",
            "Title": "Usa Today",
            "Category": "general",
            "Language": "en",
            "Url":"https://newsapi.org/v1/articles?source=usa-today&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/wired-de.png",
            "Title": "Wired.de",
            "Category": "technology",
            "Language": "de",
            "Url":"https://newsapi.org/v1/articles?source=wired-de&apiKey=25c818a17352430eb7aadeecc8e4221a"
        },{
            "UrlImage": "../img_news/wirtschafts-woche.png",
            "Title": "Wirtschafts Woche",
            "Category": "business",
            "Language": "de",
            "Url":"https://newsapi.org/v1/articles?source=wirtschafts-woche&apiKey=25c818a17352430eb7aadeecc8e4221a"
        }];

        self.state = {
            news: newsArray
        };
    }
    sendClick() {
        var selected = [];
        $.each($(".newsChoice").find(".newsSelectItem"), function(index, value){
            var newsSel = {
                "UrlImage": $(this).attr("data-img"),
                "Title": $(this).attr("data-title"),
                "Category": $(this).attr("data-category"),
                "Language": $(this).attr("data-language"),
                "Url": $(this).attr("data-url")
            };
            selected.push(newsSel);
        });

        console.log(selected);
    }
    confirmClick() {
        var selected = [];
        $('.checkNews:checked').each(function() {
            var idSel = $(this).attr('data-id');

            var checkSel = {
                "UrlImage": $(this).parent().parent().find(".imgNews").attr("src"),
                "Title": $(this).parent().parent().find(".newsTitle").html(),
                "Category": $(this).parent().parent().find(".newsCategory").find("span").html(),
                "Language": $(this).parent().parent().find(".newsCategory").find("span").html(),
                "Url": $(this).parent().parent().find(".newsUrl").html()
            };

            selected.push(checkSel);

            $('.news_' + idSel).hide();
        });

        var htmlNews = "";
        $.each(selected, function(index, value){
            htmlNews += "<div class='newsSelectItem' data-img='"+value.UrlImage+"' data-title='"+value.Title+"' data-category='"+value.Category+"' data-language='"+value.Language+"' data-url='" + value.Url + "'><div class='imgCard-sel'><img src='" + value.UrlImage + "' /></div><div class='titleCard-sel'>" + value.Title + "</div></div>";
        });

        $(".newsChoice").html(htmlNews);
        $(".send-sel-news").show();
    }
    cleanClick() {
        $(".checkNews").prop('checked', false);
        $(".newsChoice").html("Any news selected");
        $(".newsCard").show();
        $(".send-sel-news").hide();
    }
    render() {
        var self = this;

        var items = this.state.news.map(function(item, i) {
            var app = (
                <div className={"col-md-3 col-sm-4 col-xs-12 newsCard news_" + i} key={i}>
                    <div className="selectNews">
                        <input type="checkbox" className="checkNews" data-id={i} />
                    </div>
                    <div className="flip-container-news">
                        <div className="flipper-news">
                            <div className="frontNews">
                                <img src={item.UrlImage} className="imgNews" />
                            </div>
                            <div className='backNews'>
                                <div className='backInfoNews'>
                                    <div className="newsTitle">{item.Title}</div>
                                    <div className="newsCategory">Category: <span>{item.Category}</span></div>
                                    <div className="newsLanguage">Language: <span>{item.Language}</span></div>
                                    <div className="newsUrl">{item.Url}</div>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            );
            return app;
        });
        return (
            <div className="appST stNewsAggregate_app">
                <div className="title-myApp"> 
                    ST-NEWS AGGREGATE
                </div>
                <div className="col-md-12 title-select-apps start-apps">Select your news for create your site</div>
                <div className="col-md-12 description-panel">In here you could find all news provider that you could put in your news hub site. You will update every day with a lot of news.</div>
                <div className="col-md-9 totalNews">
                    <div className='news-container'>{items}</div>
                    <div className="col-md-6 col-xs-12">
                        <div className="btn-welcome clean-sel-news" onClick={() => this.cleanClick()}>Clean</div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <div className="btn-welcome confirm-sel-news" onClick={() => this.confirmClick()}>Confirm</div>
                    </div>
                </div>
                <div className="col-md-3 newsSelected">
                    <div className='titleSelected'>YOUR NEWS</div>
                    <div className='newsChoice'>Any news selected</div>
                    <div className="btn-welcome send-sel-news" onClick={() => this.sendClick()}>Generate</div>
                </div>  
            </div>

        );
    }
}
