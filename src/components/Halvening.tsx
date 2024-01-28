import { useEffect, useState } from "react";
import axios from "axios";

export const Halvening = () => {
  const [height, setHeight] = useState("Loading blocks...");

  const getHeight = async () => {
    try {
      const response = await axios.get(
        "https://api2.getpaidinbitcoin.com.au/nodes"
      );

      console.log(response);
      return "Height " + response.data[0].height.toLocaleString();
    } catch (error) {
      //
      return "Error getting blocks";
    }
  };

  useEffect(() => {
    getHeight().then(height => {

      setHeight(height);
    });
  }, []);

  return (
    <section className="w-full mt-12 px-6">
      <h2 className="font-black title text-5xl lg:text-9xl w-full text-center text-white">
        HALVENING 2024!
      </h2>

      <div className="w-4/5 mx-auto font-hand">
        <div className="flex w-full">
          <div className="flex-shrink-0 max-w-[60%] p-4">
            <h3 className="text-3xl lg:text-6xl leading-[1.5rem] relative top-1">
              {height}
            </h3>
            <p className="mt-4 text-2xl">
              The amount of bitcoins rewarded for each block decreases with
              time: it is halved every 210000 blocks. This event, the moment
              when the mining reward is divided by 2, is commonly called
              "Bitcoin halving". Other denominations are used: "reward drop",
              "reward halving", or simply "the halving" or "the Halvening" which
              is a popular meme among bitcoiners.
            </p>
            <p className="mt-4 text-2xl">lipsum</p>
            {/* <span className="block md:text-4xl text-red-700">
              RSVP AT meetup.com/bitcoinbrisbane
            </span> */}
          </div>
          <div className="flex-grow p-4">
            add image
            <p className="mt-4 text-2xl">
              Full node sponsored by Get Paid In Bitcoin
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
