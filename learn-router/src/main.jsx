import { createBrowserRouter } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
  },
  {
    path: "/",
    element: <Home />,
  },
]);

export default router;
