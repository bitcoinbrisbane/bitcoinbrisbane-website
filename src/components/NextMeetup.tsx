import React from "react";
import { Date } from "../assets";

export const NextMeetup: React.FC = () => (
  <section className="w-full mt-12 px-6">
    <h2 className="font-black title text-5xl w-full text-center text-white">
      NEXT MEETUP
    </h2>
    <div className="w-full px-6 mt-10 font-hand">
      <div className="flex items-center justify-center w-full gap-x-4">
        <img src={Date} alt="March 30th" className="w-[6vh] small-shadow" />
        <h3 className="text-3xl leading-[1.5rem] relative top-1">
          BITCOIN ORDINALS
          <br />
          AND NFT&apos;S
        </h3>
      </div>
      <p className="mt-4 leading-[1.2rem]">
        Looking to connect with fellow enthusiasts of cryptocurrency,
        non-fungible tokens (NFT&apos;s), and ordinal numbers? Then join us for
        a meetup that explores the intersection of these exciting new
        technologies!
      </p>
      <div className="flex w-full items-center justify-end">
        <span className="block text-lg">
          6pm AEST | The Precinct |{" "}
          <a
            className="underline underline-offset-2"
            href="https://www.meetup.com/bitcoinbrisbane/events/291902672/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link
          </a>
        </span>
      </div>
    </div>
  </section>
);
