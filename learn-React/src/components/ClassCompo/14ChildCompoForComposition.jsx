import React, { Component } from "react";

class ChildCompoForComposition extends Component {
  render() {
    return (
      <>
        {/* <div className="col-lg-3"> */}
        {/* <div className="card border border-secondary">
                        <div className="card-hedaer"> {this.props.title} </div>
                        <div className="card-body">
                        </div>
                    </div> */}

        <div class="card border border-secondary my-3">
          <h5 class="card-header border border-secondary bg-secondary text-light">
            {" "}
            {this.props.title}
          </h5>
          <div class="card-body">{this.props.children}</div>
        </div>

        <div class="card">
          <h5 class="card-header"></h5>
          <div class="card-body">
            <h5 class="card-title">{this.props.title}</h5>
            <p class="card-text">{this.props.description}</p>
            <a href="#" class="btn btn-primary">
              {this.props.price}
            </a>
          </div>
        </div>
        {/* </div> */}
        {/* Child Component */}
      </>
    );
  }
}

export default ChildCompoForComposition;
