import dayjs from "dayjs";
import { useEffect, useState } from "react";
import MarqueeImport from "react-fast-marquee";
import { EventsFile } from "../types/app";

const Marquee =
  (MarqueeImport as unknown as { default?: typeof MarqueeImport }).default ??
  MarqueeImport;

export const PreviousMeetup = () => {
  const [previousEventImageUrls, setPreviousEventImageUrls] = useState<string[]>(
    []
  );

  useEffect(() => {
    fetch("/events.json")
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json() as Promise<EventsFile>;
      })
      .then(data => {
        const today = dayjs().startOf("day");
        const past = data.events
          .filter(e => dayjs(e.date).isBefore(today))
          .sort((a, b) => b.date.localeCompare(a.date))
          .map(e => e.image)
          .filter((src): src is string => Boolean(src));
        setPreviousEventImageUrls(past);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <section className="w-full mt-24 px-6">
      <h2 className="font-black title text-5xl lg:text-9xl w-full text-center text-white">
        PAST EVENTS
      </h2>

      {previousEventImageUrls.length > 0 && (
        <div className="flex flex-col text-center mt-4 mb-4">
          <Marquee speed={82}>
            {previousEventImageUrls.map(imageUrl => (
              <img
                key={imageUrl}
                src={imageUrl}
                alt=""
                className="md:h-[20rem] object-cover rounded-xl m-2 h-[8rem]"
              />
            ))}
          </Marquee>
        </div>
      )}

      <div className="flex flex-col text-center">
        <p className="md:text-4xl text-xl font-hand">
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
    </section>
  );
};
