import { AppRoutes } from "./types/app";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Article from "./pages/Article";

const Routing: AppRoutes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/blog",
    element: <Blog />
  },
  {
    path: "/blog/:slug",
    element: <Article />
  }
];

export const RoutingWithoutElements = Routing.map(r => r.path);

export default Routing;
