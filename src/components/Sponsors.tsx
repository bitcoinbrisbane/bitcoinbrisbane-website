import axios from "axios";
import { useEffect, useState } from "react";

type Sponsor = {
  data: [
    {
      id: string;
      attributes: {
        name: string;
        description: string;
        logo: {
          data: {
            attributes: {
              url: string;
            };
          };
        }[];
      };
    }
  ];
};

const getPinataUrl = (deepLink: string): string => {
  if (!deepLink) return "";

  if (deepLink.startsWith("https://") && deepLink.endsWith(".ipfs.dweb.link")) {
    // trip https:// from the start and .ipfs.dweb.link from the end
    deepLink = deepLink.substring(8, deepLink.length - 17);
    return "https://gateway.pinata.cloud/ipfs/" + deepLink;
  }

  return deepLink;
};

export const Sponsors = () => {
  const [sponsors, setSponsors] = useState<any[]>();

  useEffect(() => {
    axios
      .get<Sponsor>("https://cms.dltx.io/api/sponsors?populate=*")
      .then(({ data }) => {
        setSponsors(data.data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="w-full mt-12 lg:mt-48 px-6 lg:pt-32">
      <h2 className="font-black title text-5xl lg:text-9xl w-full text-center text-white">
        SPONSORS
      </h2>
      <div className="w-full flex flex-col items-center font-hand mt-6 lg:mt-12 lg:text-xl">
        <div className="w-fit pb-12 lg:pb-32">
          {sponsors?.map(sponsor => (
            <div
              key={sponsor.attributes.name}
              className="flex items-center gap-x-8"
            >
              <img
                src={getPinataUrl(sponsor.attributes.logo?.data.attributes.ur)}
                alt={sponsor.attributes.name}
                className="hidden lg:block w-[10vw] scale-[0.5] relative bottom-8"
              />
              <p className="mb-6 lg:mb-12">
                <span className="text-3xl lg:text-5xl">
                  {sponsor.attributes.name}
                </span>
                <br />
                {sponsor.attributes.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
