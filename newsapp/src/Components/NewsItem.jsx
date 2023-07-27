import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              !imageUrl
                ? "https://www.financialexpress.com/wp-content/uploads/2023/07/met.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
              {"News from : "}
              {source}
            </span>
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-secondary">
                By <b>{!author ? "Unknown" : author} </b> <br />
                on <b>{new Date(date).toGMTString()}</b>
              </small>
            </p>
            <Link
              rel="noreferrer"
              to={newsUrl}
              target="_blank"
              className="btn btn-dark"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
