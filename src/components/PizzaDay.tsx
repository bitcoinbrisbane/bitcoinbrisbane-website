import dayjs from "dayjs";
import { Pizza } from "../assets";

export const PizzaDay = () => {
  const year = dayjs().year();
  const pizzaDay = dayjs(`${year}-05-22`);

  const deltaDays = pizzaDay.diff(dayjs(), "day");
  const deltaYears = year - 2010;

  return (
    <section className="w-full mt-24 px-6">
      <h2 className="font-black title text-5xl lg:text-9xl w-full text-center text-white">
        BITCOIN PIZZA DAY!
      </h2>

      <div className="w-4/5 mx-auto font-hand">
        <div className="flex w-full">
          <div className="flex-shrink-0 max-w-[60%] p-4">
            <h3 className="text-3xl lg:text-6xl leading-[1.5rem] relative top-1">
              {pizzaDay.format("ddd, MMMM D, YYYY")}
            </h3>
            <p className="mt-4 text-2xl">
              Every year, Bitcoiners around the world celebrate the first ever
              real-world transaction using Bitcoin. On May 22nd 2010, Laszlo
              Hanyecz paid 10,000 BTC for two pizzas. This year, we're
              celebrating the {deltaYears}th anniversary of this historic event.
            </p>
            <p className="mt-4 text-2xl">
              Come join us for a slice of pizza, rare pizza NFT and a beer in {deltaDays} days!
            </p>
            <span className="block md:text-4xl text-red-700">
              RSVP AT meetup.com/bitcoinbrisbane
            </span>
          </div>
          <div className="flex-grow p-4">
            <img src={Pizza} alt="Bitcoin Pizza DAO"></img>
            <p className="mt-4 text-2xl">
              Supported by our friends at the PizzaDAO https://www.globalpizzaparty.xyz
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
