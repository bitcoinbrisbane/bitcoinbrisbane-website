import React from "react";
import { BlankDate } from "../assets";

export const Date: React.FC = (date: string) => (
  <img
    src={BlankDate}
    alt={date}
    className="w-[6vh] lg:w-[14vh] small-shadow"
  />
);
