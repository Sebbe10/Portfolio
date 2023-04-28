import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { NotFound } from "./links/notfound";
import { Home } from "./links/home";

import { Contact } from "./links/contact";
import { Cv } from "./links/cv";
import { Git } from "./links/git";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/git",
        element: <Git />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cv",
        element: <Cv />,
      },
    ],
  },
]);
