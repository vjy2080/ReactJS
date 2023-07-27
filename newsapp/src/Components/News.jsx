import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=c9aa8a5802bb4e1998ce842b51b2905a&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=c9aa8a5802bb4e1998ce842b51b2905a&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false,
    // });
    this.updateNews();
  }

  handlePrevClick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?&country=${
    //   this.props.country
    // }&category=${
    //   this.props.category
    // }&apiKey=c9aa8a5802bb4e1998ce842b51b2905a&page=${
    //   this.state.page - 1
    // }&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading: false,
    // });

    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };
  handleNextClick = async () => {
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
    } else {
      // let url = `https://newsapi.org/v2/top-headlines?&country=${
      //   this.props.country
      // }&category=${
      //   this.props.category
      // }&apiKey=c9aa8a5802bb4e1998ce842b51b2905a&page=${
      //   this.state.page + 1
      // }&pageSize=${this.props.pageSize}`;
      // this.setState({ loading: true });
      // let data = await fetch(url);
      // let parsedData = await data.json();
      // this.setState({
      //   page: this.state.page + 1,
      //   articles: parsedData.articles,
      //   loading: false,
      // });

      this.setState({ page: this.state.page + 1 });
      this.updateNews();
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center" style={{ margin: "30px 0px" }}>
          <u>Top Headlines</u> from <b>Get-Daily-News</b>
        </h2>
        {this.state.loading && <Spinner />}
        <div className="row my-3">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    source={element.source.name}
                    title={element.title}
                    description={element.title}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
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
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
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
