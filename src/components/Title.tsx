import React from "react";
import { Button } from "./Button";

export const Title: React.FC = () => (
  <div className="flex flex-col items-center text-white z-50 relative pt-16 lg:px-24">
    <h1 className="font-black title text-6xl lg:text-9xl w-full lg:pt-24 text-center lg:text-left">
      BITCOIN
      <br />
      BRISBANE
    </h1>
    <h2 className="font-semibold subtitle text-lg lg:text-4xl w-full text-center lg:text-left leading-[1.2rem] mt-4">
      BRISBANE&apos;S OLDEST BLOCKCHAIN AND
      <br />
      BITCOIN COMMUNITY GROUP
    </h2>
    <div className="mt-4 lg:mt-10 lg:pl-[5%] lg:w-full">
      <Button
        title="BOOK A CONSULTATION WITH DLTx"
        onClick={() =>
          // robots can still crawl javascript links so we don't lose SEO
          window.open(
            "https://outlook.office365.com/owa/calendar/DLTxPtyLtd@bitcoinbrisbane.com.au/bookings/",
            "_blank",
            "noopener noreferrer"
          )
        }
      />
    </div>
  </div>
);
