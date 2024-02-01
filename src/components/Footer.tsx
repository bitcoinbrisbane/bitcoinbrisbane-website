import React from "react";

export const Footer: React.FC = () => (
  <section className="w-full mt-6 mb-12">
    <div className="w-full flex flex-col items-center font-hand lg:text-2xl text-md">
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
            href="https://github.com/bitcoinbrisbane/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </div>
    </div>
  </section>
);
