import { useState, useEffect } from "react";
import { Button } from "./Button";

import axios from "axios";

// export const BTC: React.FC = (price) => (
//   // const [price, setPrice] = useState();
//   // useEffect(() => {
//   //   async function fetchBitcoinPrice() {
//   //     try {
//   //       const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
//   //       setPrice(response.data.bpi.USD.rate);
//   //     } catch (error) {
//   //       console.error(error);
//   //     }
//   //   }
//   //   fetchBitcoinPrice();
//   // }, []);
  
//   <div className="flex lg:absolute lg:bottom-24 items-center justify-end mt-8 px-6 lg:px-0 lg:pl-16">
//     <div className="flex flex-col items-end relative z-50">
//       <Button title="BTC $30,000" long />
//       <span className="block text-xs lg:text-3xl -rotate-[5deg] relative top-2 lg:top-3 left-4 lg:left-16 font-hand lg:subtitle lg:text-white">
//         number go up!
//       </span>
//     </div>
//   </div>
// );

export function BTC() {
  const [price, setPrice] = useState("0");
  useEffect(() => {
    async function fetchBitcoinPrice() {
      try {
        const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
        setPrice(response.data.bpi.USD.rate);
      } catch (error) {
        console.error(error);
      }
    }
    fetchBitcoinPrice();
  }, []);
  
  return (
    <div className="flex lg:absolute lg:bottom-24 items-center justify-end mt-8 px-6 lg:px-0 lg:pl-16">
      <div className="flex flex-col items-end relative z-50">
        <Button title={price.toString()} long />
        <span className="block text-xs lg:text-3xl -rotate-[5deg] relative top-2 lg:top-3 left-4 lg:left-16 font-hand lg:subtitle lg:text-white">
          number go up!
        </span>
      </div>
    </div>
  );
}