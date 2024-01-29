// import axios from "axios";
// import { useEffect, useState } from "react";
// import { MeetupEvent, MeetupResponse } from "../types/app";
import Marquee from "react-fast-marquee";

export const PreviousMeetup = () => {
  // const [event, setEvent] = useState<MeetupEvent>();

  const pastEventImageUrls = [
    "https://bafybeibthopyr5u3txthpwblottoxnp3hiddrvdafz2yk2m4qgl5prs6ru.ipfs.dweb.link/",
    "https://bafybeibhvh6qwznkwcqc5rwgljrvvbs733youhn53d2h3y4mwxc33mogem.ipfs.dweb.link/",
    "https://bafybeiaqwbqi76zca3so72xksop7flljm6zcqgdod7fg5o5b5am5tjzrje.ipfs.dweb.link/",
    "https://bafybeidxjf5oc3ho6pgqvmtofoye7pqhq7eeohq2af2jmwhk6kmrpzinva.ipfs.dweb.link/",
    "https://sgp1.digitaloceanspaces.com/cms.dltx.io/7adea14177b41930ae385aa65425dce3.jpg",
    "https://bafybeidgem5sjv4frkoi622gfbmrfwgreofkc7vekyjjvv4ieris5anh74.ipfs.dweb.link"
  ];

  // useEffect(() => {
  //   axios
  //     // Add bearer token to get past CORS
  //     .get<MeetupResponse>("https://cms.dltx.io/api/events?populate=*", {
  //       headers: {
  //         Authorization: `Bearer 077fa26ea22e6b25c78279efd6d7d6fca8194fb949ebcbeb0ce3fc4612a13883675a420d78479cc282dc04cf17a2bf5895d8b15fc77dd132c018845d3b20ebb3d2cfc8dc63cbfc25ba1fcfd574bb5178187dd29cf49014fd3a385efc431030b2455106ec2287d8324f125e3ef98da20a97f9e5c28e007a0d9e3a381d3c4e9e6a`
  //       }
  //     })
  //     .then(({ data }) => {
  //       setEvent(data.data[0]);
  //     })
  //     .catch((error: any) => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <section className="w-full mt-12 px-6">
      <h2 className="font-black title text-5xl lg:text-9xl w-full text-center text-white">
        PAST EVENTS
      </h2>

      {/* Carousel of past event images */}
      {pastEventImageUrls.length > 0 && (
        <div className="flex flex-col text-center">
          <Marquee speed={82}>
            {pastEventImageUrls.map(imageUrl => (
              <img
                src={imageUrl}
                alt="past event image"
                className="md:h-[20rem] object-cover rounded-xl m-2 h-[8rem]"
              />
            ))}
          </Marquee>
        </div>
      )}

      <div className="flex flex-col text-center">
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
      </div>
    </section>
  );
};
