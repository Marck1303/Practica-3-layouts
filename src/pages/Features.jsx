import React from 'react'

export default function Features() {
  return (
    <section className="w-full h-full flex flex-col items-center justify-center overflow-hidden">
      <div className="flex flex-col items-center justify-center h-full px-6 md:px-16 mt-10 ">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#242A33]">Features</h1>
        <p className="text-center text-md text-[#5A6980]">
          We provide a number of excellent features that will undoubtedly improve the 
        </p>
        <p className="text-center text-md text-[#5A6980] ">
          user experience. We also provide a better support system
        </p>
      </div>
      <div className="grid  grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-16 mt-10 mb-10">
        <arcticle className="w-94 flex flex-col items-center p-6 gap-3 rounded-lg shadow-md border-gray-200 transition hover:scale-105">
          <img
            src="/Features/icon1.png"
            alt="Service 1"
            className="w-35 h-30"
          />
          <div className="flex flex-col text-center gap-4">
            <h2 className="text-xl font-semibold text-[#5A6980]">Encrypted Mail</h2>
            <p className="text-[#5A6980]">
              A process of encrypting email communications
            </p>
            
          </div>
        </arcticle>
        <arcticle className="w-94 flex flex-col items-center p-6 gap-3 rounded-lg shadow-md border-gray-200 transition hover:scale-105">
          <img
            src="/Features/icon2.png"
            alt="Service 1"
            className="w-35 h-30"
          />
          <div className="flex flex-col text-center gap-4">
            <h2 className="text-xl font-semibold text-[#5A6980]">Display Sharing</h2>
            <p className="text-[#5A6980]">
              With other participants, you may share your screen
            </p>
            
          </div>
        </arcticle>
        <arcticle className="w-94 flex flex-col items-center p-6 gap-3 rounded-lg shadow-md border-gray-200 transition hover:scale-105">
          <img
            src="/Features/icon3.png"
            alt="Service 1"
            className="w-35 h-30"
          />
          <div className="flex flex-col text-center gap-4">
            <h2 className="text-xl font-semibold text-[#5A6980]">Private Notebook</h2>
            <p className="text-[#5A6980]">
              Private Notebook is an application that is protected
            </p>
            
          </div>
        </arcticle>
        <arcticle className="w-94 flex flex-col items-center p-6 gap-3 rounded-lg shadow-md border-gray-200 transition hover:scale-105">
          <img
            src="/Features/icon4.png"
            alt="Service 1"
            className="w-35 h-30"
          />
          <div className="flex flex-col text-center gap-4">
            <h2 className="text-xl font-semibold text-[#5A6980]">App App Assistance</h2>
            <p className="text-[#5A6980]">
              App Assistant is quickly and effectively ran the system
            </p>
          </div>
        </arcticle>
        <arcticle className="w-94 flex flex-col items-center p-6 gap-3 rounded-lg shadow-md border-gray-200 transition hover:scale-105">
          <img
            src="/Features/icon5.png"
            alt="Service 1"
            className="w-35 h-30"
          />
          <div className="flex flex-col text-center gap-4">
            <h2 className="text-xl font-semibold text-[#5A6980]">Multiple Printing</h2>
            <p className="text-[#5A6980]">
              Our canvas prints are crafted on top-notch canvas.
            </p>
            
          </div>
        </arcticle>
        <arcticle className="w-94 flex flex-col items-center p-6 gap-3 rounded-lg shadow-md border-gray-200 transition hover:scale-105">
          <img
            src="/Features/icon6.png"
            alt="Service 1"
            className="w-35 h-30"
          />
          <div className="flex flex-col text-center gap-4">
            <h2 className="text-xl font-semibold text-[#5A6980]">Free Sketch</h2>
            <p className="text-[#5A6980]">
              Our canvas prints are crafted on top-notch canvas.
            </p>
            
          </div>
        </arcticle>
      </div>
    </section>
  )
}
