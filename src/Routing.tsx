import { AppRoutes } from "./types/app";
import Home from "./pages/Home";

const Routing: AppRoutes = [
  {
    path: "/",
    element: <Home />
  }
];

export const RoutingWithoutElements = Routing.map(r => r.path);

export default Routing;
