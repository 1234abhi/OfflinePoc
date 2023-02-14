import { createBrowserRouter, Outlet } from "react-router-dom";
import About from "./About";
import "./App.css";
import Contact from "./Contact";
import Error from "./Error";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Product from "./Product";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: "/product",
        element: <Product />,
        errorElement: <Error />,
      },
    ],
  },
]);

export default App;
