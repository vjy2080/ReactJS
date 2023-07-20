import React, { Component, useState } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=c9aa8a5802bb4e1998ce842b51b2905a&page=1&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  handlePrevClick = async () => {
    console.log("prev");

    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c9aa8a5802bb4e1998ce842b51b2905a&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };
  handleNextClick = async () => {
    console.log("next");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c9aa8a5802bb4e1998ce842b51b2905a&page=${
        this.state.page + 1
      }&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center my-3">News-App Top Headlines</h2>
        <div className="row my-3">
          {this.state.articles.map((element) => {
            return (
              <div className="col md-3" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 50) : ""}
                  description={
                    element.description ? element.title.slice(0, 80) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              onClick={this.handlePrevClick}
              className="btn btn-info"
            >
              &#11164; Previous
            </button>
            <button
              // disabled={this.state.page<=1}
              type="button"
              onClick={this.handleNextClick}
              className="btn btn-info"
            >
              Next &#11166;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
