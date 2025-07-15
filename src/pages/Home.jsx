import React from "react";

export default function Home() {
  return (
    <section className="w-full h-full flex flex-col mt-10 md:mt-0 items-center justify-center bg-gradient-to-r from-[#fdfbfb] to-[#ebedee] overflow-hidden">
      <div className=" flex flex-col md:flex-row items-center gap-10 justify-center h-full w-full px-6 md:px-16 md:mt-10 lg:mt-0">
        <div className="lg:pl-75 gap-5 ">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-[#8131ea] via-[#9563b0] to-[#5d6ff5] bg-clip-text text-transparent">
            Bootstrap 5 theme
          </h1>
          <p className="mt-4 text-4xl text-[#485466]">
            crafted by{" "}
            <span className="font-semibold text-[#485466]">ThemeWagon</span>
          </p>
          <p className="mt-2 text-md text-gray-600 max-w-md">
            ThemeWagon offers an wide array of category-oriented Free and
            Premium Bootstrap HTML Templates and Themes.
          </p>
          <button className="mt-10 px-6 py-2 bg-gradient-to-br from-[#8131ea] via-[#9563b0] to-[#5d6ff5] text-white font-semibold rounded-md shadow-lg hover:opacity-90 transition">
            Check Demo
          </button>
        </div>

        <div className="">
          <img
            src="/hero.png"
            alt="Team Illustration"
            className="w-[1000px]  lg:ml-20"
          />
        </div>
      </div>

      <div className="w-full h-full mt-40">
        <div className="flex flex-wrap justify-center items-center gap-30 px-4 py-2">
          <img
            src="google.png"
            alt="Google"
            className="h-6 grayscale hover:grayscale-0 transition"
          />
          <img
            src="netflix.png"
            alt="Netflix"
            className="h-6 grayscale hover:grayscale-0 transition"
          />
          <img
            src="microsoft.png"
            alt="Microsoft"
            className="h-6 grayscale hover:grayscale-0 transition"
          />
          <img
            src="mailbuster.png"
            alt="MailBuster"
            className="h-6 grayscale hover:grayscale-0 transition"
          />
          <img
            src="themewagon.png"
            alt="ThemeWagon"
            className="h-6 grayscale hover:grayscale-0 transition"
          />
        </div>
      </div>
    </section>
  );
}
