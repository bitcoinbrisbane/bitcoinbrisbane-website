import axios from "axios";
import { useEffect, useState } from "react";
import { Sponsor } from "../types/app";

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

  const getLogo = (sponsor: any) => {
    return sponsor.attributes.logo?.data?.attributes?.formats?.thumbnail?.url;
  };

  return (
    <section className="w-full mt-12 lg:mt-12 px-6 md:pt-24">
      <h2 className="font-black title text-5xl lg:text-9xl w-full text-center text-white">
        SPONSORS
      </h2>
      <div className="w-full flex flex-col items-center font-hand mt-6 lg:mt-12 lg:text-xl">
        <div className="w-fit pb-12">
          {sponsors?.map(sponsor => (
            <div
              key={sponsor.attributes.name}
              className="flex items-center gap-x-8"
            >
              <img
                src={getLogo(sponsor)}
                alt={sponsor.attributes.name}
                className="block md:w-[15rem] w-[5rem] scale-[0.8] relative bottom-8"
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
