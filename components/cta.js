import React from "react";
import Container from "./container";

export default function Cta() {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-pink-700 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Ready to save time with Japeeti?
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Start working with your AI software engineer today.
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="https://slack.com"
            target="_blank"
            rel="noopener"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-pink-700 bg-white rounded-md px-7 lg:px-10 lg:py-5 ">
            Download on Slack
          </a>
        </div>
      </div>
    </Container>
  );
}
