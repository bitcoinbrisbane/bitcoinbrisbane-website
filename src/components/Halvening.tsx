import { Pizza } from "../assets";
import axios from "axios";

export const Halvening = async () => {

  const getHeight = async () => {
    const body = {
      jsonrpc: "1.0",
      method: "getBlckHeight",
      id: "1",
      parameter: [],
    };
    const port = 8332;
    try {
      const response = await axios.post(`http://explorer.getpaidinbitcoin.com.au:8332`, body, {
        auth: {
          username: "test",
          password: "test",
        },
      });
      console.log(response.data);
    } catch (error) {
      // console.log(error.response.data);
    }
  };

  const blocks = await getHeight();

  return (
    <section className="w-full mt-12 px-6">
      <h2 className="font-black title text-5xl lg:text-9xl w-full text-center text-white">
        HALVENING 2024! {blocks}
      </h2>

      <div className="w-4/5 mx-auto font-hand">
        <div className="flex w-full">
          <div className="flex-shrink-0 max-w-[60%] p-4">
            <h3 className="text-3xl lg:text-6xl leading-[1.5rem] relative top-1">
              todo
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
            <span className="block md:text-4xl text-red-700">
              RSVP AT meetup.com/bitcoinbrisbane
            </span>
          </div>
          <div className="flex-grow p-4">
            <img src={Pizza} alt="Bitcoin Pizza DAO"></img>
            <p className="mt-4 text-2xl">
              Thanks to https://www.thehalvening.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
