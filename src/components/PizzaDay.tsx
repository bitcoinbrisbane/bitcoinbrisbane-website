import dayjs from "dayjs";

// export const PizzaDay: React.FC = () => (
export const PizzaDay = () => {

  const year = dayjs().year();

  return (
    <section className="w-full mt-12 px-6">
      <h2 className="font-black title text-5xl lg:text-9xl w-full text-center text-white">
        BITCOIN PIZZA DAY
      </h2>
      <div className="w-full px-6 lg:px-12 mt-10 lg:mt-24 font-hand lg:flex">
        <div className="flex items-center justify-center w-full gap-x-4 lg:gap-x-10 lg:max-w-[50%]">
          <div className="lg:flex lg:flex-col">
            <h3 className="text-3xl lg:text-6xl leading-[1.5rem] relative top-1">
              May 22nd {year}
            </h3>
            <img src="./assets/pizzadao.png"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

