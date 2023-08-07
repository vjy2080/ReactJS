import React from 'react';

const FunctionalComponentIntro = () => {
  return (
    <>
      <h2>Functional Component Intro</h2>
      <p>This function is a valid React component because it accepts a single <q>props</q> (which stands for properties) object argument with data and returns a React element. We call such components <q>function components</q>  because they are literally JavaScript functions.</p>
      <h4>Functional Component</h4>
      <blockquote>
        <span className='text-primary'>function</span> <span className='text-info'>Welcome(props)</span>  &#123; <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; return &lt;h1&gt;Hello, &#123;props.name&#125;&lt;/h1&gt;; <br />
        &#125;<br />
      </blockquote>
    <h2>legacy.reactjs.org (OLD)</h2>
      <ul>
        <li>
          <p><a href="#basic-hooks">Basic Hooks</a></p>
          <ul>
            <li><a href="#usestate"><code className="gatsby-code-text">useState</code></a></li>
            <li><a href="#useeffect"><code className="gatsby-code-text">useEffect</code></a></li>
            <li><a href="#usecontext"><code className="gatsby-code-text">useContext</code></a></li>
          </ul>
        </li>
        <li>
          <p><a href="#additional-hooks">Additional Hooks</a></p>
          <ul>
            <li><a href="#usereducer"><code className="gatsby-code-text">useReducer</code></a></li>
            <li><a href="#usecallback"><code className="gatsby-code-text">useCallback</code></a></li>
            <li><a href="#usememo"><code className="gatsby-code-text">useMemo</code></a></li>
            <li><a href="#useref"><code className="gatsby-code-text">useRef</code></a></li>
            <li><a href="#useimperativehandle"><code className="gatsby-code-text">useImperativeHandle</code></a></li>
            <li><a href="#uselayouteffect"><code className="gatsby-code-text">useLayoutEffect</code></a></li>
            <li><a href="#usedebugvalue"><code className="gatsby-code-text">useDebugValue</code></a></li>
            <li><a href="#usedeferredvalue"><code className="gatsby-code-text">useDeferredValue</code></a></li>
            <li><a href="#usetransition"><code className="gatsby-code-text">useTransition</code></a></li>
            <li><a href="#useid"><code className="gatsby-code-text">useId</code></a></li>
          </ul>
        </li>
        <li>
          <p><a href="#library-hooks">Library Hooks</a></p>
          <ul>
            <li><a href="#usesyncexternalstore"><code className="gatsby-code-text">useSyncExternalStore</code></a></li>
            <li><a href="#useinsertioneffect"><code className="gatsby-code-text">useInsertionEffect</code></a></li>
          </ul>
        </li>
      </ul>

<h2>React.dev (New)</h2>



      <ul>
        <li> <strong> useState </strong></li>
        <li> <strong> useEffect </strong></li>
        <li> <strong> useLayoutEffect </strong></li>
        <li> <strong> useMemo </strong></li>
        <li> <strong> useCallback </strong></li>
        <li> <strong> useRef </strong></li>
        <li> <strong> useContext </strong></li>
        <li> <strong> useDebugValue </strong></li>
        <li> <strong> useDeferredValue </strong></li>
        <li> useId</li>
        <li> useTransition</li>
        <li> useReducer</li>
        <li> useImperativeHandle</li>
        <li> useInsertionEffect</li>
        <li> useSyncExternalStore</li>
      </ul>

    </>
  );
};

export default FunctionalComponentIntro;