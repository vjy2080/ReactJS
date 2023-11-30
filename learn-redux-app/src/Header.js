import React from 'react';
import { useSelector } from 'react-redux';

export default function Header() {
    const myState = useSelector((state) => state.changeTheNumber);
    return (
        <>
            <button>{myState}</button>
        </>
    );
}
