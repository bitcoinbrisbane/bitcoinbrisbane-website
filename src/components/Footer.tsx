import React from "react";

export const Footer: React.FC = () => (
  <section className="w-full mt-12 lg:mt-16 px-6 lg:pt-32">
    <div className="w-full flex flex-col items-center font-hand mt-6 lg:mt-12 lg:text-xl">
      <div className="w-fit pb-12 lg:pb-32">
        <div className="flex items-center gap-x-8">
          <p className="mt-4 text-2xl">
            <a
              href="https://twitter.com/bitcoinbrisbane/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter @bitcoinbrisbane
            </a>
          </p>
          <p className="mt-4 text-2xl">
            <a
              href="https://facebook.com/bitcoinbrisbane/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </p>
          <p className="mt-4 text-2xl">
            <a
              href="https://github.com/bitcoinbrisbane/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
);
