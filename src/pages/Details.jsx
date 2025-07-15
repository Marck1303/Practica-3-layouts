import React from "react";

export default function Details() {
  return (
    <section className="w-full h-full flex flex-col items-center justify-center overflow-hidden">
      <div className="flex items-center justify-center h-full w-auto gap-10 px-6 md:px-16 ">
        <img src="/Details/illustration3.png" alt="" className="w-100 h-100" />
        <article className="flex flex-col items-center justify-center gap-4 w-100 px-6 md:px-5 py-16">
          <h1 className="text-start text-3xl font-semibold text-[#242A33]">
            A creative team which builds stunning UI/UX
          </h1>
          <p className="text-start text-sm text-[#5A6980]">
            Today, I'd like to show you some incredible Sign Up screen app UI
            ideas and concepts that offer a modern user experience. The most
            stunning, cutting-edge UI/UX.
          </p>
          <p className="text-start text-sm text-[#5A6980]">
            Klean is a free Bootstrap 5 template for multipurpose landing pages.
            This design is a perfect choice, carefully curated by{" "}
            <span className="font-bold">ThemeWagon</span>
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
      <div className="flex items-center justify-center h-full w-auto gap-10 px-6 md:px-16 ">
        <article className="flex flex-col items-center justify-center gap-4 w-100 px-6 md:px-5 py-16">
          <h1 className="text-start text-3xl font-semibold text-[#242A33]">
            Devoted to defining the cutting edge
          </h1>
          <p className="text-start text-sm text-[#5A6980]">
            "This new creation is cutting-edge technology," says the researcher,
            "whose study originates from a business at the forefront of space
            science."
          </p>
          <p className="text-start text-sm text-[#5A6980]">
            Klean is a free Bootstrap 5 template for multipurpose landing pages.
            This design is a perfect choice, carefully curated by{" "}
            <span className="font-bold">ThemeWagon</span>
          </p>
          <div className="flex gap-2 mt-5 w-full justify-start">
            <span className="p-[1px] rounded inline-block bg-gradient-to-br from-[#8131ea] via-[#9563b0] to-[#5d6ff5]">
              <button className="inline-flex w-auto  text-sm rounded py-2 px-4 bg-white text-[#8131ea] font-semibold hover:bg-blue-50 transition">
                Read More
              </button>
            </span>
          </div>
        </article>
        <img src="/Details/illustration6.png" alt="" className="w-100 h-100" />
      </div>
    </section>
  );
}
