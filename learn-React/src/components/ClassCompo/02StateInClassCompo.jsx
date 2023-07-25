import React, { Component } from "react";

class StateInClassCompo extends Component {
  // constructor(props) {
  //     super(props);
  //     this.clickHandleCustom=this.clickHandleCustom.bind(this)
  // }

  state = {
    name: "Taylor",
    age: 42,
  };
  uname = "Something from DM";
  clickHandleCustom = () => {
    this.setState({ name: "testing" });
    console.log("called");
    // username = "testing" // scope limited by render thats why we needs to use DM uname
    this.uname = "test";
  };
  // clickHandleCustom (){
  //     this.setState({ name:"testing" })
  //     console.log("called");
  //     this.uname="test"
  // }
  render() {
    // let username = "test";
    return (
      <>
        <h2>State in Class Compo</h2>
        <p>State is</p>
        User Name is {this.uname}
        {this.state.name}
        <button
          onClick={() => {
            // username = "testing";
          }}
        >
          Change Variable value
        </button>
        {/* <button onClick={()=>{ uname="test" }}>Click</button> */}
        <button onClick={this.clickHandleCustom}>Click</button>
      </>
    );
  }
}

export default StateInClassCompo;
