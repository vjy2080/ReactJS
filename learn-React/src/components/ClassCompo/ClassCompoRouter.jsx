import React, { Component } from 'react';
import ClassComponentMenu from './ClassComponentMenu.jsx';
import { Route, Routes,
    //  createHashRouter
     } from 'react-router-dom';
import IntroOfClassCompo from './01IntroOfClassCompo.jsx';
import StateInClassCompo from './02StateInClassCompo.jsx';
import PropsInClassCompo from './03PropsInClassCompo.jsx';
import StateLifeCycleInClassCompo from './05StateLifeCycleInClassCompo.jsx';
import StateLifeCycleLoader from './06statelifecycleloader.jsx';
import ConditionalrenderingClassCompo from './08ConditionalrenderingClassCompo.jsx';
import ListsInClassCompo from './09ListsInClassCompo.jsx';
import RestSpreadInClassCompo from './10RestSpreadInClassCompo.jsx';
import ControlledCompoInClassCompo from './11ControlledCompoInClassCompo.jsx';
import UnControlledCompoInClassCompo from './12UnControlledCompoInClassCompo.jsx';
import CompositionVsInheriCompoInClassCompo from './13CompositionVsInheriCompoInClassCompo.jsx';

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
                    <Route path="restvsspread" element={<RestSpreadInClassCompo/>}  />
                    <Route path="controlledcompo" element={<ControlledCompoInClassCompo/>}  />
                    <Route path="uncontrolledcompo" element={<UnControlledCompoInClassCompo/>}  />
                    <Route path="composistionvsinheritance" element={<CompositionVsInheriCompoInClassCompo/>}  />
                    <Route path="b" lazy="b"/>
                    {/* <Route path="a" lazy={() => import("./a")} />
                    <Route path="b" lazy={() => import("./b")} /> */}
                </Route>
            </Routes>
        );
    }
}

export default ClassCompoRouter;

// const ClassCompoRouter = () => {
//     return createHashRouter([
//         {
//             path: "/",
//             element: <><ClassComponentMenu/></>,
//             children: [
//                 {
//                     path: "classintro",
//                     element:<h2>Welcome to class components</h2>
//                 }]
//             // children: [
//             //     {
//             //         path: "classcompo",
//             //         async lazy() {
//             //             let { messagesLoader, Messages } = await import(
//             //                 "./pages/Dashboard"
//             //             );
//             //             return {
//             //                 loader: messagesLoader,
//             //                 Component: Messages,
//             //             };
//             //         },
//             //     }]
//         }
//     ]);
// };

// export default ClassCompoRouter;