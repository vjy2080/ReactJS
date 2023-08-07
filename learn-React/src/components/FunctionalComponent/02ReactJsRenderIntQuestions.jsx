import React from 'react';

const StatesinFunctionalCompo = () => {
    return (
        <>

            <h2>What Is Virtual DOM?</h2>
            <p>VDOM determines, as a Virtual <q>Document object Model library</q> , that it  <strong>Displays instances</strong>  in the UI with the help of defined certain logic. We can also consider it as a library as ReactDOM. </p>
            <p>The virtual DOM comprises the specific node tree, which has its elements and attributes with its properties and objects. Using the render() function, we can create a node using it is in-built react components and can do the modification of the node as per the action method in the data model. It is a light JavaScript object and can be consumed easily in different applications as per certain project requirements.</p>
            <p>We can easily declare with the approach of React API functioning with DOM. It helps to maintain the event handling, and attribute manipulation in the code logic.</p>
            <p>Here are the excellent advantages of Virtual DOM using React.JS</p>
            <ol>
                <li>More Outstanding Performance</li>
                <li>Integrity and Simplicity</li>
                <li>Efficiency</li>
                <li>CPU Intensive </li>
                <li>Enhanced Memory Usage</li>
            </ol>
            <h2>Purpose of Render</h2>

            <p> We can use the ReactDOM.render() in the application using the declaration of HTML code and the HTML element. The goal of this function is to represent the imposed HTML code within the specified HTML element tags. It helps to redirect the HTML page with the help of the render() function.</p>

            <p> It can be immutable in a certain scenario when you create an element and then you can define it as constant, hence it would not allow changing this.</p>

            <p> It helps to develop an application in a more presentable way using the below features:</p>

            <ul>
                <li aria-level="1">Open Source and Free</li>
                <li aria-level="1">Flexibility</li>
                <li aria-level="1">Decorators from ES7</li>
                <li aria-level="1">Server-side Intelligence</li>
                <li aria-level="1">Asynchronous Operations and Generators</li>
                <li aria-level="1">Flux Library Technique</li>
                <li aria-level="1">Restructuring Schemes</li>
                <li aria-level="1">Effectiveness of JSX</li>
            </ul>

            <h2>What are the possible return types of render method?</h2>
            <ol>
                <li><strong>React elements:</strong> Elements that instruct React to render a DOM node. It includes html elements such as <code class="rounded-sm text-purple-700 not-prose whitespace-normal dark:text-purple-200 after:content-none before:content-none">&lt;div/&gt;</code> and user defined elements.</li>
                <li><strong>Arrays and fragments:</strong> Return multiple elements to render as Arrays and Fragments to wrap multiple elements</li>
                <li><strong>Portals:</strong> Render children into a different DOM subtree.</li>
                <li><strong>String and numbers:</strong> Render both Strings and Numbers as text nodes in the DOM</li>
                <li><strong>Booleans or null:</strong> Doesn't render anything but these types are used to conditionally render content.</li>
            </ol>


            <a target='_blank' href="https://www.simplilearn.com/tutorials/reactjs-tutorial/what-is-render-in-reactjs">Reference</a>
        </>
    );
};

export default StatesinFunctionalCompo;