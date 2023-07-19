import React, { Component, useState } from 'react';
import NewsItem from './NewsItem';


export class News extends Component {
  articles = [
    {
      "source": { "id": "the-washington-post", "name": "The Washington Post" },
      "author": "David L. Stern, Robyn Dixon, Jennifer Hassan, Kelly Kasulis Cho, Sammy Westfall",
      "title": "Russia-Ukraine war: Kyiv attacks Crimea's Kerch Bridge; Moscow halts grain deal - The Washington Post - The Washington Post",
      "description": "A Ukrainian official said the SBU and Navy attacked Kerch Bridge, which connects the Crimean Peninsula to Russia, after explosions were reported.",
      "url": "https://www.washingtonpost.com/world/2023/07/17/russia-ukraine-war-news/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/07-17-2023/t_6c90d1ea6fd74fd3a4adfe4b1cdbd49b_name_7B2XWXC6FRI5RIG6YZLEQOSBBQ.jpg&w=1440",
      "publishedAt": "2023-07-18T05:59:10Z",
      "content": "Ukraines military and security services carried out a deadly attack on a key bridge that connects the CrimeanPeninsula to the Russian region of Krasnodar, a Ukrainian official said Monday. Ukraine us… [+387 chars]"
    },
    {
      "source": { "id": null, "name": "CNBC" },
      "author": "Lim Hui Jie",
      "title": "Hong Kong stocks tumble 2%, dragged by property and tech; Asia markets mixed - CNBC",
      "description": "Asia-Pacific markets were mixed as Hong Kong stocks led losses in the region,",
      "url": "https://www.cnbc.com/2023/07/18/asia-markets.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/104666517-GettyImages-622326452-australia.jpg?v=1689637822&w=1920&h=1080",
      "publishedAt": "2023-07-18T05:32:00Z",
      "content": "Asia-Pacific markets were mixed as Hong Kong stocks led losses in the region, tumbling by 2% dragged by real estate and technology stocks.\r\nMainland Chinese markets were also in negative territory, w… [+1233 chars]"
    },
    {
      "source": { "id": null, "name": "Variety" },
      "author": "Cynthia Littleton",
      "title": "SAG-AFTRA, AMPTP Spar Over Terms of Rejected Contract Offer: ‘Deliberately Distorts,’ Says AMPTP; ‘Rewarded for Exploiting Workers,’ Says Union - Variety",
      "description": "SAG-AFTRA and Hollywood’s largest employers are sparring over the terms of the offer that SAG-AFTRA rejected before the union went on strike last week. SAG-AFTRA issued a detailed statement o…",
      "url": "https://variety.com/2023/biz/news/sag-strike-amptp-contract-reject-fight-1235672764/",
      "urlToImage": "https://variety.com/wp-content/uploads/2023/07/GF2_4752.jpg?w=1000&h=563&crop=1",
      "publishedAt": "2023-07-18T04:41:00Z",
      "content": "SAG-AFTRA and Hollywood’s largest employers are sparring over the terms of the offer that SAG-AFTRA rejected before the union went on strike last week.\r\nSAG-AFTRA issued a detailed statement outlinin… [+8222 chars]"
    },
    {
      "source": { "id": "al-jazeera-english", "name": "Al Jazeera English" },
      "author": "Al Jazeera",
      "title": "Australian and his dog rescued after 3 months adrift in Pacific - Al Jazeera English",
      "description": "Sydney resident Timothy Lyndsay Shaddock, 54, and dog Bella rescued 1,900km from land by the crew of Mexican tuna boat.",
      "url": "https://www.aljazeera.com/news/2023/7/18/australian-and-his-dog-rescued-after-three-months-adrift-in-pacific",
      "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/07/AP23199106867412-1689652735.jpg?resize=1200%2C675",
      "publishedAt": "2023-07-18T04:31:08Z",
      "content": "An Australian sailor who had been adrift at sea with his dog for three months has been rescued by a Mexican tuna boat in international waters, the fishing vessels owner said.\r\nTimothy Lyndsay Shaddoc… [+2651 chars]"
    },
    {
      "source": { "id": null, "name": "The Indianapolis Star" },
      "author": ", The Indianapolis Star",
      "title": "Powerball numbers 7/17/23: Lottery results for $900M jackpot - IndyStar",
      "description": "Here are the winning Powerball numbers and results for the $900 million lottery jackpot drawing on Monday, July 17, 2023.",
      "url": "https://www.indystar.com/story/news/2023/07/17/powerball-numbers-july-17-2023-lottery-drawing-results-power-ball-lotto-jackpot-7-17-23/70421321007/",
      "urlToImage": "https://www.gannett-cdn.com/presto/2023/02/05/USAT/c45149d1-e350-43fc-8292-ad5d8b516a17-AP_Lottery_Jackpot.jpg?auto=webp&crop=4087,2299,x0,y208&format=pjpg&width=1200",
      "publishedAt": "2023-07-18T04:07:30Z",
      "content": "The Powerball lottery jackpot's remains the game's third biggest prize of all-time after no one matched all six numbers Saturday night. Happy National Lottery Day!\r\nThe Powerball prize is currently t… [+4115 chars]"
    },
    {
      "source": { "id": "reuters", "name": "Reuters" },
      "author": "Gleb Garanich",
      "title": "Russia launches drones, missiles on Ukraine's south and east - Ukraine's Air Force - Reuters",
      "description": "Russia carried out missile and drone strikes on southern and eastern Ukraine overnight that caused damage to infrastructure in the Black Sea port of Odesa, Ukrainian officials said on Tuesday.",
      "url": "https://www.reuters.com/world/europe/russia-launches-air-attacks-ukraines-south-east-ukraines-air-force-2023-07-17/",
      "urlToImage": "https://www.reuters.com/resizer/4e7uSmsBWdTCcIMnD02zxwaiZo0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/CAS54KZIHRIAZHIQQJAXPJZB3Q.jpg",
      "publishedAt": "2023-07-18T03:50:00Z",
      "content": "KYIV, July 18 (Reuters) - Russia carried out missile and drone strikes on southern and eastern Ukraine overnight that caused damage to infrastructure in the Black Sea port of Odesa, Ukrainian officia… [+2414 chars]"
    },
    {
      "source": { "id": "cnn", "name": "CNN" },
      "author": "Christina Maxouris, Jamiel Lynch",
      "title": "After months of investigating, Oregon authorities now believe the deaths of 4 young women are connected - CNN",
      "description": "After months of probing and multiple investigations, authorities in northwestern Oregon now believe the mysterious deaths of four young women are connected, the Multnomah County District Attorney’s Office announced Monday.",
      "url": "https://www.cnn.com/2023/07/17/us/oregon-four-deaths-women-linked/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230717171611-oregon-women-deaths-split.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-07-18T02:24:00Z",
      "content": "After months of probing and multiple investigations, authorities in northwestern Oregon now believe the mysterious deaths of four young women are connected, the Multnomah County District Attorneys Of… [+3498 chars]"
    },
    {
      "source": { "id": "politico", "name": "Politico" },
      "author": null,
      "title": "No Labels throws a coming out party, stoking Dem fears of a third-party bid - POLITICO",
      "description": "The announcement represented the furthest the group has gone to commit itself to going forward with its unity-ticket project.",
      "url": "https://www.politico.com/news/2023/07/17/no-labels-coming-out-party-00106714",
      "urlToImage": "https://static.politico.com/6e/90/dec717ee482097ef9e55100b80d0/election-2024-no-labels-19929.jpg",
      "publishedAt": "2023-07-18T01:53:26Z",
      "content": "Ive never been in any race to spoil. I get into races to win. And if I get in the race, Im going to win, he said. With that being said, I havent made a decision.\r\nAppearing alongside Manchin on Monda… [+7018 chars]"
    },
    {
      "source": { "id": null, "name": "NBCSports.com" },
      "author": "Charean Williams",
      "title": "Running backs react to Saquon Barkley, Josh Jacobs, Tony Pollard not getting long-term deals - NBC Sports",
      "description": "Saquon Barkley, Josh Jacobs and Tony Pollard aren't happy campers, and neither are their cohorts around the league.",
      "url": "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/running-backs-react-to-saquon-barkley-josh-jacobs-tony-pollard-not-getting-long-term-deals",
      "urlToImage": "https://nbcsports.brightspotcdn.com/dims4/default/d271ccf/2147483647/strip/true/crop/2012x1132+2+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.amazonaws.com%2Fbrightspot%2F2022-10%2FPollard1_USA.jpg",
      "publishedAt": "2023-07-18T01:29:19Z",
      "content": "Saquon Barkley, Josh Jacobs and Tony Pollard arent happy campers, and neither are their cohorts around the league.\r\nEven Christian McCaffrey, who leads the position with a yearly average of $16.016 m… [+1703 chars]"
    },
    {
      "source": { "id": "cnn", "name": "CNN" },
      "author": "Jack Forrest",
      "title": "State judge temporarily blocks Iowa’s 6-week abortion ban - CNN",
      "description": "Abortions in Iowa will for now remain legal up to 22 weeks into a pregnancy after a judge on Monday temporarily blocked the state’s newly signed law that would ban the procedure as early as six weeks.",
      "url": "https://www.cnn.com/2023/07/17/politics/iowa-temporary-block-abortion-ban/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230714080055-iowa-abortion-ban-protest-0711.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-07-18T01:29:00Z",
      "content": "Abortions in Iowa will for now remain legal up to 22 weeks into a pregnancy after a judge on Monday temporarily blocked the states newly signed law that would ban the procedure as early as six weeks.… [+4297 chars]"
    },
    {
      "source": { "id": null, "name": "Nature.com" },
      "author": null,
      "title": "Alzheimer's drug donanemab helps most when taken at earliest disease stage, study finds - Nature.com",
      "description": "But the drug, an antibody that attacks the protein amyloid, does not work as well in people with more advanced disease.",
      "url": "https://www.nature.com/articles/d41586-023-02321-1",
      "urlToImage": "https://media.nature.com/lw1024/magazine-assets/d41586-023-02321-1/d41586-023-02321-1_25766218.jpg",
      "publishedAt": "2023-07-18T00:22:30Z",
      "content": null
    },
    {
      "source": { "id": "usa-today", "name": "USA Today" },
      "author": "Medora Lee",
      "title": "Rejection rate jumps for Americans looking for a loan, Fed says - USA TODAY",
      "description": "The rejection rate for Americans looking for a loan hits a 5-year high, Fed data show. Banks are turning cautious as rates rise and the economy slows.",
      "url": "https://www.usatoday.com/story/money/personalfinance/2023/07/17/loan-rejection-rate-jumps-fed/70422586007/",
      "urlToImage": "https://www.usatoday.com/gcdn/authoring/images/motleyfool/2023/06/20/USAT/70336713007-delinquency-autos-ny-fed-6-16-23.png?crop=3390,1915,x0,y0&width=3200&height=1808&format=pjpg&auto=webp",
      "publishedAt": "2023-07-18T00:17:08Z",
      "content": "Just as Americans may be looking for a loan to stay afloat, it may be harder to get one. \r\nThe rejection rate for people applying for credit jumped to 21.8%, up from 17.3% in February and the highest… [+2747 chars]"
    },
    {
      "source": { "id": null, "name": "Who What Wear" },
      "author": "Allyson Payer",
      "title": "Ariana Grande and Emma Watson Just Made These the New Fall It Shoes at Wimbledon - Who What Wear",
      "description": "Ariana Grande and Emma Watson attended Wimbledon on the same day in the same Loewe It shoes. Shop the trendy heels here.",
      "url": "https://www.whowhatwear.com/ariana-grande-emma-watson-wimbledon-loewe-toy-pumps",
      "urlToImage": "https://cdn.cliqueinc.com/posts/308339/ariana-grande-emma-watson-wimbledon-loewe-toy-pumps-308339-1689631064031-fb.700x0c.jpg",
      "publishedAt": "2023-07-18T00:14:00Z",
      "content": "As you've probably noticed, celebrities love Wimbledon, and the big matches, in particular, draw some of the biggest celebrities. That was certainly the case over the weekend when Ariana Grande and E… [+759 chars]"
    },
    {
      "source": { "id": "cnn", "name": "CNN" },
      "author": "Jacqueline Howard",
      "title": "Childhood immunization rates that fell during Covid are improving but still not at pre-pandemic levels, new data shows - CNN",
      "description": "Millions of children missed routine vaccinations against diseases such as measles, diphtheria and tetanus during the Covid-19 pandemic, but data now suggests that this decline in routine childhood immunizations may be reversing.",
      "url": "https://www.cnn.com/2023/07/18/health/childhood-immunization-rates/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230717125845-vaccination-event-india-file.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-07-18T00:01:00Z",
      "content": "Millions of children around the world missed routine childhood vaccinations against diseases such as measles, diphtheria and tetanus during the Covid-19 pandemic, but new data suggests that this decl… [+5869 chars]"
    },
    {
      "source": { "id": null, "name": "9to5google.com" },
      "author": "Abner Li",
      "title": "Gmail encouraging users to enable Enhanced Safe Browsing - 9to5Google",
      "description": "Over the past few days, Google has been prominently promoting Enhanced Safe Browsing in the Gmail apps. Appearing just above...",
      "url": "https://9to5google.com/2023/07/17/gmail-enhanced-safe-browsing/",
      "urlToImage": "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2023/03/gmail-logo-circle-4.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2023-07-18T00:00:00Z",
      "content": "Over the past few days, Google has been prominently promoting Enhanced Safe Browsing in the Gmail apps.\r\nAppearing just above your inbox on Android and the web, getting “additional protection against… [+1961 chars]"
    },
    {
      "source": { "id": "cnn", "name": "CNN" },
      "author": "Rob Picheta, Mick Krever, Anna Chernova",
      "title": "Russia pulls out of Ukraine grain deal, in potential blow to global food supplies - CNN",
      "description": "Russia said Monday it was suspending its participation in a crucial deal that allowed the export of Ukrainian grain, once again raising fears over global food supplies and scuppering a rare diplomatic breakthrough to emerge from Moscow’s war in Ukraine.",
      "url": "https://www.cnn.com/2023/07/17/europe/russia-ukraine-grain-deal-intl/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230717102830-russia-ukraine-grain-deal-collapse.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-07-17T23:57:00Z",
      "content": "Russia said Monday it was suspending its participation in a crucial deal that allowed the export of Ukrainian grain, once again raising fears over global food supplies and scuppering a rare diplomati… [+8517 chars]"
    },
    {
      "source": { "id": null, "name": "BBC News" },
      "author": "https://www.facebook.com/bbcnews",
      "title": "Millions again under smoke advisory due to Canada wildfires - BBC",
      "description": "Smoke returns to the northern and eastern US and parts of Canada as wildfires continue to burn.",
      "url": "https://www.bbc.com/news/world-us-canada-66229511",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/CC92/production/_130407325_5ec60b45afbed60d8fed2f8372d554f7b68c33e80_0_4032_22681000x563.jpg",
      "publishedAt": "2023-07-17T23:40:18Z",
      "content": "Air quality in the north and eastern US is rapidly declining as hundreds of Canadian wildfires burn out of control.\r\nTwenty US states were under air alerts on Monday, according to AirNow, a governmen… [+3220 chars]"
    },
    {
      "source": { "id": "cbs-news", "name": "CBS News" },
      "author": null,
      "title": "Death Valley, hottest place on Earth, hits near-record high as blistering heat wave continues - CBS News",
      "description": "The National Weather Service says there's no immediate end in sight to the heat wave gripping much of the U.S.",
      "url": "https://www.cbsnews.com/news/death-valley-hottest-place-on-earth-near-record-high-heat-wave/",
      "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2023/07/17/74e6200e-7989-4258-a88a-b5edee220ca9/thumbnail/1200x630/a159c097a8ccf0eacd66ab5ac72a02ea/gettyimages-1536853328.jpg?v=596294ea7cf1c3a6f60cc964b1b476a6",
      "publishedAt": "2023-07-17T23:40:00Z",
      "content": "Death Valley, Calif. — Long the hottest place on Earth, Death Valley put a sizzling exclamation point Sunday on a record warm summer that's baking nearly the entire globe by flirting with some of the… [+8362 chars]"
    },
    {
      "source": { "id": null, "name": "The Guardian" },
      "author": "Abené Clayton",
      "title": "Striking Hollywood stars meet with union to discuss actors’ walkout - The Guardian",
      "description": "Meeting comes after strike announced on 13 July by actors’ union, joining writers to negotiate for new contracts with producers",
      "url": "https://www.theguardian.com/culture/2023/jul/17/striking-hollywood-stars-sag-aftra-union",
      "urlToImage": "https://i.guim.co.uk/img/media/8e9fb250f28875ac92e8a08a8b9e260b72c86b59/0_306_4480_2688/master/4480.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=1a68f50e7a96ad154a3b043cb92ac706",
      "publishedAt": "2023-07-17T23:22:21Z",
      "content": "Some of Hollywoods biggest stars met on Monday to discuss the actors strike as their union warned that without transformative change the entire profession is under threat.\r\nMembers of Sag-Aftra, a la… [+7892 chars]"
    },
    {
      "source": { "id": null, "name": "Sports Illustrated" },
      "author": "Jon Wertheim",
      "title": "Carlos Alcaraz Has the Perfect Coach for Him in Juan Carlos Ferrero - Sports Illustrated",
      "description": "Ferrero, a former French Open champ and No. 1-ranked player, knows what it’s like to rise tennis’s ranks from rural Spain.",
      "url": "https://www.si.com/tennis/2023/07/17/carlos-alcaraz-perfect-coach-juan-carlos-ferrero",
      "urlToImage": "https://www.si.com/.image/ar_1.91%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_1200/MTk5NDMzNjQ2MDk5MTQ2MTQy/juan-carlos-ferrero-carlos-alcaraz.jpg",
      "publishedAt": "2023-07-17T23:18:52Z",
      "content": "Plenty of times during Sunday’s spellbinding nearly-five-hour Wimbledon men’s final, the cameras found Carlos Alcaraz’s coach, Juan Carlos Ferrero. What they did not find was a broad register of emot… [+6728 chars]"
    }
  ]
  constructor(){
    super();
    console.log("constructor news.jsx");
    this.state = {
        articles: this.articles,
        loading: false
    }
  }
  render() {
    return (
      <div className='container my-3'>
        <h2 className='text-center my-3'>News-App Top Headlines</h2>
       <div className="row my-3">
        <div className="col md-3">
        <NewsItem title='my title' description='my description' imageUrl="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/07-17-2023/t_6c90d1ea6fd74fd3a4adfe4b1cdbd49b_name_7B2XWXC6FRI5RIG6YZLEQOSBBQ.jpg&w=1440"/>
        </div>
        <div className="col md-3">
        <NewsItem title='my title' description='my description'/>
        </div>
        <div className="col md-3">
        <NewsItem title='my title' description='my description'/>
        </div>
       </div>

      </div>
    );
  }
}

export default News;
