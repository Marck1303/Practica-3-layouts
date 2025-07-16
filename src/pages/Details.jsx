import React from "react";


export default function Details() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Primer bloque */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full gap-6 md:gap-10 px-4 md:px-16 py-8">
        <img
          src="/Details/illustration3.png"
          alt=""
          className="w-full max-w-xs md:max-w-md h-auto object-contain mb-6 md:mb-0"
        />
        <article className="flex flex-col items-start justify-center gap-4 w-full md:w-1/2 px-2 md:px-5 py-4 md:py-16">
          <h1 className="text-start text-2xl md:text-3xl font-semibold text-[#242A33]">
            A creative team which builds stunning UI/UX
          </h1>
          <p className="text-start text-sm md:text-base text-[#5A6980]">
            Today, I'd like to show you some incredible Sign Up screen app UI ideas and concepts that offer a modern user experience. The most stunning, cutting-edge UI/UX.
          </p>
          <p className="text-start text-sm md:text-base text-[#5A6980]">
            Klean is a free Bootstrap 5 template for multipurpose landing pages. This design is a perfect choice, carefully curated by <span className="font-bold">ThemeWagon</span>
          </p>
          <div className="flex gap-2 mt-5 w-full justify-start">
            <span className="p-[1px] rounded inline-block bg-gradient-to-br from-[#8131ea] via-[#9563b0] to-[#5d6ff5]">
              <button className="inline-flex w-auto text-sm rounded py-2 px-4 bg-white text-[#8131ea] font-semibold hover:bg-blue-50 transition">
                Read More
              </button>
            </span>
          </div>
        </article>
      </div>
      {/* Segundo bloque */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full gap-6 md:gap-10 px-4 md:px-16 py-8">
        <article className="flex flex-col items-start justify-center gap-4 w-full md:w-1/2 px-2 md:px-5 py-4 md:py-16">
          <h1 className="text-start text-2xl md:text-3xl font-semibold text-[#242A33]">
            Devoted to defining the cutting edge
          </h1>
          <p className="text-start text-sm md:text-base text-[#5A6980]">
            "This new creation is cutting-edge technology," says the researcher, "whose study originates from a business at the forefront of space science."
          </p>
          <p className="text-start text-sm md:text-base text-[#5A6980]">
            Klean is a free Bootstrap 5 template for multipurpose landing pages. This design is a perfect choice, carefully curated by <span className="font-bold">ThemeWagon</span>
          </p>
          <div className="flex gap-2 mt-5 w-full justify-start">
            <span className="p-[1px] rounded inline-block bg-gradient-to-br from-[#8131ea] via-[#9563b0] to-[#5d6ff5]">
              <button className="inline-flex w-auto text-sm rounded py-2 px-4 bg-white text-[#8131ea] font-semibold hover:bg-blue-50 transition">
                Read More
              </button>
            </span>
          </div>
        </article>
        <img
          src="/Details/illustration6.png"
          alt=""
          className="w-full max-w-xs md:max-w-md h-auto object-contain mb-6 md:mb-0"
        />
      </div>
    </section>
  );
}
