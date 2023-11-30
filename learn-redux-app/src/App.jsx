import React from 'react';
import "./index.css";
import { useDispatch, useSelector } from 'react-redux';
import { incNumber, decNumber } from './actions';


function App() {
console.log("App.js");

    const myState = useSelector((state) => state.changeTheNumber);
    const dispatch = useDispatch()
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Increment/Decrement counter</h1>
                        <h4>using React and Redux</h4>
                        <div className="quantity">
                            <button title='Decrement'
                                onClick={() => dispatch(decNumber(10))} className="quantity_minus">-</button>
                            <input type="text" name="quantity" className='quantity_input' value={myState} />
                            <button title='Increment'
                                onClick={() => dispatch(incNumber(5))} className="quantity_plus">+</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
