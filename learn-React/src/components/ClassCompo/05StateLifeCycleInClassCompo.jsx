import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class StateLifeCycleInClassCompo extends Component {
    constructor(props) {
        console.log("constructor called");
        super(props);
        this.state = {
            name: 'Test',
            age: 15,
            status: true
        };
    }
    // componentWillMount() {     }
    componentDidMount() { console.log("componentDidMount called"); }
    // componentWillReceiveProps(nextProps) {     }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate called");
        // console.log("nextState", nextState);
        return true
        // return false
    }
    // componentWillUpdate(nextProps, nextState) {     }
    componentDidUpdate(prevProps, prevState) { console.log("componentDidUpdate called"); }
    componentWillUnmount() { console.log("componentWillUnmount called"); this.setState({ status: null })}
    render() {
        console.log("render called");
        return (
            <div className='py-5'>
                State Value : {this.state.name} <br />
                <button className='btn btn-sm btn-primary' onClick={() => { console.log("btn Clicked"); this.setState({ status: !this.state.status }) }}>Change State {JSON.stringify(this.state.status)}</button>

            </div>
        );
    }
}

StateLifeCycleInClassCompo.propTypes = {

};

export default StateLifeCycleInClassCompo;