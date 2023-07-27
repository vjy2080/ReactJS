import React, { Component } from 'react';

class UnControlledCompoInClassCompo extends Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
    }
    clickHandle= ()=>{
        console.log(this.input);
        console.log(this.input.current);
        console.log(this.input.current.value);
        console.log("called");
    }
    render() {
        return (
            <>
            <h2>Uncontrolled Compo</h2>
            <p>Uncontrolled Components: Uncontrolled Components are the components that are not controlled by the React state and are handled by the DOM (Document Object Model). So in order to access any value that has been entered we take the help of refs.</p>
                <form method="post">
                    <input type="text" ref={this.input}  name="" id="" />
                    <input type="button" onClick={this.clickHandle} value="Click" name="" id="" />
                </form>
            </>
        );
    }
}

export default UnControlledCompoInClassCompo;