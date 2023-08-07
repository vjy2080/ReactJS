import React, { useEffect, useLayoutEffect } from 'react';
import { useNavigate, useRoutes } from 'react-router-dom';
import FunctionalCompoMenu from './FunctionalComponentMenu';
import FunctionalComponentIntro from './01FunctionalComponentIntro.jsx';
import ReactJsRenderIntQuestions from './02ReactJsRenderIntQuestions';
import StatesinFunctionalCompo from './03StatesinFunctionalCompo.jsx';
import PropsinFunctionalCompo from './04PropsinFunctionalCompo.jsx';
import UseEffectFunctionalCompo from './05UseEffectFunctionalCompo.jsx';

const AdminRouter = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <FunctionalCompoMenu />,
            children: [
                {
                    path: "fucntionalcompointro",
                    element: <FunctionalComponentIntro />,
                }, {
                    path: "interviewquestion",
                    element: <ReactJsRenderIntQuestions />,
                }, {
                    path: "statesinfunctionalcompo",
                    element: <StatesinFunctionalCompo />,
                }, {
                    path: "propsinfunctionalcompo",
                    element: <PropsinFunctionalCompo />,
                }, {
                    path: "useeffectinfunctionalcompo",
                    element: <UseEffectFunctionalCompo />,
                }
            ],
        }
    ]);
    return routes;
};

export default AdminRouter;