"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import React, { useState } from "react";

const Contact = () => {
  const [email, setemail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className="relative min-h-screen bg-black px-8 py-12 pt-36">
      <div className="relative z-10">
        <h1 className="text-5xl md:text-7xl text-center font-bold">
          Contact Us
        </h1>
        <p className="text-center my-10 text-gray-500 text-md">
          We&apos;re here to help with any questions about our courses,
          programs, or<br /> events, Reach out and let us know how we can assist you
          in your musical<br /> journey.
        </p>
        <div>
          <div className="w-full md:w-1/2 mx-auto flex flex-col gap-4 justify-center">
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 rounded-md bg-gray-800 text-white"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-4 rounded-md bg-gray-800 text-white"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <textarea
              placeholder="Your Message"
              className="p-4 rounded-md bg-gray-800 text-white h-[200px]"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="flex justify-center items-center">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center justify-center space-x-2 cursor-pointer"
              >
                Send Message
              </HoverBorderGradient>
            </div>
          </div>
        </div>
      </div>
      <BackgroundBeams className="z-0" />
    </div>
  );
};

export default Contact;
