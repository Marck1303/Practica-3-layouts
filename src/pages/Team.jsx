import React from 'react'

export default function Team() {
  return (
    <section className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-r from-[#fdfbfb] to-[#ebedee] overflow-hidden">
      <div className="flex flex-col items-center justify-center h-full px-6 md:px-16 mt-5 ">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#242A33]">Our team</h1>
        <p className="text-center text-md text-[#5A6980]">
          People from various origins, cultures, and personalities make up our team.
        </p>
        <p className="text-center text-md text-[#5A6980] ">
            This blend makes it a powerful team
        </p>  
      </div>
      <div className="grid  grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-16 mt-5 mb-10">
        <arcticle className="w-80 flex flex-col items-center p-6 gap-10 rounded-lg shadow-md border-gray-200 transition hover:scale-105">
          <img
            src="/Team/image1.png"
            alt="Service 1"
            className="w-100 h-100"
          />
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-xl font-semibold text-[#5A6980]">John Adams</h2>
            <p className="text-[#5A6980]">
              CEO
            </p>
            
          </div>
        </arcticle>
        <arcticle className="w-80 flex flex-col items-center p-6 gap-10 rounded-lg shadow-md border-gray-200 transition hover:scale-105">
          <img
            src="/Team/image2.png"
            alt="Service 1"
            className="w-100 h-100"
          />
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-xl font-semibold text-[#5A6980]">Carrey Johnson</h2>
            <p className="text-[#5A6980]">
              Senior Developer
            </p>
            
          </div>
        </arcticle>
        <arcticle className="w-80 flex flex-col items-center p-6 gap-10 rounded-lg shadow-md border-gray-200 transition hover:scale-105">
          <img
            src="/Team/image3.png"
            alt="Service 1"
            className="w-100 h-100"
          />
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-xl font-semibold text-[#5A6980]">Ray Marie</h2>
            <p className="text-[#5A6980]">
              Developer
            </p>
            
          </div>
        </arcticle>
        <arcticle className="w-80 flex flex-col items-center p-6 gap-10 rounded-lg shadow-md border-gray-200 transition hover:scale-105">
          <img
            src="/Team/image4.png"
            alt="Service 1"
            className="w-100 h-100"
          />
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-xl font-semibold text-[#5A6980]">Austin Min</h2>
            <p className="text-[#5A6980]">
              Designer
            </p>
          </div>
        </arcticle>
      </div>
      <div className="flex gap-2 mt-5 w-full justify-center">
            <span className="p-[1px] rounded inline-block bg-gradient-to-br from-[#8131ea] via-[#9563b0] to-[#5d6ff5]">
              <button className="inline-flex w-auto text-sm rounded py-2 px-4 bg-white text-[#8131ea] font-semibold hover:bg-blue-50 transition">
                View Full Team
              </button>
            </span>
          </div>
    </section>
  )
}
