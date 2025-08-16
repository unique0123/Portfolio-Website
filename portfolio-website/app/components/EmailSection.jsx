"use client";
import React, { useState } from "react";
import githubMark from "../../public/images/github-mark.svg";
import linkedin from "../../public/images/linkedin.png";
import Xlogo from "../../public/images/Xlogo.png";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    let resData = null;
    try {
      resData = await response.json();
    } catch {
      resData = null; // Prevent crash if no JSON is returned
    }

    if (response.ok && resData?.success) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    } else {
      console.error(
        "Failed to send message:",
        resData?.error || "No response body"
      );
    }
  };

  return (
    <section className="grid md:grid-cols-2 md:my-12 my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>

      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div className="socials flex flex-row gap-4 lg:mt-12 mt-6 items-center  justify-center">
          {/* GitHub */}
          <div className="transition-transform duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-[#333333] hover:via-[#6e5494] hover:to-[#2d2d2d] rounded-2xl p-2">
            <Link
              href="https://github.com/unique0123"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={githubMark} alt="github icon" width={50} />
            </Link>
          </div>

          {/* LinkedIn */}
          <div className="relative group transition-transform duration-300 hover:scale-110">
            <div className="hover:bg-gradient-to-r hover:from-[#0077B5] hover:via-[#00A0DC] hover:to-[#006097] p-2 rounded-2xl">
              <Link
                href="https://www.linkedin.com/in/unique-chukwudi-833018294"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={linkedin} alt="linkedin icon" width={50} />
              </Link>
            </div>
            <p className="absolute left-1/2 -translate-x-1/2 mt-2 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              LinkedIn
            </p>
          </div>

          {/* X / Twitter */}
          <div className="relative group transition-transform duration-300 hover:scale-110">
            <div className="hover:bg-gradient-to-r hover:from-[#000000] hover:via-[#1da1f2] hover:to-[#0f1419] rounded-2xl p-2">
              <Link
                href="https://x.com/heiszaram?s=21"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={Xlogo} alt="X icon" width={50} />
              </Link>
            </div>
            <p className="absolute left-1/2 -translate-x-1/2 mt-2 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Twitter
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              type="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="unique@gmail.com"
              className="bg-[#18191E] border border-white text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="bg-[#18191E] border border-white text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="text-white block mb-2">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-white text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Leave your message here"
            />
          </div>

          <button
            type="submit"
            className="bg-pink-500 hover:bg-purple-600 text-white font-medium py-2.5 rounded-lg w-full"
          >
            Send a message
          </button>

          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">
              Email Sent Successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;