import React from "react";
import { Cloud } from "../assets";

export const Clouds: React.FC = () => (
  <div className="flex items-center justify-between z-10 w-full px-4 lg:px-12 pt-4 absolute top-0 left-0">
    <img
      src={Cloud}
      alt="Cloud"
      className="w-1/2 lg:w-[12%] lg:relative lg:top-24"
    />
    <img src={Cloud} alt="Cloud" className="w-1/2 lg:w-[12%] hidden lg:block" />
    <img
      src={Cloud}
      alt="Cloud"
      className="w-1/2 lg:w-[12%] hidden lg:block lg:relative top-48"
    />
    <img
      src={Cloud}
      alt="Cloud"
      className="relative top-24 lg:top-8 w-1/2 lg:w-[12%] lg:relative"
    />
  </div>
);
