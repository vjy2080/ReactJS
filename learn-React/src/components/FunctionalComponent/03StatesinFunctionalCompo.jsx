import React, { useState } from 'react';

let clickHandlerOutside=()=>{
    alert("click Handler Outside");
}
const StatesinFunctionalCompo = () => {
    // const [uName,setother] = useState();
    const [uName,setother] = useState("kai pan");
    const [state,setState] = useState();
    let username = "something"
    let clickHandlerInside=()=>{
        alert("click Handler Inside");
    }
    let btnClickVariableUpdate=()=>{
        console.log(username);
        setother("Update")
        setState("Other data")
        username = "Data"
    }
    return (
        <>
        <div className="row my-5">
            <div className="col">
            <h2>State Exmaple in Funtional Component</h2>
            <p>User Name : {username}</p>
            <p>State User Name : {uName}</p>
            <p>State : {state}</p>
            <button className='btn btn-primary' onClick={clickHandlerInside}>Click Inside</button> &nbsp;
            <button className='btn btn-primary' onClick={clickHandlerOutside}>Click Outside</button>&nbsp;
            <button className='btn btn-primary' onClick={btnClickVariableUpdate}>Try to make Changes in Variable</button>

            </div>
        </div>
        </>
    );
};

export default StatesinFunctionalCompo;