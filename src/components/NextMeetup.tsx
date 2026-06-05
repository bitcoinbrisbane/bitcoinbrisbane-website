import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { EventsFile, MeetupEvent } from "../types/app";
import { PizzaDay } from "./PizzaDay";

export const NextMeetup = () => {
  const [event, setEvent] = useState<MeetupEvent>();

  const convertDateAndTime = (
    date: string | undefined,
    time: string | undefined,
    format: string = "ddd, DD MMM YYYY"
  ) => {
    if (date === undefined || time === undefined) return date;
    return dayjs(`${date} ${time}`).format(format);
  };

  const showPizzaDay = () => true;

  useEffect(() => {
    fetch("/events.json")
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json() as Promise<EventsFile>;
      })
      .then(data => {
        const today = dayjs().startOf("day");
        const upcoming = data.events
          .filter(e => dayjs(e.date).isSame(today) || dayjs(e.date).isAfter(today))
          .sort((a, b) => a.date.localeCompare(b.date));
        if (upcoming[0]) setEvent(upcoming[0]);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <section className="w-full mt-12 px-6">
      <h2 className="font-black title text-5xl lg:text-9xl w-full text-center text-white">
        NEXT MEETUP
      </h2>
      <div className="w-full mt-10 lg:mt-24 font-hand flex">
        <div className="grid grid-cols-12 items-center justify-center w-full">
          <div className="md:col-start-3 md:col-span-8 flex flex-col col-start-2 col-span-10">
            {event ? (
              <>
                <h3 className="text-3xl lg:text-6xl leading-[1.5rem] relative top-1">
                  {event.name}
                </h3>
                <div className="flex flex-col gap-y-4">
                  {event.description && (
                    <p className="mt-4 text-2xl">{event.description}</p>
                  )}
                  <span className="block md:text-4xl text-red-700">
                    {convertDateAndTime(event.date, event.time, "h:mm a")} |{" "}
                    {convertDateAndTime(event.date, event.time)} AEST |{" "}
                    {event.venue} |{" "}
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
              </>
            ) : (
              <p className="text-4xl lg:text-7xl text-center">Coming soon</p>
            )}
          </div>
        </div>
      </div>

      {showPizzaDay() && <PizzaDay />}
    </section>
  );
};
