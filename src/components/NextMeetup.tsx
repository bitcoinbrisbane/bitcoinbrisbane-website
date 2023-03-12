import React from "react";
import { Date } from "../assets";
import { Images } from "./Images";

export const NextMeetup: React.FC = () => (
  <section className="w-full mt-12 px-6">
    <h2 className="font-black title text-5xl lg:text-9xl w-full text-center text-white">
      NEXT MEETUP
    </h2>
    <div className="w-full px-6 lg:px-12 mt-10 lg:mt-24 font-hand lg:flex">
      <div className="flex items-center justify-center w-full gap-x-4 lg:gap-x-10 lg:max-w-[50%]">
        <img
          src={Date}
          alt="March 30th"
          className="w-[6vh] lg:w-[14vh] small-shadow"
        />
        <div className="lg:flex lg:flex-col">
          <h3 className="text-3xl lg:text-6xl leading-[1.5rem] relative top-1">
            BITCOIN ORDINALS <br className="lg:hidden" />
            AND NFT&apos;S
          </h3>
          <div className="hidden lg:flex flex-col gap-y-4">
            <p className="mt-4 text-2xl">
              Looking to connect with fellow enthusiasts of cryptocurrency,
              non-fungible tokens (NFT&apos;s), and BTC ordinals? Then join
              us for a meetup that explores the intersection of these exciting
              new technologies!
            </p>
            <span className="block text-4xl">
              6pm AEST | The Precinct |{" "}
              <a
                className="underline underline-offset-4"
                href="https://www.meetup.com/bitcoinbrisbane/"
                target="_blank"
                rel="noopener noreferrer"
              >
                RSVP
              </a>
            </span>
          </div>
          <div className="hidden lg:flex flex-col gap-y-4">
            <p className="mt-4 text-4xl">
              Checkout our other events @  
              <a
                className="underline underline-offset-4"
                href="https://www.meetup.com/bitcoinbrisbane/"
                target="_blank"
                rel="noopener noreferrer"
              >
              meetup.com/bitcoinbrisbane
              </a>
            </p>
          </div>
        </div>
      </div>
      <p className="mt-4 leading-[1.2rem] lg:hidden">
        Looking to connect with fellow enthusiasts of cryptocurrency,
        non-fungible tokens (NFT&apos;s), and BTC ordinals? Then join us for
        a meetup that explores the intersection of these exciting new
        technologies!
      </p>
      <div className="flex lg:hidden w-full items-center justify-end">
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
      <div className="hidden lg:block max-w-[50%]">
        <Images />
      </div>
    </div>
  </section>
);
