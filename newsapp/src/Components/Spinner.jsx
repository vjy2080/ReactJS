import React, { Component } from "react";
import loading from "../loading.gif";

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={loading} alt="loading" />
        {/* <div style="width:100%;height:0;padding-bottom:100%;position:relative;">
          <iframe
            src="https://giphy.com/embed/l378e1RBMH4Vkae1W"
            width="100%"
            height="100%"
            style="position:absolute"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></iframe>
        </div>
        */}
        {/* <HashLoader
          color="#36d7b8"
          cssOverride={{
            "text-align": "center",
          }}
          loading
          size={200}
          speedMultiplier={2}
        /> */}
      </div>
    );
  }
}

export default Spinner;
