import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function Faq() {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-pink-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        !open ? "transform rotate-180" : ""
                      } w-5 h-5 text-pink-700`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "What is Japeeti's pricing?",
    answer: "Japeeti costs $20/mo for your whole team in slack",
  },
  {
    question: "How do I access Japeeti in Slack?",
    answer: "Simply tag @Japeeti just like any other team member, and provide your request. For example `@Japeeti make the button color blue`",
  },
  {
    question: "How do I give Japeeti good instructions?",
    answer:
      "Be as specific as possible for best results. For more complex requests it may also help to include the files you would like edited.",
  }, 
  {
    question: "How do I share feedback and ask more questions?",
    answer:
      "You can reach us at japeetifromtahiti@gmail.com :) ",
  },
];
