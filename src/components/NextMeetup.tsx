import axios from "axios";
import {useEffect, useState} from "react";

export const NextMeetup = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  function convertDate(date: string){
    const splitDate = date.split("-");
    const finalDate = `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`;

    return finalDate;
  };

  function convertTime(time: string){
    const splitTime = time.split(":");
    const finalTime = `${splitTime[0]}:${splitTime[1]}`;

    return finalTime;
  };

  useEffect(() => {
    axios
      .get("http://cms.dltx.io/api/events?populate=*")
      .then(({data}) => {
        setEvents(data.data);
      })
      .catch((error: any) => {
        setError(error);
      });
  }, []);

  if (error) {
    return <div> An error occurred: {error.message}</div>;
  };

  return (
    <section className="w-full mt-12 px-6">
      <h2 className="font-black title text-5xl lg:text-9xl w-full text-center text-white">
        NEXT MEETUP
      </h2>
      <div className="w-full mt-10 lg:mt-24 font-hand lg:flex">
        <ul>
          {events.toReversed().map((event) => (  
            <li key={event.id} className="mt-12 lg:mt-36">
              <div className="grid grid-cols-12 flex items-center justify-center w-full">
                <div className="col-start-3 col-span-4 lg:flex lg:flex-col">
                  <h3 className="text-3xl lg:text-6xl leading-[1.5rem] relative top-1">
                    {event.attributes.name}
                  </h3>
                  <div className="hidden lg:flex flex-col gap-y-4">
                    <p className="mt-4 text-2xl">
                      {event.attributes.description}
                    </p>
                    <span className="block text-4xl text-red-700">
                      {convertDate(event.attributes.date)} | {convertTime(event.attributes.time)} AEST | {event.attributes.venue} |{" "}
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
                <div className="col-start-8 col-span-3">
                  <img
                    src={event.attributes.photo.data[0].attributes.formats.large.url}
                    alt="meetup photo"
                    className="rounded-xl"
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden lg:flex flex-col text-center">
        <p className="mt-48 text-4xl font-hand ">
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

