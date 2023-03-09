import React from "react";
import { Clouds } from "./Clouds";
import { Title } from "./Title";
import { Coins } from "./Coins";
import { BTC } from "./BTC";

export const Landing: React.FC = () => (
  <div className="min-h-[50vh] lg:h-screen bg-gradient-to-b from-purple via-light-purple to-green">
    <Clouds />
    <Title />
    <BTC />
    <Coins />
  </div>
);
