import React from "react";
import { MEETUPS } from "../assets";

export const Images: React.FC = () => (
  <div className="w-full ml-[10vw]">
    <img src={MEETUPS.one} alt="Meetup One" className="absolute" />
    <img
      src={MEETUPS.two}
      alt="Meetup Two"
      className="absolute ml-[3rem] mt-[3rem]"
    />
    <img
      src={MEETUPS.three}
      alt="Meetup Three"
      className="absolute ml-[6rem] mt-[6rem]"
    />
    <img
      src={MEETUPS.four}
      alt="Meetup Four"
      className="absolute ml-[9rem] mt-[9rem]"
    />
  </div>
);
