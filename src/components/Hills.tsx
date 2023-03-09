import React from "react";
import { Hill } from "../assets";

export const Hills: React.FC = () => (
  <div className="hidden absolute top-0 h-screen left-0 w-full z-10 lg:flex flex-col justify-end">
    <img src={Hill} className="w-1/3 absolute z-30" />
    <img src={Hill} className="w-1/4 relative z-20 left-[calc(25%-2rem)]" />
  </div>
);
