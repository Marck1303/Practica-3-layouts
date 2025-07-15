import React from "react";

export default function Services() {
  return (
    <section className="w-full h-full flex flex-col items-center justify-center gap-10 bg-gradient-to-r from-[#fdfbfb] to-[#ebedee] overflow-hidden">
      <div className="flex flex-col items-center justify-center h-full px-6 md:px-16 mt-10 ">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#242A33]">Service</h1>
        <p className="text-center text-md text-[#5A6980]">
          We offer youth with chances for career development in their practice. We also
        </p>
        <p className="text-center text-md text-[#5A6980] ">
           support a wide range of services to ensure client satisfaction
        </p>
      </div>
      <div className="grid  grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-16 mt-10 mb-10">
        <arcticle className="w-80 flex flex-col items-center p-6 gap-10 rounded-lg shadow-md border-gray-200 transition hover:scale-105">
          <img
            src="/Services/icon1.png"
            alt="Service 1"
            className="w-40 h-40"
          />
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-[#5A6980]">Send Texts Instantly</h2>
            <p className="text-[#5A6980]">
              Financial planning, forecasting and adjusting rapidly with
              customer demands and budgets..
            </p>
            <div className="flex items-center gap-2">
              <button className="inline-flex items-center w-auto text-blue-500 py-2 hover:bg-blue-50 transition">
                Learn More
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </arcticle>
        <arcticle className="w-80 flex flex-col items-center p-6 gap-10 rounded-lg shadow-md border-gray-200 transition hover:scale-105">
          <img
            src="/Services/icon2.png"
            alt="Service 1"
            className="w-40 h-40"
          />
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-[#5A6980]">Send Texts Instantly</h2>
            <p className="text-[#5A6980]">
              Latest technology and experienced guidance, trained HR specialists
              to keep updated.
            </p>
            <div className="flex items-center gap-2 ">
              <button className="inline-flex items-center w-auto  text-blue-600 py-2 hover:bg-blue-50 transition">
                Learn More
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </arcticle>
        <arcticle className="w-80 flex flex-col items-center p-6 gap-10 rounded-lg shadow-md border-gray-200 transition hover:scale-105">
          <img
            src="/Services/icon3.png"
            alt="Service 1"
            className="w-40 h-40"
          />
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-[#5A6980]">Send Texts Instantly</h2>
            <p className="text-[#5A6980]">
              Messages, real-time reminders, memos, and many more will keep your
              team in sync.
            </p>
            <div className="flex items-center gap-2">
              <button className="inline-flex items-center w-auto text-blue-500  py-2 hover:bg-blue-50 transition">
                Learn More
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </arcticle>
      </div>
    </section>
  );
}
