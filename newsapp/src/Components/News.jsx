import React, { Component, useState } from 'react';
import NewsItem from './NewsItem';


export class News extends Component {
 
  constructor(){
    super();
    this.state = {
        articles: [],
        loading: false
    }
  }

async componentDidMount(){
  let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=c9aa8a5802bb4e1998ce842b51b2905a";
  let data = await fetch(url);
  let parsedData = await data.json();
  // console.log(data);
  this.setState({articles: parsedData.articles})

}

  render() {
    return (
      <div className='container my-3'>
        <h2 className='text-center my-3'>News-App Top Headlines</h2>
        <div className="row my-3">
        {this.state.articles.map((element)=>{
         return <div className="col md-3" key={element.url}>
        <NewsItem  title={element.title?element.title.slice(0, 30):""} description={element.description?element.title.slice(0, 80):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
        </div>
        })}
       
       </div>

      </div>
    );
  }
}

export default News;
