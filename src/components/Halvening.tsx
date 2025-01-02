import { useEffect, useState } from "react";
import axios from "axios";
import { Rocket } from "../assets";

export const Halvening = () => {
  const [height, setHeight] = useState("Loading blocks...");
  const [number, setNumber] = useState(0);

  const getHeight = async () => {
    try {
      const response = await axios.get(
        "https://api2.getpaidinbitcoin.com.au/nodes"
      );

      const height: number = response.data[0].height;
      const _number: number = Math.floor(height / 210000) + 1;

      setNumber(_number);

      const delta = _number * 210000 - response.data[0].height;
      return "Remaining blocks " + delta.toLocaleString();
    } catch (error) {
      return "Error getting blocks";
    }
  };

  useEffect(() => {
    getHeight().then(height => {
      setHeight(height);
    });
  }, []);

  return (
    <section className="w-full">
      <h2 className="font-black title text-5xl lg:text-9xl lg:my-24 my-12 w-full text-center text-white">
        {number}th BTC HALVENING
      </h2>

      <div className="w-full font-hand grid grid-cols-12">
        <div className="lg:col-start-3 lg:col-span-5 col-start-2 col-span-10">
          <iframe
            width="1120"
            height="630"
            src="https://www.youtube.com/embed/5Tu3fsSunSY?si=IX4Un_bQVuh_dpeC"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div className="w-full font-hand grid grid-cols-12">
        <div className="lg:col-start-3 lg:col-span-5 col-start-2 col-span-10">
          <h3 className="text-3xl lg:text-6xl leading-[1.5rem] relative top-1">
            {height}
          </h3>
          <p className="mt-4 text-2xl">
            The amount of bitcoins rewarded for each block decreases with time:
            it is halved every 210,000 blocks. This event, the moment when the
            mining reward is divided by 2, is commonly called "Bitcoin halving".
            Other denominations are used: "reward drop", "reward halving", or
            simply "the halving" or "the Halvening" which is a popular meme
            among bitcoiners.
          </p>
          {/* <span className="block lg:text-4xl text-red-700">
              RSVP AT meetup.com/bitcoinbrisbane
            </span> */}
        </div>
        <div className="lg:col-start-8 lg:col-span-3 col-start-4 col-span-6 lg:mt-0 mt-4">
          <img src={Rocket} alt="Rocket"></img>
          <p className="mt-4 text-2xl">
            Full node sponsored by Get Paid In Bitcoin
          </p>
        </div>
      </div>
    </section>
  );
};
