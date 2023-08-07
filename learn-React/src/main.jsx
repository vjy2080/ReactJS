import { createHashRouter } from "react-router-dom";
import NavBar from "./CommanCompo/NavBar";
import Home from "./Home";
import Topics from "./Topics";
import About from "./about";
import React, { Suspense } from "react";
import LoaderCompo from "./CommanCompo/Loader.jsx";

const ClassCompoRoute = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import("./components/ClassCompo/ClassCompoRouter.jsx")),
      1000
    );
  });
});
const FunctionalCompoRoute = React.lazy(() => import('./components/FunctionalComponent/FunctionalCompoRouter.jsx'))
const router = createHashRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Home />
      </>
    ),
  },

  {
    path: "/Examples",
    element: (
      <>
        <NavBar />
        <Topics />
      </>
    ),
    children: [
      {
        path: "classcompo/*",
        element: (
          <Suspense fallback={<LoaderCompo />}>
            <ClassCompoRoute />
          </Suspense>
        ),
      },
      {
        path: "functionalcompo/*",
        element: (
          <Suspense fallback={<LoaderCompo />}>
            <FunctionalCompoRoute />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/About",
    element: (
      <>
        <NavBar />
        <About />
      </>
    ),
  }
]);

export default router;
