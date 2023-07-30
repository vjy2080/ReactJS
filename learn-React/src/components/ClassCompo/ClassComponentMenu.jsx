import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

class ClassComponentMenu extends Component {
    render() {
        return (
            <div>
                <ol>
                    <li><Link className='text-white' to="classintro">Introdcution of ClassComoenent</Link></li>
                    <li><Link className='text-white' to="stateinclass">State in Class Compo</Link></li>
                    <li><Link className='text-white' to="propsinclass">Props in Class Compo</Link></li>
                    <li><Link className='text-white' to="lifecycleinclass">LifeCycle in Class Compo</Link></li>
                    <li><Link className='text-white' to="lifecycleinclassexample">LifeCycle in Class Compo LoaderExample</Link></li>
                    <li><Link className='text-white' to="conditionalrenderclassexample">Conditional Render in Class Compo</Link></li>
                    <li><Link className='text-white' to="listinclasscompo">Lists in Class Compo</Link></li>
                    <li><Link className='text-white' to="restvsspread">RestSpread Op in Class Compo</Link></li>
                    <li><Link className='text-white' to="controlledcompo">Controlled Compo in Class Compo</Link></li>
                    <li><Link className='text-white' to="uncontrolledcompo">Uncontrolled Compo in Class Compo</Link></li>
                    <li><Link className='text-white' to="composistionvsinheritance">Composition vs Inheritance in Class Compo</Link></li>
                </ol>
                
                <Outlet></Outlet>
            </div>
        );
    }
}

export default ClassComponentMenu;