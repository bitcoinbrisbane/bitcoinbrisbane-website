import dayjs from "dayjs";
import { Pizza } from "../assets";

export const PizzaDay = () => {
  const year = dayjs().year();
  const pizzaDay = dayjs(`${year}-05-22`);

  const deltaDays = pizzaDay.diff(dayjs(), "day");
  const deltaYears = year - 2010;

  return (
    <section className="w-full">
      <h2 className="font-black title text-5xl lg:text-9xl  lg:my-24 my-12 w-full text-center text-white">
        BITCOIN PIZZA DAY!
      </h2>

      <div className="w-full font-hand grid grid-cols-12">
        <div className="md:col-start-3 md:col-span-5 col-start-2 col-span-10">
          <h3 className="text-3xl lg:text-6xl leading-[1.5rem] relative top-1">
            {pizzaDay.format("ddd, MMMM D, YYYY")}
          </h3>
          <p className="mt-4 text-2xl">
            Every year, Bitcoiners around the world celebrate the first ever
            real-world transaction using Bitcoin. On May 22nd 2010, Laszlo
            Hanyecz paid 10,000 BTC for two pizzas. This year, we're celebrating
            the {deltaYears}th anniversary of this historic event.
          </p>
          <p className="mt-4 text-2xl">
            Come join us for a slice of pizza, rare pizza NFT and a beer in{" "}
            {deltaDays} days!
          </p>
          <span className="mt-4 block text-2xl text-red-700">
            RSVP AT meetup.com/bitcoinbrisbane
          </span>
        </div>
        <div className="md:col-start-8 md:col-span-3 col-start-2 col-span-8 md:mt-0 mt-4">
          <img src={Pizza} alt="Bitcoin Pizza DAO"></img>
          <p className="mt-4 text-2xl">
            Supported by our friends at the PizzaDAO
            https://www.globalpizzaparty.xyz
          </p>
        </div>
      </div>
    </section>
  );
};
