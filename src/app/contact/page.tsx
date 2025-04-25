"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [email, setemail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [state, handleSubmit] = useForm("xgvkvwng");
  
  useEffect(() => {
    if (state.succeeded) {
      setName("");
      setemail("");
      setMessage("");
      toast.success("Message sent successfully!")
    }
  }, [state]);
  return (
    <div className="relative min-h-screen bg-black px-8 py-12 pt-36">
      <Toaster/>
      <div className="relative z-10">
        <h1 className="text-5xl md:text-7xl text-center font-bold">
          Contact Us
        </h1>
        <p className="md:block hidden text-center my-4 text-gray-500 text-md">
          We&apos;re here to help with any questions about our courses,
          programs, or
          <br /> events, Reach out and let us know how we can assist you in your
          musical
          <br /> journey.
        </p>
        <p className="md:hidden block text-center my-4 text-gray-500 text-md">
          We&apos;re here to help with any questions about our courses,
          programs, or events, Reach out and let us know how we can assist you
          in your musical journey.
        </p>
        <div>
          <form
            onSubmit={handleSubmit}
            className="w-full md:w-1/2 mx-auto flex flex-col gap-4 justify-center"
          >
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="p-4 rounded-md bg-gray-800 text-white"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <ValidationError
              prefix="Name"
              field="name"
              errors={state.errors}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-4 rounded-md bg-gray-800 text-white"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <textarea
              placeholder="Your Message"
              name="message"
              className="p-4 rounded-md bg-gray-800 text-white h-[200px]"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <div className="flex justify-center items-center">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center justify-center space-x-2 cursor-pointer"
              >
                {state.submitting ? 'Sending...' : 'Send Message'}
              </HoverBorderGradient>
            </div>
          </form>
        </div>
      </div>
      <BackgroundBeams className="z-0" />
    </div>
  );
};

export default Contact;
