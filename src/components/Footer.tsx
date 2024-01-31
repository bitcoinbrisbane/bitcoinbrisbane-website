import React from "react";

export const Footer: React.FC = () => (
  <section className="w-full mt-12 px-6">
    <div className="w-full flex flex-col items-center font-hand mt-6 md:text-2xl text-md">
      <div className="w-fit md:pb-24 pb-10">
        <div className="flex items-center gap-x-8">
          <p className="mt-4">
            <a
              href="https://twitter.com/bitcoinbrisbane/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter @bitcoinbrisbane
            </a>
          </p>
          <p className="mt-4">
            <a
              href="https://facebook.com/bitcoinbrisbane/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </p>
          <p className="mt-4">
            <a
              href="https://github.com/dltxio/bitcoinbrisbane-website/"
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
