import React, { useEffect, useState } from 'react';

const UseEffectFunctionalCompo = () => {
    const [state, setState] = useState("default value")
    const [status, setStatus] = useState(false)
    // useEffect(()=>{
    //     console.log("called useEffect");
    //     fetch("https://dummyjson.com/products").then((res)=>res.json()).then((result)=>{
    //         console.log(result);
    //     })
    // })
    // useEffect(() => {
    //     console.log("called useEffect");
    //     fetch("https://dummyjson.com/products").then((res) => res.json()).then((result) => {
    //         console.log(result);
    //     })
    // }, [])
    // useEffect(() => {
    //     console.log("called useEffect");
    //     fetch("https://dummyjson.com/products").then((res) => res.json()).then((result) => {
    //         console.log(result);
    //     })
    // }, [state])

    // useEffect(() => {
    //   const intervalId = setInterval(() => {
    //     setCount(count + 1); // You want to increment the counter every second...
    //   }, 1000)
    //   return () => clearInterval(intervalId);
    // }, [count]); 

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setCount(c => c + 1); // ✅ Pass a state updater
    //     }, 1000);
    //     return () => clearInterval(intervalId);
    // }, []); // ✅ Now count is not a dependency
    // const [count, setCount] = useState(0);
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("called useEffect");
        const intervalId = setInterval(() => {
            setCount(c => c + 1); // ✅ Pass a state updater
        }, 1000);
        return () => {
            console.log("called return");
            clearInterval(intervalId)
        };
    }, []); // ✅ Now count is not a dependency
    return (
        <>
            UseEffectFunctionalCompo
            <p>useEffect is a React Hook that lets you synchronize a component with an external system.</p>
            <p>useEffect(setup, dependencies?)</p>
            <p>Call useEffect at the top level of your component to declare an Effect:</p>
            <p>State : {state}</p>
            <p>count : {count}</p>

            <button onClick={() => { setState("Something") }} className='btn btn-primary'>Click</button>
            &nbsp;
            <button onClick={() => { setStatus(!status) }} className='btn btn-primary'>Change Status {JSON.stringify(status)}</button>

            <h2>Empty dependency</h2>
            <p>An Effect with empty dependencies doesn’t re-run when any of your component’s props or state change.</p>

            <blockquote>
                &nbsp;&nbsp;    function ChatRoom(&#123; roomId&#125;) &#123;  <br />
                &nbsp;&nbsp;&nbsp;&nbsp;        useEffect(() =&gt; &#123;  <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            fetch("https://dummyjson.com/products").then((res)=&gt;res.json()).then((result)=&gt;) <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            connection.connect(); <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            return () =&gt; connection.disconnect(); <br />
                &nbsp;&nbsp;&nbsp;&nbsp;        &#125;, []); // ✅ All dependencies declared <br />
                &nbsp;&nbsp;     &#125;
            </blockquote>




            <h2>Specifying reactive dependencies </h2>
            <blockquote>
                &nbsp;&nbsp;    function ChatRoom(&#123; roomId&#125;) &#123;  <br />
                &nbsp;&nbsp;&nbsp;&nbsp;        useEffect(() =&gt; &#123;  <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            fetch("https://dummyjson.com/products").then((res)=&gt;res.json()).then((result)=&gt;) <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            connection.connect(); <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            return () =&gt; connection.disconnect(); <br />
                &nbsp;&nbsp;&nbsp;&nbsp;        &#125;, [state]); // ✅ All dependencies declared <br />
                &nbsp;&nbsp;     &#125;
            </blockquote>
            <h2>Updating state based on previous state from an Effect </h2>
            <p>When you want to update state based on previous state from an Effect, you might run into a problem:</p>
        </>
    );
};

export default UseEffectFunctionalCompo;