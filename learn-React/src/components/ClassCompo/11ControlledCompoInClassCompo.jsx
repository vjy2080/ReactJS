import React, { Component } from 'react';

class ControlledCompoInClassCompo extends Component {
    constructor(props) {
        super(props);
        this.state={
            inpData:"",
            inpUName:"",
            username:"",
            password:"",
            formData:{}
        }
    }
    setInputData=(event)=>{  
        // console.log("Event",event);
        // console.log("event.target",event.target);
        // console.log("event.target",event.target.value);
        this.setState({inpUName:event.target.value})
        this.setState({[event.target.name]:event.target.value})
    }
    setInputFormData=(event)=>{  
        this.setState((data)=>({formData:{...data.formData,[event.target.name]:event.target.value}}))
    }
    render() {
        return (
            <>
                <h2>Controlled Component</h2>
                <p>Controlled Components: In React, Controlled Components are those in which form's data is handled by the component's state. It takes its current value through props and makes changes through callbacks like onClick, onChange, etc. A parent component manages its own state and passes the new values as props to the controlled component.</p>




                <p>
                    In HTML, form elements such as &lt;input&gt;, &lt;textarea&gt;, and &lt;select&gt; typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with setState().
                </p>
                <p>
                    We can combine the two by making the React state be the “single source of truth”. Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a <q>controlled component</q>.
                </p>

                <p>
                    For example, if we want to make the previous example log the name when it is submitted, we can write the form as a controlled component:
                </p>

                <input type="text" value={this.state.inpUName} onChange={this.setInputData} name="test" id="" />
                {this.state.inpUName}
                {JSON.stringify(this.state)}
                <form action="" method="post">
                    {/* <input type="text" name="" onChange={(e)=>{ console.log("called",e); }} id="" /> */}
                    {/* <input type="text" name="" onChange={(e)=>{ console.log("called",e.target); }} id="" /> */}
                    {/* <input type="text" name="" onChange={(e)=>{ console.log("called",e.target.value); }} id="" /> */}
                    <input type="text" name="inpdata" onChange={(e)=>{ this.setState({inpData:e.target.value}) }} id="" />
                    <input type="text" name="username" onChange={(e)=>{ this.setState({username:e.target.value}) }} id="" />
                    <input type="text" name="password" onChange={(e)=>{ this.setState({password:e.target.value}) }} id="" />
                    <input type="button" name="" value="Click" id="" />
                </form>


                <form action="" method="post">

                &lt;input type="text" <br /> onChange=&#123;(event)=&gt;&#123; <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.setState((data)=&gt;(&#123;formData:&#123;...data.formData,[event.target.name]:event.target.value&#125;&#125;)) <br />&#125;&#125;<br /> name="username" id="" /&gt; <br />
                <input type="text" onChange={(event)=>{ this.setState((data)=>({formData:{...data.formData,[event.target.name]:event.target.value}})) }} name="username" id="" />
                <input type="text" onChange={(event)=>{ this.setState((data)=>({formData:{...data.formData,[event.target.name]:event.target.value}})) }} name="password" id="" />
                {/* <input type="text" onChange={this.setInputFormData} name="password" id="" /> */}

                </form>
                <br />
                <br />
                <br />
                <br />
            </>
        );
    }
}

export default ControlledCompoInClassCompo;









// class ClassCompoControlledCompo extends Component {
//     constructor(props) {
//         super(props);
//         this.state={inpUName:"update",username:"",formData:{}}
//     }
    
//     setInputData=(event)=>{  
//         // console.log("Event",event);
//         // console.log("event.target",event.target);
//         // console.log("event.target",event.target.value);
//         this.setState({inpUName:event.target.value})
//     }
//     submitdata=(event)=>{  
//         event.preventDefault();
//         console.log("submitted",this.state);
//     }
//     render() {
//         return (
//             <>
//                  <p>
//                     In HTML, form elements such as &lt;input&gt;, &lt;textarea&gt;, and &lt;select&gt; typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with setState().
//                 </p>
//                 <p>
//                     We can combine the two by making the React state be the “single source of truth”. Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a <q>controlled component</q>.
//                 </p>

//                 <p>
//                     For example, if we want to make the previous example log the name when it is submitted, we can write the form as a controlled component:
//                 </p>
//                 <h2>set Data to State with function </h2>
//                 <input type="text" value={this.state.inpUName} onChange={this.setInputData} name="" id="" />
//                 {this.state.inpUName}

//                 <h2>set Data to State inside input arrow </h2>
//                 <form>
//                     {JSON.stringify(this.state)}
//                     <input type="text" onChange={(event)=>{ this.setState({username:event.target.value})}} name="username" id="username" />
//                     <input type="submit" onClick={this.submitdata} name="" id="" />
//                 </form>

//                 <h2>set multiple Data to single State object inside input arrow </h2>
//                 <form>
//                     {/* {JSON.stringify(this.state)}*/}
//                     {JSON.stringify(this.state.formData)} 
//                     {/* <input type="text" onChange={this.storeDatatoStateObject} name="uname" id="uname" /> */}
//                     <br />

//                     <input type="text" onChange={(event)=>{this.setState((prevState) => ({ formData: {...prevState.formData,[event.target.name]: event.target.value} }))}} name="uname" id="uname" />

//                     <br />
//                     <br />

//                     <input type="text" onChange={(event)=>{ this.setState((koibhi) => ({ formData: {  ...koibhi.formData,  [event.target.name]: event.target.value } }))  }}name="password" id="password" />
//                     {/* <input type="text" onChange={(event)=>{ this.setState({...this.state.formData,[event.target.name]:event.target.value})  }} name="uname" id="uname" /> */}
//                     {/* <input type="text" onChange={(event)=>{ this.setState({[event.target.name]:event.target.value})}} name="username" id="username" />
//                     <input type="text" onChange={(event)=>{ this.setState({[event.target.name]:event.target.value})}} name="password" id="password" /> */}
//                     <input type="text" onChange={(event)=>{ this.setState((data)=>({
//                         formData:{...data.formData,[event.target.name]:event.target.value}
//                     })) }} name="email" id="email" />
//                     <input type="submit" onClick={this.submitdata} name="" id="" />
//                 </form>
//             </>
//         );
//     }
// }
