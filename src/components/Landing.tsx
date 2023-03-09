import React from "react";
import { Clouds } from "./Clouds";
import { Title } from "./Title";

export const Landing: React.FC = () => (
  <div className="h-[50vh] lg:h-screen bg-gradient-to-b from-purple via-light-purple to-green">
    <Clouds />
    <Title />
  </div>
);
