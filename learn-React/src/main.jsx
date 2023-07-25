import { createBrowserRouter } from "react-router-dom";
import NavBar from "./CommanCompo/NavBar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import React, { Suspense } from "react";
import LoaderCompo from "./CommanCompo/Loader.jsx";
import Examples from "./Examples";

const ClassCompoRoute = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import("./components/ClassCompo/ClassCompoRouter.jsx")),
      1000
    );
  });
});
const router = createBrowserRouter([
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
    path: "/About",
    element: (
      <>
        <NavBar />
        <About />
      </>
    ),
  },
  {
    path: "/Contact",
    element: (
      <>
        <NavBar />
        <Contact />
      </>
    ),
  },
  {
    path: "/Examples",
    element: (
      <>
        <NavBar />
        <Examples/>
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
    ],
  },
]);

export default router;
