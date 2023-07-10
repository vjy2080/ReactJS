import Home from "./home"

function App() {
  let element = useRoutes([
    // These are the same as the props you provide to <Route>
    { path: "/", element: <home/> },
    { path: "dashboard", element: <Dashboard /> },
      ]);

  return element;
}