import axios from "axios";
import { useEffect, useState } from "react";
import { MeetupEvent, MeetupResponse } from "../types/app";
import dayjs from "dayjs";
import { PizzaDay } from "./PizzaDay";

export const NextMeetup = () => {
  const [event, setEvent] = useState<MeetupEvent>();
  const convertDateAndTime = (
    date: any,
    time: any,
    format: string = "ddd, DD MMM YYYY"
  ) => {
    if (date === undefined || time === undefined) return date;

    const finalDate = dayjs(`${date} ${time}`).format(format);
    return finalDate;
  };

  const showPizzaDay = () => {
    // const today = dayjs().format("YYYY-MM-DD");

    // // show pizza day if less than 60 days before 22 may
    // const year = dayjs().year();
    // const pizzaDay = dayjs(`${year}-05-22`);

    // const delta = pizzaDay.diff(today, "day");

    // return delta < 300;

    return true;
  };

  useEffect(() => {
    axios
      // Add bearer token to get past CORS
      .get<MeetupResponse>(
        "https://cms.dltx.io/api/events?sort=id:desc&pagination[page]=1&pagination[pageSize]=1",
        {
          headers: {
            Authorization: `Bearer 077fa26ea22e6b25c78279efd6d7d6fca8194fb949ebcbeb0ce3fc4612a13883675a420d78479cc282dc04cf17a2bf5895d8b15fc77dd132c018845d3b20ebb3d2cfc8dc63cbfc25ba1fcfd574bb5178187dd29cf49014fd3a385efc431030b2455106ec2287d8324f125e3ef98da20a97f9e5c28e007a0d9e3a381d3c4e9e6a`
          }
        }
      )
      .then(({ data }) => {
        if (data.data.length === 0) return;
        const meetup: MeetupEvent = data.data[0];
        setEvent(meetup);
      })
      .catch((error: any) => {
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
          <div className="md:col-start-3 md:col-span-9 flex flex-col col-start-2 col-span-10">
            <h3 className="text-3xl lg:text-6xl leading-[1.5rem] relative top-1">
              {event?.attributes?.name}
            </h3>
          </div>
          <div className="md:col-start-3 md:col-span-4 flex flex-col col-start-2 col-span-10">
            <div className="flex flex-col gap-y-4">
              <p className="mt-4 text-2xl">{event?.attributes?.description}</p>
              <span className="block md:text-4xl text-red-700">
                {convertDateAndTime(
                  event?.attributes?.date,
                  event?.attributes?.time,
                  "h:mm a"
                )}{" "}
                |{" "}
                {convertDateAndTime(
                  event?.attributes?.date,
                  event?.attributes?.time
                )}{" "}
                AEST | {event?.attributes?.venue} |{" "}
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
          </div>
          {/* {event?.attributes?.photo?.data !== "null" || (
                <div className="col-start-8 col-span-3">
                  <img
                    src={`https://cms.dltx.io${event.attributes.photo.data[0].attributes.formats.large.url}`}
                    alt={event.attributes.name}
                    className="rounded-xl"
                  />
                </div>
              )} */}
        </div>
      </div>

      {showPizzaDay() && <PizzaDay />}

      {/* <div className="flex flex-col text-center">
        <p className="mt-48 md:text-4xl text-xl font-hand">
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
      </div> */}
    </section>
  );
};
