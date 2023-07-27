import React, { Component } from 'react';

class RestSpreadInClassCompo extends Component {
    render() {
        // spreadExample
        return (
            <>
                <p>The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.</p>
                <p>Spread syntax looks exactly like rest syntax. In a way, spread syntax is the opposite of rest syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element. See rest parameters and rest property.</p>

                <blockquote>
                    function sum(x, y, z) &#123; <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;return x + y + z; <br />
                    &#125; <br />
                    const numbers = [1, 2, 3]; <br />

                    sum(numbers[0], numbers[1], numbers[2]) <br /> <br />

                    console.log(sum(...numbers)); <br /> <br />


                    const parts = ["shoulders", "knees"]; <br /> <br />
                    const lyrics = ["head", ...parts, "and", "toes"]; <br /> <br />
                    output : ["head", "shoulders", "knees", "and", "toes"] <br /> <br />


                    let arr1 = [0, 1, 2]; <br /> <br />
                    const arr2 = [3, 4, 5]; <br /> <br />

                    // Append all items from arr2 onto arr1 <br /> <br />
                    arr1 = arr1.concat(arr2); <br /> <br />

                    let arr1 = [0, 1, 2]; <br /> <br />
                    const arr2 = [3, 4, 5]; <br /> <br />

                    arr1 = [...arr1, ...arr2]; <br /> <br />
                    // arr1 is now [0, 1, 2, 3, 4, 5] <br /> <br />


                    <h2>Rest </h2>
                    function sum(...theArgs) &#123; <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;  let total = 0; <br />
                      &nbsp;&nbsp;for (const arg of theArgs) &#123; <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;  total += arg; <br />
                      &nbsp;&nbsp; &#125; <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;return total; <br />
                    &#125; <br />
                    <br />
                    console.log(sum(1, 2, 3)); <br />
                    // Expected output: 6 <br />

                    console.log(sum(1, 2, 3, 4)); <br />
                // Expected output: 10 <br />


                </blockquote>

            </>
        );
    }
}

export default RestSpreadInClassCompo;
