import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Routing from "./Routing";

const Navigation: React.FC = () => (
  <BrowserRouter>
    <Routes>
      {Routing.map(({ path, element, props }) => (
        <Route path={path} element={element} {...props} key={path} />
      ))}

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);

export default Navigation;
