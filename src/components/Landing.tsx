import React from "react";
import { Clouds, Title, MobileCoins, BTC, Hills, DesktopCoins } from ".";

export const Landing: React.FC = () => (
  <section className="min-h-[50vh] lg:h-screen bg-gradient-to-b from-purple to-green">
    <Clouds />
    <Title />
    <BTC />
    <MobileCoins />
    <DesktopCoins />
    <Hills />
  </section>
);
