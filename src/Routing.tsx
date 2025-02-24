import { AppRoutes } from "./types/app";
import Home from "./pages/Home";
import BlogPost from "./pages/Blog";

const Routing: AppRoutes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/blog",
    element: <BlogPost />
  }
];

export const RoutingWithoutElements = Routing.map(r => r.path);

export default Routing;
