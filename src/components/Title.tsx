import React, { useEffect, useState } from "react";

export const Title: React.FC = () => {
  const [tipHeight, setTipHeight] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("https://mempool.space/api/blocks/tip/height")
      .then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.text();
      })
      .then(text => {
        const n = parseInt(text.trim(), 10);
        if (!cancelled && Number.isFinite(n)) setTipHeight(n);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="flex flex-col items-center text-white z-50 relative pt-16 lg:px-24">
      <h1 className="font-black title text-6xl lg:text-9xl w-full lg:pt-24 text-center lg:text-left">
        BITCOIN
        <br />
        BRISBANE
      </h1>
      <h2 className="font-semibold subtitle text-lg lg:text-4xl w-full text-center lg:text-left leading-[1.2rem] mt-4">
        BRISBANE&apos;S OLDEST BLOCKCHAIN AND
        <br />
        BITCOIN COMMUNITY GROUP SINCE BLOCK #231,658
      </h2>
      <p className="font-hand text-2xl lg:text-4xl w-full lg:max-w-[50%] text-center lg:text-left mt-6 lg:mt-10">
        Bitcoin Brisbane is Brisbane&apos;s Bitcoin community group. We run
        free, education-focused, no-shilling events since 2013.
      </p>
      {tipHeight !== null && (
        <p className="font-hand text-xl lg:text-2xl w-full lg:max-w-[50%] text-center lg:text-left mt-2 opacity-90">
          Latest block: #{tipHeight.toLocaleString()}
        </p>
      )}
    </div>
  );
};
