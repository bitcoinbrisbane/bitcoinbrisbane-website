import React from "react";
import { renderToString } from "react-dom/server";
import {
  StaticRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Routing from "./Routing";

export const render = (url: string) => {
  const app = (
    <React.StrictMode>
      <StaticRouter location={url}>
        <Routes>
          {Routing.map(({ path, element, props }) => (
            <Route path={path} element={element} {...props} key={path} />
          ))}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </StaticRouter>
    </React.StrictMode>
  );
  return renderToString(app);
};
