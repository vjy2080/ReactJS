import React, { Component } from 'react';
class StateLifeCycleInClassCompo extends Component {
    constructor(props) {
        console.log("constructor called");
        super(props);
        this.state = { name: 'Test', age: 15, status: true, time: new Date() };
    }
    // componentWillMount() {     }
    tick=() =>{
        console.log("called tick");
        this.setState({
            time: new Date()
        });
    }
    componentDidMount() {
        console.log("componentDidMount called");
        this.timer = setInterval(
            () => this.tick(),
            1000);
    }
    // componentWillReceiveProps(nextProps) {     }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate called",nextState);
        // console.log("nextState", nextState);
        return true
        return false
    }
    // componentWillUpdate(nextProps, nextState) {     }
    componentDidUpdate(prevProps, prevState) { console.log("componentDidUpdate called"); }
    componentWillUnmount() {
        console.log("componentWillUnmount called");
        this.setState({ status: null });
        clearInterval(this.timer);
    }
    render() {
        console.log("render called");
        return (<>
        <h2>LifeCycle in Class Compo</h2>

            <div className='py-5'> State Value : {this.state.name} <br />
                <p>We have seen so far what a React web app is, and the states and lifecycle of a React component. We also created a basic clock using a function to re-render the page at each second which you think can be achieved with or without React. React doesn't recommend using multiple renders instead it uses a stateful approach where the page is re-rendered once a state is altered. </p>
                <p>Our aim for this article will be to take up the code we had written in the previous article and create a stateful solution that will help us achieve the same result. To start let us recall what we had developed in the previous article</p>
                <h2>{this.state.time.toLocaleTimeString()}</h2>
                <button className='btn btn-sm btn-primary' onClick={() => { console.log("btn Clicked"); this.setState({ status: !this.state.status }) }}>Change State {JSON.stringify(this.state.status)}</button> <img src="https://miro.medium.com/v2/resize:fit:1400/1*Gl8VbwsXmNxUAjmHNZuXxg.png" width="100%" alt="" /> </div>
                </>
        );
    }
}

export default StateLifeCycleInClassCompo;