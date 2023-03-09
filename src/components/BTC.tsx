import React from "react";
import { Button } from "./Button";

export const BTC: React.FC = () => (
  <div className="flex items-center justify-end mt-8 px-6">
    <div className="flex flex-col items-end relative z-50">
      <Button title="BTC $30,000" />
      <span className="block text-xs -rotate-[5deg] relative top-2 left-4 font-hand">
        number go up!
      </span>
    </div>
  </div>
);
