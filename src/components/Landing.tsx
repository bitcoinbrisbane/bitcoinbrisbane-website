import React from "react";
import { Clouds } from "./Clouds";
import { Title } from "./Title";
import { MobileCoins } from "./MobileCoins";
import { BTC } from "./BTC";
import { Hills } from "./Hills";

export const Landing: React.FC = () => (
  <section className="min-h-[50vh] lg:h-screen bg-gradient-to-b from-purple via-light-purple to-green">
    <Clouds />
    <Title />
    <BTC />
    <MobileCoins />
    <Hills />
  </section>
);
