import React from "react";
import { Button } from "./Button";

export const BTC: React.FC = () => (
  <div className="flex lg:absolute lg:bottom-24 items-center justify-end mt-8 px-6 lg:px-0 lg:pl-16">
    <div className="flex flex-col items-end relative z-50">
      <Button title="BTC $30,000" long />
      <span className="block text-xs lg:text-3xl -rotate-[5deg] relative top-2 lg:top-3 left-4 lg:left-16 font-hand lg:subtitle lg:text-white">
        number go up!
      </span>
    </div>
  </div>
);
