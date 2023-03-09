import React from "react";
import { Coin } from "../assets";

export const MobileCoins: React.FC = () => (
  <div className="flex lg:hidden items-center justify-between relative bottom-1">
    <img
      src={Coin}
      alt="Coin"
      className="w-[20vw] relative big-shadow -rotate-12 left-[4vw] top-[1vh]"
    />
    <img
      src={Coin}
      alt="Coin"
      className="w-[30vw] relative small-shadow -rotate-[20deg] bottom-[8vh] right-[9vw]"
    />
    <img
      src={Coin}
      alt="Coin"
      className="w-[25vw] relative small-shadow rotate-[20deg] top-[2vh] right-[4vw]"
    />
  </div>
);
