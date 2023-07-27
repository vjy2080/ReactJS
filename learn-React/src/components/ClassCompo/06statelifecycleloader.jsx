import React, { Component } from 'react';
import LoaderCompo from './07LoaderCompo.jsx';

class Statelifecycle extends Component {
    constructor(props) {
        console.log("constructor called");
        super(props);
        // Declare State with default value for loader enable disable functionalities START
        this.state = {data:"Something",loader:false}
        // Declare State with default value for loader enable disable functionalities END
        
        // Using setTimeOut function make chnages in state after 2sec START
       
        // Using setTimeOut function make chnages in state after 2sec END
    }
    componentDidMount() {
        console.log("componentDidMount");
        setTimeout(() => {
            // console.log("called");
            this.setState({loader:true})
        }, 2000);
    }   
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("shouldComponentUpdate");
    //     // return false
    //     return true
    // }   
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
        // setTimeout(() => {
        //     console.log("componentDidUpdate time out");
        //     this.setState({loader:false})
        // }, 4000);
    }
    // componentWillUnmount() {
    //     console.log("componentWillUnmount");
    // }
    render() {
        console.log("render called");
        // variable declaration with diff default values and its impact
        let HtmlDisp = null;  //variable with null value will be adopt any data with its type
        // const HtmlDisp = "";  //variable with empty value will be adopt any value with only string type
        // const HtmlDisp = 0;  
        // const HtmlDisp = {};  
        // const HtmlDisp = []; 
        if (this.state.loader) {
            HtmlDisp = <img src="https://miro.medium.com/v2/resize:fit:1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" alt="" />
        } else {
            HtmlDisp = "inside else"
        }
        // console.log("render");
        
        return (
            <div>
                <p>Change Data</p>
                {JSON.stringify(this.state.loader)}
                {/* {this.state.loader ? <LoaderCompo/>: <p>Data</p>}  */}
                {/* {this.state.loader ? <img src="https://miro.medium.com/v2/resize:fit:1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" alt="" /> : <p>Data</p>}  */}
                {/* <button onClick={changeDataFunc}>Click</button> */}
                {HtmlDisp}
                <button onClick={()=>this.setState({data:"Testing"})}>Click</button>
                <p><strong>State</strong>{this.state.data}</p>
            </div>
        );
    }
}

export default Statelifecycle;