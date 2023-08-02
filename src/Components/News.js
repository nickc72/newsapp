import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [{
        "source": { "id": null, "name": "NDTV News" },
        "author": null,
        "title": "2 Supermoons In August, Rare Phenomenon Won't Be Seen Again For 14 Years - NDTV",
        "description": "NDTV.com: India, Business, Bollywood, Cricket, Video and Breaking News",
        "url": "https://www.ndtv.com/news",
        "urlToImage": "https://cdn.ndtv.com/common/images/ogndtv.png",
        "publishedAt": "2023-07-31T10:52:39Z",
        "content": null
    },
    {
        "source": { "id": "the-times-of-india", "name": "The Times of India" },
        "author": "TIMESOFINDIA.COM",
        "title": "India Vs West Indies: India vs West Indies: Who said what after India's shock loss in the 2nd ODI - IndiaTimes",
        "description": "Cricket News: India's 6 wicket loss vs the West Indies in the second ODI of the ongoing 3 match series sent shockwaves across the Indian cricket fraternity. It wasn",
        "url": "https://timesofindia.indiatimes.com/sports/cricket/india-in-west-indies/india-vs-west-indies-who-said-what-after-indias-shock-loss-in-the-2nd-odi/articleshow/102272904.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-102273092,width-1070,height-580,imgsize-78030,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2023-07-31T08:50:00Z",
        "content": "3rd ODI: India hope their experiments work in series decider against West IndiesIndia prepare for a high-stakes ODI series decider against West Indies, focusing on the experimental middle-order combi… [+132 chars]"
    },
    {
        "source": { "id": null, "name": "NDTV News" },
        "author": "NDTV Sports Desk",
        "title": "\"Pakistan Se Nahi Haarna\": Kapil Dev Sums Up Drama Around Indo-Pak World Cup Match | Cricket News - NDTV Sports",
        "description": "India and Pakistan are scheduled to face each other on multiple occasions, in the forthcoming Asia Cup and World Cup.",
        "url": "https://sports.ndtv.com/cricket/pakistan-se-nahi-haarna-kapil-dev-sums-up-drama-around-indo-pak-world-cup-match-4254590",
        "urlToImage": "https://c.ndtvimg.com/2023-02/gur38aag_india-pakistan-afp_625x300_16_February_23.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675",
        "publishedAt": "2023-07-31T07:52:07Z",
        "content": "India and Pakistan don't play each other too often but the hype around the contest is as fierce as ever. With the two teams now set to face each other in the Asia Cup and the ODI World Cup this year,… [+1575 chars]"
    }]
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
    render() {
        return (
            <div className='container my-3'>
                <h2>News Monkey - Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title.slice(0,45)} description={element.description.slice(0,88)} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News
