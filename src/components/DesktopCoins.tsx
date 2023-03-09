import React from "react";
import { Coin } from "../assets";

export const DesktopCoins: React.FC = () => (
  <div className="hidden lg:flex absolute h-screen w-full top-0 left-0 justify-end items-end z-20">
    <img
      src={Coin}
      alt="Coin"
      className="absolute rotate-12 right-[2vw] bottom-[2vw] basis-0 big-shadow"
    />
    <img
      src={Coin}
      alt="Coin"
      className="absolute right-[20vw] -rotate-12 scale-[0.7] big-shadow"
    />
    <img
      src={Coin}
      alt="Coin"
      className="absolute bottom-[12vw] right-[22vw] rotate-[30deg] scale-[0.3] big-shadow"
    />
    <img
      src={Coin}
      alt="Coin"
      className="absolute -rotate-[5deg] bottom-[14vw] -right-[4vw] scale-[0.4] basis-0 big-shadow"
    />
    <img
      src={Coin}
      alt="Coin"
      className="absolute bottom-[20vw] right-[12vw] -rotate-[30deg] scale-[0.3] big-shadow"
    />
    <img
      src={Coin}
      alt="Coin"
      className="absolute bottom-[24vw] right-[2vw] -rotate-[10deg] scale-[0.3] big-shadow"
    />
    <img
      src={Coin}
      alt="Coin"
      className="absolute bottom-[28vw] right-[23vw] rotate-[10deg] scale-[0.2] big-shadow"
    />
  </div>
);
