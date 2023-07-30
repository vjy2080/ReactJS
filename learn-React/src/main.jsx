import { createBrowserRouter } from "react-router-dom";
import NavBar from "./CommanCompo/NavBar";
import Home from "./Home";
import React, { Suspense } from "react";
import LoaderCompo from "./CommanCompo/Loader.jsx";
import Topics from "./Topics";

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
    ],
  },
]);

export default router;
