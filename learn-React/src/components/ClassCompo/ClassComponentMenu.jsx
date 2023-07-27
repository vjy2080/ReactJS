import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

class ClassComponentMenu extends Component {
    render() {
        return (
            <div>
                <ol>
                    <li><Link to="classintro">Introdcution of ClassComoenent</Link></li>
                    <li><Link to="stateinclass">State in Class Compo</Link></li>
                    <li><Link to="propsinclass">Props in Class Compo</Link></li>
                    <li><Link to="lifecycleinclass">LifeCycle in Class Compo</Link></li>
                    <li><Link to="lifecycleinclassexample">LifeCycle in Class Compo LoaderExample</Link></li>
                    <li><Link to="conditionalrenderclassexample">Conditional Render in Class Compo</Link></li>
                    <li><Link to="listinclasscompo">Lists in Class Compo</Link></li>
                    <li><Link to="restvsspread">RestSpread Op in Class Compo</Link></li>
                    <li><Link to="controlledcompo">Controlled Compo in Class Compo</Link></li>
                    <li><Link to="uncontrolledcompo">Uncontrolled Compo in Class Compo</Link></li>
                    <li><Link to="composistionvsinheritance">Composition vs Inheritance in Class Compo</Link></li>
                </ol>
                
                <Outlet></Outlet>
            </div>
        );
    }
}

export default ClassComponentMenu;