import { useState, useEffect } from "react";
import { Button } from "./Button";

const PRICE_URL =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=aud";

export const BTC: React.FC = () => {
  const [price, setPrice] = useState(" loading...");

  useEffect(() => {
    const fetchBitcoinPrice = async () => {
      try {
        const response = await fetch(PRICE_URL);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data: { bitcoin: { aud: number } } = await response.json();
        setPrice(
          "$" +
            data.bitcoin.aud.toLocaleString("en-AU", {
              maximumFractionDigits: 0
            })
        );
      } catch (error) {
        console.error(error);
      }
    };
    fetchBitcoinPrice();
  }, []);

  return (
    <div className="flex lg:absolute lg:bottom-24 items-center justify-end mt-8 px-6 lg:px-0 lg:pl-16">
      <div className="flex flex-col items-end relative z-50">
        <Button title={price} long />
        <span className="block text-xs lg:text-3xl -rotate-[5deg] relative top-2 lg:top-3 left-4 lg:left-16 font-hand lg:subtitle lg:text-white">
          number go up!
        </span>
      </div>
    </div>
  );
};
