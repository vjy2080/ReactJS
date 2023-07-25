import React, { Component } from 'react';
import ClassComponentMenu from './ClassComponentMenu.jsx';
import { Route, Routes } from 'react-router-dom';
import IntroOfClassCompo from './01IntroOfClassCompo.jsx';
import StateInClassCompo from './02StateInClassCompo.jsx';
import PropsInClassCompo from './03PropsInClassCompo.jsx';
import StateLifeCycleInClassCompo from './05StateLifeCycleInClassCompo.jsx';
import StateLifeCycleLoader from './06statelifecycleloader.jsx';
import ConditionalrenderingClassCompo from './08ConditionalrenderingClassCompo.jsx';
import ListsInClassCompo from './09ListsInClassCompo.jsx';

class ClassCompoRouter extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<ClassComponentMenu />}>
                    <Route path="classintro" element={<IntroOfClassCompo/>}  />
                    <Route path="stateinclass" element={<StateInClassCompo/>}  />
                    <Route path="propsinclass" element={<PropsInClassCompo/>}  />
                    <Route path="lifecycleinclass" element={<StateLifeCycleInClassCompo/>}  />
                    <Route path="lifecycleinclassexample" element={<StateLifeCycleLoader/>}  />
                    <Route path="conditionalrenderclassexample" element={<ConditionalrenderingClassCompo/>}  />
                    <Route path="listinclasscompo" element={<ListsInClassCompo/>}  />
                    <Route path="b" lazy="b"/>
                    {/* <Route path="a" lazy={() => import("./a")} />
                    <Route path="b" lazy={() => import("./b")} /> */}
                </Route>
            </Routes>
        );
    }
}

export default ClassCompoRouter;
