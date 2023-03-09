import React from "react";
import { Cloud } from "../assets";

export const Clouds: React.FC = () => (
  <div className="flex items-center justify-between z-10 w-full px-4 pt-4 absolute top-0 left-0">
    <img src={Cloud} alt="Cloud" />
    <img src={Cloud} alt="Cloud" className="relative top-24" />
  </div>
);
