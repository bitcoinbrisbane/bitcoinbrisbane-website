import React from "react";
import { Button } from "./Button";

export const Title: React.FC = () => (
  <div className="flex flex-col items-center text-white z-50 relative pt-16">
    <h1 className="font-black title text-6xl w-full text-center">
      BITCOIN BRISBANE
    </h1>
    <h2 className="font-semibold subtitle text-lg w-full text-center leading-[1.2rem] mt-4">
      BRISBANE&apos;S BLOCKCHAIN AND
      <br />
      BITCOIN SUBJECT MATTER EXPERTS
    </h2>
    <div className="mt-4">
      <Button
        title="BOOK A CONSULTATION"
        onClick={() =>
          // robots can still crawl javascript links so we don't lose SEO
          window.open(
            "https://outlook.office365.com/owa/calendar/BitcoinBrisbane@bitcoinbrisbane.com.au/bookings/",
            "_blank",
            "noopener noreferrer"
          )
        }
      />
    </div>
  </div>
);
