import axios from "axios";
import { useEffect, useState } from "react";
import { MeetupEvent } from "../types/app";

export const PreviousMeetup = () => {
  const [events, setEvents] = useState<any[]>();

  const convertDate = (date: string) => {
    const splitDate = date.split("-");
    if (splitDate.length !== 3) return date;

    const finalDate = `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`;
    return finalDate;
  };

  const convertTime = (time: string) => {
    const splitTime = time.split(":");
    if (splitTime.length !== 2) return time;

    const finalTime = `${splitTime[0]}:${splitTime[1]}`;
    return finalTime;
  };

  useEffect(() => {
    axios
      // Add bearer token to get past CORS
      .get<MeetupEvent>("https://cms.dltx.io/api/events?populate=*", {
        headers: {
          Authorization: `Bearer 077fa26ea22e6b25c78279efd6d7d6fca8194fb949ebcbeb0ce3fc4612a13883675a420d78479cc282dc04cf17a2bf5895d8b15fc77dd132c018845d3b20ebb3d2cfc8dc63cbfc25ba1fcfd574bb5178187dd29cf49014fd3a385efc431030b2455106ec2287d8324f125e3ef98da20a97f9e5c28e007a0d9e3a381d3c4e9e6a`
        }
      })
      .then(({ data }) => {
        setEvents(data.data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="w-full mt-12 px-6">
      <h2 className="font-black title text-5xl lg:text-9xl w-full text-center text-white">
        PREVIOUS MEETUPS
      </h2>
      <div className="w-full mt-10 lg:mt-24 font-hand lg:flex">
        
      </div>
    </section>
  );
};
