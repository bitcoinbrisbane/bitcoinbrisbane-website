import React from "react";
import { DLTx, Mycelium, SwyftX } from "../assets";

export const Sponsors: React.FC = () => (
  <section className="w-full mt-12 lg:mt-48 px-6 lg:pt-32">
    <h2 className="font-black title text-5xl lg:text-9xl w-full text-center text-white">
      SPONSORS
    </h2>
    <div className="w-full flex flex-col items-center font-hand mt-6 lg:mt-12 lg:text-xl">
      <div className="w-fit pb-12 lg:pb-32">
        <div className="flex items-center gap-x-8">
          <img
            src={SwyftX}
            alt="SwyftX logo"
            className="hidden lg:block w-[10vw] relative bottom-8"
          />
          <p className="mb-6 lg:mb-12">
            <span className="text-3xl lg:text-5xl">SWYFTX</span>
            <br />
            Australia&apos;s favourite exchange SwyftX for their continual
            support of the Brisbane bitcoin and blockchain communitiy and meetup
            events.
          </p>
        </div>
        <div className="flex items-center gap-x-8">
          <img
            src={DLTx}
            alt="DLTx Labs logo"
            className="hidden lg:block w-[10vw] scale-[0.5] relative bottom-8"
          />
          <p className="mb-6 lg:mb-12 ">
            <span className="text-3xl lg:text-5xl">DLTX</span>
            <br />
            Brisbane&apos;s best blockchain venture studio for their support and
            Ledger Hardware Wallet door prizes!
          </p>
        </div>
        <div className="flex items-center gap-x-8">
          <img
            src={Mycelium}
            alt="Mycelium logo"
            className="hidden lg:block w-[10vw] relative bottom-2"
          />
          <p>
            <span className="text-3xl lg:text-5xl">MYCELIUM VENTURES</span>
            <br />
            Rewriting the rules of engagement so they are fair forever.
          </p>
        </div>
      </div>
    </div>
  </section>
);
