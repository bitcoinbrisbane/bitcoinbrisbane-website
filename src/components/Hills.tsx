import React from "react";
import { Bridge, Hill } from "../assets";

export const Hills: React.FC = () => (
  <div className="hidden absolute top-0 h-screen left-0 w-full z-10 lg:flex flex-col justify-end">
    <img src={Hill} alt="Hill" className="w-1/3 absolute z-30" />
    <img
      src={Hill}
      alt="Hill"
      className="w-1/4 relative z-20 left-[calc(25%-2rem)]"
    />
    <img
      src={Bridge}
      alt="Story bridge"
      className="absolute z-10 bottom-[7.5vw] -left-[4vw] rotate-[2deg] w-[60vw]"
    />
  </div>
);
